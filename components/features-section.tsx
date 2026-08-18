import { FileText, Scissors } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const features = [
  {
    title: "Roteiro Automático",
    description: "A IA assiste o conteúdo inteiro, separa as melhores falas e cria o roteiro de corte pronto em minutos.",
    icon: FileText,
  },
  {
    title: "Cortes Inteligentes + Legenda",
    description: "O editor automático aplica cortes, reenquadramento vertical e legenda sincronizada. Você só finaliza e posta.",
    icon: Scissors,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <ScrollReveal animation="fade-up" duration={700}>
            <p className="text-xs sm:text-sm text-wt-blue font-semibold uppercase tracking-widest mb-3">
              FERRAMENTAS EXCLUSIVAS
            </p>
            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight uppercase">
              Para Criação de <span className="text-wt-blue">Conteúdo</span>
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl md:text-2xl mt-4 max-w-3xl mx-auto leading-relaxed font-bold">
              O WinTube analisa, corta e monta seus vídeos, deixando tudo pronto para você apenas finalizar e postar.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 100} duration={600}>
              <div className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-wt-blue/30 hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-wt-blue/10 text-wt-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 font-mono tracking-tight uppercase">
                  {feature.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed font-sans text-lg">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up" delay={200} duration={600}>
            {/* PRINTS/SCREENSHOTS DO APP WINTUBE */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 aspect-video relative">
               <video 
                src="https://i.imgur.com/n0soFwK.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
               />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
