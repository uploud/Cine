import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AiToolsSection() {
  const features = [
    {
      icon: "&#128221;",
      title: "Roteiro Automatico",
      description: "Gere roteiros completos para seus videos com IA. Insira o tema, a IA cria um roteiro otimizado para engajamento e retencao.",
      video: "https://i.imgur.com/xQO2AVr.mp4",
    },
    {
      icon: "&#9986;",
      title: "Cortes Inteligentes",
      description: "A IA detecta silencios, repeticoes e partes desnecessarias. Faz os cortes automaticamente mantendo o melhor do conteudo.",
      video: "https://i.imgur.com/7tHXGxQ.mp4",
    },
    {
      image: "/anti-direitos-autorais.png",
      alt: "Anti-Direitos Autorais",
    },
    {
      image: "/montagem-cinematografica.png",
      alt: "Montagem Cinematográfica",
    },
  ]

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-muted overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-8 lg:px-12">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-3 sm:mb-5">
            <span className="w-6 sm:w-8 h-px bg-primary/20" />
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-[#22c55e] uppercase">Ferramentas de IA</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight uppercase">
            Tudo que voce precisa<br /><span className="text-primary">em uma plataforma</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 120} duration={600}>
              <div className="bg-background border border-primary/20 h-full rounded-2xl p-4 sm:p-6 md:p-8 relative overflow-hidden transition-all hover:border-primary/40 hover:-translate-y-1 group flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {feature.title && (
                  <>
                    <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-xl mb-4 sm:mb-6">
                      <span dangerouslySetInnerHTML={{ __html: feature.icon! }} />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg sm:text-xl md:text-2xl font-bold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed mb-6">
                      {feature.description}
                    </p>
                  </>
                )}

                <div className="mt-auto">
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-primary/10 bg-black/5 flex items-center justify-center">
                    {feature.video ? (
                      <video
                        className="w-full h-full object-contain"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={feature.video} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={feature.image!}
                        alt={feature.alt!}
                        fill
                        className="object-contain p-2"
                      />
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-4 md:mt-6">
          <ScrollReveal animation="fade-up" delay={480} duration={600}>
            <div className="bg-background border border-primary/20 rounded-2xl p-5 sm:p-6 md:p-8 transition-all hover:border-primary/40 group">
              <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-xl mb-4">
                &#128421;
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-bold mb-2">
                Area de Membros Completa
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Acesse todos os seus projetos, historico de edicoes, templates e treinamentos em um so lugar. Interface limpa e intuitiva.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
