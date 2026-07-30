import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

const CHECKOUT_URL = "https://pay.kiwify.com.br/yTa2MmY"

export function FinalCtaSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(14,165,233,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal animation="fade-up" duration={700}>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4 sm:mb-6 uppercase">
            Garantia <span className="text-primary">Incondicional</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Deixe a IA fazer o trabalho pesado enquanto você foca em crescer seus perfis.
          </p>
        </ScrollReveal>

        {/* Garantia */}
        <ScrollReveal animation="fade-up" delay={200} duration={600}>
          <div className="mt-12 sm:mt-16 bg-slate-900 border border-slate-800 rounded-lg p-6 sm:p-8 md:p-10 max-w-2xl mx-auto">
            <Image
              src="/garantia-7-dias.png"
              alt="Garantia incondicional de 7 dias"
              width={400}
              height={200}
              className="h-20 sm:h-28 md:h-32 w-auto object-contain mb-6 mx-auto"
            />
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                Você tem{" "}
                <strong className="text-white">7 dias de garantia incondicional</strong>{" "}
                para testar à vontade.
              </p>
              <p>
                Se por qualquer motivo não ficar satisfeito,{" "}
                <strong className="text-white">devolvemos 100% do seu dinheiro</strong>.
                Sem perguntas.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
