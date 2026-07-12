import { Instagram } from "lucide-react"

const VerifiedBadge = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 2 12.8727 3.39344 14.3986 3.65582C15.9246 3.91819 16.9942 5.25052 17.5758 6.6433C18.1575 8.03607 19.8009 8.68114 20.6974 9.87856C21.5938 11.076 21.3653 12.7533 21.3653 12.7533C21.3653 12.7533 21.5938 14.4307 20.6974 15.6281C19.8009 16.8255 18.1575 17.4706 17.5758 18.8634C16.9942 20.2561 15.9246 21.5885 14.3986 21.8508C12.8727 22.1132 12 23.5066 12 23.5066C12 23.5066 11.1273 22.1132 9.60136 21.8508C8.07542 21.5885 7.00578 20.2561 6.42416 18.8634C5.84255 17.4706 4.19914 16.8255 3.30263 15.6281C2.40612 14.4307 2.63467 12.7533 2.63467 12.7533C2.63467 12.7533 2.40612 11.076 3.30263 9.87856C4.19914 8.68114 5.84255 8.03607 6.42416 6.6433C7.00578 5.25052 8.07542 3.91819 9.60136 3.65582C11.1273 3.39344 12 2 12 2Z" fill="#0095F6"/>
    <path d="M10.1989 15.7001L6.75879 12.26L8.17301 10.8458L10.1989 12.8717L15.8557 7.21484L17.27 8.62905L10.1989 15.7001Z" fill="white"/>
  </svg>
)

export function AgencyBadge() {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-8 bg-background flex justify-center">
      <div className="max-w-4xl w-full rounded-3xl border border-gray-200 bg-white p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-xl">
        {/* Imagem / Logo da Agência */}
        <div className="relative shrink-0">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-gray-100 bg-white flex items-center justify-center shadow-lg relative z-10 p-2 sm:p-4">
            <img src="/logo.png" alt="Wintube Logo" className="w-full h-auto object-contain scale-110" />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 z-20 shadow-sm overflow-hidden">
            <img src="https://i.imgur.com/AKafc3U.gif" alt="Badge" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
          </div>
        </div>

        {/* Conteúdo e Texto */}
        <div className="text-center md:text-left flex-1">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            Você está comprando um produto produzido pela <span className="text-[#0095f6]">Wintube</span>
            <VerifiedBadge className="inline-block w-6 h-6 sm:w-8 sm:h-8 ml-1.5 -mt-1" />
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
            <strong className="text-gray-900 font-semibold">Sua segurança e seus direitos estão 100% garantidos.</strong> Somos uma agência real, com rosto e reputação — não um anúncio fantasma.
          </p>
          <a
            href="https://www.instagram.com/wintube.oficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-pink-500/25"
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
