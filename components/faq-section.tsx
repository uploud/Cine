"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Preciso saber editar vídeos para usar o WinTube?",
    answer:
      "Não! O WinTube foi criado justamente para quem não sabe editar. A IA faz toda a edição automaticamente — você só faz o upload do vídeo bruto e recebe o resultado final pronto.",
  },
  {
    question: "Funciona para qualquer tipo de vídeo e plataforma?",
    answer:
      "Sim! Funciona para YouTube, TikTok, Instagram Reels e qualquer plataforma de vídeo. Nossa IA é treinada para identificar o melhor conteúdo independente do formato.",
  },
  {
    question: "Funciona para canais Dark também?",
    answer:
      "Com certeza! O WinTube é perfeito para canais Dark (canais sem mostrar o rosto). A IA gera roteiros, faz cortes, monta o vídeo e aplica proteção anti-direitos autorais — tudo automaticamente.",
  },
  {
    question: "É só para YouTubers?",
    answer:
      "De jeito nenhum! O WinTube é para qualquer criador de conteúdo — YouTubers, TikTokers, Instagrammers, Reels, Shorts e qualquer pessoa que queira produzir vídeos profissionais com IA.",
  },
  {
    question: "Vou ter problemas de direitos autorais no YouTube?",
    answer:
      "O WinTube inclui um sistema anti-direitos autorais que processa seus vídeos para minimizar o risco de strikes. Ensinamos toda a metodologia para publicar com segurança.",
  },
  {
    question: "Em quanto tempo verei resultado?",
    answer:
      "Com nossa metodologia, é possível ter o canal configurado e publicando conteúdo em até 12 dias. Os resultados financeiros dependem da consistência, mas já temos membros monetizados em menos de 60 dias.",
  },
  {
    question: "Tenho garantia de reembolso?",
    answer:
      "Sim! Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeito, devolvemos 100% do seu dinheiro sem perguntas.",
  },
]

export function FaqSection() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-background border-b border-border overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight">
            Perguntas Frequentes
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card/50 border border-border rounded-xl overflow-hidden transition-all hover:border-primary/20"
            >
              <button
                onClick={() => setSelected(selected !== index ? index : null)}
                className="w-full text-left px-6 py-5 font-medium text-base md:text-lg flex justify-between items-center focus:outline-none cursor-pointer"
              >
                <span className="flex-1 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${
                    selected === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  selected === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
