import { X, Check, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ComparisonSection() {
  const badFeatures = [
    "Sem assinatura mensal",
    "Sem renovação anual",
    "Sem taxas escondidas"
  ]

  const goodFeatures = [
    "Download + Transcrição — baixa e transcreve o conteúdo automaticamente.",
    "Editor de Corte com IA — aplica corte, reenquadramento e legenda em minutos.",
    "Assistente de IA integrado — tira dúvida e ajusta corte direto no app.",
    "Atualizações inclusas — toda melhoria entra sem custo adicional."
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <ScrollReveal animation="fade-up" duration={700}>
            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight uppercase">
              Acesso Vitalício + Apps Exclusivos <br className="hidden sm:block" />
              <span className="text-wt-blue">Sem Mensalidade</span>
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl md:text-2xl mt-4 max-w-3xl mx-auto leading-relaxed font-bold">
              Diferente de outras plataformas que cobram mensalidade, assinatura e taxa oculta, aqui você paga uma vez.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Outras Ferramentas (Bad) */}
          <ScrollReveal animation="fade-right" duration={700}>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 h-full shadow-sm opacity-90">
              <div className="flex flex-col items-center border-b border-slate-100 pb-6 mb-6">
                <h3 className="font-mono text-2xl font-bold text-slate-500 uppercase tracking-tight">
                  O que você NÃO vai ver aqui:
                </h3>
              </div>
              <ul className="space-y-4">
                {badFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-red-100 p-1 shrink-0">
                      <X className="w-5 h-5 text-red-500" strokeWidth={2.5} />
                    </div>
                    <span className="text-slate-500 font-bold text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* WinTube (Good) */}
          <ScrollReveal animation="fade-left" duration={700}>
            <div className="bg-slate-900 border-2 border-wt-blue/30 rounded-2xl p-6 sm:p-8 h-full shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)]" />
              <div className="flex flex-col items-center border-b border-slate-800 pb-6 mb-6">
                <h3 className="font-mono text-2xl font-bold text-white uppercase tracking-tight text-center">
                  Você recebe acesso completo a:
                </h3>
              </div>
              <ul className="space-y-4">
                {goodFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-wt-blue/20 p-1 shrink-0">
                      <Check className="w-5 h-5 text-wt-blue" strokeWidth={3} />
                    </div>
                    <span className="text-slate-200 font-sans text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <div className="text-center">
          <ScrollReveal animation="fade-up" delay={200} duration={600}>
            <a
              href="#oferta"
              className="group relative inline-flex items-center justify-center gap-3 bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)] text-white font-mono font-[700] text-[18px] sm:text-[20px] px-8 py-4 sm:px-10 sm:py-5 rounded-xl shadow-[0_10px_30px_-14px_rgba(76,141,247,0.9)] hover:opacity-90 hover:-translate-y-0.5 active:scale-[0.98] transition-all w-full sm:w-auto"
            >
              <span>QUERO GARANTIR MEU ACESSO VITALÍCIO</span>
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
