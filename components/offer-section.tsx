import React from "react"
import { 
  Smartphone, 
  LifeBuoy, 
  GraduationCap, 
  Infinity as InfinityIcon, 
  CreditCard, 
  MessageCircle, 
  Sparkles, 
  Check, 
  Shield, 
  ShoppingBag, 
  Lock 
} from "lucide-react"

const CHECKOUT_URL = "https://pay.kiwify.com.br/yTa2MmY"

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

      <div className="w-full max-w-[600px] bg-white rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.05)] border border-slate-100 p-6 sm:p-10 md:p-12 relative overflow-hidden">
        {/* Top accent */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)]" />

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-[1.75rem] md:text-4xl font-black text-slate-900 uppercase tracking-tight leading-tight">
            Acesso Vitalício ao <br/> <span className="text-[#4C8DF7]">APP Completo</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
            Acesso imediato e vitalício, com todas as atualizações inclusas.
          </p>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img 
            src="https://i.imgur.com/tqVJPWa.png" 
            alt="WinTube" 
            className="h-14 sm:h-16 object-contain"
          />
        </div>

        {/* List Header */}
        <h3 className="font-black text-lg md:text-xl text-slate-900 uppercase mb-6 text-center">
          VOCÊ VAI RECEBER:
        </h3>

        {/* Features List */}
        <ul className="space-y-4 mb-10 text-slate-700 font-medium">
          <li className="flex items-center gap-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={3} />
            <span>Acesso completo pra baixar e transcrever.</span>
          </li>
          <li className="flex items-center gap-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={3} />
            <span>Editor IA de corte e legenda.</span>
          </li>
          <li className="flex items-center gap-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={3} />
            <span>Ferramentas de roteiro.</span>
          </li>
          <li className="flex items-center gap-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={3} />
            <span>Treinamento Passo a Passo WinTube Academy.</span>
          </li>
          <li className="flex items-center gap-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={3} />
            <span>Guia Anti-Direitos Autorais.</span>
          </li>
          <li className="flex items-center gap-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={3} />
            <span>+ Todos os 4 bônus exclusivos.</span>
          </li>
        </ul>

        {/* Price Section */}
        <div className="text-center bg-slate-50 rounded-2xl p-6 border border-slate-200 mt-8 mb-8">
          <div className="text-slate-500 line-through text-sm font-bold mb-1">
            Preço normal: R$ 197,00
          </div>
          <div className="text-slate-600 font-bold mb-1">
            Por apenas
          </div>
          <div className="flex justify-center items-start text-[#4C8DF7] font-black tracking-tighter leading-none mb-2">
            <span className="text-4xl md:text-5xl mt-1 mr-1 text-slate-700">R$</span>
            <span className="text-[4rem] md:text-[5rem]">57,97</span>
          </div>
          <div className="text-slate-500 text-sm font-bold mt-2">
            ou 6x de R$ 10,61 no cartão
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href={CHECKOUT_URL} 
          className="block w-full text-center bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)] text-white font-black text-lg py-5 rounded-xl shadow-[0_10px_30px_-14px_rgba(76,141,247,0.9)] hover:opacity-90 hover:-translate-y-0.5 transition-all active:scale-[0.98]"
        >
          QUERO GARANTIR MEU ACESSO COM DESCONTO
        </a>
        
        {/* Guarantee */}
        <div className="text-center mt-6 flex flex-col items-center gap-2">
          <div className="flex gap-1 justify-center">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs sm:text-sm text-slate-500 font-medium">Garantia de 7 dias incluída</span>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center mt-8">
          <div className="flex flex-col items-center gap-2">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" strokeWidth={1.5} />
            <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Checkout Seguro</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10 text-[#4C8DF7]" strokeWidth={1.5} />
            <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Satisfação Garantida</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-slate-700" strokeWidth={1.5} />
            <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Privacidade Protegida</span>
          </div>
        </div>

      </div>
    </section>
  )
}
