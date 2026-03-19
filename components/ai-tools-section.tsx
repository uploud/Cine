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
      icon: null,
      title: null,
      description: null,
      image: "/anti-direitos-autorais.png",
    },
    {
      icon: null,
      title: null,
      description: null,
      image: "/montagem-cinematografica.png",
    },
  ]

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-[#0f0f0f] overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-8 lg:px-12">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5">
            <span className="w-6 sm:w-8 h-px bg-[rgba(30,255,0,1)]" />
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-[rgba(30,255,0,1)] uppercase">Ferramentas de IA</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight uppercase">
            Tudo que voce precisa<br /><span className="text-primary">em uma plataforma</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 120} duration={600}>
              {feature.image ? (
                /* Card com imagem (Anti-Direitos Autorais) */
                <div className="bg-[#080808] border border-[rgba(255,215,0,0.15)] h-full rounded-lg sm:rounded-xl overflow-hidden transition-all hover:border-[rgba(255,215,0,0.3)] hover:-translate-y-1 group relative">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image
                    src={feature.image}
                    alt="Anti-Direitos Autorais"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                /* Cards normais com ícone + texto */
                <div className="bg-[#080808] border border-[rgba(255,215,0,0.15)] h-full rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden transition-all hover:border-[rgba(255,215,0,0.3)] hover:-translate-y-1 group">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(255,215,0,0.12)] border border-[rgba(255,215,0,0.2)] rounded-lg flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-6">
                    <span dangerouslySetInnerHTML={{ __html: feature.icon! }} />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.video && (
                    <div className="mt-4 sm:mt-6">
                      <video
                        className="w-full rounded-lg border border-[rgba(255,215,0,0.1)] bg-black"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={feature.video} type="video/mp4" />
                      </video>
                    </div>
                  )}
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-3 sm:mt-4 md:mt-6">
          <ScrollReveal animation="fade-up" delay={480} duration={600}>
            <div className="bg-[#080808] border border-[rgba(255,215,0,0.15)] rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 transition-all hover:border-[rgba(255,215,0,0.3)] group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(255,215,0,0.12)] border border-[rgba(255,215,0,0.2)] rounded-lg flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-6">
                &#128421;
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
                Area de Membros Completa
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                Acesse todos os seus projetos, historico de edicoes, templates e treinamentos em um so lugar. Interface limpa e intuitiva.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
