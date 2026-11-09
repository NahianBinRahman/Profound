import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Privacy Policy | Profound Agency",
  description: "Our privacy policies, data governance, and confidentiality standards.",
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-[#050608] text-white flex flex-col selection:bg-[#00e5ff] selection:text-[#050608]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <Container className="max-w-4xl">
          <Badge variant="electric" dot className="mb-6">
            Governance &amp; Privacy
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Privacy Policy<span className="text-[#00e5ff]">.</span>
          </h1>

          <p className="text-xs font-mono text-neutral-400 mb-12">
            Last Updated: November 2026 &bull; Effective Worldwide
          </p>

          <div className="space-y-8 text-neutral-400 text-sm sm:text-base leading-relaxed divide-y divide-white/[0.06]">
            <section className="pt-6">
              <h2 className="text-xl font-bold text-white mb-3">1. Overview &amp; Data Ethics</h2>
              <p>
                Profound Agency (&quot;Profound&quot;, &quot;we&quot;, &quot;us&quot;) is committed to the strictest standards of data confidentiality, privacy, and sovereignty. We do not sell, rent, or monetize your personal or proprietary client information under any circumstances.
              </p>
            </section>

            <section className="pt-6">
              <h2 className="text-xl font-bold text-white mb-3">2. Information Collection</h2>
              <p>
                When you submit a project brief or engage in communication with Profound, we collect your name, corporate email address, organization name, and project scope details solely for the purposes of evaluating your engagement, providing architectural proposals, and fulfilling our service contract.
              </p>
            </section>

            <section className="pt-6">
              <h2 className="text-xl font-bold text-white mb-3">3. Client Project Confidentiality &amp; NDAs</h2>
              <p>
                All proprietary source code, database architectures, system specifications, and commercial data shared during discovery or development are protected by binding Non-Disclosure Agreements (NDAs). We enforce isolated zero-trust repositories with strict least-privilege access rules.
              </p>
            </section>

            <section className="pt-6">
              <h2 className="text-xl font-bold text-white mb-3">4. Security &amp; Compliance</h2>
              <p>
                All project ingestion and telemetry data is transmitted using TLS 1.3 encryption and stored in SOC2-compliant cloud environments with continuous vulnerability monitoring.
              </p>
            </section>

            <section className="pt-6">
              <h2 className="text-xl font-bold text-white mb-3">5. Inquiries &amp; Contact</h2>
              <p>
                For data privacy requests or compliance questions, please contact our legal team at <span className="text-[#00e5ff] font-mono">legal@profound.agency</span>.
              </p>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

