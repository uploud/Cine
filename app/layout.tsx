import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, Outfit } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
import { Dancing_Script } from "next/font/google"
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-cursive" })

export const metadata: Metadata = {
  title: "CineTube.IA - Crie Canais Lucrativos no YouTube",
  description:
    "O primeiro aplicativo de I.A. que transforma qualquer pessoa em dono de canais lucrativos no YouTube postando vídeos de filmes e séries",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
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
        {/* GTM - mantido */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-52SKX3W8');`}
        </Script>
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          data-utmify-ignore-iframe
          data-utmify-is-cartpanda
          async
          defer
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${outfit.variable} ${dancingScript.variable} font-outfit antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-52SKX3W8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  )
}
