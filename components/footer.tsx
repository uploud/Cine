import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-8 md:py-10 px-4 md:px-12 border-t border-[rgba(0,163,255,)] flex flex-col md:flex-row items-center justify-between gap-5">
      <div className="flex items-center">
        <Image 
          src="/logo.png" 
          alt="Wintube" 
          width={150} 
          height={40} 
          className="h-8 md:h-10 w-auto object-contain"
        />
      </div>
      <p className="text-xs text-muted-foreground">
        &copy; 2025 Wintube — Todos os direitos reservados
      </p>
    </footer>
  )
}
