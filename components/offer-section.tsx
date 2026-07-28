"use client"

import type React from "react"
import { Shield, ShoppingBag, Lock, Smartphone, GraduationCap, Infinity, CreditCard, MessageCircle, Sparkles, Check } from "lucide-react"
import Image from "next/image"
import { buildCheckoutURL } from "@/lib/url-params"



export function OfferSection() {
  const checkoutUrl = "https://pay.kiwify.com.br/yTa2MmY"

  const redirectToCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const url = buildCheckoutURL(checkoutUrl)
    window.location.href = url
  }

  return (
    <section id="offer-section" className="py-8 sm:py-10 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-sm sm:max-w-md lg:max-w-3xl mx-auto">
        
        {/* Título do Vídeo */}
        <div className="text-center mb-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight uppercase text-foreground">
            Depoimento de <span className="text-primary">Direitos Autorais</span> com o Sistema da Wintube
          </h2>
        </div>

        {/* Vídeo */}
        <div className="relative group mb-8 sm:mb-12">
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
          <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
            <video
              src="https://i.imgur.com/au0aAsj.mp4"
              controls
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border border-slate-200 relative w-full shadow-xl">

          {/* Seção: Acesso ao APP */}
          <div className="text-center mb-4 sm:mb-5 md:mb-8 lg:mb-10">
            <p className="font-[family-name:var(--font-display)] font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 md:mb-4 text-primary leading-tight">
              ACESSO AO APP COMPLETO
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-muted-foreground mb-3 md:mb-6 px-2">
              Acesso ao APP enviado por e-mail imediatamente após a compra.
            </p>
            <img
              src="/logo.png"
              alt="Wintube Logo"
              className="mx-auto mb-3 md:mb-6 w-32 sm:w-40 md:w-48 lg:w-52 h-auto object-contain"
            />
          </div>

          {/* Seção: Você vai receber */}
          <div className="mb-4 sm:mb-5 md:mb-8 lg:mb-10">
            <h4 className="font-[family-name:var(--font-display)] text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 underline underline-offset-4">
              VOCÊ VAI RECEBER:
            </h4>
            <ul className="flex flex-col gap-4 text-sm sm:text-base">
              <li className="flex items-start gap-3 py-3 border-b border-slate-100">
                <Smartphone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <span className="font-bold text-primary">App WinTube</span>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">Gera roteiros, cortes inteligentes e edição automática com IA. Tudo em um só app.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 py-3 border-b border-slate-100">
                <Shield className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Guia Anti-Direitos Autorais</span>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">Ensina como criar conteúdos mais originais, reduzir problemas comuns de copyright e manter boas práticas para monetização.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 py-3 border-b border-slate-100">
                <GraduationCap className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Acesso ao Treinamento WinTube Academy</span>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">Passo a passo para montar seu canal e começar a crescer.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 py-3 border-b border-slate-100">
                <Infinity className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Vídeos Ilimitados</span>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">Crie quantos vídeos quiser, sem limite de uso e sem compra de créditos.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 py-3 border-b border-slate-100">
                <CreditCard className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Sem Mensalidade</span>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">Pagamento único para acessar o aplicativo e seus recursos, sem cobranças mensais.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 py-3 border-b border-slate-100">
                <MessageCircle className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Suporte Especializado</span>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">Conte com uma equipe pronta para ajudar sempre que precisar.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Seção: Bônus Exclusivos */}
          <div className="mb-4 sm:mb-5 md:mb-8 lg:mb-10 bg-slate-50 rounded-lg p-4 md:p-6 border border-slate-200">
            <h4 className="font-[family-name:var(--font-display)] text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-4 text-center flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" /> Bônus Exclusivos
            </h4>
            <ul className="flex flex-col gap-2 text-sm md:text-base text-slate-700">
              <li className="flex items-center gap-3 py-2 border-b border-slate-100">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                Guia de Monetização em 7 Dias
              </li>
              <li className="flex items-center gap-3 py-2 border-b border-slate-100">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                Modelos prontos de thumbs e capas
              </li>
              <li className="flex items-center gap-3 py-2 border-b border-slate-100">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                Mini curso de Edição com IA
              </li>
              <li className="flex items-center gap-3 py-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                Acesso ao grupo fechado de alunos
              </li>
            </ul>
          </div>

          {/* Seção: Preço */}
          <div className="text-center mb-4 sm:mb-5 md:mb-8 lg:mb-10">
            <p className="text-xs sm:text-sm md:text-base text-green-500 font-bold uppercase tracking-wider mb-2">💰 Investimento Único</p>
            <div className="text-xs sm:text-sm text-muted-foreground line-through tracking-wider mb-1">De R$ 197,00</div>
            <div className="font-[family-name:var(--font-display)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-primary tracking-tight mb-2">
              R$ 57,97
            </div>
            <div className="text-xs sm:text-sm md:text-base text-muted-foreground">ou 12x de R$ 5,82</div>
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
          <div className="mt-6 md:mt-8">
            <a
              href={buildCheckoutURL(checkoutUrl)}
              onClick={redirectToCheckout}
              className="block w-full py-4 md:py-5 text-lg md:text-xl font-semibold text-white rounded-xl text-center bg-primary hover:bg-blue-600 shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
            >
              COMEÇAR AGORA
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
