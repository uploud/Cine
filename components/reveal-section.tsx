"use client"

import { Download, FileText, Scissors, Film, Music, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState, useRef, useEffect } from "react"

const steps = [
  {
    icon: Download,
    number: "01",
    title: "Baixe as Cenas",
    description: "Cola o link e o app baixa o material automaticamente.",
    video: "https://i.imgur.com/jjJQ9CL.mp4",
  },
  {
    icon: FileText,
    number: "02",
    title: "Transcreva as Falas",
    description: "Um clique e todas as falas viram texto, prontas pro roteiro com IA.",
    video: "https://i.imgur.com/XyuHBwq.mp4",
  },
  {
    icon: Scissors,
    number: "03",
    title: "Corte as Melhores Partes",
    description: "A IA identifica e corta as melhores partes sozinha.",
    video: "https://i.imgur.com/9DXzQZH.mp4",
  },
  {
    icon: Film,
    number: "04",
    title: "Montagem Automática",
    description: "Um clique e o sistema monta o vídeo inteiro.",
    video: "https://i.imgur.com/Ie5Bqw6.mp4",
  },
  {
    icon: Music,
    number: "05",
    title: "Trilha Sonora",
    description: "O app baixa e sonoriza. Vídeo pronto pra publicar.",
    video: "https://i.imgur.com/Reg1Gjl.mp4",
  },
]

export function RevealSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768
      // Trigger point: Middle of the screen for desktop, slightly lower for mobile due to sticky device
      const actualTriggerY = isMobile ? window.innerHeight * 0.7 : window.innerHeight * 0.5

      let closestIndex = activeIndex
      let minDistance = Infinity

      itemRefs.current.forEach((ref, index) => {
        if (!ref) return
        const rect = ref.getBoundingClientRect()
        // Calculate the center of the text item
        const center = rect.top + rect.height / 2
        const distance = Math.abs(center - actualTriggerY)

        if (distance < minDistance) {
          minDistance = distance
          closestIndex = index
        }
      })

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Run once to initialize
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeIndex])

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pb-24">
      {/* Visual break - top accent border */}
      <div className="h-1 bg-primary" aria-hidden="true" />

      {/* Header */}
      <div className="pt-16 pb-8 sm:pt-24 sm:pb-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal animation="fade-up" duration={700}>
            <p className="text-xs sm:text-sm text-primary font-bold uppercase tracking-[0.2em] mb-4">
              GERADOR DE VÍDEOS
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6 uppercase">
              Veja como funciona o <span className="text-primary">nosso sistema</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-4 font-bold">
              Com o WinTube você consegue criar vários vídeos todos os dias, de forma automática, prontos pra postar em qualquer plataforma.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-4 sm:px-6 max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start relative">
          {/* Mobile view needs the sticky video on top */}
          <div className="w-full md:w-1/2 sticky top-24 md:top-1/2 md:-translate-y-1/2 z-20 md:order-last flex flex-col items-center">
            <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-xl sm:rounded-2xl overflow-hidden border-4 sm:border-8 border-[#2a2a2a] bg-[#1a1a1a] shadow-2xl">
              {/* Mac window controls */}
              <div className="absolute top-0 left-0 w-full h-5 sm:h-6 bg-[#2a2a2a] flex items-center px-2 sm:px-3 gap-1.5 z-20">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27c93f]" />
                <div className="ml-auto text-[10px] text-slate-400 font-mono hidden sm:block">
                  wintube.app
                </div>
              </div>
              {/* Videos */}
              <div className="absolute top-5 sm:top-6 left-0 w-full h-[calc(100%-1.25rem)] sm:h-[calc(100%-1.5rem)] bg-slate-900">
                {steps.map((step, i) => (
                  <video
                    key={i}
                    src={step.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      activeIndex === i ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Laptop base (desktop only for realism) */}
            <div className="hidden md:block relative w-[110%] -left-[5%] h-3 sm:h-4 bg-[#3a3a3a] rounded-b-xl sm:rounded-b-2xl shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1 sm:h-2 bg-[#2a2a2a] rounded-b-md" />
            </div>
            
            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    activeIndex === i ? "w-8 bg-primary" : "w-2 bg-slate-800"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Scrolling Text Items */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 sm:gap-8 pt-[10vh] pb-[20vh] md:pt-[45vh] md:pb-[45vh]">
            {steps.map((step, i) => {
              const isActive = activeIndex === i
              return (
                <div
                  key={i}
                  ref={(el) => {
                    itemRefs.current[i] = el
                  }}
                  className={`transition-all duration-500 rounded-2xl p-5 sm:p-6 border ${
                    isActive
                      ? "bg-slate-900/80 border-primary/40 shadow-[0_0_15px] shadow-primary/20 scale-[1.02]"
                      : "border-transparent opacity-50 hover:opacity-100 scale-100 cursor-pointer"
                  }`}
                  onClick={() => {
                    // Smooth scroll to the element so it becomes active
                    if (itemRefs.current[i]) {
                      const rect = itemRefs.current[i]?.getBoundingClientRect()
                      if (rect) {
                        const isMobile = window.innerWidth < 768
                        const offset = isMobile ? window.innerHeight * 0.7 : window.innerHeight * 0.5
                        window.scrollBy({
                          top: rect.top - offset + (rect.height / 2),
                          behavior: "smooth",
                        })
                      }
                    }
                  }}
                >
                  <div className="flex gap-4 sm:gap-5">
                    <div
                      className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center border transition-colors ${
                        isActive
                          ? "bg-primary/20 text-primary border-primary/30"
                          : "bg-slate-800 text-slate-400 border-slate-700"
                      }`}
                    >
                      <step.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex flex-col gap-1.5 pt-0.5">
                      <h3
                        className={`font-[family-name:var(--font-display)] text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                          isActive ? "text-white" : "text-slate-300"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm sm:text-base leading-relaxed transition-colors ${
                          isActive ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="py-12 px-4 sm:px-6 relative z-10 mt-12 sm:mt-24">
        <div className="max-w-5xl mx-auto">
          {/* Closing + CTA */}
          <ScrollReveal animation="fade-up" delay={100} duration={600}>
            <div className="text-center">
              <a
                href="#offer-section"
                id="reveal-cta"
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-sky-500 text-white font-bold text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-lg shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>QUERO ACESSAR O GERADOR DE VÍDEOS</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
