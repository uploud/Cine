"use client"

import React from "react"
import { Play, Star, Shield } from "lucide-react"


import Image from "next/image"

export function HeroSection() {


  return (
    <section className="relative flex items-center justify-center text-center px-4 sm:px-6 md:px-8 overflow-hidden bg-background min-h-[80vh] border-b border-slate-200">
      {/* Padrão de fundo limpo estilo SaaS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/10 opacity-50 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto gap-8 sm:gap-10">
          
          {/* Conteúdo de Texto */}
          <div className="w-full flex flex-col items-center relative">

            {/* Logo Wintube */}
            <div className="flex justify-center mb-6 md:mb-10 w-full">
              <img src="https://i.imgur.com/tqVJPWa.png" alt="Wintube" className="h-16 sm:h-20 md:h-24 lg:h-20 object-contain" />
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] mb-4 md:mb-6 text-slate-900 leading-[1.1] font-extrabold tracking-tight w-full">
              Lucre com YouTube Postando Vídeos de <span className="text-primary">Filmes, Séries e Animes</span> Sem Aparecer, Sem Criar Roteiros e Sem Bloqueios por Direitos Autorais!
            </h1>

            <div className="mb-4 md:mb-8 w-full max-w-3xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed pb-0.5">
                O único aplicativo que permite criar vídeos ilimitados para seu canal. Sem créditos. Sem mensalidade. Sem precisar aparecer. Tudo em um único lugar.
              </p>
            </div>
          </div>
          
          {/* VSL (Vídeo de Vendas) */}
          <div className="w-full relative max-w-4xl mx-auto mt-4">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 flex items-center justify-center">
              <iframe 
                src="https://www.youtube.com/embed/9NyiHkeaNog?autoplay=1" 
                className="w-full h-full"
                title="Wintube VSL"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* Botão CTA Principal */}
          <div className="flex justify-center w-full mt-6 md:mt-8">
            <a
              href="#offer-section"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative flex items-center justify-center gap-3 bg-primary hover:bg-blue-600 text-white font-semibold text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-full shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto"
            >
              <span>QUERO GERAR MEUS VÍDEOS AGORA</span>
              <Play className="w-5 h-5 fill-current opacity-90" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
