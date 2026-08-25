import React from "react"
import { 
  Check, 
  Shield, 
  ShoppingBag, 
  Lock 
} from "lucide-react"

export function OfferSection() {
  return (
    <section id="oferta" className="bg-white py-16 sm:py-20 px-4 sm:px-6 flex flex-col items-center">
      
      {/* Video VSL */}
      <div className="w-full max-w-[800px] rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-200 mb-12 bg-black">
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

      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row gap-8 lg:gap-6 justify-center items-stretch mt-4">
        
        {/* Offer 1: WinTube Essencial */}
        <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.05)] border border-slate-200 p-6 sm:p-8 relative overflow-hidden flex flex-col">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-300" />
          
          <div className="text-center mb-6">
            <img 
              src="https://i.imgur.com/BFzt6aJ.png" 
              alt="WinTube" 
              className="h-24 sm:h-32 object-contain mx-auto mb-4"
            />
            <p className="text-sm text-slate-500 font-black uppercase tracking-wider">
              O essencial pra começar
            </p>
          </div>

          <div className="flex-grow">
            <ul className="space-y-5 text-slate-700 font-medium text-left mb-8">
              
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                <div className="font-black text-slate-900 flex items-center gap-2 mb-1">
                  App WinTube
                </div>
                <p className="text-xs text-slate-600 mb-1">Criação de vídeos de filmes, séries e animes.</p>
                <p className="text-xs text-green-600 font-bold flex items-center gap-1">
                  <Check className="w-3 h-3" /> Tudo no automático, sem limites!
                </p>
              </div>

              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={3} />
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Legendas Animadas</span>
                  <span className="text-xs text-slate-600 block mt-0.5">Palavra por palavra, sincronizadas automaticamente.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={3} />
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Guia de Postagem Segura</span>
                  <span className="text-xs text-slate-600 block mt-0.5">Boas práticas pra manter seu canal saudável em qualquer plataforma.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-sm mt-0.5">Treinamento passo a passo WinTube Academy.</span>
              </li>

              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-sm mt-0.5">Guia Anti-Direitos Autorais.</span>
              </li>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-black text-slate-900 uppercase mb-3 flex items-center gap-2 text-sm">
                  <span className="text-lg">🎁</span> Bônus Exclusivos
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" strokeWidth={3} />
                    <span className="text-xs font-bold text-slate-800">Guia de Monetização em 7 Dias</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" strokeWidth={3} />
                    <span className="text-xs font-bold text-slate-800">Modelos prontos de títulos e capas</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" strokeWidth={3} />
                    <span className="text-xs font-bold text-slate-800">Mini curso de Edição com IA</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" strokeWidth={3} />
                    <span className="text-xs font-bold text-slate-800">+ Todos os 4 bônus exclusivos.</span>
                  </li>
                </ul>
              </div>
            </ul>
          </div>

          {/* Price Section */}
          <div className="text-center bg-slate-50 rounded-xl p-5 border border-slate-200 mb-6 mt-auto">
            <div className="text-slate-600 font-bold mb-1">Por apenas</div>
            <div className="flex justify-center items-start text-slate-900 font-black tracking-tighter leading-none mb-1">
              <span className="text-2xl mt-1 mr-1 text-slate-700">R$</span>
              <span className="text-[3.5rem] leading-[1]">19,90</span>
            </div>
            <div className="text-slate-500 text-sm font-bold mt-2">
              ou 6x no cartão
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href="https://pay.kiwify.com.br/OIejjFM" 
            className="block w-full text-center bg-slate-900 text-white font-black text-lg py-4 rounded-xl hover:bg-slate-800 hover:-translate-y-0.5 transition-all active:scale-[0.98]"
          >
            QUERO GARANTIR MEU ACESSO
          </a>

          {/* Guarantee & Trust Badges */}
          <div className="mt-6 border-t border-slate-100 pt-6">
            <div className="text-center mb-4">
              <span className="text-xs sm:text-sm text-slate-600 font-bold uppercase tracking-wider">Garantia de 7 dias</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="flex flex-col items-center gap-1.5">
                <Shield className="w-6 h-6 text-green-500" strokeWidth={2} />
                <span className="text-[10px] text-slate-500 font-medium">Checkout Seguro</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Check className="w-6 h-6 text-blue-500" strokeWidth={3} />
                <span className="text-[10px] text-slate-500 font-medium">Satisfação Garantida</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Lock className="w-6 h-6 text-slate-700" strokeWidth={2} />
                <span className="text-[10px] text-slate-500 font-medium">Privacidade Protegida</span>
              </div>
            </div>
          </div>
        </div>

        {/* Offer 2: Combo Completo */}
        <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-[0_10px_50px_rgba(76,141,247,0.15)] border-2 border-[#4C8DF7] p-6 sm:p-8 relative overflow-hidden flex flex-col lg:scale-[1.02] z-10">
          <div className="absolute top-0 left-0 w-full h-2 bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)]" />
          
          <div className="absolute top-0 right-8 bg-[#4C8DF7] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-b-lg">
            MAIS VENDIDO
          </div>

          <div className="text-center mb-6 mt-2">
            <img 
              src="https://i.imgur.com/1voWNXD.png" 
              alt="Combo Completo" 
              className="h-24 sm:h-32 object-contain mx-auto mb-4"
            />
            <p className="text-sm text-[#4C8DF7] mt-1 font-black uppercase">
              3 apps + tudo incluso
            </p>
          </div>

          <div className="flex-grow">
            {/* Apps */}
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

            <div className="font-black text-sm text-slate-900 uppercase mb-3 text-center">E ainda inclui:</div>
            
            <ul className="space-y-2.5 text-slate-700 font-medium text-left mb-6">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#4C8DF7] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-[13px]">Acesso completo pra baixar e transcrever.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#4C8DF7] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-[13px]">Editor IA de corte e legenda.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#4C8DF7] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-[13px]">Ferramentas de roteiro + Assistente IA.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#4C8DF7] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-[13px]">Treinamento passo a passo WinTube Academy.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#4C8DF7] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-[13px]">Vídeos ilimitados.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#4C8DF7] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-[13px]">Grupo WinTube Networking VIP.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#4C8DF7] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-[13px]">Guia Anti-Direitos Autorais.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#4C8DF7] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-[13px] font-bold">+ Todos os 4 bônus exclusivos.</span>
              </li>
            </ul>
          </div>

          {/* Price Section */}
          <div className="text-center bg-[#F4F8FF] rounded-xl p-5 border border-[#4C8DF7]/20 mb-6 mt-auto">
            <div className="text-slate-500 line-through text-xs font-bold mb-1">
              Preço normal: R$ 197,00
            </div>
            <div className="text-[#4C8DF7] font-bold mb-1">Por apenas</div>
            <div className="flex justify-center items-start text-slate-900 font-black tracking-tighter leading-none mb-1">
              <span className="text-2xl mt-1 mr-1 text-slate-700">R$</span>
              <span className="text-[3.5rem]">57,97</span>
            </div>
            <div className="text-slate-600 text-sm font-bold mt-2">
              ou 6x de R$ 10,61 no cartão
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href="https://pay.kiwify.com.br/yTa2MmY" 
            className="block w-full text-center bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)] text-white font-black text-lg py-4 rounded-xl shadow-[0_10px_30px_-14px_rgba(76,141,247,0.9)] hover:opacity-90 hover:-translate-y-0.5 transition-all active:scale-[0.98]"
          >
            QUERO GARANTIR COM DESCONTO
          </a>

          {/* Guarantee & Trust Badges */}
          <div className="mt-6 border-t border-slate-100 pt-6">
            <div className="text-center mb-4">
              <span className="text-xs sm:text-sm text-slate-600 font-bold uppercase tracking-wider">Garantia de 7 dias</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="flex flex-col items-center gap-1.5">
                <Shield className="w-6 h-6 text-green-500" strokeWidth={2} />
                <span className="text-[10px] text-slate-500 font-medium">Checkout Seguro</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Check className="w-6 h-6 text-[#4C8DF7]" strokeWidth={3} />
                <span className="text-[10px] text-slate-500 font-medium">Satisfação Garantida</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Lock className="w-6 h-6 text-slate-700" strokeWidth={2} />
                <span className="text-[10px] text-slate-500 font-medium">Privacidade Protegida</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

