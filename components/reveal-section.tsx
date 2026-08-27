"use client"

import { Download, FileText, Scissors, ShieldCheck, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    icon: Download,
    number: "1",
    title: "Digite o tema ou cole o link",
    description: "Escreva o assunto em português ou cole o link do vídeo, filme, série ou anime.",
  },
  {
    icon: FileText,
    number: "2",
    title: "A IA monta tudo sozinha",
    description: "Ela escolhe as melhores cenas, gera o roteiro, corta, reenquadra e legenda.",
  },
  {
    icon: ArrowRight,
    number: "3",
    title: "Baixe e poste",
    description: "Em minutos o vídeo fica pronto pra você baixar e postar no seu canal.",
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
                <span className="text-wt-blue font-bold tracking-widest uppercase text-sm mb-2 block">Simples assim</span>
                <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-4 uppercase">
                  Seus vídeos prontos em 3 passos
                </h2>
                <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
                  Veja como é fácil gerar seus vídeos de canal dark com o WinTube.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 sm:px-6 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
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
