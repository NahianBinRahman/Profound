import type { Metadata } from "next";
import { ShieldCheck, Lock, CheckCircle2, Server, Eye } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Security & Compliance Standards | Profound Agency",
  description: "Zero-trust architecture, SOC2 compliance standards, and cloud defense protocols.",
};

const PROTOCOLS = [
  {
    title: "Zero-Trust Network Access",
    desc: "All client code, development clusters, and staging environments are guarded by Cloudflare Zero Trust and identity-aware proxies.",
  },
  {
    title: "End-to-End Encryption",
    desc: "All data in transit is encrypted using TLS 1.3 with forward secrecy. All data at rest is encrypted using AES-256 in SOC2-certified AWS/GCP regions.",
  },
  {
    title: "Automated Daily Vulnerability Scans",
    desc: "Automated static code analysis (SAST) and software composition analysis (SCA) run on every git commit before merging.",
  },
  {
    title: "Cryptographic Multi-Tenant Partitioning",
    desc: "For SaaS client builds, we enforce tenant-isolated PostgreSQL schemas with strict row-level security (RLS) and IAM roles.",
  },
];

export default function SecurityPage() {
  return (
    <div className="relative min-h-screen bg-[#050608] text-white flex flex-col selection:bg-[#00e5ff] selection:text-[#050608]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <Container className="max-w-4xl">
          <Badge variant="electric" dot className="mb-6">
            Cybersecurity &amp; Resilience
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Security &amp; Compliance<span className="text-[#00e5ff]">.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 mb-12 leading-relaxed">
            Security is not an afterthought at Profound — it is foundational to
            every architectural decision and code release.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {PROTOCOLS.map((proto) => (
              <div
                key={proto.title}
                className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.08]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-white mb-2">
                  {proto.title}
                </h2>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {proto.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] text-xs font-mono text-neutral-400 space-y-2">
            <p className="text-white font-bold text-sm font-sans">
              Responsible Vulnerability Disclosure
            </p>
            <p>
              If you identify a security vulnerability in any Profound system or
              open-source component, please email our Security Operations Center
              directly at <span className="text-[#00e5ff]">security@profound.agency</span> with PGP encryption.
            </p>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

