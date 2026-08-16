"use client"

import React, { useState, useEffect, useRef } from "react"
import { ArrowRight, Play, Users } from "lucide-react"

const WORDS = [
  "anime",
  "série",
  "filme",
  "podcast",
  "futebol",
  "documentário",
  "canal dark",
  "cortes",
  "lore",
]
const PAUSE = 2200
const TRANSITION_DUR = 400
const TOTAL_CYCLE = PAUSE + TRANSITION_DUR * 2

const CHECKOUT_URL = "https://pay.kiwify.com.br/yTa2MmY"

export function HeroSection() {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle")
  const [wordWidth, setWordWidth] = useState<number | "auto">("auto")
  const measureRef = useRef<HTMLSpanElement>(null)

  // Measure word width dynamically to prevent jumps
  useEffect(() => {
    if (measureRef.current) {
      setWordWidth(measureRef.current.offsetWidth)
    }
  }, [index])

  // Word state machine
  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (phase === "idle") {
      timeout = setTimeout(() => {
        setPhase("exit")
      }, PAUSE)
    } else if (phase === "exit") {
      timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % WORDS.length)
        setPhase("enter")
      }, TRANSITION_DUR)
    } else if (phase === "enter") {
      timeout = setTimeout(() => {
        setPhase("idle")
      }, TRANSITION_DUR)
    }

    return () => clearTimeout(timeout)
  }, [phase])

  // Progress bar logic (Timeline)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    let frame: number
    let startTime: number

    const updateProgress = () => {
      if (!startTime) startTime = performance.now()
      const elapsed = performance.now() - startTime
      const p = Math.min((elapsed / TOTAL_CYCLE) * 100, 100)
      setProgress(p)
      if (p < 100) {
        frame = requestAnimationFrame(updateProgress)
      }
    }

    if (phase === "enter") {
      setProgress(0) // start fresh
      startTime = performance.now()
      frame = requestAnimationFrame(updateProgress)
    }

    return () => cancelAnimationFrame(frame)
  }, [phase])

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 overflow-hidden bg-[#05060A] text-white min-h-[90vh]">
      {/* Glow Effects */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 h-[400px] w-[600px] rounded-full bg-[#4C8DF7]/15 blur-[120px]" />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 -z-10 h-[300px] w-[800px] rounded-full bg-[#6A2EF0]/15 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center gap-8 sm:gap-10">
          {/* Logo / Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#4C8DF7] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
              WinTube IA 2.0
            </span>
          </div>

          {/* Large Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] font-black tracking-tight max-w-5xl">
            Crie seu próximo vídeo de <br className="hidden md:block" />
            <span
              className="inline-flex items-end transition-all duration-300 ease-out"
              style={{ width: wordWidth === "auto" ? "auto" : `${wordWidth}px` }}
            >
              <span
                className={`inline-block whitespace-nowrap bg-[linear-gradient(to_right,#4C8DF7,#6A2EF0)] text-transparent bg-clip-text transition-all duration-300 ${
                  phase === "exit"
                    ? "opacity-0 -translate-y-4"
                    : phase === "enter"
                      ? "opacity-0 translate-y-4"
                      : "opacity-100 translate-y-0"
                }`}
              >
                {WORDS[index]}
              </span>
            </span>
            <span className="inline-block ml-1 w-1 sm:w-2 h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] bg-[#6A2EF0] animate-pulse align-middle" />
            <br />
            100% no automático.
          </h1>

          {/* Subhead */}
          <p className="text-lg sm:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">
            A única inteligência artificial que cria roteiro, narração e edição completa em minutos.
            Sem mensalidades. Sem limites.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4">
            <a
              href={CHECKOUT_URL}
              className="group relative inline-flex items-center justify-center gap-3 bg-[linear-gradient(to_right,#4C8DF7,#6A2EF0)] text-white font-bold text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-lg shadow-lg shadow-[#4C8DF7]/25 transition-all hover:-translate-y-0.5 hover:shadow-[#6A2EF0]/40 active:scale-[0.98] w-full sm:w-auto"
            >
              <span>COMEÇAR AGORA</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#vsl-player"
              className="group inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white font-semibold text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-lg border border-white/10 transition-all hover:-translate-y-0.5 active:scale-[0.98] w-full sm:w-auto"
            >
              <Play className="w-5 h-5" />
              <span>Ver Demonstração</span>
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-4 text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#6A2EF0]" />
              <span>
                Mais de <strong className="text-white">12.450</strong> criadores ativos
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/5 overflow-hidden">
        <div
          className="h-full bg-[linear-gradient(to_right,#4C8DF7,#6A2EF0)] relative"
          style={{ width: `${progress}%` }}
        >
          {/* Subtle glow on the leading edge */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[4px] opacity-50" />
        </div>
        <div className="absolute bottom-3 right-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold hidden sm:block">
          {progress < 95 ? "Renderizando..." : "Pronto"}
        </div>
      </div>

      {/* Hidden element for measuring width */}
      <span
        ref={measureRef}
        className="absolute opacity-0 pointer-events-none whitespace-nowrap font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black"
        style={{ left: "-9999px", top: "-9999px" }}
        aria-hidden="true"
      >
        {WORDS[index]}
      </span>
    </section>
  )
}
