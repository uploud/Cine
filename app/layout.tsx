import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Outfit } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })

export const metadata: Metadata = {
  title: "WinTube - Crie uma Renda Extra com Canais no Piloto Automático",
  description:
    "Aprenda o método que pessoas comuns estão usando pra construir canais de vídeo que produzem conteúdo sozinhos - sem aparecer, sem equipe e sem passar horas editando.",
  icons: {
    icon: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1557218152515361');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={`${spaceGrotesk.variable} ${outfit.variable} font-sans antialiased`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1557218152515361&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
