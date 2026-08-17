import { ScrollReveal } from "@/components/scroll-reveal"

export function VideoShowcaseSection() {
  const showcaseImages = [
    "/images/results/result1.jpg",
    "/images/results/result2.jpg",
    "/images/results/result3.jpg",
    "/images/results/result4.png",
  ]

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm text-primary font-semibold uppercase tracking-widest mb-3">
              VÍDEOS GERADOS
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight uppercase">
              gere vídeos pra todos os <span className="text-primary">nichos</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 max-w-3xl mx-auto leading-relaxed font-medium">
              Você pode gerar vídeos de diversos temas e formatos, adaptando o mesmo sistema pro nicho que já toca ou pro próximo que quiser abrir.
            </p>
          </div>
        </ScrollReveal>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden pb-6 mt-12">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...showcaseImages, ...showcaseImages].map((src, i) => (
              <div 
                key={i} 
                className="w-[280px] sm:w-[320px] md:w-[380px] shrink-0 mx-2 sm:mx-3"
              >
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white pointer-events-none">
                  <img
                    src={src}
                    alt={`Exemplo de resultado ${i + 1}`}
                    loading="lazy"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
          `}} />
        </div>
      </div>
    </section>
  )
}
