"use client"

import { useState, useEffect } from "react"
import { Play, Star, Shield } from "lucide-react"


const StarsBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-background" />
    {/* Estrelas estáticas */}
    <div className="absolute inset-0" style={{
      backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 50px 160px, #ddd, rgba(0,0,0,0))',
      backgroundSize: '200px 200px',
      opacity: 0.3
    }} />
    {/* Estrelas cadentes animadas via CSS */}
    <style dangerouslySetInnerHTML={{
      __html: `
      @keyframes meteor {
        0% { transform: rotate(215deg) translateX(0); opacity: 1; }
        70% { opacity: 1; }
        100% { transform: rotate(215deg) translateX(-1000px); opacity: 0; }
      }
      .meteor {
        position: absolute;
        width: 2px;
        height: 2px;
        background: linear-gradient(90deg, #fff, transparent);
        box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        opacity: 0;
      }
      .meteor::before {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100px;
        height: 1px;
        background: linear-gradient(90deg, #fff, transparent);
      }
      .m1 { top: 10%; right: 10%; animation: meteor 10s linear infinite; animation-delay: 2s; }
      .m2 { top: 20%; right: 30%; animation: meteor 7s linear infinite; animation-delay: 5s; }
      .m3 { top: 5%; right: 60%; animation: meteor 12s linear infinite; animation-delay: 0s; }
      .m4 { top: 40%; right: 0%; animation: meteor 15s linear infinite; animation-delay: 8s; }
    ` }} />
    <div className="meteor m1" />
    <div className="meteor m2" />
    <div className="meteor m3" />
    <div className="meteor m4" />
  </div>
)

import Image from "next/image"

export function HeroSection() {
  const [currentNiche, setCurrentNiche] = useState(0)
  const [fade, setFade] = useState(true)
  const niches = ["FILMES", "SÉRIES", "ANIMES", "MÚSICAS"]

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentNiche((prev) => (prev + 1) % niches.length)
        setFade(true)
      }, 300)
    }, 3000)
    return () => clearInterval(interval)
  }, [niches.length])

  return (
    <section className="relative flex items-center justify-center text-center px-4 sm:px-6 md:px-8 overflow-hidden bg-background min-h-[80vh]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />

      <div className="relative z-10 max-w-7xl mx-auto py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna da Esquerda: Conteúdo de Texto */}
          <div className="text-center lg:text-left">
            {/* Glow neon fraco atrás do título */}
            <div className="absolute top-1/2 left-1/2 lg:left-1/4 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10" />

            <h1 className="font-[family-name:var(--font-display)] text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mb-4 md:mb-8 text-foreground drop-shadow-md text-balance leading-[1.1] font-black tracking-tighter uppercase relative">
              Lucre com YouTube Postando Vídeos de <br className="sm:hidden" />
              <span className="relative inline-block">
                <div className={`absolute inset-0 bg-primary/20 blur-[25px] rounded-full transition-all duration-300 ${fade ? 'opacity-100 scale-125' : 'opacity-0 scale-50'} -z-10`} />
                <span className={`relative inline-block transition-all duration-300 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'} text-primary`}>
                  {niches[currentNiche]}
                </span>
              </span>
              <br />
              <span className="text-foreground">Sem Aparecer, Sem Criar Roteiros e Sem Bloqueios por Direitos Autorais!</span>
            </h1>

            <div className="mb-6 md:mb-10 lg:max-w-xl">
              <p className="text-[11px] sm:text-sm md:text-base lg:text-lg text-muted-foreground font-normal leading-tight inline-block border-b border-foreground/20 pb-0.5">
                Monte seu canal de filmes e séries com IA e comece a lucrar em até <span className="text-primary font-bold">12 dias</span>, mesmo sem aparecer.
              </p>
            </div>

            {/* Botão CTA Principal */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="#offer-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative flex items-center justify-center gap-3 bg-primary text-black font-black text-sm sm:text-base md:text-xl lg:text-2xl px-8 py-5 sm:px-10 sm:py-6 md:px-12 md:py-7 rounded-xl shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_40px_rgba(0,163,255,0.5)] transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-tighter"
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 fill-current" />
                <span>Quero Lucrar agora</span>
                <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-[-20deg]" />
                </div>
              </a>
            </div>
          </div>

          {/* Coluna da Direita: Vídeo */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative aspect-video lg:aspect-square xl:aspect-video rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
              <video
                src="https://i.imgur.com/au0aAsj.mp4"
                autoPlay
                controls
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
