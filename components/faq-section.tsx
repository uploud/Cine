"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const faqs = [
  {
    question: "Funciona no meu celular?",
    answer: "O aplicativo roda no computador, mas você pode usar todo o material gerado e gerenciar seu canal pelo celular sem problemas.",
  },
  {
    question: "Preciso de um computador forte?",
    answer: "Não. A maior parte do processamento (como a inteligência artificial para roteiros) roda em nossos servidores ou são otimizados para não exigir placa de vídeo dedicada pesada no seu uso.",
  },
  {
    question: "Tem risco de direitos autorais (copyright)?",
    answer: "O risco zero não existe no YouTube, mas o WinTube Academy foca exatamente em estratégias para transformar o conteúdo (Cortes Dinâmicos, Reenquadramento, Legendas e Filtros) para que o YouTube o considere conteúdo original, diminuindo drasticamente os bloqueios.",
  },
  {
    question: "A inteligência artificial é paga por fora?",
    answer: "Não. O acesso ao sistema inclui todas as integrações sem cobrança extra ou limite surpresa de créditos.",
  },
  {
    question: "Eu preciso assinar mensalmente?",
    answer: "Não! Acesso vitalício com pagamento único.",
  },
  {
    question: "Vou ter suporte se tiver dúvidas?",
    answer: "Sim, você tem acesso ao grupo de alunos e ao nosso time de suporte via WhatsApp para tirar qualquer dúvida.",
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
        className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4C8DF7] focus-visible:ring-offset-2 rounded-sm"
      >
        <span className="font-semibold text-base sm:text-lg text-slate-900 group-hover:text-[#4C8DF7] transition-colors">
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
            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
              Dúvidas <span className="text-[#4C8DF7]">Frequentes</span>
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
