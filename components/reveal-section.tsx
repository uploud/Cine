"use client"

import { Download, FileText, Scissors, Film, Music, Zap, BarChart3, Monitor, Users, Globe, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const CHECKOUT_URL = "https://pay.kiwify.com.br/yTa2MmY"

const steps = [
  {
    icon: Download,
    number: "01",
    title: "Baixe as Cenas",
    description: "Cola o link e o app baixa o material automaticamente.",
    video: "https://i.imgur.com/jjJQ9CL.mp4",
  },
  {
    icon: FileText,
    number: "02",
    title: "Transcreva as Falas",
    description: "Um clique e todas as falas viram texto, prontas pro roteiro com IA.",
    video: "https://i.imgur.com/XyuHBwq.mp4",
  },
  {
    icon: Scissors,
    number: "03",
    title: "Corte as Melhores Partes",
    description: "A IA identifica e corta as melhores partes sozinha.",
    video: "https://i.imgur.com/9DXzQZH.mp4",
  },
  {
    icon: Film,
    number: "04",
    title: "Montagem Automática",
    description: "Um clique e o sistema monta o vídeo inteiro.",
    video: "https://i.imgur.com/Ie5Bqw6.mp4",
  },
  {
    icon: Music,
    number: "05",
    title: "Trilha Sonora",
    description: "O app baixa e sonoriza. Vídeo pronto pra publicar.",
    video: "https://i.imgur.com/Reg1Gjl.mp4",
  },
]

const scalePoints = [
  {
    icon: BarChart3,
    title: "Volume",
    description: "Em vez de 1 vídeo por semana, você posta todos os dias.",
  },
  {
    icon: Zap,
    title: "Consistência",
    description: "É a constância que faz o algoritmo te recomendar.",
  },
  {
    icon: Globe,
    title: "Um vídeo, todas as plataformas",
    description: "O mesmo material alimenta YouTube, Reels, TikTok e Facebook.",
  },
  {
    icon: Monitor,
    title: "Múltiplos perfis",
    description: "Com minutos por vídeo, dá pra tocar 2, 3, 5 perfis em paralelo.",
  },
  {
    icon: Users,
    title: "Sem equipe",
    description: "Nenhum editor, roteirista ou motion designer na folha.",
  },
]

export function RevealSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Visual break - top accent border */}
      <div className="h-1 bg-primary" aria-hidden="true" />

      {/* Header */}
      <div className="py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal animation="fade-up" duration={700}>
            <p className="text-xs sm:text-sm text-primary font-bold uppercase tracking-[0.2em] mb-4">
              GERADOR DE VÍDEOS
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black text-slate-900 leading-[1.1] tracking-tight mb-6 uppercase">
              veja como funciona o <span className="text-primary">nosso sistema</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-700 leading-relaxed max-w-3xl mx-auto mb-4 font-bold">
              Com o WinTube você consegue criar vários vídeos todos os dias, de forma automática, prontos pra postar em qualquer plataforma.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* 5 Step demos - alternating layout */}
      <div className="px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-16 sm:gap-20 md:gap-28">
            {steps.map((step, i) => {
              const isReverse = i % 2 !== 0

              return (
                <ScrollReveal key={i} animation="fade-up" duration={700}>
                  <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${isReverse ? "md:flex-row-reverse" : ""}`}>
                    {/* Video side */}
                    <div className="w-full md:w-1/2">
                      <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-200 shadow-lg bg-slate-50">
                        <video
                          src={step.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Text side */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        {/* Icon - lit up with primary color (mirrors section 5's gray icons) */}
                        <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <step.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                        </div>
                        <span className="font-[family-name:var(--font-display)] text-sm font-bold text-primary tracking-wider">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-black text-slate-900 mb-3 tracking-tight uppercase">
                        {step.title}
                      </h3>
                      <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-semibold">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>

      <div className="py-8 px-4 sm:px-6 bg-slate-50 mt-8 sm:mt-12">
        <div className="max-w-5xl mx-auto">
          {/* Closing + CTA */}
          <ScrollReveal animation="fade-up" delay={100} duration={600}>
            <div className="text-center">
              <a
                href="#offer-section"
                id="reveal-cta"
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-sky-600 text-white font-bold text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-lg shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>QUERO ACESSAR O GERADOR DE VÍDEOS</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
