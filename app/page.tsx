import { ScrollReveal } from "@/components/scroll-reveal"
import { HeroSection } from "@/components/hero-section"
import { ChannelsSection } from "@/components/channels-section"
import { RevealSection } from "@/components/reveal-section"
import { VideoShowcaseSection } from "@/components/video-showcase-section"
import { FeaturesSection } from "@/components/features-section"
import { PortabilitySection } from "@/components/portability-section"
import { OriginalsSection } from "@/components/originals-section"
import { ResultsSection } from "@/components/results-section"
import { ComparisonSection } from "@/components/comparison-section"
import { OfferSection } from "@/components/offer-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* 1. HERO */}
        <HeroSection />

        {/* 2. ONDE POSTAR */}
        <ScrollReveal animation="fade-in" duration={700}>
          <ChannelsSection />
        </ScrollReveal>

        {/* 3. COMO FUNCIONA */}
        <RevealSection />

        {/* 4. VÍDEOS GERADOS */}
        <ScrollReveal animation="fade-up" duration={700}>
          <VideoShowcaseSection />
        </ScrollReveal>

        {/* 5. FUNCIONALIDADES */}
        <FeaturesSection />

        {/* 6. PORTABILIDADE */}
        <PortabilitySection />

        {/* 7. VÍDEOS ORIGINAIS */}
        <OriginalsSection />

        {/* 8. PROVA REAL */}
        <ResultsSection />

        {/* 9. COMPARATIVO */}
        <ComparisonSection />

        {/* 10. GARANTA SEU ACESSO */}
        <OfferSection />

        {/* 11. GARANTIA */}
        <FinalCtaSection />
      </main>

      {/* 12. FOOTER */}
      <Footer />
    </div>
  )
}
