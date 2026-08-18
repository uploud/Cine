import { CheckCircle2, XCircle } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const isFor = [
  {
    title: "Pra quem quer começar do zero em canal em Todas as Plataformas",
    desc: "Mesmo sem saber editar — a IA faz o trabalho pesado pra você."
  },
  {
    title: "Pra quem quer transformar filmes e séries ANIMES PODCAST LIVES em canais lucrativos",
    desc: "Aprende a criar vídeos automáticos que rendem visualizações e receita todos os dias, mesmo dormindo."
  },
  {
    title: "Pra quem quer uma renda extra real com IA",
    desc: "Usa o mesmo sistema que já gerou milhares de views e lucros pra quem começou do zero sem depender de clientes ou freelas."
  },
  {
    title: "Pra quem curte tecnologia e quer aproveitar a onda da IA",
    desc: "Descobre como usar ferramentas práticas pra criar, editar e postar automaticamente."
  },
  {
    title: "Pra quem tá cansado de só consumir e quer ganhar com isso",
    desc: "Chega de só assistir. Agora você aprende a lucrar com o conteúdo."
  }
]

const isNotFor = [
  "Acha que vai ganhar dinheiro sem aplicar o método.",
  "Quer resultado sem paciência pra aprender.",
  "Não tem nenhuma fonte de conteúdo própria pra alimentar o pipeline."
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
              <ul className="space-y-6">
                {isFor.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 leading-tight mb-1">{item.title}</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                    </div>
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
