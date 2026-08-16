"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const feedbacks = [
  "/images/results/result1.jpg",
  "/images/results/result2.jpg",
  "/images/results/result3.jpg",
  "/images/results/result4.png",
  "/images/feedbacks/fb2.jpg",
  "/images/feedbacks/fb3.jpg",
  "/images/feedbacks/fb4.jpg",
  "/images/feedbacks/fb5.png",
]

export function ResultsSection() {
  return (
    <section className="py-8 sm:py-12 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm text-primary font-semibold uppercase tracking-widest mb-3">
              PROVA REAL
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight uppercase">
              quem usa já está <span className="text-primary">lucrando</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
              Esses são resultados reais de quem já vive da monetização das plataformas.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden pb-6 mb-12">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...feedbacks, ...feedbacks].map((src, i) => (
            <div 
              key={i} 
              className="w-[280px] sm:w-[320px] md:w-[380px] shrink-0 mx-2 sm:mx-3"
            >
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white pointer-events-none">
                <Image
                  src={src}
                  alt={`Feedback de aluno ${i + 1}`}
                  width={400}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        `}} />
      </div>


    </section>
  )
}
