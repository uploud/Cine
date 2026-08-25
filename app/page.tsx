import { ScrollReveal } from "@/components/scroll-reveal"
import { Hero } from "@/components/Hero"
import { Marquee } from "@/components/marquee"
import { RevealSection } from "@/components/reveal-section"
import { VideoShowcaseSection } from "@/components/video-showcase-section"
import { FeaturesSection } from "@/components/features-section"
import { ProblemSection } from "@/components/problem-section"
import { StorySection } from "@/components/story-section"
import { ComparisonSection } from "@/components/comparison-section"
import { BonusSection } from "@/components/bonus-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { ResultsSection } from "@/components/results-section"
import { ClipcashSection } from "@/components/clipcash-section"
import { OfferSection } from "@/components/offer-section"
import { CommunitySection } from "@/components/community-section"
import { FaqSection } from "@/components/faq-section"
import { AgencyBadge } from "@/components/agency-badge"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* 1. HERO */}
        <Hero />

        {/* 2. MARQUEE */}
        <Marquee />

        {/* 3. OS 4 PILARES */}
        <RevealSection />

        {/* 4. O RESULTADO? */}
        <ProblemSection />

        {/* 5. HISTÓRIA / FUNDADOR */}
        <StorySection />

        {/* 6. FERRAMENTAS EXCLUSIVAS */}
        <FeaturesSection />

        {/* 7. SEUS VÍDEOS VÃO FICAR NESSE FORMATO */}
        <ScrollReveal animation="fade-up" duration={700}>
          <VideoShowcaseSection />
        </ScrollReveal>

        {/* APP CLIP CASH */}
        <ClipcashSection />

        {/* 8. ACESSO VITALÍCIO / COMPARATIVO */}
        <ComparisonSection />

        {/* 9. ÁREA DE MEMBROS / BÔNUS */}
        <BonusSection />

        {/* 10. PARA QUEM É O WINTUBE ACADEMY? */}
        <TargetAudienceSection />

        {/* 11. RESULTADOS DE QUEM AGIU */}
        <ResultsSection />

        {/* 12. OFERTA */}
        <OfferSection />

        {/* 13. INSTAGRAM */}
        <AgencyBadge />

        {/* 14. COMUNIDADE */}
        <CommunitySection />

        {/* 15. DÚVIDAS FREQUENTES */}
        <FaqSection />
      </main>

      {/* 15. FOOTER */}
      <Footer />
    </div>
  )
}
