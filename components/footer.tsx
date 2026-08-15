import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-slate-200 bg-slate-50">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex flex-col items-center justify-center mb-4 sm:mb-6 overflow-hidden max-w-full">
          <pre className="text-[5px] sm:text-[7px] md:text-[9px] leading-[1.1] font-bold text-primary mb-2 font-mono" style={{ textShadow: '0 0 5px rgba(0, 163, 255, 0.3)' }}>
{`
██╗    ██╗██╗███╗   ██╗████████╗██╗   ██╗██████╗ ███████╗
██║    ██║██║████╗  ██║╚══██╔══╝██║   ██║██╔══██╗██╔════╝
██║ █╗ ██║██║██╔██╗ ██║   ██║   ██║   ██║██████╔╝█████╗  
██║███╗██║██║██║╚██╗██║   ██║   ██║   ██║██╔══██╗██╔══╝  
╚███╔███╔╝██║██║ ╚████║   ██║   ╚██████╔╝██████╔╝███████╗
 ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚═════╝ ╚══════╝
`}
          </pre>
          <div className="flex flex-col items-center gap-1 text-[8px] sm:text-[10px] text-slate-500 tracking-[0.2em] uppercase font-mono">
            <p>v2.0.0 · APLICATIVO GERADOR DE VÍDEOS · 2026</p>
            <p className="flex items-center gap-2 text-primary font-bold">
              wintube
            </p>
          </div>
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
