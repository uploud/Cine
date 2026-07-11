import { CheckCircle2, Instagram } from "lucide-react"

export function AgencyBadge() {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-8 bg-background flex justify-center">
      <div className="max-w-4xl w-full rounded-3xl border border-primary/20 bg-[#0d0d12] p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
        {/* Imagem / Logo da Agência */}
        <div className="relative shrink-0">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-[#1a1a24] bg-gradient-to-b from-[#1a1a24] to-[#0a0a0f] flex items-center justify-center shadow-2xl relative z-10">
            <div className="text-center flex flex-col items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#d4af37] mb-1 opacity-80">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="block font-bold text-3xl sm:text-4xl leading-none tracking-tighter" style={{ fontFamily: 'var(--font-display)', background: 'linear-gradient(to bottom, #f3d785, #b8860b)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                Wintube
              </span>
            </div>
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
