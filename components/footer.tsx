import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-slate-200 bg-slate-50">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="bg-[#0a0a0a] rounded-xl border border-slate-800 p-6 sm:p-8 mb-6 max-w-[95vw] sm:max-w-3xl overflow-x-auto relative flex flex-col items-center justify-center shadow-2xl">
          {/* Efeito Scanline */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(0,163,255,0.06),rgba(0,0,0,0.02),rgba(0,0,0,0.06))] bg-[length:100%_4px,3px_100%] z-10 rounded-xl" />
          
          <div className="relative z-20 flex flex-col items-center w-full min-w-max">
            <pre className="text-[6px] sm:text-[8px] md:text-[10px] leading-[1.1] font-bold text-[#00A3FF] mb-4" style={{ textShadow: '0 0 10px rgba(0, 163, 255, 0.7)' }}>
{`
██╗    ██╗██╗███╗   ██╗████████╗██╗   ██╗██████╗ ███████╗
██║    ██║██║████╗  ██║╚══██╔══╝██║   ██║██╔══██╗██╔════╝
██║ █╗ ██║██║██╔██╗ ██║   ██║   ██║   ██║██████╔╝█████╗  
██║███╗██║██║██║╚██╗██║   ██║   ██║   ██║██╔══██╗██╔══╝  
╚███╔███╔╝██║██║ ╚████║   ██║   ╚██████╔╝██████╔╝███████╗
 ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚═════╝ ╚══════╝
`}
            </pre>
            
            <div className="flex flex-col items-center gap-3 text-[9px] sm:text-[10px] md:text-xs text-[#00A3FF] tracking-[0.2em] uppercase font-mono mt-2">
              <p>v2.0.0 · INTELIGÊNCIA ARTIFICIAL · 2026</p>
              <p className="flex items-center gap-2 text-white">
                <span className="text-[#00A3FF]">$</span> wintube --boot
                <span className="inline-block w-1.5 h-3 sm:w-2 sm:h-4 bg-white animate-[blink_1s_step-end_infinite]" />
              </p>
            </div>
          </div>
          <style dangerouslySetInnerHTML={{
            __html: \`
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0; }
            }
          \`}} />
        </div>
        <p className="text-xs text-slate-500 font-medium mt-2">
          &copy; 2026 Wintube - Todos os direitos reservados
        </p>
        <p className="text-[11px] text-slate-400 italic max-w-xs">
          "Tudo posso naquele que me fortalece." - Filipenses 4:13
        </p>
      </div>
    </footer>
  )
}
