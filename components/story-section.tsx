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
          <div className="w-full overflow-hidden mt-4 relative">
            <style>{`
              @keyframes scroll-marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                display: flex;
                width: max-content;
                animation: scroll-marquee 40s linear infinite;
              }
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            `}</style>
            
            {/* Fade gradients on edges */}
            <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee gap-4 sm:gap-6 py-4">
              {[
                "https://i.imgur.com/RE4bi8d.jpeg",
                "https://i.imgur.com/qbXlQDP.png",
                "https://i.imgur.com/sNxtaOA.png",
                "https://i.imgur.com/0qy8uHK.png",
                "https://i.imgur.com/6mQzBra.png",
                "https://i.imgur.com/kyD57Gu.png",
                // Duplicate for infinite scroll
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
                  className="shrink-0 w-[280px] sm:w-[320px] md:w-[380px] h-auto object-contain rounded-2xl shadow-xl border border-slate-200 bg-white"
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
