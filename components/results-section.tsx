"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const feedbacks = [
  "/images/results/result1.jpg",
  "/images/results/result2.jpg",
  "/images/results/result3.jpg",
  "/images/results/result4.png",
  "/images/feedbacks/fb1.png",
  "/images/feedbacks/fb2.jpg",
  "/images/feedbacks/fb3.jpg",
  "/images/feedbacks/fb4.jpg",
  "/images/feedbacks/fb5.png",
]

export function ResultsSection() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  return (
    <>
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-xs sm:text-sm text-primary font-semibold uppercase tracking-widest mb-3">
                Resultados
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                Veja os Resultados de Quem{" "}
                <span className="text-primary">Decidiu Agir</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {feedbacks.map((src, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 60} duration={500}>
                <button
                  onClick={() => setLightboxSrc(src)}
                  className="block w-full rounded-lg overflow-hidden border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label={`Ver feedback ${i + 1} em tamanho maior`}
                >
                  <Image
                    src={src}
                    alt={`Feedback de aluno ${i + 1}`}
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização de feedback em tamanho grande"
        >
          <button
            onClick={() => setLightboxSrc(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Fechar visualização"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-2xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxSrc}
              alt="Feedback em tamanho grande"
              width={800}
              height={1000}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  )
}
