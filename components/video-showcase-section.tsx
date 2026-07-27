import { ScrollReveal } from "@/components/scroll-reveal"

export function VideoShowcaseSection() {
  return (
    <section className="py-24 bg-card border-b border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Resultados Comprovados
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Vídeos gerados 100% pelo WinTube que já estão rodando e monetizando em diversos canais.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 justify-center items-center md:items-stretch mb-8">
          {/* Vídeo 1: Filme/Série */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="w-full">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-border bg-black transition-transform hover:-translate-y-1 duration-300">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/lcJ8BVEo15U"
                  title="YouTube video player 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Vídeo 2: Desenho/Animação */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="w-full">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-border bg-black transition-transform hover:-translate-y-1 duration-300">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/MAZ0mWdoUYI"
                  title="YouTube video player 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Vídeo 3: Anime */}
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="w-full">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-border bg-black transition-transform hover:-translate-y-1 duration-300">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/ANnHwcWenR8"
                  title="YouTube video player 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
