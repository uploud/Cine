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
    "Quem quer transformar filmes, séries e animes em perfis lucrativos usando IA.",
    "Criadores que querem postar vídeos todos os dias no piloto automático.",
    "Quem quer monetizar perfis dark sem depender de editor, roteirista ou equipe.",
    "Pessoas que querem escalar perfis com vídeos únicos e mais seguros contra bloqueios.",
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-display)] font-extrabold mb-3 leading-tight tracking-tight text-slate-900">
              O Wintube <span className="text-primary">Serve Para Você?</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {/* Card: Para Quem É */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="mb-6 sm:mb-8 border-b border-slate-100 pb-4">
                <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-display)] font-bold text-slate-900 tracking-tight">
                  Para Quem É?
                </h3>
              </div>
              <ul className="space-y-4">
                {isFor.map((point, index) => (
                  <li key={index} className="flex gap-3 items-start group">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Card: Para Quem Não É */}
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="mb-6 sm:mb-8 border-b border-slate-200 pb-4">
                <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-display)] font-bold text-slate-900 tracking-tight">
                  Para Quem Não É?
                </h3>
              </div>
              <ul className="space-y-4">
                {isNotFor.map((point, index) => (
                  <li key={index} className="flex gap-3 items-start group">
                    <div className="flex-shrink-0 mt-0.5">
                      <XCircle className="w-5 h-5 text-slate-400" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>


      </div>
    </section>
  )
}
