import { ScrollReveal } from "@/components/scroll-reveal"

export function VideoShowcaseSection() {
  const videos = [
    { id: "lcJ8BVEo15U", title: "Exemplo - Filme" },
    { id: "MAZ0mWdoUYI", title: "Exemplo - Animação" },
    { id: "ANnHwcWenR8", title: "Exemplo - Anime" },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm text-primary font-semibold uppercase tracking-widest mb-3">
              VÍDEOS GERADOS
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight uppercase">
              gere vídeos de todos os <span className="text-primary">nichos</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
              Você pode gerar vídeos de diversos temas e formatos, adaptando o mesmo sistema pro nicho que quiser explorar.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {videos.map((video, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 150} duration={600}>
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-video bg-slate-100">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
