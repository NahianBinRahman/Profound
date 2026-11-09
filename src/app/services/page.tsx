import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ChevronRight, Layers, Sparkles, Terminal, Shield, Globe, Search, Palette, Flame, HelpCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SERVICES_DATA } from "@/data/services";
import { ServiceCanvasPreview } from "@/components/services/ServiceCanvasPreview";

export const metadata: Metadata = {
  title: "Complete Digital Solutions & Practice Disciplines | Profound Agency",
  description:
    "Six disciplines. One integrated team. Everything your business needs to build, operate and grow in the digital world. Software, Infrastructure, Websites, AEO & Growth.",
  alternates: {
    canonical: "https://profound.agency/services",
  },
  openGraph: {
    title: "Complete Digital Solutions & Practice Disciplines | Profound",
    description: "Six disciplines. One integrated team. Built to build, operate and scale enterprise digital reality.",
    url: "https://profound.agency/services",
  },
};

const HOW_WE_WORK_STEPS = [
  {
    step: "01",
    title: "Dedicated Multi-Disciplinary Squads",
    desc: "Every client engagement is paired with dedicated senior software engineers, system architects, and creative directors working in sync.",
  },
  {
    step: "02",
    title: "Direct Access, Zero Account Gatekeepers",
    desc: "Communicate directly with the engineers and designers building your platform via shared Slack/Discord channels and weekly sprint reviews.",
  },
  {
    step: "03",
    title: "Fixed Milestone Roadmaps",
    desc: "Transparent scope and guaranteed deliverable schedules. We prioritize velocity without compromising code quality or security posture.",
  },
  {
    step: "04",
    title: "Continuous Observability & Support",
    desc: "Post-deployment monitoring, 24/7 security alerting, uptime SLAs, and ongoing generative engine optimization (AEO/GEO).",
  },
];

const TECH_CATEGORIES = [
  {
    category: "Languages & Frameworks",
    items: ["Next.js 16", "React 19", "TypeScript 5", "Node.js", "Python", "Tailwind CSS v4"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS Cloud", "Docker", "Kubernetes", "Terraform", "Cloudflare Edge", "Datadog"],
  },
  {
    category: "Databases & Storage",
    items: ["PostgreSQL", "Redis", "Prisma ORM", "Supabase", "MongoDB", "AWS S3"],
  },
  {
    category: "AI & Search Architecture",
    items: ["OpenAI API", "Anthropic Claude", "Perplexity API", "Vector DBs", "JSON-LD Knowledge Graphs", "Google SGE"],
  },
  {
    category: "Design & Creative Systems",
    items: ["Figma Enterprise", "Three.js WebGL", "Cinema 4D", "Blender", "After Effects", "Design Tokens"],
  },
  {
    category: "Attribution & Commerce",
    items: ["Shopify Plus", "Stripe Connect", "Meta Ads API", "LinkedIn Campaign Manager", "Google Analytics 4", "Triple Whale"],
  },
];

const SERVICES_FAQS = [
  {
    q: "Can we engage Profound for a single service or do we need the full suite?",
    a: "You can engage us for a single dedicated practice (such as bespoke website design or SaaS engineering) or deploy our integrated multi-disciplinary team across all six areas. Our architecture is modular by design.",
  },
  {
    q: "How quickly can Profound assemble a project sprint?",
    a: "Following initial architectural discovery and scope alignment, dedicated sprint squads typically mobilize within 5 to 10 business days.",
  },
  {
    q: "Who owns the intellectual property and code upon project completion?",
    a: "You retain 100% unconditional ownership of all source code, Figma design files, repositories, database schemas, and intellectual property upon milestone completion.",
  },
  {
    q: "Do you integrate with our internal engineering or marketing teams?",
    a: "Yes. We frequently embed directly alongside internal tech leads and marketing executives, providing specialized firepower for complex builds, migrations, and AI search rollouts.",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#050608] text-white flex flex-col selection:bg-[#00e5ff] selection:text-[#050608]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* 1. Services Hero (Visuvate Services Reference Inspiration) */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          {/* Cosmic Electric Blue Wave Background (Screenshot 000025 Inspiration) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#00e5ff]/15 via-[#1d4ed8]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

          <Container className="relative z-10 text-center max-w-4xl">
            <Badge variant="electric" dot className="mb-6">
              Full-Spectrum Agency Practices
            </Badge>

            {/* Monumental Centered Heading with Serif Accent */}
            <h1 className="text-[clamp(2.75rem,7vw,6.5rem)] font-bold tracking-tight text-white leading-[1.04]">
              More Than{" "}
              <span className="font-editorial font-normal italic text-slate-200">
                Services
              </span>
              <span className="text-[#00e5ff]">.</span>
              <br />
              Complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
                Digital Solutions
              </span>
              <span className="text-[#00e5ff]">.</span>
            </h1>

            {/* Supporting Description */}
            <p className="mt-8 text-lg sm:text-2xl text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
              Six disciplines. One integrated team. Everything your business
              needs to build, operate and grow in the digital world.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="electric"
                size="lg"
                icon={<ArrowUpRight className="w-5 h-5 text-[#050608]" />}
              >
                Start a Project
              </Button>
              <Button href="#practices" variant="glass" size="lg">
                Explore Disciplines
              </Button>
            </div>
          </Container>
        </section>

        {/* 2. Six Service Cards Grid (3 Columns Desktop, 2 Tablet, 1 Mobile) */}
        <section id="practices" className="relative py-16 sm:py-24">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {SERVICES_DATA.map((service, index) => (
                <div
                  key={service.id}
                  data-cursor
                  data-cursor-text="EXPLORE"
                  className="group relative rounded-3xl bg-[#090b10] border border-white/[0.08] hover:border-white/[0.22] p-5 sm:p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(0,229,255,0.12)] hover:-translate-y-1"
                >
                  {/* Visual Preview Graphic Canvas */}
                  <div className="mb-6">
                    <ServiceCanvasPreview type={service.previewType} />
                  </div>

                  {/* Card Content & Meta */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono tracking-wider uppercase text-[#00e5ff] font-semibold">
                          0{index + 1}. {service.categoryTag}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400 bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/[0.06]">
                          {service.metrics.label}: {service.metrics.value}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00e5ff] transition-colors duration-300">
                        {service.title}
                      </h2>

                      <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                        {service.shortDesc}
                      </p>

                      {/* Deliverables Bullet List */}
                      <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-1.5">
                        {service.deliverables.slice(0, 3).map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 text-xs text-neutral-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00e5ff] shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action: Individual Explore Link */}
                    <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-[11px] font-mono text-neutral-400">
                        {service.technologies.length}+ Stack Modules
                      </span>

                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.06] group-hover:bg-[#00e5ff] text-xs font-semibold text-neutral-200 group-hover:text-[#050608] transition-all duration-300 shadow-sm"
                      >
                        <span>Explore Practice</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 3. Our Capabilities Section */}
        <section className="relative py-24 bg-[#07090e] border-y border-white/[0.06] overflow-hidden">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="electric" dot className="mb-4">
                Deep Competencies
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Comprehensive Practice{" "}
                <span className="font-editorial font-normal italic text-slate-200">
                  Capabilities
                </span>
                <span className="text-[#00e5ff]">.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-neutral-400">
                A granular breakdown of what our integrated engineering, security,
                design, and growth teams deliver.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES_DATA.flatMap((s) => s.capabilities.slice(0, 2)).map((cap, i) => (
                <div
                  key={`${cap.title}-${i}`}
                  className="rounded-2xl bg-[#090b10] border border-white/[0.07] p-6 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff] mb-4">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 4. How We Work (Collaborative Workflow) */}
        <section className="relative py-24 sm:py-32">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <Badge variant="electric" dot className="mb-4">
                  Execution Philosophy
                </Badge>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                  How We{" "}
                  <span className="font-editorial font-normal italic text-slate-200">
                    Work
                  </span>
                  <span className="text-[#00e5ff]">.</span>
                </h2>
                <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-xl">
                  Engineering rigor paired with direct senior communication. We
                  ship production software without agency overhead.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-white/[0.04] px-4 py-2 rounded-full border border-white/[0.08]">
                <span>Weekly Sprints &bull; Live Telemetry</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {HOW_WE_WORK_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl bg-[#090b10] border border-white/[0.08] hover:border-white/20 p-6 flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    <span className="text-3xl font-black font-mono text-[#00e5ff] block mb-4">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Guaranteed Practice Standard</span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 5. Technology Stack Breakdown */}
        <section className="relative py-24 bg-[#07090e] border-y border-white/[0.06]">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="electric" dot className="mb-4">
                Ecosystem Architecture
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Our Technology{" "}
                <span className="font-editorial font-normal italic text-slate-200">
                  Stack
                </span>
                <span className="text-[#00e5ff]">.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-neutral-400">
                Modern, type-safe, and scalable tools deployed across our 6
                practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECH_CATEGORIES.map((category) => (
                <div
                  key={category.category}
                  className="rounded-2xl bg-[#090b10] border border-white/[0.08] p-6"
                >
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold mb-4">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-neutral-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] px-3 py-1.5 rounded-lg transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 6. Services FAQs */}
        <section className="relative py-24 sm:py-32">
          <Container className="max-w-4xl">
            <div className="text-center mb-16">
              <Badge variant="electric" dot className="mb-4">
                Common Questions
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Services{" "}
                <span className="font-editorial font-normal italic text-slate-200">
                  FAQ
                </span>
                <span className="text-[#00e5ff]">.</span>
              </h2>
            </div>

            <div className="space-y-4">
              {SERVICES_FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-[#090b10] border border-white/[0.08] p-6 sm:p-8"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 7. Contact CTA Banner */}
        <section className="relative py-12">
          <Container className="max-w-5xl">
            <div className="rounded-3xl bg-gradient-to-r from-[#00e5ff]/10 via-[#090d16] to-indigo-950/20 border border-white/[0.12] p-8 sm:p-14 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Have a project that requires multiple disciplines?
              </h2>
              <p className="text-base text-neutral-400 max-w-xl mx-auto mb-8">
                Let&apos;s assemble a customized sprint roadmap combining SaaS
                development, cloud security, bespoke design, and algorithmic
                growth.
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

