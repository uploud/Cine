"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const feedbacks = [
  "/images/results/result1.jpg",
  "/images/results/result2.jpg",
  "/images/results/result3.jpg",
  "/images/results/result4.png",
]

export function CommunitySection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollSpeed = 1

    const autoScroll = () => {
      if (!scrollContainer) return

      scrollAmount += scrollSpeed
      scrollContainer.scrollLeft = scrollAmount

      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0
      }

      requestAnimationFrame(autoScroll)
    }

    const animationId = requestAnimationFrame(autoScroll)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="py-24 bg-card border-b border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Resultados da Comunidade
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conheça criadores que já estão colhendo frutos usando nossa ferramenta.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden gap-6 pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...feedbacks, ...feedbacks].map((feedback, index) => (
              <div key={index} className="flex-shrink-0 w-[70%] sm:w-[50%] md:w-[30%]">
                <Image
                  src={feedback || "/placeholder.svg"}
                  alt={`Feedback ${index + 1}`}
                  width={400}
                  height={600}
                  className="w-full h-auto object-contain rounded-2xl border border-border shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
