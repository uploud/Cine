import { ScrollReveal } from "@/components/scroll-reveal"
import { HeroSection } from "@/components/hero-section"
import { Marquee } from "@/components/marquee"
import { OpportunitySection } from "@/components/opportunity-section"
import { ProblemSection } from "@/components/problem-section"
import { MethodSection } from "@/components/method-section"
import { VideoShowcaseSection } from "@/components/video-showcase-section"
import { ChannelsSection } from "@/components/channels-section"
import { RevealSection } from "@/components/reveal-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { OfferSection } from "@/components/offer-section"
import { AgencyBadge } from "@/components/agency-badge"
import { ResultsSection } from "@/components/results-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Marquee */}
        <Marquee />

        {/* 3. A Oportunidade */}
        <ScrollReveal animation="fade-up" duration={700}>
          <OpportunitySection />
        </ScrollReveal>

        {/* 4. O Problema */}
        <ScrollReveal animation="fade-in" duration={700}>
          <ProblemSection />
        </ScrollReveal>

        {/* 5. O Método */}
        <ScrollReveal animation="fade-up" duration={700}>
          <MethodSection />
        </ScrollReveal>

        {/* 7. Exemplos Reais — Canais */}
        <ScrollReveal animation="fade-in" duration={700}>
          <ChannelsSection />
        </ScrollReveal>

        {/* 8. A Sacada — Revelação do App */}
        <RevealSection />

        {/* 6. O Resultado — Vídeos exemplo */}
        <ScrollReveal animation="fade-up" duration={700}>
          <VideoShowcaseSection />
        </ScrollReveal>

        {/* 9. Para Quem É / Não É */}
        <ScrollReveal animation="fade-up" duration={700}>
          <TargetAudienceSection />
        </ScrollReveal>

        {/* 10. Oferta */}
        <OfferSection />

        {/* 11. Autoridade */}
        <ScrollReveal animation="fade-up" duration={700}>
          <AgencyBadge />
        </ScrollReveal>

        {/* 12. Resultados / Feedbacks */}
        <ResultsSection />

        {/* 13. FAQ */}
        <FaqSection />

        {/* 14. Fechamento */}
        <FinalCtaSection />
      </main>

      {/* 15. Footer */}
      <Footer />
    </div>
  )
}
