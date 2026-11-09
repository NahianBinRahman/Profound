import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { TechEcosystem } from "@/components/sections/TechEcosystem";
import { AgencyIntro } from "@/components/sections/AgencyIntro";
import { ServicesSection } from "@/components/services/ServicesSection";
import { SelectedWorks } from "@/components/sections/SelectedWorks";
import { WhyChooseProfound } from "@/components/sections/WhyChooseProfound";
import { OurApproach } from "@/components/sections/OurApproach";
import { PlatformFlexibility } from "@/components/sections/PlatformFlexibility";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050608] text-white flex flex-col selection:bg-[#00e5ff] selection:text-[#050608]">
      {/* 01. Floating Glassmorphic Navigation */}
      <Navbar />

      {/* Main Homepage Flow */}
      <main className="flex-1">
        {/* 01. Hero Section (Huge-Inspired Composition + 3D Canvas) */}
        <Hero />

        {/* 02. Technology and Platform Ecosystem (Marquee) */}
        <TechEcosystem />

        {/* 03. Agency Introduction ("Technology meets thoughtful creativity") */}
        <AgencyIntro />

        {/* 04. Featured Services (6-Card Visual Bento) */}
        <ServicesSection />

        {/* 05. Selected Works (Demonstration Concepts Portfolio) */}
        <SelectedWorks />

        {/* 06. Why Choose Profound (Capabilities, Technology, Support) */}
        <WhyChooseProfound />

        {/* 07. Our Approach (6-Phase Workflow: Discover to Optimise) */}
        <OurApproach />

        {/* 08. Technology Capabilities & Platform Flexibility */}
        <PlatformFlexibility />

        {/* 09. Client Testimonials (Quantitative Metrics + Partner Reviews) */}
        <Testimonials />

        {/* 10. Frequently Asked Questions (Interactive Accordion) */}
        <FaqSection />

        {/* 11. Final Call To Action Banner */}
        <CtaSection />
      </main>

      {/* 12. Monumental Horizon Footer */}
      <Footer />
    </div>
  );
}
