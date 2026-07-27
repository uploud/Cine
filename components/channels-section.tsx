
import Image from "next/image"

const channels = [
  {
    src: "https://i.imgur.com/IIWh8XN.png",
    href: "https://www.youtube.com/@tulioproducoes",
  },
  {
    src: "https://i.imgur.com/0fWerxK.png",
    href: "https://www.youtube.com/@tulioproducoes",
  },
  {
    src: "https://i.imgur.com/G1KCaG0.png",
    href: "https://www.youtube.com/@tulioproducoes",
  },
  {
    src: "https://i.imgur.com/g2eNmpM.jpeg",
    href: "https://www.youtube.com/@tulioproducoes",
  },
  {
    src: "https://i.imgur.com/TrUNy3d.png",
    href: "https://www.youtube.com/@tulioproducoes",
  },
  {
    src: "https://i.imgur.com/jQgti8k.png",
    href: "https://www.youtube.com/@tulioproducoes",
  },
]

export function ChannelsSection() {
  return (
    <section id="exemplos" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-12 md:mb-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
            <span className="font-semibold text-xs tracking-wider text-primary uppercase">Exemplos Reais</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight px-2">
            Gere Vídeos Únicos e Inéditos<br />
            <span className="text-primary">de Forma Simples e Automática</span>
          </h2>
        </div>
      </div>

      {/* Infinite scrolling carousel */}
      <div className="relative">
        <div className="flex animate-scroll-channels">
          {/* First set */}
          {channels.map((channel, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-[220px] sm:w-[280px] md:w-[350px] lg:w-[400px] mx-2 sm:mx-3 group"
            >
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative aspect-video bg-slate-50 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 group-hover:border-primary/30 group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <Image
                    src={channel.src || "/placeholder.svg"}
                    alt={`Canal ${index + 1}`}
                    fill
                    className="object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            </div>
          ))}
          {/* Duplicate set for loop */}
          {channels.map((channel, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-[220px] sm:w-[280px] md:w-[350px] lg:w-[400px] mx-2 sm:mx-3 group"
            >
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative aspect-video bg-slate-50 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 group-hover:border-primary/30 group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <Image
                    src={channel.src || "/placeholder.svg"}
                    alt={`Canal ${index + 1}`}
                    fill
                    className="object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>

    </section>
  )
}
