"use client"

import type React from "react"
import { Check, Plus, Lock, ShieldCheck, Shield } from "lucide-react"
import { buildCheckoutURL } from "@/lib/url-params"

export function OfferSection() {
  const checkoutUrl = "https://pay.kiwify.com.br/yTa2MmY"

  const redirectToCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const url = buildCheckoutURL(checkoutUrl)
    window.location.href = url
  }

  return (
    <section id="offer-section" className="py-24 bg-background border-b border-border overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título do Vídeo */}
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Depoimento de <span className="text-primary">Direitos Autorais</span> com o Sistema da Wintube
          </h2>
        </div>

        {/* Vídeo */}
        <div className="relative max-w-3xl mx-auto mb-16">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-xl bg-black">
            <video
              src="https://i.imgur.com/au0aAsj.mp4"
              controls
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Card de Pricing */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-primary/30 relative shadow-[0_0_50px_rgba(0,163,255,0.05)]">
          
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-2 tracking-tight">
              Acesso ao App Completo
            </h2>
            <p className="text-muted-foreground">
              Acesso ao APP enviado por e-mail imediatamente após a compra.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <h4 className="text-sm font-semibold mb-6 text-muted-foreground uppercase tracking-wider">O que você recebe</h4>
              <ul className="space-y-4 text-foreground/90">
                <li className="flex items-start gap-3">
                  <Check className="text-primary w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold">App WinTube</span>
                    <p className="text-muted-foreground text-sm mt-0.5">Gera roteiros, cortes inteligentes e edição automática com IA.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-primary w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold">Guia Anti-Direitos Autorais</span>
                    <p className="text-muted-foreground text-sm mt-0.5">Boas práticas para monetização segura.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-primary w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold">WinTube Academy</span>
                    <p className="text-muted-foreground text-sm mt-0.5">Passo a passo para montar seu canal e crescer.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-primary w-5 h-5 mt-0.5 shrink-0" />
                  <span className="font-semibold">Vídeos Ilimitados</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-primary w-5 h-5 mt-0.5 shrink-0" />
                  <span className="font-semibold">Sem Mensalidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-primary w-5 h-5 mt-0.5 shrink-0" />
                  <span className="font-semibold">Suporte Especializado</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-6 text-muted-foreground uppercase tracking-wider">Bônus Inclusos</h4>
              <ul className="space-y-4 text-foreground/90 bg-background/40 p-6 rounded-2xl border border-border">
                <li className="flex items-start gap-3">
                  <Plus className="text-primary w-4 h-4 mt-1 shrink-0" />
                  Guia de Monetização em 7 Dias
                </li>
                <li className="flex items-start gap-3">
                  <Plus className="text-primary w-4 h-4 mt-1 shrink-0" />
                  Modelos prontos de thumbs e capas
                </li>
                <li className="flex items-start gap-3">
                  <Plus className="text-primary w-4 h-4 mt-1 shrink-0" />
                  Mini curso de Edição com IA
                </li>
                <li className="flex items-start gap-3">
                  <Plus className="text-primary w-4 h-4 mt-1 shrink-0" />
                  Acesso ao grupo fechado de alunos
                </li>
              </ul>
            </div>
          </div>

          {/* Preço */}
          <div className="border-t border-border pt-8 flex flex-col items-center mb-8">
            <p className="text-muted-foreground line-through mb-1 text-lg">De R$ 197,00</p>
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">R$ 49,97</span>
            </div>
            <p className="text-primary font-medium">ou 12x de R$ 5,01</p>
          </div>

          {/* CTA */}
          <a
            href={buildCheckoutURL(checkoutUrl)}
            onClick={redirectToCheckout}
            className="block w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-bold text-lg md:text-xl text-center transition-all duration-300 shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)] hover:-translate-y-1 mb-8"
          >
            GARANTA SUA VAGA AGORA!
          </a>

          {/* Selos de confiança */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-muted-foreground text-sm">
            <div className="flex items-center gap-2"><Lock className="w-4 h-4" /> Checkout Seguro</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Satisfação Garantida</div>
            <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> Privacidade Protegida</div>
          </div>

          {/* Bandeiras de pagamento */}
          <div className="mt-8 flex justify-center">
            <img
              src="/images/pagamento_v2.png"
              alt="Formas de Pagamento"
              className="w-full max-w-[400px] h-auto object-contain opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
