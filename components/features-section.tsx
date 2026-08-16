import { Download, Settings, Scissors, MonitorSmartphone, FileText, Music, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const features = [
  {
    title: "Download automático",
    description: "Cola o link e o app baixa o material automaticamente. Sem programa separado.",
    icon: Download,
  },
  {
    title: "Controle total",
    description: "Defina exatamente quantos vídeos quer gerar e como cada etapa se comporta.",
    icon: Settings,
  },
  {
    title: "Cortes inteligentes",
    description: "A IA analisa o material completo e extrai automaticamente as melhores partes.",
    icon: Scissors,
  },
  {
    title: "Múltiplos formatos",
    description: "Exporte pros formatos vertical, quadrado ou horizontal, pra qualquer plataforma.",
    icon: MonitorSmartphone,
  },
  {
    title: "Roteiro com IA",
    description: "A transcrição vira matéria-prima pro roteiro, gerado automaticamente a partir da fala original.",
    icon: FileText,
  },
  {
    title: "Trilha sincronizada",
    description: "A sonorização é baixada e sincronizada com o vídeo sem precisar de nenhum editor externo.",
    icon: Music,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <ScrollReveal animation="fade-up" duration={700}>
            <p className="text-xs sm:text-sm text-primary font-semibold uppercase tracking-widest mb-3">
              FUNCIONALIDADES
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight uppercase">
              tudo feito no <span className="text-primary">piloto automático</span>
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl md:text-2xl mt-4 max-w-3xl mx-auto leading-relaxed font-bold">
              Um processo de edição que antes durava horas, agora é feito em minutos.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 100} duration={600}>
              <div className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-primary/30 hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-[family-name:var(--font-display)] tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <ScrollReveal animation="fade-up" delay={200} duration={600}>
            <a
              href="#offer-section"
              className="group relative inline-flex items-center justify-center gap-3 bg-primary hover:bg-sky-600 text-white font-bold text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-lg shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:scale-[0.98] w-full sm:w-auto"
            >
              <span>QUERO GERAR MEUS VÍDEOS</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
