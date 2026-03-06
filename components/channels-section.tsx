
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
    <section id="exemplos" className="py-10 sm:py-12 md:py-16 lg:py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-12 mb-6 sm:mb-8 md:mb-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6">
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-primary uppercase">Exemplos</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold px-2">
            Alguns dos nossos <span className="text-primary">canais</span>
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
                <div className="relative aspect-video bg-[#111] rounded-lg sm:rounded-xl overflow-hidden border border-white/5 group-hover:border-primary/30 transition-all group-hover:scale-[1.02]">
                  <Image
                    src={channel.src || "/placeholder.svg"}
                    alt={`Canal ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
                <div className="relative aspect-video bg-[#111] rounded-lg sm:rounded-xl overflow-hidden border border-white/5 group-hover:border-primary/30 transition-all group-hover:scale-[1.02]">
                  <Image
                    src={channel.src || "/placeholder.svg"}
                    alt={`Canal ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      </div>

    </section>
  )
}
