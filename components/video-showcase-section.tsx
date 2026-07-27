import { ScrollReveal } from "@/components/scroll-reveal"

export function VideoShowcaseSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 bg-background overflow-hidden border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight uppercase tracking-tighter">
              SEUS VÍDEOS IRÃO FICAR <span className="text-primary">DESSE MESMO FORMATO</span>, <br />
              APENAS COM 1 APP E UM CLICK: <span className="text-primary">ASSIM</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center md:items-stretch">
          {/* Vídeo 1: Filme/Série */}
          <div className="w-full md:w-1/3 max-w-[450px]">
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-primary/20 bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/lcJ8BVEo15U"
                  title="YouTube video player 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Vídeo 2: Desenho/Animação */}
          <div className="w-full md:w-1/3 max-w-[450px]">
            <ScrollReveal animation="fade-up" delay={400}>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-primary/20 bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/MAZ0mWdoUYI"
                  title="YouTube video player 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Vídeo 3: Anime */}
          <div className="w-full md:w-1/3 max-w-[450px]">
            <ScrollReveal animation="fade-up" delay={600}>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-primary/20 bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/ANnHwcWenR8"
                  title="YouTube video player 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
