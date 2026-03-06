import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-8 md:py-10 px-4 md:px-12 border-t border-[rgba(255,215,0,0.15)] flex flex-col md:flex-row items-center justify-between gap-5">
      <div className="flex items-center gap-3">
        <span className="font-[family-name:var(--font-display)] text-lg font-black text-white tracking-tighter">
          CINETUBE<span className="text-primary">.IA</span>
        </span>
      </div>
      <p className="text-xs text-muted-foreground">
        &copy; 2025 CineTube.IA — Todos os direitos reservados
      </p>
    </footer>
  )
}
