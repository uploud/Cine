import { Sparkles } from "lucide-react"

export function Marquee() {
  const items = [
    "Escolha seu filme ou série e a IA gera o seu vídeo completo.",
    "WINTUBE",
    "MONETIZE SEU CANAL",
  ]

  return (
    <div className="bg-slate-50 border-y border-slate-200 py-3 overflow-hidden whitespace-nowrap">
      <div className="flex animate-scroll">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex">
            {items.map((item, j) => (
              <span
                key={`${i}-${j}`}
                className="flex items-center gap-4 font-medium text-sm sm:text-base tracking-wide text-slate-600 px-8"
              >
                {item}
                <Sparkles className="w-4 h-4 text-primary/40" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
