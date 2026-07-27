"use client"

import type React from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

const faqs = [
  {
    question: "Preciso saber editar videos para usar o Wintube?",
    answer:
      "Nao! O Wintube foi criado justamente para quem nao sabe editar. A IA faz toda a edicao automaticamente — voce so faz o upload do video bruto e recebe o resultado final pronto.",
  },
  {
    question: "Funciona para qualquer tipo de video e plataforma?",
    answer:
      "Sim! Funciona para YouTube, TikTok, Instagram Reels e qualquer plataforma de video. Ideal para criadores de conteudo de todos os tipos — vlogs, tutoriais, reviews, entretenimento e muito mais. Nossa IA e treinada para identificar o melhor conteudo independente do tema ou formato.",
  },
  {
    question: "Funciona para canais Dark tambem?",
    answer:
      "Com certeza! O Wintube e perfeito para canais Dark (canais sem mostrar o rosto). A IA gera roteiros, faz cortes, monta o video e aplica protecao anti-direitos autorais — tudo automaticamente. E a forma mais eficiente de escalar canais Dark no YouTube, TikTok e Instagram.",
  },
  {
    question: "E so para YouTubers?",
    answer:
      "De jeito nenhum! O Wintube e para qualquer criador de conteudo — YouTubers, TikTokers, Instagrammers, Reels, Shorts e qualquer pessoa que queira produzir videos profissionais com IA. Se voce cria conteudo em video, essa ferramenta e para voce.",
  },
  {
    question: "Vou ter problemas de direitos autorais no YouTube?",
    answer:
      "O Wintube inclui um sistema anti-direitos autorais que processa seus videos para minimizar o risco de strikes. Ensinamos toda a metodologia para publicar com seguranca em qualquer plataforma.",
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
    <section id="faq" className="py-8 sm:py-10 md:py-12 px-3 sm:px-4 bg-background overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-display)] font-extrabold mb-2 sm:mb-3 md:mb-4 text-slate-900 tracking-tight">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="flex flex-col gap-2 sm:gap-3">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 80} duration={500}>
              <details className="bg-white border-b border-slate-200 p-4 sm:p-6 group cursor-pointer transition-colors hover:bg-slate-50">
                <summary className="font-semibold text-base sm:text-lg cursor-pointer text-slate-900 list-none flex items-center justify-between gap-4 outline-none">
                  <span className="flex-1">{faq.question}</span>
                  <span className="shrink-0 group-open:rotate-180 transition-transform text-slate-400">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed pr-8">{faq.answer}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <a
            href="#offer-section"
            onClick={scrollToOffer}
            className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold text-white rounded-full bg-primary hover:bg-blue-600 shadow-md transition-all hover:-translate-y-0.5"
          >
            Começar Agora
          </a>
        </div>
      </div>
    </section>
  )
}
