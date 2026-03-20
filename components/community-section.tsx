"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const feedbacks = [
  "/images/feedbacks/fb1.png",
  "/images/feedbacks/fb2.jpg",
  "/images/feedbacks/fb3.jpg",
  "/images/feedbacks/fb4.jpg",
  "/images/feedbacks/fb5.png",
]

export function CommunitySection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollSpeed = 1 // pixels per frame

    const autoScroll = () => {
      if (!scrollContainer) return

      scrollAmount += scrollSpeed
      scrollContainer.scrollLeft = scrollAmount

      // Reset when reaching the end
      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0
      }

      requestAnimationFrame(autoScroll)
    }

    const animationId = requestAnimationFrame(autoScroll)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="py-10 sm:py-12 md:py-16 px-3 sm:px-4 bg-[hsl(220,20%,5%)] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-[family-name:var(--font-display)] font-bold mb-3 sm:mb-4 max-w-3xl mx-auto px-2">
            Veja os Resultados de Quem Decidiu Agir
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden gap-3 sm:gap-4 pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...feedbacks, ...feedbacks].map((feedback, index) => (
              <div key={index} className="flex-shrink-0 w-[70%] sm:w-[60%] md:w-[40%]">
                <Image
                  src={feedback || "/placeholder.svg"}
                  alt={`Feedback ${index + 1}`}
                  width={400}
                  height={600}
                  className="w-full h-auto object-contain rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
