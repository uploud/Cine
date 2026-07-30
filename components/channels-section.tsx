import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

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
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto mb-10 sm:mb-14">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center">
            <p className="text-xs sm:text-sm text-primary font-semibold uppercase tracking-widest mb-3">
              Exemplos Reais
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Perfis Reais, Publicando com{" "}
              <span className="text-primary">Consistência</span>
            </h2>
          </div>
        </ScrollReveal>
      </div>

      {/* Infinite scrolling carousel */}
      <div className="relative">
        <div className="flex animate-scroll-channels">
          {/* First set */}
          {channels.map((channel, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-[240px] sm:w-[300px] md:w-[360px] lg:w-[400px] mx-2 sm:mx-3 group"
            >
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative aspect-video bg-slate-50 rounded-lg overflow-hidden border border-slate-200 group-hover:border-primary/30 group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                  <Image
                    src={channel.src || "/placeholder.svg"}
                    alt={`Perfil de exemplo ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </a>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {channels.map((channel, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-[240px] sm:w-[300px] md:w-[360px] lg:w-[400px] mx-2 sm:mx-3 group"
            >
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative aspect-video bg-slate-50 rounded-lg overflow-hidden border border-slate-200 group-hover:border-primary/30 group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                  <Image
                    src={channel.src || "/placeholder.svg"}
                    alt={`Perfil de exemplo ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}
