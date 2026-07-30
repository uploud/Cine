export function Marquee() {
  const items = [
    "Perfis no piloto automático",
    "WINTUBE",
    "MONETIZE SEU PERFIL",
  ]

  return (
    <div className="bg-slate-50 border-y border-slate-200 py-3 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex">
            {items.map((item, j) => (
              <span
                key={`${i}-${j}`}
                className="flex items-center gap-6 font-[family-name:var(--font-display)] font-semibold text-sm sm:text-base tracking-wider text-slate-500 uppercase px-6 sm:px-8"
              >
                {item}
                <span className="text-primary/30 text-lg" aria-hidden="true">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
