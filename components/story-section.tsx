"use client"

import type React from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function StorySection() {
  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const offerSection = document.getElementById("oferta")
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 bg-slate-50 border-y border-slate-100">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="text-center mb-10">
            <div className="flex justify-center mb-8">
              <img
                src="https://i.imgur.com/tqVJPWa.png"
                alt="WinTube Logo"
                className="w-48 sm:w-56 h-auto object-contain drop-shadow-lg"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-display)] font-extrabold mb-6 text-slate-900 tracking-tight uppercase">
               Gere Vídeos Únicos e Inéditos <br className="hidden sm:block" />
               <span className="text-wt-blue"> de forma Simples e Automática</span>
            </h2>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={100} duration={600}>
          <div className="w-full overflow-hidden mt-4">
            <div className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 px-4 sm:px-8 [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
              {[
                "https://i.imgur.com/RE4bi8d.jpeg",
                "https://i.imgur.com/qbXlQDP.png",
                "https://i.imgur.com/sNxtaOA.png",
                "https://i.imgur.com/0qy8uHK.png",
                "https://i.imgur.com/6mQzBra.png",
                "https://i.imgur.com/kyD57Gu.png"
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Exemplo ${i + 1}`}
                  className="snap-center shrink-0 w-[80vw] sm:w-[320px] md:w-[380px] h-auto object-contain rounded-2xl shadow-xl border border-slate-200 bg-white"
                />
              ))}
            </div>
            
            <div className="flex justify-center mt-2 gap-2 hidden sm:flex">
               <span className="text-slate-400 text-sm font-medium animate-pulse">
                  Deslize para o lado para ver mais ➔
               </span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
