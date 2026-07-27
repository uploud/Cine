import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AiToolsSection() {
  const steps = [
    {
      title: "1. Faça o Download das Cenas",
      description: "Basta copiar o link das cenas dos seus filmes, séries ou animes do YouTube e colar no aplicativo que ele irá baixar automaticamente.",
      image: "",
      video: "https://i.imgur.com/jjJQ9CL.mp4",
    },
    {
      title: "2. Transcreva as Falas das Cenas",
      description: "Ao clicar no botão \"Transcrever Cenas\", o sistema trancreve todas as falas que existem na cena de forma automática para a geração do roteiro com IA.",
      image: "",
      video: "https://i.imgur.com/XyuHBwq.mp4",
    },
    {
      title: "3. Corte as Melhores Partes",
      description: "Após gerar o roteiro com IA, basta colar o roteiro no campo vazio e clicar nos botões \"Cortar Cenas\"e \"Cortar B-rolls\"para o corte automático das melhores partes das cenas.",
      image: "",
      video: "https://i.imgur.com/9DXzQZH.mp4",
    },
    {
      title: "4. Gere a Montagem Automática",
      description: "Após a criação dos cortes, basta clicar no botão \"Criar Montagem Completa\" para que o sistema faça toda a montagem do seu vídeo de forma automática. O estilo da montagem é pensado para que não infriga nenhuma política de copyright do YouTube.",
      image: "",
      video: "https://i.imgur.com/Ie5Bqw6.mp4",
    },
    {
      title: "5. Adicione a Música de Fundo",
      description: "Ao finalizar toda a montagem do vídeo, basta subir a montagem final no aplicativo e colar o link da música de fundo do seu vídeo, que o sistema irá baixar a trilha direto do YouTube e irá sonorizar o seu vídeo.",
      image: "",
      video: "https://i.imgur.com/Reg1Gjl.mp4",
    }
  ]

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-muted overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-8 lg:px-12">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="text-xs sm:text-sm md:text-base text-primary font-semibold uppercase tracking-widest mb-2">
            Como usar o Wintube
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold px-2 leading-tight mb-3 sm:mb-4 tracking-tight">
            Veja Como é Fácil Usar<br />
            <span className="text-primary">O Nosso Gerador de Vídeos</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto font-medium">
            O Aplicativo Funciona para Computador.
          </p>
        </div>

        <div className="mt-16 md:mt-24 mb-10 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
            Veja o <span className="text-primary">Passo a Passo</span> Abaixo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {steps.map((step, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 120} duration={600}>
              <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 text-left shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                {/* Mídia do passo */}
                <div className="w-full rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center mb-5 bg-slate-50 aspect-video">
                  {(step as any).video ? (
                    <video
                      src={(step as any).video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-slate-900 text-xl sm:text-2xl font-bold mb-3">
                  {step.title}
                </h3>
                
                <p className="text-sm sm:text-base text-foreground/80 flex-grow">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>


      </div>
    </section>
  )
}
