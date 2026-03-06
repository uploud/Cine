"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Recursos", href: "#como-funciona" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Exemplos", href: "#exemplos" },
  { label: "Precos", href: "#offer-section" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById("offer-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-2">
        <Link href="/" className="flex items-center gap-1">
          <span className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-black text-white tracking-tighter">
            CINETUBE<span className="text-primary">.IA</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-[#999] hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#offer-section"
            onClick={handleCtaClick}
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded hover:opacity-90 transition-all"
          >
            COMECAR AGORA
          </a>
          <button
            id="mobile-menu-button"
            className="md:hidden text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="md:hidden bg-[#0a0a0a] border-t border-white/5 px-4 py-4 hidden">
        <nav className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-[#999] hover:text-white transition-colors py-2 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#offer-section"
            onClick={handleCtaClick}
            className="mt-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-xs tracking-wider uppercase px-5 py-3 rounded hover:opacity-90 transition-all"
          >
            COMECAR AGORA
          </a>
        </nav>
      </div>
    </header>
  )
}
