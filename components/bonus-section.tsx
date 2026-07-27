"use client"

import { Check, X, CheckCircle2, XCircle } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function BonusSection() {
  const isFor = [
    "Criadores que querem crescer no YouTube sem aparecer na câmera.",
    "Pessoas cansadas de perder horas editando vídeos manualmente.",
    "Quem quer transformar filmes, séries e animes em canais lucrativos usando IA.",
    "Criadores que querem postar vídeos todos os dias no piloto automático.",
    "Quem quer monetizar canais dark sem depender de editor, roteirista ou equipe.",
    "Pessoas que querem escalar canais com vídeos únicos e mais seguros contra bloqueios.",
  ]

  const isNotFor = [
    "Quem prefere continuar editando vídeo por vídeo manualmente.",
    "Pessoas que acham que vão ganhar dinheiro sem postar conteúdo.",
    "Quem quer resultados rápidos sem aprender o método.",
    "Criadores acomodados que continuam usando conteúdo genérico igual todo mundo.",
    "Pessoas que não querem aproveitar IA para crescer mais rápido no YouTube.",
    "Quem prefere perder tempo tentando fazer tudo sozinho ao invés de automatizar.",
  ]

  return (
    <section className="py-24 bg-background border-b border-border overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card: Para Quem É */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="bg-card/50 p-8 rounded-2xl border border-primary/20 shadow-[0_0_30px_rgba(139,92,246,0.05)] hover:border-primary/40 transition-colors h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                Para quem é o WinTube?
              </h3>
              <ul className="space-y-4 text-foreground/80">
                {isFor.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-primary w-5 h-5 mt-0.5 shrink-0" />
                    <span className="text-sm md:text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Card: Para Quem Não É */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="bg-card/50 p-8 rounded-2xl border border-border hover:border-muted-foreground/30 transition-colors h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
                <XCircle className="text-muted-foreground w-6 h-6 shrink-0" />
                Para quem NÃO é?
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                {isNotFor.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="text-muted-foreground/60 w-5 h-5 mt-0.5 shrink-0" />
                    <span className="text-sm md:text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
