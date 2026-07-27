import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-background py-12 text-center border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Wintube" 
            width={150} 
            height={40} 
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; 2026 WinTube — Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
