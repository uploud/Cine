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
    <section className="py-12 px-4 bg-[hsl(220,20%,10%)]">
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
          <h2 className="text-4xl font-[family-name:var(--font-display)] font-bold mb-4">
             História do <span className="text-primary">TÚLIO HENRIQUE</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4 text-muted-foreground text-lg leading-relaxed">
          <p>
            Prazer, eu sou o Túlio Henrique. Há mais de 3 anos, conquistei minha independência financeira criando canais
            de filmes e séries no YouTube e encontrando a forma certa de fugir dos bloqueios de direitos autorais.
          </p>
          <p>
            Sou fundador do Cine Builder, método exclusivo que já ajudou centenas de pessoas a criarem canais
            lucrativos, e também o criador de 2 aplicativos inovadores: um que assiste o filme e gera o roteiro pronto,
            e outro que faz os cortes e marcações no automático.
          </p>
          <p>
            Já ultrapassei a marca de 20 milhões de views monetizadas e hoje ensino passo a passo como qualquer pessoa
            pode trilhar esse mesmo caminho e viver do YouTube.
          </p>
          <p className="font-bold text-primary">
            Mas tudo começou com o mesmo método que eu ensino dentro do Cine Builder.
          </p>
        </div>

        <div className="text-center mt-10">
          <a
            href="#offer-section"
            onClick={scrollToOffer}
            className="inline-flex items-center px-10 py-5 text-lg font-bold text-primary-foreground rounded-md hover:opacity-90 transition-opacity animate-yellow-pulse bg-primary"
          >
            NÃO QUERO PERDER ESSA OPORTUNIDADE
          </a>
        </div>
      </div>
    </section>
  )
}
