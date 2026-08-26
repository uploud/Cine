export function Marquee() {
  const items = [
    "PAGAMENTO ÚNICO",
    "ACESSO VITALÍCIO",
    "CANAL NO YOUTUBE",
    "CANAL NO TIKTOK",
    "CANAL DE CORTES",
    "SEM APARECER",
    "SEM GRAVAR A VOZ",
    "SEM EDITAR",
    "VÍDEO LONGO E SHORTS",
    "MINIATURA PRONTA",
    "TÍTULO E DESCRIÇÃO PRONTOS",
    "0 CUSTO POR VÍDEO"
  ]

  return (
    <div className="bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)] border-y border-wt-blue/20 py-4 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex">
            {items.map((item, j) => (
              <span
                key={`${i}-${j}`}
                className="flex items-center gap-6 font-mono font-bold text-base sm:text-lg tracking-wider text-white uppercase px-6 sm:px-8"
              >
                {item}
                <span className="text-white/30 text-lg" aria-hidden="true">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
