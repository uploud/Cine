import { Instagram } from "lucide-react"

export function AgencyBadge() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 bg-background flex justify-center border-b border-border">
      <div className="max-w-4xl w-full rounded-2xl border border-border bg-card p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-10">
        {/* Logo */}
        <div className="relative shrink-0">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-border bg-background flex items-center justify-center p-4">
            <img src="/logo.png" alt="Wintube Logo" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Conteúdo */}
        <div className="text-center md:text-left flex-1">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-tight flex items-center justify-center md:justify-start flex-wrap gap-1.5">
            Produto produzido pela <span className="text-primary">Wintube</span>
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto md:mx-0">
            <strong className="text-foreground font-semibold">Sua segurança e seus direitos estão 100% garantidos.</strong> Somos uma empresa real, com rosto e reputação.
          </p>
          <a
            href="https://www.instagram.com/wintube.oficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:-translate-y-0.5 duration-300 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 shadow-lg"
          >
            <Instagram className="w-5 h-5" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
