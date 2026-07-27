import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-8 md:py-10 px-4 md:px-12 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-5 bg-slate-50">
      <div className="flex items-center">
        <Image 
          src="/logo.png" 
          alt="Wintube" 
          width={150} 
          height={40} 
          className="h-8 md:h-10 w-auto object-contain"
        />
      </div>
      <div className="flex flex-col items-center md:items-end text-center md:text-right gap-1">
        <p className="text-xs text-slate-500">
          &copy; 2026 Wintube — Todos os direitos reservados
        </p>
        <p className="text-[10px] text-slate-400 italic">
          "Tudo posso naquele que me fortalece." - Filipenses 4:13
        </p>
      </div>
    </footer>
  )
}
