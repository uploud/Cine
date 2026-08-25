"use client"

import React from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight } from "lucide-react"

export function ClipcashSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden flex flex-col items-center text-center">
      <div className="max-w-4xl mx-auto w-full">
        <ScrollReveal animation="fade-up" duration={700}>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight uppercase mb-4">
            Seus Cortes Prontos em até <span className="text-wt-blue">3 passos</span>
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl mt-4 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
            Veja como é fácil gerar seus cortes virais com a nossa ferramenta!
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200} duration={700}>
          <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200 mb-8 bg-slate-50 relative flex items-center justify-center min-h-[200px]">
            <img 
              src="blob:https://imgur.com/cdb448b8-65de-499f-b02c-a582487caa7a" 
              alt="App ClipCash" 
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/800x450/eeeeee/999999?text=Imagem+do+App+ClipCash"
              }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={300} duration={700}>
          <p className="text-slate-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            Com o nosso gerador de cortes você consegue criar dezenas de cortes todos os dias,
            prontos para postar em qualquer plataforma, em apenas 3 passos.
          </p>

          <a
            href="#oferta"
            className="group relative inline-flex items-center justify-center gap-3 bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)] text-white font-mono font-[700] text-[18px] sm:text-[20px] px-8 py-4 sm:px-10 sm:py-5 rounded-xl shadow-[0_10px_30px_-14px_rgba(76,141,247,0.9)] hover:opacity-90 hover:-translate-y-0.5 active:scale-[0.98] transition-all w-full sm:w-auto uppercase"
          >
            <span>QUERO ACESSAR O GERADOR DE CORTES</span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
