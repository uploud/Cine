import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-10 md:py-14 px-4 border-t border-slate-200 flex flex-col items-center justify-center gap-5 bg-slate-50">
      <Image 
        src="https://i.imgur.com/tqVJPWa.png" 
        alt="Wintube" 
        width={150} 
        height={40} 
        className="h-8 md:h-10 w-auto object-contain mb-2"
      />
      <div className="flex flex-col items-center text-center gap-2">
        <p className="text-xs text-slate-500 font-medium">
          &copy; 2026 Wintube — Todos os direitos reservados
        </p>
        <p className="text-[11px] text-slate-400 italic">
          "Tudo posso naquele que me fortalece." - Filipenses 4:13
        </p>
      </div>
    </footer>
  )
}
