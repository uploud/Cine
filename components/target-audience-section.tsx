import { CheckCircle2, XCircle } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const isFor = [
  "Para quem busca uma renda extra usando a internet.",
  "Quem quer vender produtos como afiliado sem aparecer nos vídeos.",
  "Pessoas com zero experiência com tecnologia ou programas complicados.",
  "Para quem quer que o computador faça o trabalho chato e repetitivo por você.",
  "Quem quer pagar só uma vez, instalar no PC e ter acesso pra sempre.",
]

const isNotFor = [
  "Quem usa só o celular. O programa exige computador (Windows ou Mac) pra rodar.",
  "Para quem acha que vai ganhar dinheiro sem ter o trabalho de postar os vídeos.",
  "Pessoas que querem aparecer nas câmeras e virar influenciador.",
  "Quem prefere passar a tarde toda editando vídeo manualmente.",
  "Para quem prefere ferramentas que cobram mensalidade.",
]

export function TargetAudienceSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm text-primary font-semibold uppercase tracking-widest mb-3">
              CLASSIFICADOR
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight uppercase">
              para quem serve o <span className="text-primary">WinTube?</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Para quem É */}
          <ScrollReveal animation="fade-up" delay={100} duration={600}>
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 h-full">
              <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100 uppercase">
                PARA QUEM É?
              </h3>
              <ul className="space-y-4">
                {isFor.map((point, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Para quem NÃO é */}
          <ScrollReveal animation="fade-up" delay={250} duration={600}>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 h-full">
              <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-200 uppercase">
                PARA QUEM NÃO É?
              </h3>
              <ul className="space-y-4">
                {isNotFor.map((point, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
