"use client"

import React from "react"
import { CustomVslPlayer } from "./custom-vsl-player"

export function Hero() {
  return (
    <section className="relative w-full bg-wt-bg overflow-hidden flex flex-col items-center justify-center px-4 pt-20 pb-16">
      {/* Background Layers */}
      <div 
        className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-[0.15]"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(900px 520px at 12% 88%, rgba(76,141,247,0.20), transparent 60%),
          radial-gradient(760px 480px at 78% 8%, rgba(106,46,240,0.20), transparent 60%)
        `
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.028) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.028) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(700px 460px at 50% 50%, #000 10%, transparent 78%)",
        WebkitMaskImage: "radial-gradient(700px 460px at 50% 50%, #000 10%, transparent 78%)"
      }} />

      <div className="relative z-10 max-w-[1180px] mx-auto flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs font-bold tracking-[0.2em] text-wt-blue uppercase mb-6 bg-wt-blue/10 px-4 py-2 rounded-full border border-wt-blue/20">
          <span>SEGREDO REVELADO DOS MEUS CANAIS DE YOUTUBE</span>
        </div>

        {/* H1 Headline */}
        <h1 className="font-mono font-[800] text-wt-ink leading-[1.14] tracking-[-.02em] max-w-5xl mx-auto uppercase"
            style={{ fontSize: "clamp(28px, 5.2vw, 56px)" }}>
          LUCRE COM <span className="text-red-500">YOUTUBE</span> POSTANDO VÍDEOS DE <span className="text-green-500">FILMES, SÉRIES E ANIMES</span> SEM APARECER, SEM CRIAR ROTEIROS E SEM BLOQUEIOS POR DIREITOS AUTORAIS!
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-wt-muted max-w-[64ch] mt-6 mx-auto" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
          Monte seu canal de filmes e séries com IA e comece a lucrar em até 12 dias, mesmo sem aparecer.
        </p>

        {/* VSL Player */}
        <div className="w-full max-w-4xl mx-auto mt-10 sm:mt-12 mb-8 relative z-20">
          <CustomVslPlayer videoId="9NyiHkeaNog" />
        </div>

        {/* CTA */}
        <a 
          href="#oferta"
          className="bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)] text-white font-mono font-[700] text-[18px] sm:text-[22px] rounded-xl px-10 py-5 shadow-[0_10px_30px_-14px_rgba(76,141,247,0.9)] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap inline-flex items-center justify-center gap-2"
        >
          QUERO COMEÇAR AGORA
        </a>

      </div>
    </section>
  )
}

