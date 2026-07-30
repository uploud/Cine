import { Download, User, Monitor, Eye, DollarSign, ShoppingCart } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const stages = [
  {
    icon: Download,
    number: "01",
    title: "Adquira o WinTube",
    description: "Tenha acesso imediato ao app gerador de vídeos e à WinTube Academy.",
  },
  {
    icon: User,
    number: "02",
    title: "Comece a postar",
    description: "Esteja no Instagram, Facebook, YouTube ou TikTok e comece a publicar seus vídeos.",
  },
  {
    icon: Monitor,
    number: "03",
    title: "Use o nosso sistema",
    description: "Baixe o app no seu computador e crie vídeos completos no automático: baixar, transcrever, cortar, montar e sonorizar.",
  },
  {
    icon: Eye,
    number: "04",
    title: "Ganhe visualizações",
    description: "Poste com consistência e conquiste engajamento pra crescer nas plataformas.",
  },
  {
    icon: DollarSign,
    number: "05",
    title: "Monetize seus vídeos",
    description: "Transforme suas visualizações em dinheiro pela própria plataforma.",
  },
  {
    icon: ShoppingCart,
    number: "06",
    title: "Venda produtos",
    description: "Aproveite o alcance dos seus vídeos pra divulgar e vender produtos como afiliado.",
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
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight uppercase">
              siga os passos para começar a <span className="text-primary">faturar</span>
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
                      <h3 className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-bold text-slate-900 uppercase">
                        {stage.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
