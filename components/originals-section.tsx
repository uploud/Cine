import { AlertTriangle, Sparkles, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function OriginalsSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <ScrollReveal animation="fade-up" duration={700}>
            <p className="text-xs sm:text-sm text-primary font-semibold uppercase tracking-widest mb-3">
              VÍDEOS ORIGINAIS
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight uppercase mb-6">
              chega de repetir o <span className="text-primary">pack de todo mundo</span>
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl font-bold max-w-3xl mx-auto leading-relaxed">
              Pare de arriscar sua monetização postando o mesmo pack que centenas de outras contas já usaram.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mb-12 sm:mb-16">
          {/* Problem Card */}
          <ScrollReveal animation="fade-right" duration={700}>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6 sm:p-8 sm:h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-6 shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                Os algoritmos estão cada vez mais rigorosos com conteúdo repetido. O problema do pack pronto é que ele não é seu: quando todo mundo posta o mesmo corte, com o mesmo estilo, a mesma cadência, isso coloca sua conta em risco.
              </p>
            </div>
          </ScrollReveal>

          {/* Solution Card */}
          <ScrollReveal animation="fade-left" duration={700}>
            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-6 sm:p-8 sm:h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-primary flex items-center justify-center mb-6 shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                Pra não perder seu trabalho, você precisa de vídeos gerados a partir do seu próprio material, únicos pra sua produção. É exatamente isso que o WinTube entrega: cada vídeo sai da sua própria fonte, transcrito e montado do zero.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="text-center">
          <ScrollReveal animation="fade-up" delay={200} duration={600}>
            <a
              href="#offer-section"
              className="group relative inline-flex items-center justify-center gap-3 bg-primary hover:bg-sky-600 text-white font-bold text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-lg shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:scale-[0.98] w-full sm:w-auto"
            >
              <span>QUERO CRIAR VÍDEOS ÚNICOS</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
