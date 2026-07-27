"use client"

import React from "react"
import { ArrowRight, PlayCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background min-h-screen flex items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-10" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        {/* Logo */}
        <div className="flex justify-center mb-8 w-full">
          <img src="https://i.imgur.com/tqVJPWa.png" alt="Wintube" className="h-16 md:h-20 object-contain drop-shadow-lg" />
        </div>

        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-5xl mx-auto leading-tight text-foreground drop-shadow-md">
          Lucre com YouTube Postando Vídeos de Filmes, Séries e Animes Sem Aparecer, Sem Criar Roteiros e Sem Bloqueios por Direitos Autorais!
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
          O único 1 APLICATIVO que permite criar vídeos ilimitados para seu canal. Sem créditos. Sem mensalidade. Sem precisar aparecer. Tudo em um único lugar
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#offer-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)] hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            Quero Lucrar agora
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* VÍDEO DEMO */}
        <div className="relative max-w-4xl mx-auto rounded-2xl border border-border bg-card shadow-2xl overflow-hidden aspect-video">
           <video 
              src="https://i.imgur.com/XXM4Cwi.mp4" 
              className="w-full h-full object-contain bg-black"
              controls
              autoPlay
              muted
              playsInline
            />
        </div>
      </div>
    </section>
  )
}
