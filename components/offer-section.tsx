import React from "react"
import { Check } from "lucide-react"

const INSTAGRAM_URL = "https://www.instagram.com/wiskills.com.br/"

type Offer = {
  image: string
  imageClassName: string
  title: string
  subtitle: string
  tagline?: string
  intro?: string
  items: React.ReactNode[]
  oldPrice: string
  price: string
  installments: string
  checkoutUrl: string
}

const offers: Offer[] = [
  {
    image: "https://i.imgur.com/EYAnXYO.png",
    imageClassName: "h-32 sm:h-40 w-auto mx-auto object-contain",
    title: "Combo Completo",
    subtitle: "3 skills + tudo incluso",
    items: [
      "As 3 skills: WinTube, ClipCash e StickReel.",
      "Editor IA de corte e legenda + Assistente IA.",
      "Treinamento WinTube Academy.",
      "Vídeos ilimitados + Grupo Networking VIP.",
      "Guia Anti-Direitos Autorais.",
      "+ Todos os 4 bônus exclusivos.",
    ],
    oldPrice: "197,00",
    price: "57,97",
    installments: "6x de R$ 10,62",
    checkoutUrl: "https://checkout.wiven.com.br/checkout/cmtrt95b805rc01ptbzpxkqit?offer=GF3QPZE",
  },
  {
    image: "/wiskills-logo.png",
    imageClassName: "h-32 w-32 sm:h-40 sm:w-40 mx-auto object-cover rounded-2xl",
    title: "Combo Completo",
    subtitle: "9 ferramentas + tudo incluso",
    tagline: "acesso vitalício · pagamento único · sem mensalidade",
    intro: "As 9 ferramentas, uma por uma:",
    items: [
      <><strong>WinTube</strong> — vídeo narrado no YouTube, sem aparecer e sem gravar a sua voz.</>,
      <><strong>ClipCash</strong> — cole o link do vídeo longo e receba os cortes prontos e legendados.</>,
      <><strong>Vendas TikTok Shop</strong> — vídeo do produto com roteiro de venda e legenda no tempo da fala.</>,
      <><strong>WiAfiliados</strong> — cole o link do produto e receba o vídeo pra Shopee, Shein, Amazon ou Mercado Livre.</>,
      <><strong>StickReel</strong> — histórias com bonecos palito, sem rosto e sem gravar voz.</>,
      <><strong>Carrossel IA</strong> — escreva o tema e receba os slides prontos pra postar no Instagram.</>,
      <><strong>Narração</strong> — seu texto virando narração com voz de IA, sem contratar locutor.</>,
      <><strong>wiTHUMBVIRAL</strong> — a capa que faz a pessoa parar de rolar e clicar no vídeo.</>,
      <><strong>WiFive Bordas</strong> — sua moldura, logo e @ em dezenas de cortes de uma vez.</>,
      "Funciona no celular e no computador — Android, iPhone, Windows e Mac.",
      "Editor IA de corte e legenda + Assistente IA.",
      "Treinamento WiSkills Academy.",
      "Vídeos ilimitados + Grupo Networking VIP.",
      "Guia Anti-Direitos Autorais.",
      "+ Todos os 4 bônus exclusivos.",
    ],
    oldPrice: "397,00",
    price: "127,90",
    installments: "6x de R$ 23,43",
    checkoutUrl: "https://checkout.wiven.com.br/checkout/cmuols75d01ta01ptdzosu1k2?offer=1DDU3EJ",
  },
]

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <div className="w-full max-w-[560px] bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 relative flex flex-col z-10 text-slate-900 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">

      <div className="text-center mb-8">
        <div className="mb-6 pt-2">
          <img src={offer.image} alt={offer.title} className={offer.imageClassName} />
        </div>
        <h3 className="font-mono text-2xl font-black uppercase text-slate-900">{offer.title}</h3>
        <p className="text-sm text-[#4C8DF7] mt-1 font-black uppercase">
          {offer.subtitle}
        </p>
        {offer.tagline && (
          <p className="text-xs text-slate-500 mt-2 font-medium">{offer.tagline}</p>
        )}
      </div>

      <div className="space-y-4 mb-8 bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6">
        {offer.intro && (
          <p className="font-black text-slate-900 text-[15px] uppercase">{offer.intro}</p>
        )}
        {offer.items.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-500 shrink-0" strokeWidth={3} />
            <span className="font-bold text-slate-900 text-[15px]">{item}</span>
          </div>
        ))}
      </div>

      {/* Price Section */}
      <div className="text-center mb-8 mt-auto">
        <div className="text-slate-500 text-[15px] line-through mb-1">
          De R$ {offer.oldPrice} por apenas
        </div>
        <div className="text-green-500 font-black tracking-tighter leading-none mb-3 flex justify-center items-start">
          <span className="text-[2.5rem] mt-3 mr-1">R$</span>
          <span className="text-[6.5rem] leading-[0.85]">{offer.price}</span>
        </div>
        <div className="text-slate-500 text-[16px] font-medium mt-4">
          ou em até {offer.installments}
        </div>
      </div>

      {/* Checkout Button */}
      <a
        href={offer.checkoutUrl}
        className="block w-full text-center bg-green-500 text-white font-black text-[22px] py-4 rounded-xl shadow-[0_10px_30px_-10px_rgba(34,197,94,0.4)] hover:bg-green-600 hover:-translate-y-1 transition-all active:scale-[0.98]"
      >
        COMEÇAR AGORA
      </a>
      <img
        src="/selos-compra-segura.png"
        alt="Compra Segura · Satisfação Garantida · Privacidade Protegida"
        className="w-full h-auto mt-5 opacity-80"
      />
      <div className="mt-6 text-center">
        <img src="/wiskills-logo.png" alt="WiSkills" className="h-10 w-10 rounded-full object-cover mx-auto mb-3" />
        <div className="text-sm font-medium text-slate-500 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <Check className="w-4 h-4 text-green-500" /> Você está comprando de uma empresa real.
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-[#4C8DF7] hover:underline">
            @wiskills.com.br
          </a>
        </div>
      </div>

    </div>
  )
}

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

      <div className="w-full max-w-[1160px] flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8">
        {offers.map((offer) => (
          <OfferCard key={offer.checkoutUrl} offer={offer} />
        ))}
      </div>
    </section>
  )
}
