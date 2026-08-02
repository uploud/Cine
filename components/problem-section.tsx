import { ScrollReveal } from "@/components/scroll-reveal"

export function ProblemSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm text-primary font-semibold uppercase tracking-widest mb-3">
              O Problema
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Por que a maioria tenta{" "}
              <span className="text-primary">e desiste</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-8 sm:space-y-10">
          <ScrollReveal animation="fade-up" delay={100} duration={600}>
            <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary text-center">
              O tempo de produção.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200} duration={600}>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
              Pra fazer <strong className="text-white">um único vídeo</strong> bem feito - separar material,
              transcrever falas, escrever roteiro, cortar as melhores partes, montar na timeline,
              sincronizar áudio, achar trilha, exportar...
            </p>
          </ScrollReveal>

          <ScrollReveal animation="zoom-in" delay={300} duration={600}>
            <div className="text-center py-6 sm:py-8">
              <span className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl font-black text-white">
                4 a 6 horas
              </span>
              <p className="text-sm sm:text-base text-slate-400 mt-2 font-medium">por vídeo</p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={400} duration={600}>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
              Posta 3 vídeos na primeira semana, 1 na segunda, nenhum na terceira.
              E Canais Darks que não postam <strong className="text-white">não crescem</strong>.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={500} duration={600}>
            <div className="border-t border-slate-700 pt-8 mt-8">
              <p className="font-[family-name:var(--font-display)] text-xl sm:text-2xl md:text-3xl font-bold text-center text-white max-w-2xl mx-auto leading-tight">
                O gargalo nunca foi a ideia.{" "}
                <span className="text-primary">Sempre foi a produção.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
