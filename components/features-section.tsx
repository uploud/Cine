import { Download, FileText, Scissors, Layers, Music, Share2 } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const features = [
  {
    title: "WinTube",
    description: "Vídeos de filmes, séries e animes. O vídeo longo do seu canal.",
    imgSrc: "https://i.imgur.com/ROnfolB.png",
    check: "✓ Automático, sem limites"
  },
  {
    title: "ClipCash",
    description: "Dezenas de cortes virais em segundos, pro Shorts, TikTok e Reels.",
    imgSrc: "https://i.imgur.com/p8R31IH.png",
    check: "✓ Automático, sem limites"
  },
  {
    title: "StickReel",
    description: "Vídeos com bonecos palito sem rosto, sobre qualquer ideia, em minutos.",
    imgSrc: "https://i.imgur.com/tlQ9Qrq.png",
    check: "✓ Automático, sem limites"
  },
]

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <ScrollReveal animation="fade-up" duration={700}>
            <p className="text-xs sm:text-sm text-wt-blue font-semibold uppercase tracking-widest mb-3">
              3 skills, uma assinatura
            </p>
            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight uppercase">
              São 3 skills trabalhando pra <span className="text-wt-blue">você</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 100} duration={600}>
              <div className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-wt-blue/30 hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mb-6 group-hover:scale-110 transition-transform">
                  <img src={feature.imgSrc} alt={feature.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 font-mono tracking-tight uppercase">
                  {feature.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed font-sans text-lg mb-4 flex-grow">
                  {feature.description}
                </p>
                <div className="text-green-600 font-bold text-sm">
                  {feature.check}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up" delay={200} duration={600}>
            {/* PRINTS/SCREENSHOTS DO APP WINTUBE */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 aspect-video relative">
               <video 
                src="https://i.imgur.com/n0soFwK.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
               />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
