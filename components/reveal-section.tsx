"use client"

import { Download, FileText, Scissors, ShieldCheck, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    icon: Download,
    number: "01",
    title: "Download + Transcrição Automática",
    description: "Cola o link do YouTube, Filmes, Séries, Animes, podcast ou live e o APP WinTube baixa e transcreve o conteúdo inteiro sozinho. Você não precisa assistir nada pra achar o trecho bom.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Roteiro e Cortes com IA",
    description: "A IA lê a transcrição, separa os melhores momentos e monta a sequência de corte pronta em minutos.",
  },
  {
    icon: Scissors,
    number: "03",
    title: "Montagem Vertical + Legenda Automática",
    description: "Reenquadramento vertical (com opção de seguir rosto), legenda palavra por palavra sincronizada, exporta em 4K. Você só dá os toques finais e posta.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Guia Anti-Direitos Autorais",
    description: "Mostra como ajustar o vídeo e proteger seu canal. Sem bloqueios, sem perder monetização.",
  },
]

export function RevealSection() {
  return (
    <div className="bg-slate-950">
      <section id="como-funciona" className="relative text-white py-16 sm:py-24">
        {/* Visual break - top accent border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)] z-30" aria-hidden="true" />

        <div className="w-full flex flex-col justify-center overflow-hidden">
          
          {/* Header */}
          <div className="px-4 sm:px-6 mb-12 sm:mb-16">
            <div className="max-w-5xl mx-auto text-center">
              <ScrollReveal animation="fade-up" duration={700}>
                <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-4 uppercase">
                  OS 4 PILARES DO <span className="bg-clip-text text-transparent bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)]">SISTEMA WINTUBE</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-bold">
                  Você não precisa mais perder noites cortando, Editando e legendandom O Sistema Wintube faz tudo enquanto você foca em crescer.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 sm:px-6 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {steps.map((step, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 100} duration={600}>
                  <div className="bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-[#4C8DF7]/40 transition-colors h-full flex flex-col gap-4 group">
                    <div className="flex gap-4 items-center">
                      <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-[#4C8DF7]/10 text-[#4C8DF7] border border-[#4C8DF7]/20 group-hover:bg-[#4C8DF7]/20 transition-colors">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-mono text-lg sm:text-xl font-bold tracking-tight text-white uppercase">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Closing CTA Static Section */}
      <div className="px-4 sm:px-6 relative z-10 bg-slate-950 pb-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal animation="fade-up" delay={100} duration={600}>
            <div className="text-center">
              <a
                href="#oferta"
                id="reveal-cta"
                className="group inline-flex items-center justify-center gap-3 bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)] text-white font-mono font-[700] text-[18px] px-8 py-4 sm:px-10 sm:py-5 rounded-xl shadow-lg hover:opacity-90 hover:-translate-y-0.5 active:scale-[0.98] transition-all"
              >
                <span>QUERO ACESSAR O GERADOR DE VÍDEOS</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
