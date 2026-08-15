"use client"

import { useEffect, useState } from "react"

export function WintubeBoot() {
  const [booting, setBooting] = useState(true)
  const [textStage, setTextStage] = useState(0)

  useEffect(() => {
    // Sequência de boot animada
    const timers = [
      setTimeout(() => setTextStage(1), 500),
      setTimeout(() => setTextStage(2), 1200),
      setTimeout(() => setTextStage(3), 2000),
      setTimeout(() => setBooting(false), 3500), // Tempo total do boot
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  if (!booting) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-[#050505] text-[#00A3FF] flex flex-col items-center justify-center font-mono overflow-hidden selection:bg-[#00A3FF] selection:text-black">
      {/* Efeito de scanline (linhas de TV CRT) */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10" />
      
      {/* Vinheta escura nas bordas */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.9)] z-10" />

      <div className="relative z-20 flex flex-col items-center w-full max-w-4xl px-4 animate-pulse-slow" style={{ textShadow: '0 0 10px rgba(0, 163, 255, 0.7)' }}>
        
        {/* Container do Logo + ASCII */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12 transform scale-75 sm:scale-100">
          
          {/* Símbolo / Mascote em ASCII */}
          <pre className="text-[8px] sm:text-[10px] leading-tight font-bold hidden md:block">
{`
      ████████      
    ████████████    
  ████        ████  
  ████  ████  ████  
  ████   ██   ████  
  ████  ████  ████  
  ████        ████  
    ████████████    
      ████████      
`}
          </pre>

          {/* Nome WINTUBE em ASCII Block */}
          <pre className="text-[8px] sm:text-[10px] md:text-xs leading-[1.1] font-bold">
{`
██╗    ██╗██╗███╗   ██╗████████╗██╗   ██╗██████╗ ███████╗
██║    ██║██║████╗  ██║╚══██╔══╝██║   ██║██╔══██╗██╔════╝
██║ █╗ ██║██║██╔██╗ ██║   ██║   ██║   ██║██████╔╝█████╗  
██║███╗██║██║██║╚██╗██║   ██║   ██║   ██║██╔══██╗██╔══╝  
╚███╔███╔╝██║██║ ╚████║   ██║   ╚██████╔╝██████╔╝███████╗
 ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚═════╝ ╚══════╝
`}
          </pre>
        </div>

        {/* Informações de Sistema */}
        <div className="flex flex-col items-center gap-4 text-xs sm:text-sm tracking-[0.2em] uppercase opacity-90">
          {textStage >= 1 && (
            <p className="animate-fade-in">v2.0.0 · INTELIGÊNCIA ARTIFICIAL · 2026</p>
          )}
          
          {textStage >= 2 && (
            <p className="flex items-center gap-2 animate-fade-in text-white">
              <span className="text-[#00A3FF]">$</span> wintube --boot
              <span className="inline-block w-2 h-4 bg-white animate-blink" />
            </p>
          )}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}} />
    </div>
  )
}
