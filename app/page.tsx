import { ScrollReveal } from "@/components/scroll-reveal"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Marquee } from "@/components/marquee"
import { AiToolsSection } from "@/components/ai-tools-section"
import { PillarsSection } from "@/components/pillars-section"
import { BonusSection } from "@/components/bonus-section"
import { OfferSection } from "@/components/offer-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { ChannelsSection } from "@/components/channels-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { CommunitySection } from "@/components/community-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808] text-foreground">
      <Header />
      <main>
        {/* Hero não precisa de animação de entrada — já está visível */}
        <HeroSection />


        <ScrollReveal animation="fade-up" delay={0} duration={700}>
          <CommunitySection />
        </ScrollReveal>

        <ScrollReveal animation="fade-in" delay={0} duration={500}>
          <Marquee />
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={0} duration={800}>
          <PillarsSection />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0} duration={700}>
          <AiToolsSection />
        </ScrollReveal>

        <ScrollReveal animation="zoom-in" delay={0} duration={700}>
          <ChannelsSection />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0} duration={700}>
          <BonusSection />
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={0} duration={800} threshold={0.05}>
          <div id="offer-section">
            <OfferSection />
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0} duration={700}>
          <FaqSection />
        </ScrollReveal>

        <ScrollReveal animation="zoom-in" delay={0} duration={700}>
          <FinalCtaSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  )
}
