"use client"

import type React from "react"

import Image from "next/image"

export function StorySection() {
  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const offerSection = document.getElementById("offer-section")
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 bg-slate-50 border-y border-slate-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Image
              src="https://i.imgur.com/JTPf8xN.jpeg"
              alt="Depoimento"
              width={144}
              height={144}
              className="rounded-full object-cover shadow-md h-36 w-36"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-display)] font-extrabold mb-6 text-slate-900 tracking-tight">
             História do <span className="text-primary">Túlio Henrique</span>
          </h2>
        </div>
        <div className="flex flex-col gap-6 text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
          <p>
            Prazer, eu sou o Túlio Henrique. Há mais de 3 anos, conquistei minha independência financeira criando Canais Darks
            de filmes e séries no YouTube e encontrando a forma certa de fugir dos bloqueios de direitos autorais.
          </p>
          <p>
            Sou fundador do Cine Builder, método exclusivo que já ajudou centenas de pessoas a criarem Canais Darks
            lucrativos, e também o criador de 2 aplicativos inovadores: um que assiste o filme e gera o roteiro pronto,
            e outro que faz os cortes e marcações no automático.
          </p>
          <p>
            Já ultrapassei a marca de 20 milhões de views monetizadas e hoje ensino passo a passo como qualquer pessoa
            pode trilhar esse mesmo caminho e viver do YouTube.
          </p>
          <p className="font-semibold text-slate-900">
            Mas tudo começou com o mesmo método que eu ensino dentro do Cine Builder.
          </p>
        </div>

        <div className="text-center mt-12">
          <a
            href="#offer-section"
            onClick={scrollToOffer}
            className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold text-white rounded-full bg-primary hover:bg-blue-600 shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
          >
            Quero Começar Agora
          </a>
        </div>
      </div>
    </section>
  )
}
