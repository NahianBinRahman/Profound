import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Terms of Service | Profound Agency",
  description: "Terms and conditions governing client engagements with Profound Agency.",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-[#050608] text-white flex flex-col selection:bg-[#00e5ff] selection:text-[#050608]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <Container className="max-w-4xl">
          <Badge variant="electric" dot className="mb-6">
            Master Engagement Terms
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Terms of Service<span className="text-[#00e5ff]">.</span>
          </h1>

          <p className="text-xs font-mono text-neutral-400 mb-12">
            Last Updated: November 2026 &bull; Global Practice Standard
          </p>

          <div className="space-y-8 text-neutral-400 text-sm sm:text-base leading-relaxed divide-y divide-white/[0.06]">
            <section className="pt-6">
              <h2 className="text-xl font-bold text-white mb-3">1. Scope of Engagement</h2>
              <p>
                Profound provides high-precision digital services including software and SaaS engineering, cloud infrastructure, cybersecurity defense, website design, AEO/GEO search optimization, brand systems, and performance marketing under mutually executed Statements of Work (SOW).
              </p>
            </section>

            <section className="pt-6">
              <h2 className="text-xl font-bold text-white mb-3">2. 100% Intellectual Property Ownership</h2>
              <p>
                Upon receipt of full payment for each project milestone, all custom deliverables, codebases, design tokens, Figma files, and related intellectual property transfer unconditionally to the client.
              </p>
            </section>

            <section className="pt-6">
              <h2 className="text-xl font-bold text-white mb-3">3. Warranties &amp; Performance Guarantees</h2>
              <p>
                All production code ships with a standard 30-to-60-day post-launch warranty period covering bug fixes, Core Web Vitals maintenance, and performance stabilization at no additional charge.
              </p>
            </section>

            <section className="pt-6">
              <h2 className="text-xl font-bold text-white mb-3">4. Limitation of Liability</h2>
              <p>
                In no event shall Profound or its affiliates be liable for indirect, incidental, or consequential damages exceeding the total fees paid under the applicable Statement of Work.
              </p>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

