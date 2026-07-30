import { Eye, Clock, TrendingUp, Layers } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const cards = [
  {
    icon: Eye,
    title: "Você não é o produto",
    description: "Sem se expor, sem equipamento, sem carisma na frente da câmera.",
  },
  {
    icon: Clock,
    title: "Não depende de você estar presente",
    description: "O vídeo rende depois de publicado. Você dorme, ele trabalha.",
  },
  {
    icon: TrendingUp,
    title: "Escala sem contratar ninguém",
    description: "Um perfil, dois, cinco - o esforço não multiplica igual.",
  },
  {
    icon: Layers,
    title: "Múltiplas fontes de receita",
    description: "Monetização de plataforma, parcerias, produtos próprios.",
  },
]

export function OpportunitySection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm text-primary font-semibold uppercase tracking-widest mb-3">
              A Oportunidade
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Por que perfis de edit de filmes, séries e animes viraram{" "}
              <span className="text-primary">fonte de renda</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
              Perfis de edit de filmes, séries e animes explodiram porque resolvem o problema que impede a maioria de começar:
              a necessidade de aparecer.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {cards.map((card, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 100} duration={600}>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 hover:border-primary/30 transition-colors h-full">
                <card.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>


      </div>
    </section>
  )
}
