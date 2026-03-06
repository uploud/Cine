"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Shield, ShoppingBag, Lock } from "lucide-react"
import Image from "next/image"
import { buildCheckoutURL } from "@/lib/url-params"

function ProgressBar() {
  const [progress, setProgress] = useState(0)
  const [displayProgress, setDisplayProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(97), 500)
    return () => clearTimeout(timer)
  }, [])

  // Sync display percentage with animated bar
  useEffect(() => {
    if (progress > 0) {
      const duration = 1000
      const steps = 60
      const increment = progress / steps
      const intervalTime = duration / steps

      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= progress) {
          setDisplayProgress(progress)
          clearInterval(timer)
        } else {
          setDisplayProgress(Math.floor(current))
        }
      }, intervalTime)
      return () => clearInterval(timer)
    }
  }, [progress])

  return (
    <div className="mb-4 sm:mb-5 md:mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs sm:text-sm font-bold text-foreground">VAGAS ILIMITADAS</span>
        <span className="text-xs sm:text-sm font-bold text-[rgba(30,255,0,1)]">{displayProgress}% JA PREENCHIDA</span>
      </div>
      <div className="w-full h-3 sm:h-4 bg-[hsl(220,20%,15%)] rounded-full overflow-hidden border border-white/10">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, rgba(30,255,0,1), rgba(30,255,0,0.7))",
            boxShadow: "0 0 10px rgba(30,255,0,0.5)",
          }}
        />
      </div>
      <p className="text-[10px] sm:text-xs text-muted-foreground mt-2 text-center">
        Para ter acesso <span className="text-[rgba(30,255,0,1)] font-bold">VITALICIO</span> garanta agora! Quando encher, o acesso passa a ser <span className="text-primary font-bold">mensal e anual</span>.
      </p>
    </div>
  )
}



export function OfferSection() {
  const checkoutUrl = "https://www.ggcheckout.com/checkout/v4/Z8YoalNwP9YZYRDCZq0e"

  const redirectToCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const url = buildCheckoutURL(checkoutUrl)
    window.location.href = url
  }

  return (
    <section id="offer-section" className="py-8 sm:py-10 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-[hsl(220,20%,5%)] overflow-hidden">
      <div className="max-w-sm sm:max-w-md lg:max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 lg:mb-16">
        <div className="rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/rd9ff7UV9gc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full aspect-video"
          />
        </div>
      </div>

      <div className="max-w-sm sm:max-w-md lg:max-w-2xl mx-auto">
        <div className="bg-[hsl(220,20%,10%)] text-foreground rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10 lg:p-12 border-2 border-primary/50 relative w-full shadow-[0_0_5px_hsl(45_90%_50%),0_0_10px_hsl(45_90%_50%),0_0_15px_hsl(45_90%_50%)]">
          <div className="text-center mb-4 sm:mb-5 md:mb-8 lg:mb-10">
            <p className="font-[family-name:var(--font-display)] font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 md:mb-4 text-[rgba(30,255,0,1)] leading-tight">
              ACESSO VITALICIO AO SISTEMA COMPLETO
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-muted-foreground mb-3 md:mb-6 px-2">
              Produto 100% digital  acesso enviado por e-mail imediatamente apos a compra.
            </p>
            <img
              src="/images/cinetube-logo-3d.png"
              alt="CineTube.IA Logo"
              className="mx-auto mb-3 md:mb-6 w-32 sm:w-40 md:w-48 lg:w-52 h-auto object-contain"
            />
          </div>

          <ProgressBar />

          <div className="mb-4 sm:mb-5 md:mb-8 lg:mb-10">
            <h4 className="font-[family-name:var(--font-display)] text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">
              CineTube.IA <span className="text-primary">Completo</span>
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm md:text-base border-t border-white/5">
              <li className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 border-b border-white/5">
                <span className="text-[rgba(30,255,0,1)]">&#10003;</span>
                Acesso completo a plataforma SaaS
              </li>
              <li className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 border-b border-white/5">
                <span className="text-[rgba(30,255,0,1)]">&#10003;</span>
                Cortes inteligentes com IA ilimitado
              </li>
              <li className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 border-b border-white/5">
                <span className="text-[rgba(30,255,0,1)]">&#10003;</span>
                Roteiro automatico para qualquer nicho
              </li>
              <li className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 border-b border-white/5">
                <span className="text-[rgba(30,255,0,1)]">&#10003;</span>
                Protecao anti-direitos autorais
              </li>
              <li className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 border-b border-white/5">
                <span className="text-[rgba(30,255,0,1)]">&#10003;</span>
                Area de membros + treinamentos
              </li>
              <li className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 border-b border-white/5">
                <span className="text-[rgba(30,255,0,1)]">&#10003;</span>
                4 bonus exclusivos
              </li>
              <li className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 border-b border-white/5">
                <span className="text-[rgba(30,255,0,1)]">&#10003;</span>
                Suporte prioritario
              </li>
            </ul>
          </div>

          <div className="text-center mb-4 sm:mb-5 md:mb-8 lg:mb-10">
            <div className="text-xs sm:text-sm text-muted-foreground line-through tracking-wider mb-1">De R$ 197,00</div>
            <div className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-none mb-1 sm:mb-2">
              R$77,80
            </div>
            <div className="text-xs sm:text-sm md:text-base text-muted-foreground">ou 12x de R$ 7,90</div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-center text-[10px] sm:text-xs md:text-sm lg:text-base text-muted-foreground mb-4 sm:mb-5 md:mb-8 lg:mb-10">
            <div className="flex flex-col items-center gap-1 sm:gap-2">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
              <span>Checkout Seguro</span>
            </div>
            <div className="flex flex-col items-center gap-1 sm:gap-2">
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
              <span>Satisfacao Garantida</span>
            </div>
            <div className="flex flex-col items-center gap-1 sm:gap-2">
              <Lock className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
              <span>Privacidade Protegida</span>
            </div>
          </div>

          <div className="mt-4 sm:mt-5 md:mt-8">
            <a
              href={buildCheckoutURL(checkoutUrl)}
              onClick={redirectToCheckout}
              className="block w-full py-3 sm:py-4 md:py-6 lg:py-8 text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-black rounded-md text-center hover:bg-green-500 transition-colors bg-[rgba(30,255,0,1)]"
            >
              GARANTA SUA VAGA AGORA!
            </a>
          </div>

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
