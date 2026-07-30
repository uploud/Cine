"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const faqs = [
  {
    question: "Preciso saber editar vídeos?",
    answer: "Não. O app foi criado pra quem não sabe editar. A IA faz o trabalho pesado.",
  },
  {
    question: "Funciona para quais plataformas?",
    answer: "YouTube, Instagram (Reels), TikTok, Facebook e qualquer plataforma de vídeo.",
  },
  {
    question: "Funciona para perfis de edit de filmes, séries e animes?",
    answer: "É exatamente pra isso que foi feito. Roteiro, cortes, montagem e trilha rodam sem você aparecer.",
  },
  {
    question: "Preciso de computador potente?",
    answer: "Roda em Windows e Mac comuns. Não precisa de máquina profissional de edição.",
  },
  {
    question: "Em quanto tempo vejo resultado?",
    answer: "Dá pra ter o perfil configurado e publicando em poucos dias. Resultado financeiro depende de consistência, nicho e execução — não prometemos valor nenhum.",
  },
  {
    question: "Tem mensalidade ou créditos?",
    answer: "Não. Pagamento único, vídeos ilimitados.",
  },
  {
    question: "Tenho garantia?",
    answer: "7 dias incondicional. Não gostou, devolvemos 100%.",
  },
]

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentId = `faq-content-${index}`
  const triggerId = `faq-trigger-${index}`

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        id={triggerId}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
      >
        <span className="font-semibold text-base sm:text-lg text-slate-900 group-hover:text-primary transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  )
}

export function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={100} duration={600}>
          <div className="bg-white border border-slate-200 rounded-lg px-6 sm:px-8">
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
