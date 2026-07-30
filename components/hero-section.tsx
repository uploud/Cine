"use client"

import React from "react"
import { ArrowRight } from "lucide-react"

const CHECKOUT_URL = "https://pay.kiwify.com.br/yTa2MmY"

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center text-center px-4 sm:px-6 md:px-8 overflow-hidden bg-white min-h-[85vh]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 h-[400px] w-[600px] rounded-full bg-primary/8 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">

          {/* Logo */}
          <div className="flex justify-center w-full">
            <img
              src="https://i.imgur.com/tqVJPWa.png"
              alt="WinTube"
              className="h-14 sm:h-16 md:h-20 object-contain"
            />
          </div>

          {/* H1 */}
          <h1 className="font-[family-name:var(--font-display)] text-[1.8rem] sm:text-3xl md:text-4xl lg:text-[3rem] text-slate-900 leading-[1.1] font-extrabold tracking-tight max-w-4xl">
            Crie centenas de perfil em 1 clique e monetize em{" "}
            <span className="text-primary">todas as redes sociais</span>.
          </h1>

          {/* Sub */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl">
            Um único sistema, sem mensalidades e sem pagar mais nada.
          </p>

          {/* Platforms line */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-slate-400 font-medium tracking-wide uppercase">
              Funciona em todas as plataformas
            </p>
            <img src="https://i.imgur.com/RPITZfs.png" alt="Plataformas" className="h-6 sm:h-8 object-contain" />
          </div>

          {/* VSL Player - lazy loaded */}
          <div className="w-full relative max-w-4xl mx-auto mt-2">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
              <iframe
                src="https://www.youtube.com/embed/9NyiHkeaNog"
                className="w-full h-full"
                title="WinTube - Apresentação"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* CTA */}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta"
            className="group relative inline-flex items-center justify-center gap-3 bg-primary hover:bg-sky-600 text-white font-bold text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-lg shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:scale-[0.98] animate-cta-pulse w-full sm:w-auto"
          >
            <span>QUERO COMEÇAR AGORA</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
