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
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 h-16 sm:h-20">
      <div className="relative h-full px-4 md:px-8 lg:px-12 flex items-center justify-center">
        {/* Logo centralizada perfeitamente */}
        <Link href="/" className="inline-block">
          <Image 
            src="/logo-cinetube.png" 
            alt="Cinetube.IA" 
            width={180} 
            height={50} 
            className="h-10 sm:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Botão lateral absoluto no desktop para não tirar a logo do centro */}
        <div className="absolute right-4 md:right-8 lg:right-12 hidden md:block">
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
