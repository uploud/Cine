"use client"

import React, { useState, useEffect, useRef } from "react"
import { Play } from "lucide-react"

const WORDS = [
  "podcast",
  "anime",
  "série",
  "filme",
  "futebol",
  "documentário",
  "canal dark",
  "cortes",
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



  return (
    <section className="relative flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 overflow-hidden bg-[#05060A] text-white min-h-[90vh] pt-20 pb-24">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Glow Effects */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 h-[400px] w-[600px] rounded-full bg-[#4C8DF7]/15 blur-[120px]" />
      <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[600px] rounded-full bg-[#6A2EF0]/15 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center gap-12 lg:gap-16">
        {/* Top: Copy */}
        <div className="flex flex-col items-center text-center w-full pt-8">
          {/* Badge */}
          <div className="flex items-center gap-4 text-[11px] font-bold tracking-[0.2em] text-slate-500 uppercase">
            <span>WINTUBE</span>
            <div className="w-10 h-[1px] bg-slate-700"></div>
            <span>EDIÇÃO NO AUTOMÁTICO</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.1] font-black tracking-tight text-white mt-8 mx-auto">
            Você pede um vídeo de <br className="hidden sm:block" />
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
          </h1>

          {/* Subhead 1 */}
          <h2 className="text-xl sm:text-2xl md:text-[1.75rem] text-white font-bold leading-[1.4] max-w-2xl mt-8 font-display tracking-tight mx-auto">
            Crie <span className="relative inline-block">
              <span className="relative z-10 px-1">dezenas de vídeos</span>
              <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#6A2EF0]/40 -z-10 rounded-sm"></span>
            </span> em minutos, tudo no automático, sem limites.
          </h2>

          {/* Subhead 2 */}
          <p className="text-base sm:text-lg text-slate-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            Uma única ferramenta, sem mensalidade e 100% ilimitada. 
            Baixa, corta, legenda e monta enquanto você faz outra coisa.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-10">
            <a
              href="#offer-section"
              className="flex items-center justify-center bg-[linear-gradient(to_right,#4C8DF7,#6A2EF0)] text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-[#4C8DF7]/20 transition-all hover:-translate-y-0.5 hover:shadow-[#6A2EF0]/40 active:scale-[0.98] w-full sm:w-auto"
            >
              Quero o WinTube
            </a>
            <a
              href="#como-funciona"
              className="flex items-center justify-center gap-2 bg-transparent border border-white/10 text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors hover:bg-white/5 active:scale-[0.98] w-full sm:w-auto"
            >
              Ver funcionando
            </a>
          </div>

          {/* Under Buttons Info */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 text-xs sm:text-sm text-slate-500 font-medium">
            <span>acesso vitalício</span>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
              <span><strong className="text-white">195</strong> criadores usando</span>
            </div>
          </div>
        </div>

        {/* Bottom: VSL Player */}
        <div id="vsl-player" className="w-full max-w-4xl relative mt-8 lg:mt-4">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center justify-center bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-[0_0_15px_rgba(239,68,68,0.1)]">
              Por favor, verifique se o som está ligado!
            </span>
          </div>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 ring-1 ring-white/5 group">
            {/* Play Button Overlay (Optional, for aesthetics if iframe doesn't autoplay immediately) */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none z-10 transition-opacity group-hover:opacity-0" />
            <iframe
              src="https://www.youtube.com/embed/9NyiHkeaNog?autoplay=1&mute=1"
              className="w-full h-full relative z-0"
              title="WinTube - Apresentação"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>



      {/* Hidden element for measuring width */}
      <span
        ref={measureRef}
        className="absolute opacity-0 pointer-events-none whitespace-nowrap font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black"
        style={{ left: "-9999px", top: "-9999px" }}
        aria-hidden="true"
      >
        {WORDS[index]}
      </span>
    </section>
  )
}
