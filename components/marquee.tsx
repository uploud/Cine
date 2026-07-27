import { Sparkles } from "lucide-react"

export function Marquee() {
  const items = [
    "Escolha seu filme ou série e a IA gera o seu vídeo completo.",
    "WINTUBE",
    "MONETIZE SEU CANAL",
  ]

  return (
    <div className="bg-primary/5 border-y border-primary/20 py-3 overflow-hidden whitespace-nowrap">
      <div className="flex animate-scroll">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, j) => (
              <span
                key={`${i}-${j}`}
                className="font-sans text-sm font-medium tracking-wide text-primary-foreground/80 px-8 flex items-center gap-4"
              >
                {item}
                <Sparkles className="w-4 h-4 text-primary" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
