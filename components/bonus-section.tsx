"use client"

import type React from "react"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function BonusSection() {
  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const offerSection = document.getElementById("oferta")
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const bonusImages = [
    "https://i.imgur.com/ZLqusYe.png",
    "https://i.imgur.com/sAxHPls.png",
    "https://i.imgur.com/XZlUMCC.png",
    "https://i.imgur.com/JbfYDEa.png",
  ]

  return (
    <section className="py-16 sm:py-24 px-4 bg-slate-900 border-t border-slate-800 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-black mb-3 leading-tight tracking-tight text-white uppercase">
              NOSSA ÁREA DE MEMBROS <span className="text-wt-blue">WINTUBE ACADEMY</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Passo a passo pra montar seu canal e começar a lucrar.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto mb-16">
          <ScrollReveal animation="fade-up" delay={200}>
            {/* SCREENSHOTS DA SUA ÁREA DE MEMBROS / TREINAMENTO */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 aspect-video relative flex items-center justify-center">
              <img 
                src="https://i.imgur.com/Ahp3JZO.gif"
                alt="Wintube Academy" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <p className="text-white font-bold text-xl drop-shadow-md">Acesso Imediato à Plataforma</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl overflow-hidden">
              <div className="mb-8 pb-4 border-b border-slate-700 text-center">
                <h3 className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight uppercase">
                  <span className="text-3xl mr-2">🎁</span> + 4 BÔNUS EXCLUSIVOS COMPRANDO SOMENTE HOJE:
                </h3>
              </div>
              
              {/* Marquee Container para os Bônus */}
              <div className="relative w-full overflow-hidden pb-4 mb-10">
                <div className="flex w-max animate-marquee-fast hover:[animation-play-state:paused]">
                  {[...bonusImages, ...bonusImages].map((src, i) => (
                    <div 
                      key={i} 
                      className="w-[280px] sm:w-[320px] md:w-[350px] shrink-0 mx-3"
                    >
                      <div className="rounded-xl overflow-hidden border border-slate-600 shadow-md bg-slate-800 p-2 pointer-events-none">
                        <img
                          src={src}
                          alt={`Bônus ${i + 1}`}
                          className="w-full h-auto object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <style dangerouslySetInnerHTML={{
                  __html: `
                  @keyframes marquee-fast {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                  .animate-marquee-fast {
                    animation: marquee-fast 25s linear infinite;
                  }
                `}} />
              </div>

              <div className="mt-8 text-center">
                <a
                  href="#oferta"
                  onClick={scrollToOffer}
                  className="group inline-flex items-center justify-center gap-3 bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)] text-white font-mono font-[700] text-[16px] sm:text-[18px] px-8 py-5 rounded-xl shadow-[0_10px_30px_-14px_rgba(76,141,247,0.9)] hover:opacity-90 transition-all hover:-translate-y-0.5 w-full sm:w-auto uppercase"
                >
                  <span>QUERO GARANTIR MEUS BÔNUS AGORA</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}
