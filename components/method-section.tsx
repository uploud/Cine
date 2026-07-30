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
    <section className="py-8 sm:py-12 px-4 sm:px-6 bg-white">
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

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {stages.map((stage, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 100} duration={600}>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 hover:border-primary/30 transition-all h-full flex flex-col">
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-[family-name:var(--font-display)] text-xl font-bold mb-4 shadow-md shadow-primary/20">
                  {stage.number}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-slate-900 uppercase mb-2">
                  {stage.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium mt-auto">
                  {stage.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
