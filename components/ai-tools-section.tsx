import { ScrollReveal } from "@/components/scroll-reveal"

export function AiToolsSection() {
  const steps = [
    {
      title: "Faça o Download das Cenas",
      description: "Basta copiar o link das cenas dos seus filmes, séries ou animes do YouTube e colar no aplicativo que ele irá baixar automaticamente.",
      video: "https://i.imgur.com/jjJQ9CL.mp4",
    },
    {
      title: "Transcreva as Falas das Cenas",
      description: "Ao clicar no botão \"Transcrever Cenas\", o sistema trancreve todas as falas que existem na cena de forma automática para a geração do roteiro com IA.",
      video: "https://i.imgur.com/XyuHBwq.mp4",
    },
    {
      title: "Corte as Melhores Partes",
      description: "Após gerar o roteiro com IA, basta colar o roteiro no campo vazio e clicar nos botões \"Cortar Cenas\" e \"Cortar B-rolls\" para o corte automático das melhores partes das cenas.",
      video: "https://i.imgur.com/9DXzQZH.mp4",
    },
    {
      title: "Gere a Montagem Automática",
      description: "Após a criação dos cortes, basta clicar no botão \"Criar Montagem Completa\" para que o sistema faça toda a montagem do seu vídeo de forma automática. O estilo da montagem é pensado para que não infrinja nenhuma política de copyright do YouTube.",
      video: "https://i.imgur.com/Ie5Bqw6.mp4",
    },
    {
      title: "Adicione a Música de Fundo",
      description: "Ao finalizar toda a montagem do vídeo, basta subir a montagem final no aplicativo e colar o link da música de fundo do seu vídeo, que o sistema irá baixar a trilha direto do YouTube e irá sonorizar o seu vídeo.",
      video: "https://i.imgur.com/Reg1Gjl.mp4",
    }
  ]

  return (
    <section className="py-24 bg-background border-b border-border overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Veja como é fácil usar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            De uma ideia a um vídeo monetizável em apenas 5 passos diretos na plataforma.
          </p>
        </div>
        
        <div className="space-y-24">
          {steps.map((step, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={100} duration={600}>
              <div className={`flex flex-col md:flex-row items-center gap-12 group ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Media */}
                <div className="w-full md:w-1/2">
                  <div className="aspect-video rounded-xl bg-card border border-border flex items-center justify-center transition-all group-hover:border-primary/50 shadow-lg overflow-hidden">
                    <video
                      src={step.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold border border-primary/20 shrink-0">
                      {i + 1}
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
