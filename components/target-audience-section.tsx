import { CheckCircle2, XCircle } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function TargetAudienceSection() {
  const targetPoints = [
    {
      title: "Pra quem quer começar do zero no YouTube",
      description:
        "Mesmo sem saber editar, aparecer ou entender de direitos autorais — a IA faz o trabalho pesado pra você.",
    },
    {
      title: "Pra quem quer transformar filmes e séries em canais lucrativos",
      description:
        "Aprende a criar vídeos automáticos que rendem visualizações e receita todos os dias, mesmo dormindo.",
    },
    {
      title: "Pra quem quer uma renda extra real com IA",
      description:
        "Usa o mesmo sistema que já gerou milhares de views e lucros pra quem começou do zero — sem depender de clientes ou freelas.",
    },
    {
      title: "Pra quem curte tecnologia e quer aproveitar a onda da IA",
      description: "Descobre como usar ferramentas práticas pra criar, editar e postar vídeos automaticamente.",
    },
    {
      title: "Pra quem tá cansado de só consumir conteúdo e quer ganhar com isso",
      description: "Chega de perder tempo vendo YouTube. Agora você aprende a lucrar com ele.",
    },
  ]

  const notForYou = [
    "Acha que vai ganhar dinheiro sem aplicar o método.",
    "Quer resultado sem paciência pra aprender.",
    "Prefere reclamar do algoritmo em vez de usar IA a favor.",
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal animation="fade-up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4 md:mb-6 text-balance">
            PARA QUEM E O <span className="text-primary">CINETUBE.IA ACADEMY</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-12 lg:mb-16 max-w-4xl mx-auto leading-relaxed">
            O CineTube.IA Academy e pra quem quer viver o lado lucrativo do YouTube — sem precisar ser influencer,
            aparecer na camera ou gastar meses aprendendo edicao.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 lg:mb-20">
          {targetPoints.map((point, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
              <div className="flex gap-4 md:gap-6 items-start p-4 md:p-6 lg:p-8 rounded-lg bg-card border border-primary/20 transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(255,215,0,0.1)] hover:-translate-y-1 group">
                <div className="flex-shrink-0 mt-1 transition-transform group-hover:scale-110 duration-300">
                  <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {point.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="zoom-in" delay={400}>
          <div className="bg-card/50 border border-destructive/30 rounded-lg p-6 md:p-8 lg:p-10 hover:border-destructive/60 transition-colors duration-500">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 md:mb-8 text-destructive">
              Não é pra você se...
            </h3>
            <div className="grid gap-4 md:gap-6">
              {notForYou.map((point, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="flex-shrink-0 mt-1">
                    <XCircle className="w-6 h-6 md:w-7 md:h-7 text-destructive" />
                  </div>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
