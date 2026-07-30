import { Download, User, Monitor, Eye, DollarSign, ShoppingCart } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const stages = [
  {
    icon: Download,
    number: "01",
    title: "adquira a wintube",
    description: "Tenha acesso imediato ao gerador de vídeos e as nossas aulas.",
  },
  {
    icon: User,
    number: "02",
    title: "crie seu perfil",
    description: "Esteja no Instagram, Facebook, YouTube ou TikTok e inicie um perfil dedicado a vídeos de filmes, séries e animes.",
  },
  {
    icon: Monitor,
    number: "03",
    title: "USE O NOSSO SISTEMA",
    description: "Baixe o gerador no seu computador e crie videos no automático.",
  },
  {
    icon: Eye,
    number: "04",
    title: "ganhe visualizações",
    description: "Conquiste engajamento e faça seu perfil crescer de forma rápida.",
  },
  {
    icon: DollarSign,
    number: "05",
    title: "monetize seu perfil",
    description: "Transforme suas visualizações em dinheiro.",
  },
  {
    icon: ShoppingCart,
    number: "06",
    title: "venda produtos",
    description: "Aproveite o perfil aquecido para divulgar e vender produtos como afiliado.",
  },
]

export function MethodSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm text-primary font-semibold uppercase tracking-widest mb-3">
              FÓRMULA DO SUCESSO
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              siga os passos para começar a{" "}
              <span className="text-primary">faturar</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline vertical */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-slate-200" aria-hidden="true" />

          <div className="space-y-6 sm:space-y-8">
            {stages.map((stage, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100} duration={600}>
                <div className="relative flex gap-4 sm:gap-6 items-start pl-0">
                  {/* Number circle */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                    <stage.icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="pt-1 sm:pt-2 flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-[family-name:var(--font-display)] text-sm font-bold text-slate-300 tracking-wider">
                        {stage.number}
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-bold text-slate-900">
                        {stage.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Closing */}
        <ScrollReveal animation="fade-up" delay={600} duration={600}>
          <div className="mt-12 sm:mt-16 border-t border-slate-200 pt-8 text-center">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Esse é o processo. Funciona. O problema é que, feito à mão,{" "}
              <strong className="text-slate-900">cada vídeo custa um dia inteiro do seu tempo.</strong>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
