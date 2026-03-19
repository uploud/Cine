"use client"

import type React from "react"
import { Shield, ShoppingBag, Lock } from "lucide-react"
import Image from "next/image"
import { buildCheckoutURL } from "@/lib/url-params"



export function OfferSection() {
  const checkoutUrl = "https://www.ggcheckout.com/checkout/v4/Z8YoalNwP9YZYRDCZq0e"

  const redirectToCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const url = buildCheckoutURL(checkoutUrl)
    window.location.href = url
  }

  return (
    <section id="offer-section" className="py-8 sm:py-10 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-[hsl(220,20%,5%)] overflow-hidden">

      <div className="max-w-sm sm:max-w-md lg:max-w-2xl mx-auto">
        <div className="bg-[hsl(220,20%,10%)] text-foreground rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10 lg:p-12 border-2 border-primary/50 relative w-full shadow-[0_0_5px_hsl(45_90%_50%),0_0_10px_hsl(45_90%_50%),0_0_15px_hsl(45_90%_50%)]">

          {/* Seção: Acesso ao APP */}
          <div className="text-center mb-4 sm:mb-5 md:mb-8 lg:mb-10">
            <p className="font-[family-name:var(--font-display)] font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 md:mb-4 text-[rgba(30,255,0,1)] leading-tight">
              ACESSO AO APP COMPLETO
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-muted-foreground mb-3 md:mb-6 px-2">
              Acesso ao APP enviado por e-mail imediatamente após a compra.
            </p>
            <img
              src="/images/cinetube-logo-3d.png"
              alt="CineTube.IA Logo"
              className="mx-auto mb-3 md:mb-6 w-32 sm:w-40 md:w-48 lg:w-52 h-auto object-contain"
            />
          </div>

          {/* Seção: Você vai receber */}
          <div className="mb-4 sm:mb-5 md:mb-8 lg:mb-10">
            <h4 className="font-[family-name:var(--font-display)] text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 underline underline-offset-4">
              VOCÊ VAI RECEBER:
            </h4>
            <ul className="flex flex-col gap-3 sm:gap-4 text-xs sm:text-sm md:text-base">
              <li className="flex items-start gap-2 sm:gap-3 py-2 sm:py-3 border-b border-white/5">
                <span className="text-[rgba(30,255,0,1)] mt-0.5">📱</span>
                <div>
                  <span className="font-bold text-[rgba(30,255,0,1)]">App CineTube.IA</span>
                  <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm mt-1">Gera roteiros, cortes inteligentes e edição automática com IA. Tudo em um só app.</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 py-2 sm:py-3 border-b border-white/5">
                <span className="text-[rgba(30,255,0,1)] mt-0.5">🛡️</span>
                <div>
                  <span className="font-bold text-foreground">Guia Anti-Direitos Autorais</span>
                  <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm mt-1">Ensina como ajustar vídeos pra evitar bloqueios e manter monetização ativa.</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 py-2 sm:py-3 border-b border-white/5">
                <span className="text-[rgba(30,255,0,1)] mt-0.5">🎓</span>
                <div>
                  <span className="font-bold text-foreground">Acesso ao Treinamento Cine Tube Academy</span>
                  <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm mt-1">Passo a passo pra montar seu canal e começar a lucrar.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Seção: Bônus Exclusivos */}
          <div className="mb-4 sm:mb-5 md:mb-8 lg:mb-10 bg-[hsl(220,20%,8%)] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-primary/30">
            <h4 className="font-[family-name:var(--font-display)] text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-3 sm:mb-4 text-center">
              🎁 <span className="text-primary">Bônus Exclusivos</span>
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm md:text-base">
              <li className="flex items-center gap-2 sm:gap-3 py-1.5 sm:py-2 border-b border-white/5">
                <span className="text-primary">✦</span>
                Guia de Monetização em 7 Dias
              </li>
              <li className="flex items-center gap-2 sm:gap-3 py-1.5 sm:py-2 border-b border-white/5">
                <span className="text-primary">✦</span>
                Modelos prontos de thumbs e capas
              </li>
              <li className="flex items-center gap-2 sm:gap-3 py-1.5 sm:py-2 border-b border-white/5">
                <span className="text-primary">✦</span>
                Mini curso de Edição com IA
              </li>
              <li className="flex items-center gap-2 sm:gap-3 py-1.5 sm:py-2">
                <span className="text-primary">✦</span>
                Acesso ao grupo fechado de alunos
              </li>
            </ul>
          </div>

          {/* Seção: Preço */}
          <div className="text-center mb-4 sm:mb-5 md:mb-8 lg:mb-10">
            <p className="text-xs sm:text-sm md:text-base text-primary font-bold uppercase tracking-wider mb-2">💰 Investimento Único</p>
            <div className="text-xs sm:text-sm text-muted-foreground line-through tracking-wider mb-1">De R$ 197,00</div>
            <div className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-none mb-1 sm:mb-2">
              R$67
            </div>
            <div className="text-xs sm:text-sm md:text-base text-muted-foreground">ou 12x de R$ 6,81</div>
          </div>

          {/* Selos de confiança */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-center text-[10px] sm:text-xs md:text-sm lg:text-base text-muted-foreground mb-4 sm:mb-5 md:mb-8 lg:mb-10">
            <div className="flex flex-col items-center gap-1 sm:gap-2">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
              <span>Checkout Seguro</span>
            </div>
            <div className="flex flex-col items-center gap-1 sm:gap-2">
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
              <span>Satisfação Garantida</span>
            </div>
            <div className="flex flex-col items-center gap-1 sm:gap-2">
              <Lock className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
              <span>Privacidade Protegida</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 sm:mt-5 md:mt-8">
            <a
              href={buildCheckoutURL(checkoutUrl)}
              onClick={redirectToCheckout}
              className="block w-full py-3 sm:py-4 md:py-6 lg:py-8 text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-black rounded-md text-center hover:bg-green-500 transition-colors bg-[rgba(30,255,0,1)]"
            >
              GARANTA SUA VAGA AGORA!
            </a>
          </div>

          {/* Bandeiras de pagamento */}
          <div className="mt-4 sm:mt-5 md:mt-8 flex justify-center">
            <img
              src="/images/pagamento_v2.png"
              alt="Formas de Pagamento"
              className="w-full max-w-[500px] h-auto object-contain opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
