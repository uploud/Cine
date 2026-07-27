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
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(0,102,255,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 px-2 text-slate-900 tracking-tight">
          Chega de editar<br />
          <span className="text-primary">vídeos manualmente</span>
        </h2>
        <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed px-4">
          Deixe a IA fazer o trabalho pesado enquanto você foca em crescer seu canal e monetizar.
        </p>
        <div>
          <a
            href="#offer-section"
            onClick={scrollToOffer}
            className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-blue-600 text-white font-semibold text-base sm:text-lg px-8 py-4 sm:px-12 sm:py-5 rounded-full shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5"
          >
            <span>Quero Começar Agora</span>
            <Play className="w-5 h-5 fill-current opacity-90" />
          </a>
          <div className="flex flex-col items-center mt-12 sm:mt-16 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 md:p-10 max-w-3xl mx-auto shadow-xl">
            <Image 
              src="https://i.imgur.com/tqVJPWa.png" 
              alt="Garantia de 7 dias" 
              width={400} 
              height={200} 
              className="h-20 sm:h-28 md:h-32 w-auto object-contain mb-6 transition-transform hover:scale-105 duration-500"
            />
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                Não se preocupe, você tem <span className="font-semibold text-white">7 dias de garantia incondicional</span> para testar à vontade e ver se realmente gosta.
              </p>
              <p>
                Se por qualquer motivo você não ficar 100% satisfeito, nós <span className="font-semibold text-white">devolvemos o seu dinheiro</span>. Basta solicitar o reembolso de forma rápida pelo nosso suporte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
