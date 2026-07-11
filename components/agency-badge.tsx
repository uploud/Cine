import { CheckCircle2, Instagram } from "lucide-react"

export function AgencyBadge() {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-8 bg-background flex justify-center">
      <div className="max-w-4xl w-full rounded-3xl border border-primary/20 bg-[#0d0d12] p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
        {/* Imagem / Logo da Agência */}
        <div className="relative shrink-0">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-[#1a1a24] bg-white flex items-center justify-center shadow-2xl relative z-10 p-2 sm:p-4">
            <img src="/logo.png" alt="Wintube Logo" className="w-full h-auto object-contain scale-110" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#0095f6] rounded-full p-1 border-4 border-[#0d0d12] z-20">
            <CheckCircle2 className="w-6 h-6 text-white fill-current" />
          </div>
        </div>

        {/* Conteúdo e Texto */}
        <div className="text-center md:text-left flex-1">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 leading-tight">
            Você está comprando um produto produzido pela <span className="text-[#a855f7]">Wintube</span>
            <CheckCircle2 className="inline-block w-6 h-6 ml-2 text-[#0095f6] fill-current -mt-1" />
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
            <strong className="text-white font-semibold">Sua segurança e seus direitos estão 100% garantidos.</strong> Somos uma agência real, com rosto e reputação — não um anúncio fantasma.
          </p>
          <a
            href="https://www.instagram.com/wintube.oficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/25"
            style={{
              background: 'linear-gradient(90deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
            }}
          >
            <Instagram className="w-5 h-5" />
            Seguir a Wintube no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
