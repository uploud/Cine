import { ArrowRight, AlertTriangle } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function OpportunitySection() {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm text-primary font-semibold uppercase tracking-widest mb-3">
              GRANDE OPORTUNIDADE
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight uppercase">
              A forma mais fácil de lucrar na <span className="text-primary">internet</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
          <ScrollReveal animation="fade-up" delay={100} duration={600}>
            <p>
              Os vídeos tomaram conta de todas as plataformas e facilitaram o jogo do dinheiro online.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={200} duration={600}>
            <p>
              Olhe esses exemplos abaixo. Sabe o que eles têm em comum? Nenhum rosto, nenhuma câmera. Só conteúdo postado com consistência.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300} duration={600}>
            <p>
              Enquanto a maioria das pessoas perde horas só assistindo vídeo, um grupo pequeno está usando esse mesmo formato pra colocar dinheiro no bolso todos os dias.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={400} duration={600}>
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 p-4 rounded-lg mt-6">
              <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-amber-900 font-medium">
                Sem enrolação: não existe garantia de faturamento. Resultado depende de consistência, nicho e execução.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={500} duration={600}>
            <div className="pt-8 text-center">
              <a
                href="#offer-section"
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-sky-600 text-white font-bold text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-lg shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:scale-[0.98] w-full sm:w-auto"
              >
                <span>QUERO APROVEITAR A OPORTUNIDADE</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}
