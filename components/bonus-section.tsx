"use client"

import type React from "react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const bonuses = [
  "/images/bonus1.png",
  "/images/bonus2.png",
  "/images/bonus3.png",
  "/images/bonus4.png",
]

export function BonusSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const offerSection = document.getElementById("offer-section")
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollSpeed = 0.5 // pixels per frame

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

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const updateScrollButtons = () => {
      setCanScrollLeft(scrollContainer.scrollLeft > 0)
      setCanScrollRight(scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth - 10)
    }

    scrollContainer.addEventListener("scroll", updateScrollButtons)
    updateScrollButtons()

    return () => scrollContainer.removeEventListener("scroll", updateScrollButtons)
  }, [])

  return (
    <section className="py-8 sm:py-10 md:py-16 px-3 sm:px-4 bg-[hsl(220,20%,10%)] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-4 sm:mb-6 md:mb-10">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-[family-name:var(--font-display)] font-bold mb-4 max-w-3xl mx-auto leading-tight px-2 text-primary">
              + 4 BONUS EXCLUSIVOS COMPRANDO <span className="text-primary">SOMENTE HOJE:</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto relative group">
          {/* Carousel Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden gap-2 sm:gap-4 md:gap-6 pb-4 px-2 sm:px-4 md:px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {bonuses.map((src, index) => (
              <div key={index} className="flex-shrink-0 w-[75%] sm:w-[70%] md:w-[45%]">
                <div className="transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Bonus Exclusivo ${(index % bonuses.length) + 1}`}
                    width={800}
                    height={400}
                    className="rounded-md md:rounded-lg shadow-xl w-full h-auto border border-transparent hover:border-primary/50 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for auto-scroll loop but without animations to avoid clutter */}
            {bonuses.map((src, index) => (
              <div
                key={`loop-${index}`}
                className="flex-shrink-0 w-[75%] sm:w-[70%] md:w-[45%]"
              >
                <div className="transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Bonus Exclusivo ${(index % bonuses.length) + 1}`}
                    width={800}
                    height={400}
                    className="rounded-md md:rounded-lg shadow-xl w-full h-auto border border-transparent hover:border-primary/50 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8 md:mt-12">
          <a
            href="#offer-section"
            onClick={scrollToOffer}
            className="inline-flex items-center px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-primary-foreground rounded-md hover:opacity-90 transition-opacity animate-yellow-pulse bg-[rgba(43,255,0,1)]"
          >
            QUERO GARANTIR MEUS BONUS AGORA
          </a>
        </div>
      </div>
    </section>
  )
}
