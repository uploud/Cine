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
    let animationId: number
    let isVisible = false

    const autoScroll = () => {
      if (!scrollContainer || !isVisible) return

      scrollAmount += scrollSpeed
      scrollContainer.scrollLeft = scrollAmount

      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0
      }

      animationId = requestAnimationFrame(autoScroll)
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        isVisible = true
        animationId = requestAnimationFrame(autoScroll)
      } else {
        isVisible = false
        if (animationId) cancelAnimationFrame(animationId)
      }
    }, { threshold: 0.1 })

    observer.observe(scrollContainer)

    return () => {
      observer.disconnect()
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-900 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-black mb-4 tracking-tight uppercase text-white">
            GRUPO / COMUNIDADE <span className="text-wt-blue">WINTUBE</span>
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Faça parte da nossa comunidade exclusiva e troque experiências com outros criadores que também estão crescendo e monetizando seus canais dark.
          </p>
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
