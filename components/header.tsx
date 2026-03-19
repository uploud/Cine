"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById("offer-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-3">
        {/* Logo centralizada no mobile e esquerda no desktop (ajustado para centralizar conforme pedido) */}
        <div className="flex-1 flex justify-center md:justify-start">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo-cinetube.png" 
              alt="Cinetube.IA" 
              width={150} 
              height={40} 
              className="h-8 sm:h-10 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Botão lateral que some no mobile ou fica discreto? O usuário pediu para centralizar a logo. 
            Vou deixar o CTA apenas no desktop para manter a logo centralizada no mobile. */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#offer-section"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded hover:opacity-90 transition-all"
          >
            COMECAR AGORA
          </a>
        </div>
      </div>
    </header>
  )
}
  )
}
