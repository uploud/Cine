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
    description: 'Cola o roteiro, clica em "Cortar Cenas" e "Cortar B-rolls" - a IA corta sozinha. A etapa mais demorada vira minutos.',
    video: "https://i.imgur.com/9DXzQZH.mp4",
  },
  {
    icon: Film,
    number: "04",
    title: "Montagem Automática",
    description: 'Um clique em "Criar Montagem Completa" e o sistema monta o vídeo inteiro.',
    video: "https://i.imgur.com/Ie5Bqw6.mp4",
  },
  {
    icon: Music,
    number: "05",
    title: "Trilha Sonora",
    description: "Cola o link da música, o app baixa e sonoriza. Pronto pra publicar.",
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
      <div className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal animation="fade-up" duration={700}>
            <p className="text-xs sm:text-sm text-primary font-bold uppercase tracking-[0.2em] mb-4">
              A Sacada
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
              E se os 5 estágios fossem{" "}
              <span className="text-primary">automáticos?</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-4">
              Você já viu o método e já viu o resultado. Agora a parte que ninguém mais te entrega.
              Junto com o guia vem o <strong className="text-slate-900">WinTube</strong> - o app que a
              gente desenvolveu, e que executa exatamente os 5 estágios do método, um por um, com IA.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Não é uma ferramenta genérica de edição.{" "}
              <strong className="text-slate-900">É o método inteiro transformado em botão.</strong>
            </p>
            <p className="text-sm text-slate-400 mt-4 font-medium">
              O aplicativo funciona para computador (Windows e Mac).
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

                      <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
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

      {/* Scale sub-block */}
      <div className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-slate-50 mt-16 sm:mt-20">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal animation="fade-up" duration={700}>
            <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-10 sm:mb-14 tracking-tight">
              Por que isso muda a escala do{" "}
              <span className="text-primary">seu perfil</span>
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {scalePoints.map((point, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 80} duration={500}>
                <div className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 hover:border-primary/30 transition-colors h-full">
                  <point.icon className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
                  <h4 className="font-[family-name:var(--font-display)] text-base sm:text-lg font-bold text-slate-900 mb-1">
                    {point.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Closing + CTA */}
          <ScrollReveal animation="fade-up" delay={400} duration={600}>
            <div className="mt-12 sm:mt-16 text-center">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto mb-8 font-medium">
                O guia te dá o método. O app remove o único motivo pelo qual a maioria não executa.
              </p>
              <a
                href="#offer-section"
                id="reveal-cta"
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-sky-600 text-white font-bold text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-lg shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>QUERO ACESSAR O MÉTODO + O APP</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
