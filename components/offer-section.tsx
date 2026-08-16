import { Shield, Lock, ShoppingBag, Check, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const CHECKOUT_URL = "https://pay.kiwify.com.br/yTa2MmY"

const features = [
  "Sistema 100% atualizado",
  "Funciona apenas em computador (Windows e macOS)",
  "Área de membros exclusiva (WinTube Academy)",
  "Suporte no WhatsApp",
]

export function OfferSection() {
  return (
    <section id="offer-section" className="py-8 sm:py-12 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <ScrollReveal animation="fade-up" duration={700}>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight uppercase">
              GARANTA SEU <span className="text-primary">ACESSO</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 mt-4 max-w-2xl mx-auto font-bold uppercase">
              pague uma vez, use pra sempre!
              <br />
              <span className="text-sm font-medium normal-case text-slate-500 mt-2 block">Sem mensalidade, sem taxa e sem valor adicional.</span>
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="slide-up" duration={800} threshold={0.05}>
          <div className="bg-white rounded-xl border-2 border-primary/20 shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10">
              {/* Features list */}
              <div className="mb-8">
                <ul className="space-y-4">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-primary/10 p-1 flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
                      </div>
                      <span className="font-semibold text-slate-700 text-sm sm:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8 py-6 border-t border-b border-slate-200">
                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-2">ACESSO VITALÍCIO</p>
                <p className="text-sm text-slate-500 mb-1">Por apenas</p>
                <div className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl font-extrabold text-primary tracking-tight mb-2">
                  R$ 49,97
                </div>
                <p className="text-base sm:text-lg text-slate-600 font-bold">Pague uma vez (uso ilimitado)</p>
              </div>

              {/* Trust Badges */}
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

              {/* Payment Methods */}
              <div className="mt-6 flex justify-center">
                <img
                  src="/images/pagamento_v2.png"
                  alt="Formas de Pagamento - Cartão, Boleto, Pix"
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
