"use client"

import { Download, FileText, Scissors, Film, Music, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState, useRef, useEffect } from "react"

const steps = [
  {
    icon: Download,
    number: "01",
    title: "Baixe as Cenas",
    description: "Cola o link do material que quer usar e o app baixa automaticamente.",
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
    description: "A IA identifica e corta as melhores partes sozinha. A etapa que mais rouba tempo vira minutos.",
    video: "https://i.imgur.com/9DXzQZH.mp4",
  },
  {
    icon: Film,
    number: "04",
    title: "Montagem Automática",
    description: "Um clique e o sistema monta o vídeo inteiro: cortes, ritmo, sequência.",
    video: "https://i.imgur.com/Ie5Bqw6.mp4",
  },
  {
    icon: Music,
    number: "05",
    title: "Trilha Sonora",
    description: "Cola o link da música, o app baixa e sonoriza. Vídeo pronto pra publicar.",
    video: "https://i.imgur.com/Reg1Gjl.mp4",
  },
]

export function RevealSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement | null>(null)
  const isManualOverride = useRef(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || isManualOverride.current) return
      
      const isMobile = window.innerWidth < 768
      if (isMobile) {
         // On mobile, we let the natural scroll or tap handle it, don't force scroll-spy
         return
      }

      const rect = sectionRef.current.getBoundingClientRect()
      const scrollableDistance = rect.height - window.innerHeight
      const scrolled = -rect.top

      if (scrolled >= 0 && scrolled <= scrollableDistance) {
        let progress = scrolled / scrollableDistance
        progress = Math.max(0, Math.min(1, progress))
        const index = Math.min(steps.length - 1, Math.floor(progress * steps.length))
        if (index !== activeIndex) {
          setActiveIndex(index)
        }
      } else if (scrolled < 0) {
        setActiveIndex(0)
      } else {
        setActiveIndex(steps.length - 1)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeIndex])

  const handleStepClick = (index: number) => {
    setActiveIndex(index)
    isManualOverride.current = true
    
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    scrollTimeout.current = setTimeout(() => {
      isManualOverride.current = false
    }, 1000)

    if (sectionRef.current && window.innerWidth >= 768) {
      const scrollableDistance = sectionRef.current.offsetHeight - window.innerHeight
      const targetScroll = (index / (steps.length - 0.5)) * scrollableDistance
      const sectionTop = sectionRef.current.offsetTop
      window.scrollTo({
        top: sectionTop + targetScroll,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="bg-slate-950">
      <section ref={sectionRef} className="relative text-white md:h-[300vh]">
        {/* Visual break - top accent border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-primary z-30" aria-hidden="true" />

        {/* The sticky container */}
        <div className="md:sticky md:top-0 md:h-screen w-full flex flex-col justify-center overflow-hidden py-16 md:py-0">
          
          {/* Header */}
          <div className="px-4 sm:px-6 mb-8 md:mb-12">
            <div className="max-w-5xl mx-auto text-center">
              <ScrollReveal animation="fade-up" duration={700}>
                <p className="text-xs sm:text-sm text-primary font-bold uppercase tracking-[0.2em] mb-2 sm:mb-4">
                  COMO FUNCIONA
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-4 uppercase">
                  seus vídeos prontos <span className="text-primary">em 5 passos</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-bold">
                  Veja como é fácil gerar seus vídeos com a nossa ferramenta! Com o WinTube você consegue criar vários vídeos todos os dias, prontos pra postar em qualquer plataforma, sem tocar em editor nenhum.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 sm:px-6 max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
              
              {/* Scrolling Text Items (Clustered) */}
              <div className="w-full md:w-1/2 flex flex-col gap-3 sm:gap-4">
                {steps.map((step, i) => {
                  const isActive = activeIndex === i
                  return (
                    <div
                      key={i}
                      className={`transition-all duration-300 rounded-2xl p-4 sm:p-5 border cursor-pointer ${
                        isActive
                          ? "bg-slate-900/80 border-primary/40 shadow-[0_0_15px] shadow-primary/20 scale-[1.02]"
                          : "border-transparent opacity-50 hover:opacity-100 scale-100"
                      }`}
                      onClick={() => handleStepClick(i)}
                    >
                      <div className="flex gap-4">
                        <div
                          className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center border transition-colors ${
                            isActive
                              ? "bg-primary/20 text-primary border-primary/30"
                              : "bg-slate-800 text-slate-400 border-slate-700"
                          }`}
                        >
                          <step.icon className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col gap-1 pt-0.5">
                          <h3
                            className={`font-[family-name:var(--font-display)] text-base sm:text-lg font-bold tracking-tight transition-colors ${
                              isActive ? "text-white" : "text-slate-300"
                            }`}
                          >
                            {step.title}
                          </h3>
                          <p
                            className={`text-sm leading-relaxed transition-colors ${
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

              {/* Laptop */}
              <div className="w-full md:w-1/2 flex flex-col items-center">
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
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
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

            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Static Section */}
      <div className="py-12 px-4 sm:px-6 relative z-10 bg-slate-950 pb-24">
        <div className="max-w-5xl mx-auto">
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
    </div>
  )
}
