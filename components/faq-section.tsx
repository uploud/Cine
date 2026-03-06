"use client"

import type React from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

const faqs = [
  {
    question: "Preciso saber editar videos para usar o CineTube.IA?",
    answer:
      "Nao! O CineTube.IA foi criado justamente para quem nao sabe editar. A IA faz toda a edicao automaticamente — voce so faz o upload do video bruto e recebe o resultado final pronto.",
  },
  {
    question: "Funciona para qualquer tipo de video e plataforma?",
    answer:
      "Sim! Funciona para YouTube, TikTok, Instagram Reels e qualquer plataforma de video. Ideal para criadores de conteudo de todos os tipos — vlogs, tutoriais, reviews, entretenimento e muito mais. Nossa IA e treinada para identificar o melhor conteudo independente do tema ou formato.",
  },
  {
    question: "Funciona para canais Dark tambem?",
    answer:
      "Com certeza! O CineTube.IA e perfeito para canais Dark (canais sem mostrar o rosto). A IA gera roteiros, faz cortes, monta o video e aplica protecao anti-direitos autorais — tudo automaticamente. E a forma mais eficiente de escalar canais Dark no YouTube, TikTok e Instagram.",
  },
  {
    question: "E so para YouTubers?",
    answer:
      "De jeito nenhum! O CineTube.IA e para qualquer criador de conteudo — YouTubers, TikTokers, Instagrammers, Reels, Shorts e qualquer pessoa que queira produzir videos profissionais com IA. Se voce cria conteudo em video, essa ferramenta e para voce.",
  },
  {
    question: "Vou ter problemas de direitos autorais no YouTube?",
    answer:
      "O CineTube.IA inclui um sistema anti-direitos autorais que processa seus videos para minimizar o risco de strikes. Ensinamos toda a metodologia para publicar com seguranca em qualquer plataforma.",
  },
  {
    question: "Em quanto tempo verei resultado?",
    answer:
      "Com nossa metodologia, e possivel ter o canal configurado e publicando conteudo em ate 12 dias. Os resultados financeiros dependem da consistencia, mas ja temos membros monetizados em menos de 60 dias.",
  },
  {
    question: "Tenho garantia de reembolso?",
    answer:
      "Sim! Voce tem 7 dias de garantia incondicional. Se por qualquer motivo nao ficar satisfeito, devolvemos 100% do seu dinheiro sem perguntas.",
  },
]



export function FaqSection() {
  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const offerSection = document.getElementById("offer-section")
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="faq" className="py-8 sm:py-10 md:py-12 px-3 sm:px-4 bg-[hsl(220,20%,5%)] overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-display)] font-bold mb-2 sm:mb-3 md:mb-4">
              <span className="text-primary">Duvidas</span> Frequentes
            </h2>
          </div>
        </ScrollReveal>
        <div className="flex flex-col gap-2 sm:gap-3">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 80} duration={500}>
              <details className="bg-[hsl(220,20%,10%)]/50 border border-border rounded-lg p-3 sm:p-4 group">
                <summary className="font-bold text-sm sm:text-base md:text-lg cursor-pointer text-foreground list-none flex items-center justify-between gap-2">
                  <span className="flex-1">{faq.question}</span>
                  <span className="shrink-0 group-open:rotate-180 transition-transform text-[rgba(30,255,0,1)]">&#9660;</span>
                </summary>
                <p className="mt-2 text-muted-foreground text-xs sm:text-sm md:text-base">{faq.answer}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8 md:mt-12">
          <a
            href="#offer-section"
            onClick={scrollToOffer}
            className="inline-flex items-center px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-primary-foreground rounded-md hover:opacity-90 transition-opacity animate-yellow-pulse bg-[rgba(30,255,0,1)] text-center leading-tight"
          >
            COMECAR AGORA E MUDAR MINHA VIDA
          </a>
        </div>
      </div>
    </section>
  )
}
