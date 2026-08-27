import { ScrollReveal } from "@/components/scroll-reveal"

export function VideoShowcaseSection() {
  const videos = [
    { id: "lcJ8BVEo15U", title: "Exemplo 1" },
    { id: "MAZ0mWdoUYI", title: "Exemplo 2" },
    { id: "ANnHwcWenR8", title: "Exemplo 3" },
    { id: "lcJ8BVEo15U", title: "Exemplo 4" },
  ]

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-wt-blue font-bold tracking-widest uppercase text-sm mb-2 block">Qualidade</span>
            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight uppercase">
              Veja a qualidade dos vídeos
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 max-w-3xl mx-auto leading-relaxed font-medium">
              Você pode gerar centenas de vídeos como esses, no automático.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {videos.map((video, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 150} duration={600}>
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="relative aspect-video bg-slate-100">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
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
