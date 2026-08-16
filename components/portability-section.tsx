import { Download, MonitorPlay, Play, Monitor, Command } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    title: "Faça o download",
    description: "Baixe o arquivo de instalação do WinTube.",
    icon: Download,
  },
  {
    title: "Instale o programa",
    description: "Siga o passo a passo simples pra instalar corretamente.",
    icon: MonitorPlay,
  },
  {
    title: "Abra o WinTube",
    description: "Depois é só abrir o app no seu computador e começar a usar.",
    icon: Play,
  },
]

export function PortabilitySection() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[300px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <ScrollReveal animation="fade-up" duration={700}>
            <p className="text-xs sm:text-sm text-primary font-semibold uppercase tracking-widest mb-3">
              PORTABILIDADE
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight uppercase mb-4">
              funciona em <span className="text-primary">qualquer computador</span>
            </h2>
            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
              Veja como é fácil a instalação do WinTube no seu computador ou notebook!
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {steps.map((step, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 150} duration={600}>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center mb-5 text-primary group-hover:scale-110 transition-transform shadow-lg shadow-primary/5">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-display)] tracking-tight">
                  <span className="text-primary/60 mr-2">{i + 1}.</span> {step.title}
                </h3>
                <p className="text-slate-400 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={400} duration={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 bg-slate-900/50 rounded-xl p-4 sm:p-6 border border-slate-800 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-sky-400" />
                <span>Windows</span>
              </div>
              <span className="text-slate-700">|</span>
              <div className="flex items-center gap-2">
                <Command className="w-5 h-5 text-slate-300" />
                <span>macOS</span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-slate-400 text-center sm:text-left">
              O programa roda em qualquer máquina, seja Windows ou macOS.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
