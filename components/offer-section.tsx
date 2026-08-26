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

          <div className="text-center mb-8 mt-2">
            <img
              src="https://i.imgur.com/1voWNXD.png"
              alt="Combo Completo"
              className="h-28 sm:h-36 object-contain mx-auto mb-4"
            />
            <p className="text-sm text-[#4C8DF7] mt-1 font-black uppercase">
              3 apps + tudo incluso
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div className="font-black text-slate-900 flex items-center gap-2 mb-1">
                <span className="bg-[#4C8DF7] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">1</span>
                App WinTube
              </div>
              <p className="text-xs text-slate-600 mb-1">Criação de vídeos de filmes, séries e animes.</p>
              <p className="text-xs text-green-600 font-bold flex items-center gap-1">
                <Check className="w-3 h-3" /> Tudo no automático, sem limites!
              </p>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div className="font-black text-slate-900 flex items-center gap-2 mb-1">
                <span className="bg-[#4C8DF7] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">2</span>
                App ClipCash
              </div>
              <p className="text-xs text-slate-600 mb-1">Crie dezenas de cortes virais em segundos.</p>
              <p className="text-xs text-green-600 font-bold flex items-center gap-1">
                <Check className="w-3 h-3" /> Tudo no automático, sem limites!
              </p>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div className="font-black text-slate-900 flex items-center gap-2 mb-1">
                <span className="bg-[#4C8DF7] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">3</span>
                App StickReel
              </div>
              <p className="text-xs text-slate-600 mb-1">Transforme qualquer ideia em um vídeo com bonecos palito sem rosto em minutos.</p>
              <p className="text-xs text-green-600 font-bold flex items-center gap-1">
                <Check className="w-3 h-3" /> Tudo no automático, sem limites!
              </p>
            </div>
          </div>

          <div className="space-y-5 mb-8">
            <div className="flex items-start gap-3.5">
              <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" strokeWidth={3} />
              <div>
                <span className="font-bold text-slate-900 block text-base leading-tight">Guia Anti-Direitos Autorais</span>
                <span className="text-slate-600 text-[14px] block mt-1 leading-relaxed">Ensina como ajustar vídeos pra evitar bloqueios e manter monetização ativa.</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" strokeWidth={3} />
              <div>
                <span className="font-bold text-slate-900 block text-base leading-tight">Acesso ao Treinamento Wintube Academy</span>
                <span className="text-slate-600 text-[14px] block mt-1 leading-relaxed">Passo a passo pra montar seu canal e começar a lucrar.</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" strokeWidth={3} />
              <div>
                <span className="font-bold text-slate-900 block text-base leading-tight">Grupo WinTube Networking VIP</span>
              </div>
            </div>
          </div>

          {/* Bonus Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-7 mb-10">
            <h3 className="text-slate-900 text-[1.35rem] font-bold mb-6 flex items-center gap-2.5">
              <span className="text-2xl">🎁</span> Bônus Exclusivos
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-green-500 shrink-0" strokeWidth={3} />
                <span className="text-slate-700 text-[15px]">Guia de Monetização em 7 Dias</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-green-500 shrink-0" strokeWidth={3} />
                <span className="text-slate-700 text-[15px]">Modelos prontos de títulos e capas</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-green-500 shrink-0" strokeWidth={3} />
                <span className="text-slate-700 text-[15px]">Mini curso de Edição com IA</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-green-500 shrink-0" strokeWidth={3} />
                <span className="text-slate-700 text-[15px]">Acesso ao grupo fechado de alunos</span>
              </li>
            </ul>
          </div>

          {/* Price Section */}
          <div className="text-center mb-8">
            <div className="text-slate-500 font-bold text-[17px] mb-3 flex items-center justify-center gap-2 uppercase tracking-wide">
              <span className="text-xl">💰</span> INVESTIMENTO ÚNICO:
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
            QUERO GARANTIR MEU ACESSO
          </a>

        </div>

      </div>
    </section>
  )
}

