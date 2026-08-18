"use client"

import type React from "react"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function BonusSection() {
  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const offerSection = document.getElementById("oferta")
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const bonuses = [
    "Guia de Monetização em 7 Dias",
    "Modelos prontos de títulos e capas",
    "Mini curso de Edição com IA",
    "Acesso ao grupo fechado de alunos",
  ]

  return (
    <section className="py-16 sm:py-24 px-4 bg-slate-900 border-t border-slate-800 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-black mb-3 leading-tight tracking-tight text-white uppercase">
              NOSSA ÁREA DE MEMBROS <span className="text-wt-blue">WINTUBE ACADEMY</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Passo a passo pra montar seu canal e começar a lucrar.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto mb-16">
          <ScrollReveal animation="fade-up" delay={200}>
            {/* SCREENSHOTS DA SUA ÁREA DE MEMBROS / TREINAMENTO */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 aspect-video relative flex items-center justify-center">
              <img 
                src="https://i.imgur.com/K3pW17A.png" // Placeholder, should be replaced with real Academy screenshot
                alt="Wintube Academy" 
                className="w-full h-full object-cover opacity-80 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-xl drop-shadow-md">Acesso Imediato à Plataforma</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="max-w-3xl mx-auto">
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl">
              <div className="mb-6 sm:mb-8 pb-4 border-b border-slate-700">
                <h3 className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight uppercase flex items-center justify-center gap-3">
                  <span className="text-3xl">🎁</span> Bônus Exclusivos Comprando Hoje:
                </h3>
              </div>
              <ul className="space-y-4">
                {bonuses.map((point, index) => (
                  <li key={index} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                    </div>
                    <p className="text-lg sm:text-xl font-bold text-slate-200">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-10 text-center">
                <a
                  href="#oferta"
                  onClick={scrollToOffer}
                  className="group inline-flex items-center justify-center gap-3 bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)] text-white font-mono font-[700] text-[16px] sm:text-[18px] px-8 py-4 rounded-xl shadow-lg hover:opacity-90 transition-all hover:-translate-y-0.5 w-full sm:w-auto uppercase"
                >
                  <span>QUERO GARANTIR MEUS BÔNUS AGORA</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}
