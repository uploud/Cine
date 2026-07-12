"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"
import { Volume2, VolumeX } from "lucide-react"

// Adiciona os tipos do YouTube à window global
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface CustomVslPlayerProps {
  videoId: string;
}

export function CustomVslPlayer({ videoId }: CustomVslPlayerProps) {
  const playerRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isReady, setIsReady] = useState(false)
  const [progress, setProgress] = useState(0)

  // Referências para a lógica da barra de progresso simulada
  const pVisRef = useRef(0)
  const leadFactor = 1.15

  // Carrega a API do YouTube
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      const firstScriptTag = document.getElementsByTagName("script")[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

      window.onYouTubeIframeAPIReady = () => {
        initPlayer()
      }
    } else {
      initPlayer()
    }

    function initPlayer() {
      playerRef.current = new window.YT.Player("youtube-vsl-player", {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          mute: 1,
          playsinline: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy()
      }
    }
  }, [videoId])

  const onPlayerReady = (event: any) => {
    setIsReady(true)
    event.target.playVideo()
    event.target.mute()
  }

  const onPlayerStateChange = (event: any) => {
    // Se por acaso pausar (o que bloqueamos na UI), força play
    if (event.data === window.YT.PlayerState.PAUSED && isVisibleRef.current) {
      event.target.playVideo()
    }
  }

  // Intersection Observer para pausar quando fora da tela
  const isVisibleRef = useRef(true)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting
          if (playerRef.current && playerRef.current.playVideo) {
            if (entry.isIntersecting) {
              playerRef.current.playVideo()
            } else {
              playerRef.current.pauseVideo()
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Loop de animação da barra de progresso simulada
  useEffect(() => {
    let animationFrameId: number

    const updateProgress = () => {
      if (playerRef.current && playerRef.current.getCurrentTime && isReady) {
        const t_real = playerRef.current.getCurrentTime()
        const d = playerRef.current.getDuration()

        if (d > 0) {
          // Lógica de leadFactor e clamp
          const p_target = Math.min((t_real * leadFactor) / d, 0.95)

          // Catch up nos últimos 10%
          if (t_real >= d * 0.9) {
            // Suaviza a transição para o tempo real no final
            const p_real = t_real / d
            pVisRef.current = pVisRef.current + (p_real - pVisRef.current) * 0.1
          } else {
            // Plateau aleatório simples (simulado por easing lento)
            if (pVisRef.current < p_target) {
              pVisRef.current = pVisRef.current + (p_target - pVisRef.current) * 0.05
            }
          }

          // Nunca chega a 100% antes de terminar
          if (t_real >= d - 0.5) {
            pVisRef.current = 1
          }

          setProgress(pVisRef.current * 100)
        }
      }
      animationFrameId = requestAnimationFrame(updateProgress)
    }

    updateProgress()

    return () => cancelAnimationFrame(animationFrameId)
  }, [isReady])

  const handleUnmute = () => {
    if (playerRef.current && playerRef.current.unMute) {
      playerRef.current.unMute()
      playerRef.current.setVolume(100)
      setIsMuted(false)
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative max-w-4xl mx-auto w-full aspect-video rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,163,255,0.2)] mb-8 border border-primary/20 bg-black group"
    >
      {/* Container do Vídeo YouTube */}
      <div className="absolute inset-0 w-full h-full pointer-events-none scale-[1.05] sm:scale-[1.1] origin-center">
        {/* Usamos scale para esconder bordas do youtube caso modestbranding não esconda tudo */}
        <div id="youtube-vsl-player" className="w-full h-full border-none" />
      </div>

      {/* Camada Invisível de Bloqueio de Clique para evitar pause/controles */}
      <div className="absolute inset-0 z-10 w-full h-full cursor-pointer" onClick={handleUnmute}></div>

      {/* Botão "Clique para ouvir" */}
      {isMuted && (
        <div
          className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full font-bold text-sm sm:text-base animate-pulse cursor-pointer shadow-lg backdrop-blur-sm pointer-events-none"
        >
          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Clique para ouvir</span>
        </div>
      )}

      {/* Icone de som ativo (opcional, só para feedback após clique) */}
      {!isMuted && (
        <div className="absolute top-4 left-4 z-20 flex items-center justify-center bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <Volume2 className="w-4 h-4 text-white" />
        </div>
      )}

      {/* Barra de Progresso Customizada Simulada */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 sm:h-2 bg-background/50 z-20 pointer-events-none">
        <div
          className="h-full bg-primary"
          style={{
            width: `${progress}%`,
            transition: 'width 0.2s cubic-bezier(0.2, 0.9, 0.2, 1)',
          }}
        />
      </div>
    </div>
  )
}
