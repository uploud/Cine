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
    <section id="offer-section" className="bg-white py-16 sm:py-20 px-4 sm:px-6 flex justify-center">
      <div className="w-full max-w-[600px] bg-white rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.05)] border border-slate-100 p-6 sm:p-10 md:p-12">
        
        {/* Video VSL */}
        <div className="w-full rounded-xl overflow-hidden shadow-md border border-slate-100 mb-8 bg-slate-100">
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

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-[1.75rem] md:text-4xl font-black text-[#00A3FF] uppercase tracking-tight leading-tight">
            ACESSO AO APP COMPLETO
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
            Acesso ao APP enviado por e-mail imediatamente após a compra.
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
        <h3 className="font-black text-lg md:text-xl text-slate-900 uppercase underline decoration-2 underline-offset-4 mb-8">
          VOCÊ VAI RECEBER:
        </h3>

        {/* Features List */}
        <ul className="space-y-8">
          <li className="flex items-start gap-4">
            <Smartphone className="w-6 h-6 text-[#00A3FF] flex-shrink-0 mt-0.5" strokeWidth={2} />
            <div>
              <h4 className="font-bold text-[#00A3FF]">App WinTube</h4>
              <p className="text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                Gera roteiros, cortes inteligentes e edição automática com IA. Tudo em um só app.
              </p>
            </div>
          </li>
          
          <li className="flex items-start gap-4">
            <LifeBuoy className="w-6 h-6 text-[#00A3FF] flex-shrink-0 mt-0.5" strokeWidth={2} />
            <div>
              <h4 className="font-bold text-slate-900">Guia Anti-Direitos Autorais</h4>
              <p className="text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                Ensina como criar conteúdos mais originais, reduzir problemas comuns de copyright e manter boas práticas para monetização.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <GraduationCap className="w-6 h-6 text-[#00A3FF] flex-shrink-0 mt-0.5" strokeWidth={2} />
            <div>
              <h4 className="font-bold text-slate-900">Acesso ao Treinamento WinTube Academy</h4>
              <p className="text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                Passo a passo para montar seu canal e começar a crescer.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <InfinityIcon className="w-6 h-6 text-[#00A3FF] flex-shrink-0 mt-0.5" strokeWidth={2} />
            <div>
              <h4 className="font-bold text-slate-900">Vídeos Ilimitados</h4>
              <p className="text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                Crie quantos vídeos quiser, sem limite de uso e sem compra de créditos.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <CreditCard className="w-6 h-6 text-[#00A3FF] flex-shrink-0 mt-0.5" strokeWidth={2} />
            <div>
              <h4 className="font-bold text-slate-900">Sem Mensalidade</h4>
              <p className="text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                Pagamento único para acessar o aplicativo e seus recursos, sem cobranças mensais.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <MessageCircle className="w-6 h-6 text-[#00A3FF] flex-shrink-0 mt-0.5" strokeWidth={2} />
            <div>
              <h4 className="font-bold text-slate-900">Suporte Especializado</h4>
              <p className="text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                Conte com uma equipe pronta para ajudar sempre que precisar.
              </p>
            </div>
          </li>
        </ul>

        {/* Bonus Box */}
        <div className="bg-slate-50 rounded-xl p-6 sm:p-8 mt-10 border border-slate-100">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-slate-800" />
            <h4 className="font-bold text-slate-900 text-lg">Bônus Exclusivos</h4>
          </div>
          <ul className="space-y-4">
            {[
              "Guia de Monetização em 7 Dias", 
              "Modelos prontos de thumbs e capas", 
              "Mini curso de Edição com IA", 
              "Acesso ao grupo fechado de alunos"
            ].map((bonus, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-slate-600 font-bold">
                <Check className="w-4 h-4 text-[#00A3FF] flex-shrink-0" strokeWidth={3} />
                {bonus}
              </li>
            ))}
          </ul>
        </div>

        {/* Price Section */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-1.5 text-emerald-500 font-black text-[13px] tracking-wide mb-2 uppercase">
            <span className="text-base">🔥</span> INVESTIMENTO ÚNICO
          </div>
          <div className="text-slate-400 line-through text-[13px] font-bold mb-1">
            De R$ 197,00
          </div>
          <div className="flex justify-center items-start text-[#00A3FF] font-black tracking-tighter leading-none mb-2">
            <span className="text-4xl md:text-5xl mt-2 mr-1">R$</span>
            <span className="text-[5rem] md:text-[6.5rem]">57,97</span>
          </div>
          <div className="text-slate-500 text-sm font-bold mt-4 md:mt-6">
            ou 12x de R$ 5,82
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center mt-10 mb-8">
          <div className="flex flex-col items-center gap-2">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-[#00A3FF]" strokeWidth={1.5} />
            <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Checkout Seguro</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10 text-[#00A3FF]" strokeWidth={1.5} />
            <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Satisfação Garantida</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-[#00A3FF]" strokeWidth={1.5} />
            <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Privacidade Protegida</span>
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href={CHECKOUT_URL} 
          className="block w-full text-center bg-[#00A3FF] text-white font-black text-lg py-5 rounded-lg shadow-[0_8px_20px_rgba(0,163,255,0.25)] hover:bg-[#0092E5] hover:-translate-y-0.5 transition-all active:scale-[0.98]"
        >
          COMEÇAR AGORA
        </a>

      </div>
    </section>
  )
}
