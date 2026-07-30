"use client"

import { Shield, Lock, ShoppingBag, Smartphone, GraduationCap, Infinity, CreditCard, MessageCircle, Sparkles, Check, BookOpen, Users, Palette, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const CHECKOUT_URL = "https://pay.kiwify.com.br/yTa2MmY"

const methodItems = [
  {
    icon: GraduationCap,
    title: "WinTube Academy",
    description: "Treinamento passo a passo pra montar e crescer seus canais.",
  },
  {
    icon: BookOpen,
    title: "Guia de Monetização em 7 Dias",
    description: "O caminho mais curto pra começar a gerar receita.",
  },
  {
    icon: Shield,
    title: "Guia de Boas Práticas de Conteúdo",
    description: "Vídeos mais originais, evitando armadilhas de monetização.",
  },
  {
    icon: Users,
    title: "Grupo Fechado de Alunos",
    description: "Comunidade pra tirar dúvida e não travar sozinho.",
  },
]

const toolItems = [
  {
    icon: Smartphone,
    title: "App WinTube",
    description: "Baixa, transcreve, corta, monta e sonoriza com IA.",
  },
  {
    icon: Infinity,
    title: "Vídeos ilimitados",
    description: "Sem créditos, sem limite de uso.",
  },
  {
    icon: CreditCard,
    title: "Sem mensalidade",
    description: "Pagamento único, acesso completo.",
  },
  {
    icon: Sparkles,
    title: "Mini Curso de Edição com IA",
    description: "Aprenda a tirar o máximo da ferramenta.",
  },
  {
    icon: Palette,
    title: "Modelos prontos de thumbs e capas",
    description: "Templates profissionais prontos pra usar.",
  },
  {
    icon: MessageCircle,
    title: "Suporte especializado",
    description: "Equipe pronta para ajudar sempre que precisar.",
  },
]

export function OfferSection() {
  return (
    <section id="offer-section" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal animation="slide-up" duration={800} threshold={0.05}>
          <div className="bg-white rounded-xl border-2 border-primary/20 shadow-xl overflow-hidden">

            {/* Header */}
            <div className="bg-primary/5 border-b border-primary/10 px-6 sm:px-8 py-6 text-center">
              <p className="text-sm sm:text-base text-primary font-semibold">
                Acesso completo enviado por e-mail imediatamente após a compra
              </p>
            </div>

            <div className="p-6 sm:p-8 md:p-10">

              {/* Video depoimento */}
              <div className="mb-8">
                <h3 className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-bold text-slate-900 mb-4 text-center">
                  Depoimento de <span className="text-primary">Direitos Autorais</span> com o Sistema da Wintube
                </h3>
                <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-200 shadow-md">
                  <video
                    src="https://i.imgur.com/au0aAsj.mp4"
                    controls
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* O método completo */}
              <div className="mb-8">
                <h3 className="font-[family-name:var(--font-display)] text-base sm:text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider">
                  O método completo
                </h3>
                <ul className="space-y-3">
                  {methodItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 py-2 border-b border-slate-100 last:border-0">
                      <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <span className="font-semibold text-slate-900 text-sm sm:text-base">{item.title}</span>
                        <p className="text-slate-500 text-xs sm:text-sm mt-0.5">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* A ferramenta */}
              <div className="mb-8">
                <h3 className="font-[family-name:var(--font-display)] text-base sm:text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider">
                  E a ferramenta que executa o método
                </h3>
                <ul className="space-y-3">
                  {toolItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 py-2 border-b border-slate-100 last:border-0">
                      <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <span className="font-semibold text-slate-900 text-sm sm:text-base">{item.title}</span>
                        <p className="text-slate-500 text-xs sm:text-sm mt-0.5">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preço */}
              <div className="text-center mb-8 py-6 border-t border-b border-slate-200">
                <p className="text-xs sm:text-sm text-slate-400 line-through mb-1">De R$ 197,00</p>
                <div className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl font-extrabold text-primary tracking-tight mb-2">
                  R$ 57,97
                </div>
                <p className="text-sm text-slate-500">ou 12x de R$ 5,82</p>
              </div>

              {/* Selos de confiança */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center text-[10px] sm:text-xs text-slate-500 mb-8">
                <div className="flex flex-col items-center gap-1.5">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" strokeWidth={1.5} />
                  <span>Checkout Seguro</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-primary" strokeWidth={1.5} />
                  <span>Satisfação Garantida</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" strokeWidth={1.5} />
                  <span>Privacidade Protegida</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="offer-cta"
                className="group flex items-center justify-center gap-3 w-full py-4 sm:py-5 text-base sm:text-lg font-bold text-white rounded-lg bg-primary hover:bg-sky-600 shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:scale-[0.98] animate-cta-pulse"
              >
                <span>COMEÇAR AGORA</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Formas de pagamento */}
              <div className="mt-6 flex justify-center">
                <img
                  src="/images/pagamento_v2.png"
                  alt="Formas de Pagamento — Cartão, Boleto, Pix"
                  className="w-full max-w-[400px] h-auto object-contain opacity-70"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
