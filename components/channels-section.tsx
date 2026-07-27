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
    <section id="exemplos" className="py-12 md:py-16 bg-background overflow-hidden border-b border-border">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
          Canais que utilizam a nossa IA
        </p>
      </div>

      {/* Infinite scrolling carousel */}
      <div className="relative">
        <div className="flex animate-scroll-channels items-center">
          {/* First set */}
          {channels.map((channel, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-[180px] sm:w-[220px] md:w-[260px] mx-4 sm:mx-6 group"
            >
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 group-hover:border-primary/30 transition-all opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-y-1 duration-500">
                  <Image
                    src={channel.src || "/placeholder.svg"}
                    alt={`Canal ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </a>
            </div>
          ))}
          {/* Duplicate set for loop */}
          {channels.map((channel, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-[180px] sm:w-[220px] md:w-[260px] mx-4 sm:mx-6 group"
            >
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 group-hover:border-primary/30 transition-all opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-y-1 duration-500">
                  <Image
                    src={channel.src || "/placeholder.svg"}
                    alt={`Canal ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}
