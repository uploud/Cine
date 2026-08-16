import { ScrollReveal } from "@/components/scroll-reveal"
import { HeroSection } from "@/components/hero-section"
import { ChannelsSection } from "@/components/channels-section"
import { OpportunitySection } from "@/components/opportunity-section"
import { RevealSection } from "@/components/reveal-section"
import { VideoShowcaseSection } from "@/components/video-showcase-section"
import { ResultsSection } from "@/components/results-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { OfferSection } from "@/components/offer-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { AgencyBadge } from "@/components/agency-badge"
import { Footer } from "@/components/footer"

import { CommunitySection } from "@/components/community-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* 1. HERO */}
        <HeroSection />

        {/* 2. ONDE POSTAR E LUCRAR */}
        <ScrollReveal animation="fade-in" duration={700}>
          <ChannelsSection />
        </ScrollReveal>

        {/* 3. GRANDE OPORTUNIDADE */}
        <ScrollReveal animation="fade-up" duration={700}>
          <OpportunitySection />
        </ScrollReveal>

        {/* 5. GERADOR DE VÍDEOS */}
        <RevealSection />

        {/* 6. VÍDEOS GERADOS */}
        <ScrollReveal animation="fade-up" duration={700}>
          <VideoShowcaseSection />
        </ScrollReveal>

        {/* 8. CLASSIFICADOR */}
        <ScrollReveal animation="fade-up" duration={700}>
          <TargetAudienceSection />
        </ScrollReveal>

        {/* 9. GARANTA SEU ACESSO */}
        <OfferSection />

        {/* 10. SELO DA AGÊNCIA (INSTAGRAM) */}
        <AgencyBadge />

        {/* 7. PROVA REAL (FEEDBACKS) */}
        <ResultsSection />

        {/* 11. GARANTIA INCONDICIONAL */}
        <FinalCtaSection />
      </main>

      {/* 11. FOOTER */}
      <Footer />
    </div>
  )
}
