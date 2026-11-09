import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  ShieldCheck,
  Cpu,
  Globe,
  Clock,
  CheckCircle2,
  Users,
  Compass,
  Rocket,
  LineChart,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | Built on Ideas. Driven by Possibility. | Profound Agency",
  description:
    "Learn who Profound is, what we do, our philosophy, and how we help ambitious businesses engineer extraordinary digital realities.",
  alternates: {
    canonical: "https://profound.agency/about",
  },
  openGraph: {
    title: "About Profound | Built on Ideas. Driven by Possibility.",
    description: "Learn who Profound is, our philosophy, and how our multi-disciplinary squads engineer digital superiority.",
    url: "https://profound.agency/about",
  },
};

const HOW_WE_HELP = [
  {
    icon: Rocket,
    title: "Accelerating Market Velocity",
    desc: "We eliminate the friction between conceptual design and production engineering, launching complete SaaS products and bespoke web flagships in 4 to 12 weeks.",
  },
  {
    icon: ShieldCheck,
    title: "Fortifying Enterprise Systems",
    desc: "We engineer hardened cloud topologies with zero-trust network access, continuous vulnerability scanning, and automated SOC2 / ISO compliance.",
  },
  {
    icon: LineChart,
    title: "Dominating Generative Search (AEO)",
    desc: "We transition brands from outdated keyword SEO into authoritative knowledge graph entities cited directly by ChatGPT, Perplexity, and Google AI Overviews.",
  },
  {
    icon: Sparkles,
    title: "Creating Unforgettable Brand Equity",
    desc: "We develop timeless visual identities, monumental typography, and 3D design tokens that evoke immediate prestige and customer trust.",
  },
];

const CORE_VALUES = [
  {
    number: "01",
    title: "Relentless Engineering Rigor",
    desc: "We write clean, strictly typed, deterministic code with automated test suites and zero legacy debt. Every database schema and serverless endpoint is built to outlast market hype cycles.",
  },
  {
    number: "02",
    title: "Thoughtful Creative Craft",
    desc: "We reject commoditized templates. Every typography scale, spatial grid, and 3D WebGL interaction is crafted with obsessive editorial discipline.",
  },
  {
    number: "03",
    title: "Radical Commercial Transparency",
    desc: "No hidden agency markups, no bureaucratic gatekeepers. You collaborate directly with senior system architects and creative directors from day zero.",
  },
  {
    number: "04",
    title: "Unconditional Client Sovereignty",
    desc: "Upon milestone completion, you own 100% of all codebases, design tokens, Figma libraries, and intellectual property with zero proprietary lock-in.",
  },
];

const GLOBAL_HUBS = [
  {
    city: "London",
    region: "Europe & Middle East",
    focus: "Strategic Architecture & System Design",
  },
  {
    city: "New York",
    region: "Americas",
    focus: "Client Leadership & Brand Engineering",
  },
  {
    city: "Singapore",
    region: "Asia-Pacific",
    focus: "Edge Compute & Real-Time Telemetry",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#050608] text-white flex flex-col selection:bg-[#00e5ff] selection:text-[#050608]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* 1. Hero Section (Prompt 7 Headline: "Built on Ideas. Driven by Possibility.") */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#00e5ff]/15 via-indigo-600/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

          <Container className="relative z-10 text-center max-w-4xl">
            <Badge variant="electric" dot className="mb-6">
              Who We Are &bull; Philosophy &amp; Purpose
            </Badge>

            {/* Headline as requested in Prompt 7 */}
            <h1 className="text-[clamp(2.75rem,7.5vw,6.5rem)] font-bold tracking-tight text-white leading-[1.04]">
              Built on{" "}
              <span className="font-editorial font-normal italic text-slate-200">
                Ideas
              </span>
              <span className="text-[#00e5ff]">.</span>
              <br />
              Driven by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
                Possibility
              </span>
              <span className="text-[#00e5ff]">.</span>
            </h1>

            <p className="mt-8 text-lg sm:text-2xl text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
              We design, build and accelerate digital experiences that help
              ambitious businesses move forward.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="electric"
                size="lg"
                icon={<ArrowUpRight className="w-5 h-5 text-black" />}
              >
                Start an Engagement
              </Button>
              <Button href="#philosophy" variant="glass" size="lg">
                Explore Our Philosophy
              </Button>
            </div>
          </Container>
        </section>

        {/* 2. Who Profound Is & What We Do */}
        <section id="philosophy" className="relative py-20 bg-[#07090e] border-y border-white/[0.06]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-mono uppercase tracking-widest text-[#00e5ff] font-semibold block mb-3">
                  Identity &amp; Vision
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                  Who is Profound?
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
                  <p>
                    <strong className="text-white">Profound</strong> is a
                    premium digital engineering and experience agency. We exist
                    to resolve the traditional compromise between deep
                    engineering and luxury design.
                  </p>
                  <p>
                    We operate six foundational practice groups:{" "}
                    <span className="text-neutral-200">
                      Software &amp; SaaS Development, IT Infrastructure &amp;
                      Cybersecurity, Website Design &amp; Development, SEO &amp;
                      AEO/GEO, Graphic Design &amp; Branding, and Social Media
                      &amp; Performance Content
                    </span>
                    .
                  </p>
                  <p className="text-neutral-300">
                    By unifying these disciplines under a single execution team,
                    we eliminate the vendor fragmentation that slows down product
                    launches and dilutes brand identity.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-[#090b10] border border-white/[0.09] p-8 shadow-2xl space-y-6">
                  <div className="flex items-center gap-2 pb-6 border-b border-white/[0.08]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] animate-pulse" />
                    <h3 className="text-xs font-mono uppercase tracking-wider text-white">
                      The Profound Synthesis
                    </h3>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00e5ff] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Deep Computer Science:</strong> Next.js 16, TypeScript, distributed edge APIs, and zero-trust cloud architectures.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00e5ff] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Editorial Creative:</strong> High-fashion typography, custom 3D WebGL shaders, and timeless identity systems.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00e5ff] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Next-Gen Search Authority:</strong> Native entity optimization for Perplexity, ChatGPT, and Google SGE.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. How We Help Businesses */}
        <section className="relative py-24 sm:py-32">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <Badge variant="electric" dot className="mb-4">
                Client Impact
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                How We Help{" "}
                <span className="font-editorial font-normal italic text-slate-200">
                  Businesses
                </span>
                <span className="text-[#00e5ff]">.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-neutral-400">
                Transforming complex technical and market challenges into unfair
                competitive advantages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {HOW_WE_HELP.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-3xl bg-[#090b10] border border-white/[0.08] hover:border-white/20 p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff] mb-6 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 4. Our Philosophy & Core Values */}
        <section className="relative py-24 bg-[#07090e] border-y border-white/[0.06]">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <Badge variant="electric" dot className="mb-4">
                Operating Principles
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Our{" "}
                <span className="font-editorial font-normal italic text-slate-200">
                  Philosophy
                </span>
                <span className="text-[#00e5ff]">.</span>
              </h2>
              <p className="mt-4 text-base text-neutral-400">
                Four foundational beliefs that govern how we design, write
                code, and partner with leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CORE_VALUES.map((val) => (
                <div
                  key={val.number}
                  className="rounded-3xl bg-[#090b10] border border-white/[0.08] p-8 sm:p-10 hover:border-white/20 transition-all duration-300"
                >
                  <span className="text-3xl font-black font-mono text-[#00e5ff] block mb-4">
                    {val.number}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {val.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 5. Global Studio Footprint */}
        <section className="relative py-24 sm:py-32">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="electric" dot className="mb-4">
                Worldwide Delivery
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Global Studio{" "}
                <span className="font-editorial font-normal italic text-slate-200">
                  Footprint
                </span>
                <span className="text-[#00e5ff]">.</span>
              </h2>
              <p className="mt-4 text-base text-neutral-400">
                Coordinating across 3 key international regions to ensure
                continuous 24-hour delivery cycles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {GLOBAL_HUBS.map((hub) => (
                <div
                  key={hub.city}
                  className="rounded-2xl bg-[#090b10] border border-white/[0.08] p-8 text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mx-auto mb-4 text-[#00e5ff]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {hub.city}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] mb-3">
                    {hub.region}
                  </p>
                  <p className="text-xs text-neutral-400">{hub.focus}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 6. CTA */}
        <section className="relative py-12">
          <Container className="max-w-4xl">
            <div className="rounded-3xl bg-gradient-to-r from-[#00e5ff]/10 via-[#0a0f1d] to-indigo-950/20 border border-white/[0.12] p-8 sm:p-14 text-center">
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
                Ready to work with Profound?
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 max-w-lg mx-auto mb-8 leading-relaxed">
                Connect directly with our engineering directors and design
                leadership to define your roadmap.
              </p>
              <Button
                href="/contact"
                variant="electric"
                size="lg"
                icon={<ArrowUpRight className="w-5 h-5 text-black" />}
              >
                Schedule an Architectural Review
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
