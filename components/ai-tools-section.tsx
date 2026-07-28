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

        <div className="flex flex-col gap-20 sm:gap-24 md:gap-32 max-w-6xl mx-auto px-4 mt-8">
          {steps.map((step, i) => {
            const isReverse = i % 2 !== 0;
            const stepNumber = String(i + 1).padStart(2, "0");
            
            return (
              <ScrollReveal key={i} animation="fade-up" duration={700}>
                <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isReverse ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Lado da Mídia (Vídeo) */}
                  <div className="w-full md:w-1/2">
                    <div className="w-full rounded-2xl overflow-hidden border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] bg-slate-50 aspect-video transition-transform duration-500 hover:scale-[1.02]">
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
                  </div>

                  {/* Lado do Texto */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-black text-primary/20">
                        {stepNumber}
                      </span>
                    </div>
                    
                    <h3 className="font-[family-name:var(--font-display)] text-slate-900 text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-tight">
                      {step.title.replace(/^\d+\.\s*/, '')}
                    </h3>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-xl">
                      {step.description}
                    </p>
                    {i === steps.length - 1 && (
                      <div className="mt-8">
                        <a
                          href="https://larissainfo.mycartpanda.com/checkout/210179551:1"
                          className="inline-flex items-center justify-center gap-2 bg-sky-400 hover:bg-sky-500 text-white font-bold text-sm sm:text-base md:text-lg px-6 py-4 md:px-8 md:py-4 rounded-full shadow-lg shadow-sky-400/25 transition-all transform hover:-translate-y-0.5"
                        >
                          <span className="text-center">QUERO ACESSAR O GERADOR DE VÍDEOS</span>
                          <span className="hidden sm:inline text-xl leading-none">➔</span>
                        </a>
                      </div>
                    )}
                  </div>
                  
                </div>
              </ScrollReveal>
            )
          })}
        </div>


      </div>
    </section>
  )
}
