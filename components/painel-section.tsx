import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const PAINEL_URL = "https://painel-skills.vercel.app/?utm_source=link+da+pagina+PG+1+WINTUBE&utm_medium=WINTUBE&utm_campaign=PG1+WINTUBE"

export function PainelSection() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <ScrollReveal animation="fade-up" duration={700}>
          <p className="text-xs sm:text-sm text-[#4C8DF7] font-semibold uppercase tracking-widest mb-3">
            Conheça o painel WiSkills
          </p>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight uppercase mb-4">
            Veja por dentro antes de <span className="text-[#4C8DF7]">comprar</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium">
            Todas as ferramentas ficam num só lugar: WinTube, ClipCash, StickReel e muito mais.
            Entre no painel, explore cada ferramenta e veja como tudo funciona.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={150} duration={600}>
          <a
            href={PAINEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden border border-slate-200 shadow-[0_20px_50px_rgba(76,141,247,0.25)] transition-transform duration-500 hover:scale-[1.01] mb-8 sm:mb-10"
          >
            <img
              src="/painel-wiskills.webp"
              alt="Painel WiSkills com todas as ferramentas"
              className="w-full h-auto"
              loading="lazy"
            />
          </a>

          <a
            href={PAINEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)] text-white font-mono font-[700] text-[18px] sm:text-[20px] px-8 py-4 sm:px-10 sm:py-5 rounded-xl shadow-[0_10px_30px_-14px_rgba(76,141,247,0.9)] hover:opacity-90 hover:-translate-y-0.5 active:scale-[0.98] transition-all w-full sm:w-auto uppercase"
          >
            Conhecer o painel
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
