import { Instagram } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AgencyBadge() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 md:p-10">
            {/* Logo */}
            <div className="relative flex-shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-slate-200 bg-white flex items-center justify-center p-4">
                <img src="/logo.png" alt="WinTube Logo" className="w-full h-auto object-contain" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm overflow-hidden">
                <img
                  src="https://i.imgur.com/AKafc3U.gif"
                  alt="Verificado"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left flex-1">
              <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-tight">
                Você está comprando um produto produzido pela{" "}
                <span className="text-primary">Wintube</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                Somos uma empresa real, com rosto e reputação — não um anúncio fantasma.
              </p>
              <a
                href="https://www.instagram.com/wintube.oficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white text-sm transition-all hover:opacity-90 active:scale-[0.98]"
                style={{
                  background: "linear-gradient(90deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)"
                }}
              >
                <Instagram className="w-4 h-4" />
                @wintube.oficial
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
