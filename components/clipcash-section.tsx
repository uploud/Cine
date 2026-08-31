"use client"

import React from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight } from "lucide-react"

export function ClipcashSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black overflow-hidden flex flex-col items-center text-center">
      <div className="max-w-5xl mx-auto w-full">
        <ScrollReveal animation="fade-up" duration={700}>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight uppercase mb-4">
            2 FERRAMENTAS <span className="text-wt-blue">EXCLUSIVAS</span>
          </h2>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-300 mt-2 mb-4 uppercase tracking-wider">
            Para Criação de Cortes E Clipadas
          </h3>
          <p className="text-slate-400 text-lg sm:text-xl mt-4 max-w-3xl mx-auto leading-relaxed font-medium mb-4">
            A ClipCash analisa, corta e monta seus vídeos, deixando tudo pronto para você apenas postar.
          </p>
          <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-12">
            Veja como é fácil gerar seus cortes virais com a nossa ferramenta!
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200} duration={700}>
          <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-slate-800 mb-8 bg-slate-900 relative flex items-center justify-center min-h-[200px]">
            <img 
              src="https://i.imgur.com/3Is3DXX.png" 
              alt="App ClipCash" 
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/800x450/eeeeee/999999?text=Imagem+do+App+ClipCash"
              }}
            />
          </div>
          
          <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-slate-800 mb-8 bg-slate-900 relative flex items-center justify-center">
            <video 
              src="https://i.imgur.com/QBkC2fE.mp4" 
              controls 
              playsInline 
              className="w-full h-auto object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={300} duration={700}>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
            Com o nosso gerador de cortes você consegue criar dezenas de cortes todos os dias,
            prontos para postar em qualquer plataforma, em apenas 3 passos.
          </p>

          <div className="mt-8 mb-12 w-full max-w-5xl mx-auto">
            <h3 className="font-mono text-3xl sm:text-4xl font-black text-white uppercase mb-2">
              CORTES GERADOS
            </h3>
            <h4 className="text-xl sm:text-2xl font-bold text-wt-blue mb-4 uppercase">
              GERE CORTES PRA TODOS OS NICHOS
            </h4>
            <p className="text-slate-400 text-lg mb-10 font-medium max-w-2xl mx-auto">
              Você pode gerar cortes de podcast, esportes, filmes, animes e muito mais.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-800 aspect-[9/16] bg-slate-900 relative">
                <video src="https://i.imgur.com/VIoffnD.mp4" className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop playsInline />
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-800 aspect-[9/16] bg-slate-900 relative">
                <video src="https://i.imgur.com/MFlE7Ci.mp4" className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop playsInline />
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-800 aspect-[9/16] bg-slate-900 relative">
                <video src="https://i.imgur.com/v7zyAH4.mp4" className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop playsInline />
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-800 aspect-[9/16] bg-slate-900 relative">
                <video src="https://i.imgur.com/7L6elN2.mp4" className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop playsInline />
              </div>
            </div>
          </div>

          <a
            href="#oferta"
            className="group relative inline-flex items-center justify-center gap-3 bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)] text-white font-mono font-[700] text-[18px] sm:text-[20px] px-8 py-4 sm:px-10 sm:py-5 rounded-xl shadow-[0_10px_30px_-14px_rgba(76,141,247,0.9)] hover:opacity-90 hover:-translate-y-0.5 active:scale-[0.98] transition-all w-full sm:w-auto uppercase"
          >
            <span>QUERO ACESSAR O GERADOR DE CORTES</span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </a>
        </ScrollReveal>

        {/* NOVA SKILL DE CARROSSEL */}
        <ScrollReveal animation="fade-up" delay={200} duration={700}>
          <div className="mt-24 pt-16 border-t border-slate-800 w-full max-w-5xl mx-auto flex flex-col items-center">
            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight uppercase mb-4">
              SKILL <span className="text-wt-blue">EXCLUSIVA</span>
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-300 mt-2 mb-8 uppercase tracking-wider text-center">
              estúdio de carrosséis para Instagram e outras plataformas
            </h3>
            
            <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-slate-800 bg-slate-900 relative flex items-center justify-center">
              <video 
                src="https://i.imgur.com/OBoFlqn.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="mt-12">
              <a
                href="#oferta"
                className="group relative inline-flex items-center justify-center gap-3 bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)] text-white font-mono font-[700] text-[18px] sm:text-[20px] px-8 py-4 sm:px-10 sm:py-5 rounded-xl shadow-[0_10px_30px_-14px_rgba(76,141,247,0.9)] hover:opacity-90 hover:-translate-y-0.5 active:scale-[0.98] transition-all w-full sm:w-auto uppercase"
              >
                <span>QUERO ACESSAR O ESTÚDIO</span>
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
