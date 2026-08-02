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
            <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black text-slate-900 leading-[1.1] tracking-tight uppercase">
              A forma mais fácil de lucrar na <span className="text-primary">internet</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6 text-slate-800 text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
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

          {/* User Provided Images Grid */}
          <ScrollReveal animation="fade-up" delay={300} duration={600}>
            <div className="flex flex-col items-center gap-10 my-12">
              {[
                "https://i.imgur.com/SMmwvnj.png",
                "https://i.imgur.com/KUdAM7i.png",
                "https://i.imgur.com/YMnFfjT.png",
                "https://i.imgur.com/5JCExO3.png",
                "https://i.imgur.com/s2kAnfj.png"
              ].map((src, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl flex items-center justify-center bg-slate-100 w-full max-w-2xl">
                  <img src={src} alt={`Exemplo de lucro ${idx + 1}`} className="w-full h-auto object-contain" />
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={400} duration={600}>
            <p>
              Enquanto a maioria das pessoas perde horas só assistindo vídeo, um grupo pequeno está usando esse mesmo formato pra colocar dinheiro no bolso todos os dias.
            </p>
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
