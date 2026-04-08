import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ExperienceSection } from "@/components/experience-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background scroll-snap-container">
      <Navigation />
      <section className="scroll-snap-section">
        <HeroSection />
      </section>
      <LogoMarquee />
      <section className="scroll-snap-section">
        <ServicesSection />
      </section>
      <section className="scroll-snap-section">
        <AboutSection />
      </section>
      <section className="scroll-snap-section">
        <PortfolioSection />
      </section>
      <section className="scroll-snap-section">
        <ExperienceSection />
      </section>
      <section className="scroll-snap-section">
        <TestimonialsSection />
      </section>
      <section className="scroll-snap-section">
        <CTASection />
      </section>
      <Footer />
    </main>
  )
}
