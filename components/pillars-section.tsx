"use client"

import { useEffect, useState, useRef } from "react"
import { Terminal, FileText, Mic, Wand2, Download, Check, Sparkles } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

interface Step {
  id: number
  badge: string
  badgeType: "user" | "ai"
  icon: React.ElementType
  title: string
  subtitle: string
  tags?: string[]
}

const steps: Step[] = [
  {
    id: 1,
    badge: "ETAPA 1",
    badgeType: "user",
    icon: Terminal,
    title: "Escolha um filme ou série de preferência",
    subtitle: "Selecione o conteúdo que você quer transformar em um vídeo viral.",
  },
  {
    id: 2,
    badge: "ETAPA 2",
    badgeType: "ai",
    icon: FileText,
    title: "Roteiro Automático",
    subtitle: "O aplicativo lê o seu filme ou série e cria um roteiro otimizado para engajamento.",
  },
  {
    id: 3,
    badge: "ETAPA 3",
    badgeType: "ai",
    icon: Wand2,
    title: "Cortes Inteligentes",
    subtitle: "A IA detecta os melhores momentos, faz cortes precisos e monta tudo no automático.",
    tags: ["Dinâmico", "Legendas", "SFX"],
  },
  {
    id: 4,
    badge: "ETAPA 4",
    badgeType: "user",
    icon: Download,
    title: "Baixar e Postar",
    subtitle: "Seu vídeo inédito está pronto para ser publicado e monetizado.",
  },
]

// Confetti component - appears only on the last card
function CardConfetti({ active }: { active: boolean }) {
  if (!active) return null

  const confettiPieces = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.3,
    duration: 1 + Math.random() * 0.8,
    color: ["#FFD700", "#ef4444", "#22c55e", "#3b82f6", "#f97316"][Math.floor(Math.random() * 5)],
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-30 rounded-2xl">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-1.5 h-1.5 rounded-sm"
          style={{
            left: `${piece.left}%`,
            top: "-5px",
            backgroundColor: piece.color,
            animation: `confetti-fall ${piece.duration}s linear ${piece.delay}s forwards`,
          }}
        />
      ))}
    </div>
  )
}

export function PillarsSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Intersection observer to start animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  // Animation loop
  useEffect(() => {
    if (!isVisible || isComplete) return

    const stepDuration = 1200 // Base duration for progress
    const waitDuration = 800 // Wait at 100%
    const progressInterval = 30 // Smoother update

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          const next = prev + (100 / (stepDuration / progressInterval))
          return Math.min(next, 100)
        }
        return 100
      })
    }, progressInterval)

    return () => clearInterval(interval)
  }, [isVisible, isComplete])

  // Handle step transition
  useEffect(() => {
    if (progress >= 100 && !isComplete) {
      const waitTimer = setTimeout(() => {
        if (activeStep < steps.length - 1) {
          setActiveStep((prev) => prev + 1)
          setProgress(0)
        } else {
          setIsComplete(true)
          setShowConfetti(true)

          // Reset cycle after showing result
          const resetTimer = setTimeout(() => {
            setShowConfetti(false)
            const restartTimer = setTimeout(() => {
              setIsComplete(false)
              setActiveStep(0)
              setProgress(0)
            }, 500)
          }, 4000)
        }
      }, 300) // Hold at 100% for 300ms
      return () => clearTimeout(waitTimer)
    }
  }, [progress, activeStep, isComplete])

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="py-12 sm:py-16 md:py-24 lg:py-32 px-3 sm:px-4 md:px-8 lg:px-12 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="text-xs sm:text-sm md:text-base text-primary font-semibold uppercase tracking-widest mb-2">
            Como usar o CineTube
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold px-2 leading-tight mb-3 sm:mb-4">
            Veja Como é Fácil Usar<br />
            <span className="text-primary">O Nosso Gerador de Vídeos</span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base mt-3 sm:mt-4 max-w-2xl mx-auto">
            O Aplicativo Funciona para Celular e Computador.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden lg:block" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {steps.map((step, index) => {
              const isActive = index === activeStep && !isComplete
              const isDone = index < activeStep || isComplete
              const StepIcon = step.icon

              const isLastCard = index === steps.length - 1

              return (
                <div
                  key={step.id}
                  className={`
                    relative h-full rounded-2xl p-6 sm:p-4 md:p-5 lg:p-6 min-h-[200px] sm:min-h-0 transition-all duration-500
                    ${isActive
                      ? "bg-gradient-to-b from-[#1a2a1a] to-[#0f1a0f] border-2 border-[#22c55e]/50 shadow-lg shadow-[#22c55e]/10 scale-[1.02] sm:scale-105 z-10"
                      : isDone
                        ? "bg-[#111] border border-[#22c55e]/30"
                        : "bg-[#0d0d0d] border border-white/5"
                    }
                  `}
                >
                  {/* Confetti only on last card when complete */}
                  {isLastCard && <CardConfetti active={showConfetti} />}

                  {/* Badge */}
                  <div
                    className={`
                      absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] sm:text-[10px] font-bold tracking-wider
                      flex items-center gap-1.5
                      ${step.badgeType === "ai"
                        ? "bg-[#ef4444] text-white"
                        : "bg-[#1a1a1a] border border-white/20 text-white"
                      }
                    `}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{step.badge}</span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`
                      w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-3 md:mb-4 rounded-xl flex items-center justify-center transition-all duration-300
                      ${isActive
                        ? "bg-[#22c55e]/20 text-[#22c55e]"
                        : isDone
                          ? "bg-[#22c55e]/10 text-[#22c55e]"
                          : "bg-white/5 text-muted-foreground"
                      }
                    `}
                  >
                    <StepIcon className="w-5 h-5 sm:w-5 sm:h-5" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`
                      font-[family-name:var(--font-display)] text-sm sm:text-xs md:text-sm lg:text-base font-bold text-center mb-2 sm:mb-2 transition-colors leading-tight
                      ${isActive ? "text-[#22c55e]" : isDone ? "text-[#22c55e]" : "text-[#22c55e]"}
                    `}
                  >
                    {step.title}
                  </h3>

                  {/* Subtitle or Tags */}
                  {step.tags && isActive ? (
                    <div className="flex flex-wrap justify-center gap-1 mb-2 sm:mb-4">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 sm:px-2 py-0.5 bg-white/10 rounded text-[8px] sm:text-[10px] text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs sm:text-[10px] md:text-xs text-muted-foreground text-center mb-3 sm:mb-4 leading-relaxed">
                      {step.subtitle}
                    </p>
                  )}

                  {/* Progress Bar or Checkmark */}
                  {isActive ? (
                    <div className="space-y-1 sm:space-y-2 mt-auto">
                      {/* Animação Visual Específica para o Passo 1 (Escolha) */}
                      {step.id === 1 && (
                        <div className="mb-3 relative h-16 w-full bg-[#050505] rounded-md border border-white/5 flex flex-col items-center justify-center overflow-hidden">
                          <div className="absolute top-1 left-2 text-[5px] text-white/20 uppercase font-mono tracking-widest">Escolha do Usuário</div>

                          {/* Simulação de Escolha de Filme */}
                          <div className="w-[90%] h-6 bg-white/5 rounded-md flex items-center px-2 mb-1.5 border border-white/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/5 opacity-0" style={{
                              animation: 'selection-blink 3s infinite'
                            }} />
                            <div className="text-[7px] text-primary font-mono whitespace-nowrap overflow-hidden translate-y-[0.5px]" style={{
                              animation: 'movie-select 3s infinite'
                            }}>
                              🎬 Gladiador II (2024)
                            </div>
                            <div className="ml-auto flex items-center gap-1 opacity-50">
                              <Check className="w-2 h-2 text-primary" />
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5" style={{
                            animation: 'fade-in-out 3s infinite'
                          }}>
                            <span className="text-[7px] text-white/60 font-mono uppercase tracking-tighter">Conteúdo selecionado com sucesso</span>
                          </div>

                          <style dangerouslySetInnerHTML={{
                            __html: `
                            @keyframes movie-select {
                              0%, 20% { opacity: 0; transform: translateY(5px); }
                              30%, 70% { opacity: 1; transform: translateY(0); }
                              80%, 100% { opacity: 0; transform: translateY(-5px); }
                            }
                            @keyframes selection-blink {
                              29% { opacity: 0; }
                              30% { opacity: 1; }
                              35% { opacity: 0; }
                            }
                            @keyframes fade-in-out {
                              0%, 40% { opacity: 0; }
                              50%, 80% { opacity: 1; }
                              90%, 100% { opacity: 0; }
                            }
                          ` }} />
                        </div>
                      )}
                      {/* Animação Visual Específica para o Passo 2 (Roteiro) */}
                      {step.id === 2 && (
                        <div className="mb-3 relative h-16 w-full bg-[#050505] rounded-md border border-white/5 flex flex-col items-center justify-center overflow-hidden">
                          <div className="absolute top-1 left-2 text-[5px] text-white/20 uppercase font-mono tracking-widest">Processando IA</div>

                          {/* Modelos de IA */}
                          <div className="flex gap-1 mb-1.5">
                            {['Claude 3.5', 'GPT-4o', 'Gemini Ultra'].map((model, i) => (
                              <div key={model} className="px-1.5 py-1 rounded bg-white/5 border border-white/10 text-[6px] text-white/60 font-mono flex items-center gap-1" style={{
                                animation: `model-pulse 1.33s ease-in-out infinite ${i * 0.44}s`
                              }}>
                                <Sparkles className="w-1.5 h-1.5" />
                                {model}
                              </div>
                            ))}
                          </div>

                          {/* Simulação de Escrita */}
                          <div className="w-[85%] space-y-1">
                            <div className="h-1 bg-primary/20 rounded-full overflow-hidden">
                              <div className="h-full bg-primary" style={{ animation: 'typing-bar 4s infinite' }} />
                            </div>
                            <div className="h-0.5 bg-white/5 rounded-full w-[60%]" />
                          </div>

                          <style dangerouslySetInnerHTML={{
                            __html: `
                            @keyframes model-pulse {
                              0%, 100% { opacity: 0.4; border-color: rgba(255,255,255,0.1); }
                              50% { opacity: 1; border-color: rgba(30,255,0,0.5); color: #1eff00; }
                            }
                            @keyframes typing-bar {
                              0% { width: 0; }
                              100% { width: 100%; }
                            }
                          ` }} />
                        </div>
                      )}

                      {/* Animação Visual Específica para o Passo 3 (Cortes) */}
                      {step.id === 3 && (
                        <div className="mb-3 relative h-16 w-full bg-[#050505] rounded-md border border-white/5 flex flex-col items-center justify-center overflow-hidden">
                          <div className="absolute top-1 left-2 text-[5px] text-white/20 uppercase font-mono tracking-widest">Renderizando IA</div>

                          {/* Timeline de Edição Simulação */}
                          <div className="w-[90%] h-8 relative flex flex-col gap-1">
                            {/* Track de Imagem */}
                            <div className="h-2 w-full bg-white/5 rounded-sm flex gap-0.5 overflow-hidden">
                              {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-full bg-primary/40 rounded-sm" style={{
                                  width: `${20 + Math.random() * 20}%`,
                                  animation: `edit-glow 2s ease-in-out infinite alternate ${i * 0.5}s`
                                }} />
                              ))}
                            </div>
                            {/* Track de Legenda */}
                            <div className="h-1.5 w-[70%] mx-auto bg-primary/20 rounded-full overflow-hidden relative">
                              <div className="h-full bg-primary/80" style={{ animation: 'subtitle-scroll 4s linear infinite' }} />
                            </div>
                            {/* Track de SFX */}
                            <div className="h-1 w-full bg-white/5 rounded-full flex gap-1 justify-around">
                              {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="w-1 h-1 bg-primary/30 rounded-full" style={{ animation: 'sfx-ping 2s infinite alternate' }} />
                              ))}
                            </div>
                          </div>

                          <style dangerouslySetInnerHTML={{
                            __html: `
                            @keyframes edit-glow {
                              0% { opacity: 0.3; filter: brightness(1); }
                              100% { opacity: 1; filter: brightness(1.5); }
                            }
                            @keyframes subtitle-scroll {
                              0% { transform: translateX(-100%); width: 30%; }
                              100% { transform: translateX(333%); width: 30%; }
                            }
                            @keyframes sfx-ping {
                              0% { transform: scale(0.8); opacity: 0.2; }
                              100% { transform: scale(1.5); opacity: 1; }
                            }
                          ` }} />
                        </div>
                      )}

                      <div className="flex items-center justify-between text-[8px] sm:text-[10px]">
                        <span className={`font-mono tracking-wider hidden sm:inline transition-colors duration-300 ${progress >= 100 ? "text-[#22c55e]" : "text-[#1eff00]"}`}>
                          {step.id === 1 ? "ESCOLHANDO FILME" : step.id === 2 ? "CRIANDO ROTEIRO" : step.id === 3 ? "FAZENDO CORTES" : step.id === 4 ? "PRONTO PARA POSTAR" : "PROCESSANDO"}
                        </span>
                        <span className={`font-mono sm:hidden transition-colors duration-300 ${progress >= 100 ? "text-[#22c55e]" : "text-[#1eff00]"}`}>...</span>
                        <span className={`font-mono transition-colors duration-300 ${progress >= 100 ? "text-[#22c55e]" : "text-[#1eff00]"}`}>{Math.round(progress)}%</span>
                      </div>

                      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-75 ${progress >= 100 ? "bg-[#22c55e]" : "bg-[#ef4444]"}`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <div
                        className={`
                          w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center transition-all duration-300
                          ${isDone
                            ? "bg-[#22c55e] text-white"
                            : "bg-white/5 border border-white/10"
                          }
                        `}
                      >
                        {isDone && <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Complete Message */}
        {isComplete && (
          <div className="text-center mt-6 sm:mt-8 md:mt-12 animate-fade-in mb-8">
            <div className="inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full px-4 sm:px-6 py-2 sm:py-3">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#22c55e]" />
              <span className="text-[#22c55e] font-bold text-xs sm:text-sm md:text-base">Pronto para publicar e monetizar!</span>
            </div>
          </div>
        )}

        {/* Result Highlight */}
        <div className="mt-12 sm:mt-16 md:mt-24 max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="font-[family-name:var(--font-display)] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight uppercase tracking-tight">
                SEUS VÍDEOS IRÃO FICAR <span className="text-primary">DESSE MESMO FORMATO</span>, <br className="hidden sm:block" />
                APENAS COM 1 APP E UM CLICK: <span className="text-primary">ASSIM</span>
              </h3>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 md:space-y-10">
              {/* Vídeo 1: Filme/Série */}
              <div className="relative pb-[56.25%] h-0 rounded-md md:rounded-lg overflow-hidden shadow-[0_20px_25px_-5px_hsl(var(--primary)/20%),0_10px_10px_-5px_hsl(var(--primary)/20%)] border-2 border-primary/50">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/lcJ8BVEo15U"
                  title="YouTube video player 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Vídeo 2: Desenho/Animação */}
              <div className="relative pb-[56.25%] h-0 rounded-md md:rounded-lg overflow-hidden shadow-[0_20px_25px_-5px_hsl(var(--primary)/20%),0_10px_10px_-5px_hsl(var(--primary)/20%)] border-2 border-primary/50">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/MAZ0mWdoUYI"
                  title="YouTube video player 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Vídeo 3: Anime */}
              <div className="relative pb-[56.25%] h-0 rounded-md md:rounded-lg overflow-hidden shadow-[0_20px_25px_-5px_hsl(var(--primary)/20%),0_10px_10px_-5px_hsl(var(--primary)/20%)] border-2 border-primary/50">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/ANnHwcWenR8"
                  title="YouTube video player 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
