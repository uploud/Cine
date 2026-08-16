import { X, Check, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ComparisonSection() {
  const badFeatures = [
    "Mensalidade cara, abusiva e recorrente.",
    "Depende de servidor externo, cai por instabilidade.",
    "Suporte automático, burocrático, demora dias pra responder.",
    "Atualização lenta, fica pra trás do mercado."
  ]

  const goodFeatures = [
    "Acesso vitalício e uso ilimitado, sem cobrança mensal.",
    "100% estável: roda direto no seu computador, usando seu próprio hardware.",
    "Suporte direto no WhatsApp.",
    "Atualizações constantes com novas funcionalidades."
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <ScrollReveal animation="fade-up" duration={700}>
            <p className="text-xs sm:text-sm text-primary font-semibold uppercase tracking-widest mb-3">
              COMPARATIVO
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight uppercase">
              o WinTube é a <span className="text-primary">melhor opção</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Outras Ferramentas */}
          <ScrollReveal animation="fade-right" duration={700}>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 h-full shadow-sm opacity-70">
              <div className="flex flex-col items-center border-b border-slate-100 pb-6 mb-6">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-500 uppercase tracking-tight">
                  OUTRAS FERRAMENTAS
                </h3>
              </div>
              <ul className="space-y-4">
                {badFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-red-100 p-1 shrink-0">
                      <X className="w-4 h-4 text-red-500" strokeWidth={2.5} />
                    </div>
                    <span className="text-slate-500 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* WinTube */}
          <ScrollReveal animation="fade-left" duration={700}>
            <div className="bg-slate-900 border-2 border-primary/30 rounded-2xl p-6 sm:p-8 h-full shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              <div className="flex flex-col items-center border-b border-slate-800 pb-6 mb-6">
                <img
                  src="https://i.imgur.com/tqVJPWa.png"
                  alt="WinTube"
                  className="h-10 object-contain brightness-0 invert"
                />
              </div>
              <ul className="space-y-4">
                {goodFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-primary/20 p-1 shrink-0">
                      <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-slate-200 font-bold">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <div className="text-center">
          <ScrollReveal animation="fade-up" delay={200} duration={600}>
            <a
              href="#offer-section"
              className="group relative inline-flex items-center justify-center gap-3 bg-primary hover:bg-sky-600 text-white font-bold text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-lg shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:scale-[0.98] animate-cta-pulse w-full sm:w-auto"
            >
              <span>QUERO ADQUIRIR O WINTUBE AGORA</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
