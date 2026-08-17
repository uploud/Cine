"use client"

import React, { useState, useEffect, useRef } from "react"
import { Loader2 } from "lucide-react"

const WORDS = ["YouTube", "Twitch", "podcast", "Instagram", "TikTok", "live"]
const URL_REGEX = /^(https?:\/\/|www\.)\S+\.\S+/i

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle")
  
  const [url, setUrl] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [errorShake, setErrorShake] = useState(false)
  
  // Pipeline states
  const [step, setStep] = useState(0)
  const [statusMessage, setStatusMessage] = useState("")
  const [demoStep, setDemoStep] = useState(1)
  
  const inputRef = useRef<HTMLInputElement>(null)
  const timersRef = useRef<NodeJS.Timeout[]>([])

  // Word Animation cycle
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const setSafeTimeout = (cb: () => void, ms: number) => {
      const id = setTimeout(cb, ms)
      timersRef.current.push(id)
      return id
    }

    if (phase === "idle") {
      setSafeTimeout(() => setPhase("exit"), 2200)
    } else if (phase === "exit") {
      setSafeTimeout(() => {
        setWordIndex((prev) => (prev + 1) % WORDS.length)
        setPhase("enter")
      }, 380)
    } else if (phase === "enter") {
      setSafeTimeout(() => setPhase("idle"), 420)
    }

    return () => {
      timersRef.current.forEach(clearTimeout)
      timersRef.current = []
    }
  }, [phase])

  // Infinite demo animation for the chips
  useEffect(() => {
    if (isProcessing) return
    const interval = setInterval(() => {
      setDemoStep(prev => (prev % 4) + 1)
    }, 800)
    return () => clearInterval(interval)
  }, [isProcessing])

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (isProcessing) return
    
    if (!url.trim()) {
      const oferta = document.getElementById("offer-section")
      if (oferta) {
        oferta.scrollIntoView({ behavior: "smooth" })
      }
      return
    }

    if (!URL_REGEX.test(url.trim())) {
      setErrorShake(true)
      setStatusMessage("cola um link de vídeo pra ver rodando")
      inputRef.current?.focus()
      setTimeout(() => setErrorShake(false), 380)
      return
    }
    
    setIsProcessing(true)
    setStep(1)
    
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const interval = prefersReducedMotion ? 120 : 620
    
    const steps = [
      "baixando o vídeo em 4K",
      "transcrevendo o áudio",
      "cortando os melhores momentos",
      "legendando palavra por palavra"
    ]
    
    let currentStep = 1
    setStatusMessage(steps[0])
    
    const runStep = () => {
      setTimeout(() => {
        if (currentStep < 4) {
          currentStep++
          setStep(currentStep)
          setStatusMessage(steps[currentStep - 1])
          runStep()
        } else {
          setStep(5)
          setStatusMessage("12 vídeos gerados a partir desse link — em 3 min e 40s")
          setTimeout(() => {
            setIsProcessing(false)
            setStep(0)
            setStatusMessage("")
            setUrl("")
            const oferta = document.getElementById("offer-section")
            if (oferta) {
              oferta.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" })
            }
          }, 900)
        }
      }, interval)
    }
    
    runStep()
  }

  const currentChipStep = isProcessing ? step : demoStep

  return (
    <>
      <section className="relative w-full bg-wt-bg overflow-hidden min-h-screen flex flex-col items-center justify-center px-4 py-20">
        {/* Background Layers */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `
            radial-gradient(900px 520px at 12% 88%, rgba(76,141,247,0.20), transparent 60%),
            radial-gradient(760px 480px at 78% 8%, rgba(106,46,240,0.20), transparent 60%)
          `
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.028) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(700px 460px at 50% 50%, #000 10%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(700px 460px at 50% 50%, #000 10%, transparent 78%)"
        }} />

        <div className="relative z-10 max-w-[1180px] mx-auto flex flex-col items-center text-center">
          
          {/* H1 */}
          <h1 className="font-mono font-[800] text-wt-ink leading-[1.14] tracking-[-.02em] uppercase max-w-5xl flex flex-wrap justify-center items-baseline gap-x-3"
              style={{ fontSize: "clamp(28px, 5.2vw, 60px)" }}>
            <span>TRANSFORME UM LINK DO</span>
            <span 
              className="inline-flex justify-center overflow-hidden"
              style={{ width: "9ch" }}
            >
              <span 
                className="bg-clip-text text-transparent bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)] pb-1"
                style={{
                  transition: "opacity 380ms, transform 380ms, filter 380ms",
                  opacity: phase === "exit" ? 0 : phase === "enter" ? 0 : 1,
                  transform: phase === "exit" ? "translateY(-0.18em)" : phase === "enter" ? "translateY(0.18em)" : "translateY(0)",
                  filter: phase === "exit" ? "blur(7px)" : phase === "enter" ? "blur(7px)" : "blur(0)",
                }}
              >
                {WORDS[wordIndex].toUpperCase()}
              </span>
            </span>
            <span>EM VÍDEOS PRONTOS PRA MONETIZAR</span>
          </h1>

          {/* Sub */}
          <p className="font-sans text-wt-muted max-w-[52ch] mt-6 mx-auto" style={{ fontSize: "clamp(14px, 1.5vw, 17px)" }}>
            COLE O LINK DE <strong className="text-wt-blue font-semibold">FILMES, ANIMES, SERIES, PODCASTS.</strong> O WinTube baixa, transcreve, corta os melhores momentos e legenda sozinho. Posta dezenas de vídeos em minutos, sem mensalidade e sem limite de uso.
          </p>

          {/* Input Pill */}
          <form 
            onSubmit={handleSubmit}
            className={`w-full max-w-[640px] mt-10 sm:mt-12 mx-auto group ${errorShake ? "animate-shake-error" : ""}`}
          >
            <div className="flex flex-col sm:flex-row bg-[#0B0E18] border border-[#1F2537] rounded-[14px] p-2 sm:pl-[18px] sm:pr-2 sm:py-2 focus-within:border-[#375089] focus-within:shadow-[0_0_0_4px_rgba(76,141,247,0.12)] transition-all">
              <input 
                ref={inputRef}
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={isProcessing}
                placeholder="Cole aqui o link do video..."
                aria-label="Link do vídeo"
                className="flex-1 bg-transparent border-none outline-none font-mono text-[14px] text-wt-ink placeholder-[#4E566E] disabled:opacity-50 p-3 sm:p-0 mb-2 sm:mb-0 text-center sm:text-left"
              />
              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full sm:w-auto bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)] text-white font-mono font-[700] text-[14px] rounded-[10px] px-[22px] py-[14px] shadow-[0_10px_30px_-14px_rgba(76,141,247,0.9)] hover:opacity-90 disabled:opacity-50 transition-opacity whitespace-nowrap"
              >
                Gerar videos agora
              </button>
            </div>
          </form>

          {/* Chips */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {["baixando", "transcrevendo", "cortando", "legendando"].map((chipName, idx) => {
              const chipIndex = idx + 1
              let chipState = "apagado"
              
              if (currentChipStep === chipIndex) {
                chipState = "ativo"
              } else if (isProcessing && currentChipStep > chipIndex) {
                chipState = "feito"
              }
              
              const isAtivo = chipState === "ativo"
              const isFeito = chipState === "feito"

              return (
                <div 
                  key={chipName} 
                  className={`font-mono text-[11px] rounded-full px-[12px] py-[6px] border transition-colors duration-300 ${
                    isAtivo 
                      ? "text-white border-[#375089] bg-[#0E1526]" 
                      : isFeito 
                        ? "text-[#8FA6D8] border-[#1F2C48] bg-transparent"
                        : "text-[#5A6480] border-[#1B2132] opacity-35 bg-transparent"
                  }`}
                >
                  {chipName}
                </div>
              )
            })}
          </div>

          {/* Status Line */}
          <div 
            className="mt-4 min-h-[20px] font-mono text-[12px] flex justify-center items-center gap-2" 
            role="status" 
            aria-live="polite"
          >
            {errorShake && (
              <span className="text-[#F2B65A]">{statusMessage}</span>
            )}
            {isProcessing && step > 0 && step < 5 && !errorShake && (
              <>
                <Loader2 className="w-3 h-3 text-wt-blue animate-spin" />
                <span className="text-wt-ink">{statusMessage}</span>
              </>
            )}
            {isProcessing && step === 5 && (
              <>
                <div className="w-[8px] h-[8px] rounded-full bg-[#33D17A] shadow-[0_0_8px_rgba(51,209,122,0.8)]" />
                <span className="text-wt-ink">{statusMessage}</span>
              </>
            )}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 font-mono text-[12px] text-wt-muted mt-8">
            <span className="text-[#E8ECF8]">pagamento único</span>
            <span className="text-[#2A3145]">·</span>
            <span className="text-[#E8ECF8]">acesso vitalício</span>
            <span className="text-[#2A3145]">·</span>
            <span>sem assinatura</span>
            <span className="text-[#2A3145]">·</span>
            <span className="text-white">195 criadores usando</span>
          </div>

        </div>
      </section>
    </>
  )
}
