export function Marquee() {
  const items = [
    "Mande Seus VIDEOS sua ideia.",
    "A IA cuida do roteiro, voz, edição e legendas.",
    "TUDO EM PILOTO AUTOMÁTICO",
    "CINETUBE.IA",
    "MONETIZE SEU CANAL",
  ]

  return (
    <div className="bg-primary py-2.5 overflow-hidden whitespace-nowrap">
      <div className="flex animate-scroll">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex">
            {items.map((item, j) => (
              <span
                key={`${i}-${j}`}
                className="font-mono text-xs font-bold tracking-widest text-black px-8"
              >
                {item} <span className="text-black/40 mx-3">&#10022;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
