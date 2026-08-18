"use client"

import Image from "next/image"
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
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight uppercase">
              VEJA OS RESULTADOS DE QUEM DECIDIU <span className="text-wt-blue">AGIR</span>
            </h2>
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
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-50 pointer-events-none p-2">
                <Image
                  src={src}
                  alt={`Feedback de aluno ${i + 1}`}
                  width={400}
                  height={500}
                  className="w-full h-auto object-contain rounded-lg"
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
