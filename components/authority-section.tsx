import Image from "next/image"

export function AuthoritySection() {
  return (
    <section className="relative py-8 md:py-16 lg:py-20 px-3 md:px-6 lg:px-8 bg-[hsl(220,20%,5%)] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image src="/images/design-mode/pRHrC4W.png" alt="Background" fill className="object-cover" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="flex justify-center mb-8 md:mb-12">
          <Image
            src="/images/cinetube-logo.png"
            alt="CineTube.IA"
            width={200}
            height={200}
            className="w-32 h-32 md:w-48 md:h-48 object-contain"
          />
        </div>

        <div className="space-y-3 md:space-y-6 lg:space-y-8 px-2">
          <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed text-center">
            📊 Nosso sistema foi desenvolvido para quem quer escalar canais no YouTube sem aparecer. Com inteligencia artificial, roteiros automaticos e cortes inteligentes, voce consegue criar conteudo de qualidade em minutos.
          </p>
          <Image
            src="https://i.imgur.com/ZlO9oFg.jpeg"
            alt="Prova de ganhos no YouTube"
            width={1200}
            height={600}
            className="rounded-lg md:rounded-xl shadow-xl w-full mb-12 md:mb-16 lg:mb-24"
          />
          <p className="text-base md:text-lg lg:text-xl text-primary font-bold leading-relaxed text-center">
            ✨ O CineTube.IA foi criado para simplificar todo o processo. ⚡ Voce nao precisa aparecer em frente as cameras, nao precisa implorar por inscritos, e consegue escalar seu canal de filmes e series de forma rapida, facil e segura.
          </p>
          <div className="flex flex-col gap-3 md:gap-6 lg:gap-8"></div>
          <p className="text-base md:text-lg lg:text-xl text-foreground mt-4 md:mt-8 lg:mt-10 leading-relaxed text-center">
            🚨 E agora essa estrutura esta nas suas maos.
          </p>
          <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed text-center">
            E, sinceramente, ou voce usa isso hoje, ou continua deixando dinheiro na mesa enquanto outros aproveitam
            essa oportunidade.
          </p>
          <p className="text-base md:text-lg lg:text-xl text-foreground font-bold leading-relaxed text-center">Segura firme.</p>
        </div>
      </div>
    </section>
  )
}
