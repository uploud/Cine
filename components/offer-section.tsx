import React from "react"
import { Check } from "lucide-react"

export function OfferSection() {
  return (
    <section id="oferta" className="bg-slate-50 py-16 sm:py-24 px-4 flex flex-col items-center font-sans">

      {/* Video VSL */}
      <div className="w-full max-w-[800px] rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-200 mb-12 sm:mb-16 bg-black">
        <video
          className="w-full h-auto aspect-video object-cover"
          src="https://i.imgur.com/ocfmi4m.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      </div>

      <div className="w-full max-w-[1100px] flex justify-center items-stretch">

        {/* Offer Card */}
        <div className="w-full max-w-[560px] bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 relative flex flex-col z-10 text-slate-900 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">

          <div className="text-center mb-8">
            <div className="-mx-8 sm:-mx-10 -mt-8 sm:-mt-10 mb-6 bg-slate-50/50 rounded-t-2xl overflow-hidden pt-6">
              <img
                src="https://i.imgur.com/H9WAA77.png"
                alt="Combo Completo"
                className="w-full h-auto mx-auto object-contain scale-105"
              />
            </div>
            <h3 className="font-mono text-2xl font-black uppercase text-slate-900">Combo Completo</h3>
            <p className="text-sm text-[#4C8DF7] mt-1 font-black uppercase">
              3 skills + tudo incluso
            </p>
          </div>

          <div className="space-y-4 mb-8 bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 shrink-0" strokeWidth={3} />
              <span className="font-bold text-slate-900 text-[15px]">As 3 skills: WinTube, ClipCash e StickReel.</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 shrink-0" strokeWidth={3} />
              <span className="font-bold text-slate-900 text-[15px]">Editor IA de corte e legenda + Assistente IA.</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 shrink-0" strokeWidth={3} />
              <span className="font-bold text-slate-900 text-[15px]">Treinamento WinTube Academy.</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 shrink-0" strokeWidth={3} />
              <span className="font-bold text-slate-900 text-[15px]">Vídeos ilimitados + Grupo Networking VIP.</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 shrink-0" strokeWidth={3} />
              <span className="font-bold text-slate-900 text-[15px]">Guia Anti-Direitos Autorais.</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 shrink-0" strokeWidth={3} />
              <span className="font-bold text-slate-900 text-[15px]">+ Todos os 4 bônus exclusivos.</span>
            </div>
          </div>

          {/* Price Section */}
          <div className="text-center mb-8">
            <div className="text-slate-500 text-[15px] line-through mb-1">
              De R$ 197,00 por apenas
            </div>
            <div className="text-green-500 font-black tracking-tighter leading-none mb-3 flex justify-center items-start">
              <span className="text-[2.5rem] mt-3 mr-1">R$</span>
              <span className="text-[6.5rem] leading-[0.85]">49,90</span>
            </div>
            <div className="text-slate-500 text-[16px] font-medium mt-4">
              ou em até 6x de R$ 9,14
            </div>
          </div>

          {/* Checkout Button */}
          <a
            href="https://pay.kiwify.com.br/yTa2MmY"
            className="block w-full text-center bg-green-500 text-white font-black text-[22px] py-4 rounded-xl shadow-[0_10px_30px_-10px_rgba(34,197,94,0.4)] hover:bg-green-600 hover:-translate-y-1 transition-all active:scale-[0.98]"
          >
            COMEÇAR AGORA
          </a>
          <div className="mt-6 text-center">
            <img src="https://i.imgur.com/39sWHu0.png" alt="WinTube" className="h-8 mx-auto mb-3 opacity-90" />
            <div className="text-sm font-medium text-slate-500 flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-green-500" /> Você está comprando de uma empresa real. @wintube.oficial
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

