import { CheckCircle2, XCircle } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const isFor = [
  "Quer renda extra sem aparecer",
  "Está cansado de editar vídeo por vídeo",
  "Quer postar todo dia sem equipe",
  "Quer estar em todas as plataformas",
  "Pretende escalar mais de um perfil",
  "Quer usar IA pra produzir mais rápido que a concorrência",
]

const isNotFor = [
  "Prefere editar manualmente",
  "Acha que ganha dinheiro sem postar com consistência",
  "Quer resultado sem aplicar o método",
  "Prefere fazer tudo no braço em vez de automatizar",
]

export function TargetAudienceSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Para Quem <span className="text-primary">É</span> e Para Quem{" "}
              <span className="text-slate-400">Não É</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Para quem É */}
          <ScrollReveal animation="fade-up" delay={100} duration={600}>
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 h-full">
              <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
                É pra você se...
              </h3>
              <ul className="space-y-4">
                {isFor.map((point, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Para quem NÃO é */}
          <ScrollReveal animation="fade-up" delay={250} duration={600}>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 h-full">
              <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-200">
                Não é pra você se...
              </h3>
              <ul className="space-y-4">
                {isNotFor.map((point, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-500 leading-relaxed">
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
