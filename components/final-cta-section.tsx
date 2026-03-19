"use client"

import type React from "react"
import { Play } from "lucide-react"
import Image from "next/image"

export function FinalCtaSection() {
  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const offerSection = document.getElementById("offer-section")
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(255,215,0,0.1),transparent_70%),radial-gradient(ellipse_40%_30%_at_20%_20%,rgba(30,255,0,0.05),transparent)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 sm:mb-6 px-2">
          Chega de editar<br />
          <span className="text-primary uppercase">video manualmente</span>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-lg mx-auto mb-6 sm:mb-8 md:mb-10 font-light leading-relaxed px-4">
          Deixe a IA fazer o trabalho pesado enquanto voce foca em crescer seu canal e monetizar.
        </p>
        <div>
          <a
            href="#offer-section"
            onClick={scrollToOffer}
            className="inline-flex items-center gap-2 sm:gap-3 bg-primary text-primary-foreground font-bold text-xs sm:text-sm md:text-base lg:text-lg tracking-wider uppercase px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 lg:px-16 rounded hover:opacity-90 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(255,215,0,0.3)]"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
            QUERO COMECAR AGORA
          </a>
          <div className="flex justify-center mt-6 sm:mt-8">
            <Image 
              src="/garantia-7-dias.png" 
              alt="Garantia de 7 dias" 
              width={200} 
              height={100} 
              className="h-12 sm:h-16 md:h-20 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
