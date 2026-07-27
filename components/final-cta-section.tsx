"use client"

import type React from "react"
import { ShieldCheck, ArrowRight } from "lucide-react"

export function FinalCtaSection() {
  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const offerSection = document.getElementById("offer-section")
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-24 bg-card overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Garantia */}
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/20 shadow-[0_0_30px_rgba(139,92,246,0.15)]">
          <ShieldCheck className="w-10 h-10 text-primary drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
        </div>
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          7 Dias de Garantia Incondicional
        </h2>
        <div className="text-muted-foreground text-lg md:text-xl leading-relaxed space-y-4 mb-12">
          <p>
            Não se preocupe, você tem <span className="font-semibold text-foreground">7 dias de garantia incondicional</span> para testar à vontade e ver se realmente gosta.
          </p>
          <p>
            Se por qualquer motivo você não ficar 100% satisfeito, nós <span className="font-semibold text-foreground">devolvemos o seu dinheiro</span>. Basta solicitar o reembolso de forma rápida pelo nosso suporte.
          </p>
        </div>

        {/* CTA Final */}
        <a
          href="#offer-section"
          onClick={scrollToOffer}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:-translate-y-1"
        >
          Quero começar agora
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
