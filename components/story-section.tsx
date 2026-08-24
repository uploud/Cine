"use client"

import type React from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function StorySection() {
  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const offerSection = document.getElementById("oferta")
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 bg-slate-50 border-y border-slate-100">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="text-center mb-10">
            <div className="flex justify-center mb-8">
              <img
                src="https://i.imgur.com/tqVJPWa.png"
                alt="WinTube Logo"
                className="w-48 sm:w-56 h-auto object-contain drop-shadow-lg"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-display)] font-extrabold mb-6 text-slate-900 tracking-tight uppercase">
               Um Pouco da <span className="text-wt-blue">Minha História</span>
            </h2>
          </div>
        </ScrollReveal>
        
        <div className="flex flex-col gap-6 text-slate-700 text-lg leading-relaxed max-w-2xl mx-auto">
          <ScrollReveal animation="fade-up" delay={100} duration={600}>
            <p>
              📊 Escalei meu canal no YouTube, 100% no manual. Passei dias e noites editando, postando, testando formatos, brigando contra bloqueios… e mesmo assim consegui crescer.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={150} duration={600}>
            <div className="flex justify-center my-4 sm:my-6">
              <img
                src="https://i.imgur.com/qbXlQDP.png"
                alt="Meus Resultados"
                className="w-auto h-auto max-w-full rounded-xl shadow-md"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200} duration={600}>
            <p>
              ✨ Mas a verdade é: se naquela época eu tivesse a estrutura que criei agora, teria feito um estrago ainda maior. ⚡ E o detalhe mais importante: Nunca precisei aparecer em frente às câmeras, nunca implorei por inscritos, e mesmo assim consegui escalar meu canal de filmes e séries no manual. Agora, com o WinTube, tudo ficou mais rápido, fácil e seguro.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={300} duration={600}>
            <p className="font-bold text-slate-900 text-xl border-l-4 border-wt-blue pl-4 py-2 mt-4 bg-wt-blue/5">
              🚨 E agora essa estrutura está nas suas mãos.
            </p>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}
