import { ScrollReveal } from "@/components/scroll-reveal"

export function VideoShowcaseSection() {
  return (
    <section className="py-10 md:py-16 px-3 md:px-4 bg-[hsl(220,20%,5%)] overflow-hidden">
      <div className="max-w-5xl mx-auto px-2 md:px-4">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-6 md:mb-10 max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl md:text-4xl font-black mb-3 md:mb-4 leading-tight uppercase">
              SEUS VÍDEOS IRÃO FICAR DESSE MESMO FORMATO, APENAS COM 1 APP E UM CLICK:{" "}
              <span className="text-primary text-primary-glow">ASSIM</span>
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="zoom-in" delay={150} duration={800}>
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-10">
            {/* Vídeo 1: Filme/Série */}
            <div className="relative pb-[56.25%] h-0 rounded-md md:rounded-lg overflow-hidden shadow-[0_20px_25px_-5px_hsl(var(--primary)/20%),0_10px_10px_-5px_hsl(var(--primary)/20%)] border-2 border-primary/50">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/lcJ8BVEo15U"
                title="YouTube video player 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Vídeo 2: Desenho/Animação */}
            <div className="relative pb-[56.25%] h-0 rounded-md md:rounded-lg overflow-hidden shadow-[0_20px_25px_-5px_hsl(var(--primary)/20%),0_10px_10px_-5px_hsl(var(--primary)/20%)] border-2 border-primary/50">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/MAZ0mWdoUYI"
                title="YouTube video player 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
