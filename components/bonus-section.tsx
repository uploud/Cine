"use client"

import type React from "react"
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function BonusSection() {
  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const offerSection = document.getElementById("offer-section")
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const isFor = [
    "Criadores que querem crescer no YouTube sem aparecer na câmera.",
    "Pessoas cansadas de perder horas editando vídeos manualmente.",
    "Quem quer transformar filmes, séries e animes em canais lucrativos usando IA.",
    "Criadores que querem postar vídeos todos os dias no piloto automático.",
    "Quem quer monetizar canais dark sem depender de editor, roteirista ou equipe.",
    "Pessoas que querem escalar canais com vídeos únicos e mais seguros contra bloqueios.",
  ]

  const isNotFor = [
    "Quem prefere continuar editando vídeo por vídeo manualmente.",
    "Pessoas que acham que vão ganhar dinheiro sem postar conteúdo.",
    "Quem quer resultados rápidos sem aprender o método.",
    "Criadores acomodados que continuam usando conteúdo genérico igual todo mundo.",
    "Pessoas que não querem aproveitar IA para crescer mais rápido no YouTube.",
    "Quem prefere perder tempo tentando fazer tudo sozinho ao invés de automatizar.",
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-display)] font-black mb-3 leading-tight uppercase tracking-tighter">
              A <span className="text-primary underline underline-offset-4 decoration-2">WinTube</span> Serve Para Você?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {/* Card: Para Quem É */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="bg-[#f0fdf4] border border-green-200 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg h-full transition-all hover:shadow-xl hover:border-green-300">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-[family-name:var(--font-display)] font-black text-green-700 uppercase tracking-tight">
                  PARA QUEM É?
                </h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {isFor.map((point, index) => (
                  <li key={index} className="flex gap-3 items-start group">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-green-900 leading-tight font-medium">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Card: Para Quem Não É */}
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="bg-[#fef2f2] border border-red-200 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg h-full transition-all hover:shadow-xl hover:border-red-300">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-[family-name:var(--font-display)] font-black text-red-700 uppercase tracking-tight">
                  PARA QUEM <span className="underline decoration-red-400">NÃO É?</span>
                </h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {isNotFor.map((point, index) => (
                  <li key={index} className="flex gap-3 items-start group">
                    <div className="flex-shrink-0 mt-0.5">
                      <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-red-900 leading-tight font-medium">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <div className="text-center">
          <ScrollReveal animation="zoom-in" delay={600}>
            <a
              href="#offer-section"
              onClick={scrollToOffer}
              className="group inline-flex items-center gap-2 sm:gap-3 bg-primary text-white font-black text-xs sm:text-sm md:text-base lg:text-xl px-6 py-4 sm:px-8 sm:py-5 rounded-full shadow-[0_5px_15px_rgba(0,163,255,0.2)] hover:shadow-[0_10px_25px_rgba(0,163,255,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-tighter"
            >
              <span>QUERO TER ACESSO AO APLICATIVO</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
