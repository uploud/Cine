import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-8 md:py-10 px-4 md:px-12 border-t border-[rgba(255,215,0,0.15)] flex flex-col md:flex-row items-center justify-between gap-5">
      <div className="flex items-center">
        <Image 
          src="/logo-cinetube.png" 
          alt="Cinetube.IA" 
          width={150} 
          height={40} 
          className="h-8 md:h-10 w-auto object-contain"
        />
      </div>
      <p className="text-xs text-muted-foreground">
        &copy; 2025 CineTube.IA — Todos os direitos reservados
      </p>
    </footer>
  )
}
