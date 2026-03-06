"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade-in" | "zoom-in" | "slide-up"
  delay?: number
  duration?: number
  threshold?: number
}

export function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.12,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      },
    )

    if (ref.current) observer.observe(ref.current)
    return () => { if (ref.current) observer.unobserve(ref.current) }
  }, [threshold])

  const hidden: Record<string, string> = {
    "fade-up": "opacity-0 translate-y-12",
    "fade-down": "opacity-0 -translate-y-12",
    "fade-left": "opacity-0 -translate-x-12",
    "fade-right": "opacity-0 translate-x-12",
    "fade-in": "opacity-0",
    "zoom-in": "opacity-0 scale-90",
    "slide-up": "opacity-0 translate-y-20",
  }

  return (
    <div
      ref={ref}
      className={`
        ${className}
        ${isVisible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : hidden[animation]}
        transition-all ease-out will-change-transform
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
