"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = "wiskills-oferta-24h-fim"
const DURATION_MS = 24 * 60 * 60 * 1000

// Cada visitante tem 24h a partir da primeira visita; ao recarregar a página o tempo continua de onde parou.
function getDeadline() {
  try {
    const saved = Number(localStorage.getItem(STORAGE_KEY))
    if (saved && saved > Date.now()) return saved
    const deadline = Date.now() + DURATION_MS
    localStorage.setItem(STORAGE_KEY, String(deadline))
    return deadline
  } catch {
    return Date.now() + DURATION_MS
  }
}

const pad = (n: number) => String(n).padStart(2, "0")

export function OfferCountdown() {
  const [remaining, setRemaining] = useState<number | null>(null)

  useEffect(() => {
    const deadline = getDeadline()
    const tick = () => setRemaining(Math.max(0, deadline - Date.now()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const total = Math.floor((remaining ?? DURATION_MS) / 1000)
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60

  return (
    <div className="mt-4 inline-flex flex-col items-center rounded-xl bg-red-50 border border-red-200 px-5 py-3">
      <span className="text-[11px] font-bold uppercase tracking-widest text-red-500">esta oferta termina em</span>
      <span className="font-mono font-black text-red-600 text-2xl sm:text-3xl tabular-nums mt-1">
        {pad(h)}<span className="text-sm font-bold">horas</span> {pad(m)}<span className="text-sm font-bold">min</span> {pad(s)}<span className="text-sm font-bold">seg</span>
      </span>
    </div>
  )
}
