import { CheckCircle2, XCircle } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const isFor = [
  "Criadores que querem crescer no YouTube sem aparecer na câmera.",
  "Pessoas cansadas de perder horas editando vídeos manualmente.",
  "Quem quer transformar podcasts, lives e vídeos longos em canais lucrativos usando IA.",
  "Criadores que querem postar vídeos todos os dias no piloto automático.",
  "Quem quer monetizar canais dark sem depender de editor, roteirista ou equipe.",
  "Pessoas que querem escalar canais com vídeos únicos, no seu próprio ritmo."
]

const isNotFor = [
  "Quem prefere continuar editando vídeo por vídeo manualmente.",
  "Pessoas que acham que vão ganhar dinheiro sem postar conteúdo.",
  "Quem quer resultados rápidos sem aprender o método.",
  "Criadores acomodados que continuam usando conteúdo genérico igual todo mundo.",
  "Pessoas que não querem aproveitar IA para crescer mais rápido no YouTube."
]

export function TargetAudienceSection() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight uppercase">
              PARA QUEM É O <span className="text-wt-blue">WINTUBE ACADEMY?</span>
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl mt-4 max-w-3xl mx-auto leading-relaxed font-medium">
              O WinTube Academy é pra quem quer viver do lado lucrativo do Youtube sem precisar ser influencer, aparecer na câmera ou gastar meses aprendendo edição.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Para quem É */}
          <ScrollReveal animation="fade-right" delay={100} duration={600}>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 h-full shadow-lg shadow-slate-100">
              <div className="mb-6 pb-6 border-b border-slate-100 flex items-center gap-4">
                <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20 shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-mono text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                  É PARA VOCÊ SE...
                </h3>
              </div>
              <ul className="space-y-4">
                {isFor.map((point, i) => (
                  <li key={i} className="flex gap-4 items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="text-base sm:text-lg text-slate-800 font-bold leading-tight">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Para quem NÃO é */}
          <ScrollReveal animation="fade-left" delay={250} duration={600}>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 h-full">
              <div className="mb-6 pb-6 border-b border-slate-200 flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-300 rounded-xl flex items-center justify-center shrink-0">
                  <XCircle className="w-8 h-8 text-slate-600" />
                </div>
                <h3 className="font-mono text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                  NÃO É PRA VOCÊ SE...
                </h3>
              </div>
              <ul className="space-y-5">
                {isNotFor.map((point, i) => (
                  <li key={i} className="flex gap-4 items-center bg-white p-4 rounded-xl border border-slate-200">
                    <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                    <span className="text-base sm:text-lg text-slate-700 font-bold">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
