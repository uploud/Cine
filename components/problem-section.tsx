import { ScrollReveal } from "@/components/scroll-reveal"
import { CheckCircle2, ArrowRight } from "lucide-react"

export function ProblemSection() {
  const results = [
    "Vídeos que dão views e geram receita todos os dias.",
    "Canais que crescem no automático enquanto você foca em outra coisa.",
    "Você descobre o atalho que a maioria ainda faz na mão.",
  ]

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-mono text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight uppercase text-wt-blue">
              O RESULTADO?
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto mb-12">
          {results.map((result, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 150} duration={600}>
              <div className="flex items-start gap-4 p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:bg-slate-800 transition-colors">
                <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0 mt-1" />
                <p className="font-sans text-xl sm:text-2xl font-bold text-slate-200">
                  {result}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <ScrollReveal animation="fade-up" delay={500} duration={600}>
            <a
              href="#oferta"
              className="group inline-flex items-center justify-center gap-3 bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)] text-white font-mono font-[700] text-[18px] sm:text-[22px] px-8 py-5 sm:px-12 sm:py-6 rounded-xl shadow-[0_10px_30px_-14px_rgba(76,141,247,0.9)] hover:opacity-90 hover:-translate-y-1 active:scale-[0.98] transition-all"
            >
              <span>QUERO COMEÇAR AGORA!</span>
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
