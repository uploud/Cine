"use client"

import { Download, FileText, Scissors, ShieldCheck, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState, useRef, useEffect } from "react"

const steps = [
  {
    icon: Download,
    number: "01",
    title: "Download + Transcrição Automática",
    description: "Cola o link do YouTube, Filmes, Séries, Animes, podcast ou live e o APP WinTube baixa e transcreve o conteúdo inteiro sozinho. Você não precisa assistir nada pra achar o trecho bom.",
    video: "https://i.imgur.com/jjJQ9CL.mp4",
  },
  {
    icon: FileText,
    number: "02",
    title: "Roteiro e Cortes com IA",
    description: "A IA lê a transcrição, separa os melhores momentos e monta a sequência de corte pronta em minutos.",
    video: "https://i.imgur.com/XyuHBwq.mp4",
  },
  {
    icon: Scissors,
    number: "03",
    title: "Montagem Vertical + Legenda Automática",
    description: "Reenquadramento vertical (com opção de seguir rosto), legenda palavra por palavra sincronizada, exporta em 4K. Você só dá os toques finais e posta.",
    video: "https://i.imgur.com/9DXzQZH.mp4",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Guia Anti-Direitos Autorais",
    description: "Mostra como ajustar o vídeo e proteger seu canal. Sem bloqueios, sem perder monetização.",
    video: "https://i.imgur.com/Ie5Bqw6.mp4",
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
      <section id="como-funciona" ref={sectionRef} className="relative text-white md:h-[300vh]">
        {/* Visual break - top accent border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)] z-30" aria-hidden="true" />

        {/* The sticky container */}
        <div className="md:sticky md:top-0 md:h-screen w-full flex flex-col justify-center overflow-hidden py-16 md:py-0">
          
          {/* Header */}
          <div className="px-4 sm:px-6 mb-8 md:mb-12">
            <div className="max-w-5xl mx-auto text-center">
              <ScrollReveal animation="fade-up" duration={700}>
                <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-4 uppercase">
                  OS 4 PILARES DO <span className="bg-clip-text text-transparent bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)]">SISTEMA WINTUBE</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-bold">
                  Você não precisa mais perder noites cortando e legendando — o pipeline faz tudo enquanto você foca em crescer.
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
                          ? "bg-slate-900/80 border-[#4C8DF7]/40 shadow-[0_0_15px] shadow-[#4C8DF7]/20 scale-[1.02]"
                          : "border-transparent opacity-50 hover:opacity-100 scale-100"
                      }`}
                      onClick={() => handleStepClick(i)}
                    >
                      <div className="flex gap-4">
                        <div
                          className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center border transition-colors ${
                            isActive
                              ? "bg-[#4C8DF7]/20 text-[#4C8DF7] border-[#4C8DF7]/30"
                              : "bg-slate-800 text-slate-400 border-slate-700"
                          }`}
                        >
                          <step.icon className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col gap-1 pt-0.5">
                          <h3
                            className={`font-mono text-base sm:text-lg font-bold tracking-tight transition-colors uppercase ${
                              isActive ? "text-white" : "text-slate-300"
                            }`}
                          >
                            {step.title}
                          </h3>
                          <p
                            className={`text-sm leading-relaxed transition-colors font-sans ${
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
                        activeIndex === i ? "w-8 bg-[#4C8DF7]" : "w-2 bg-slate-800"
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
                href="#oferta"
                id="reveal-cta"
                className="group inline-flex items-center justify-center gap-3 bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)] text-white font-mono font-[700] text-[18px] px-8 py-4 sm:px-10 sm:py-5 rounded-xl shadow-lg hover:opacity-90 hover:-translate-y-0.5 active:scale-[0.98] transition-all"
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
