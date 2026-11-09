import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Terminal,
  Shield,
  Layers,
  Compass,
  Lightbulb,
  Cpu,
  Eye,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CASE_STUDIES_DATA } from "@/data/projects";

interface CaseStudyDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = CASE_STUDIES_DATA.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Case Study | Profound Agency",
    };
  }

  return {
    title: `${project.title} | Case Study | Profound Agency`,
    description: project.summary,
    alternates: {
      canonical: `https://profound.agency/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Case Study | Profound Agency`,
      description: project.summary,
      url: `https://profound.agency/work/${project.slug}`,
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const project = CASE_STUDIES_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Related projects lookup
  const relatedProjects = CASE_STUDIES_DATA.filter((p) =>
    project.relatedSlugs?.includes(p.slug)
  ).slice(0, 3);

  return (
    <div className="relative min-h-screen bg-[#050608] text-white flex flex-col selection:bg-[#00e5ff] selection:text-[#050608]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Breadcrumb Navigation */}
        <Container className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Works</span>
          </Link>
        </Container>

        {/* 1. Project Overview & Meta Hero */}
        <section className="relative pb-16 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#00e5ff]/10 rounded-full blur-[140px] pointer-events-none" />

          <Container>
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="electric" dot>
                  {project.category}
                </Badge>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-mono uppercase tracking-wider font-semibold">
                  {project.badgeType}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {project.industry} &bull; {project.timeline}
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.06]">
                {project.title}
                <span className="text-[#00e5ff]">.</span>
              </h1>

              <p className="mt-4 text-xl sm:text-2xl text-neutral-300 font-medium">
                {project.scope}
              </p>

              <p className="mt-6 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl">
                {project.summary}
              </p>
            </div>

            {/* Client / Project Background Card */}
            <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#090b10] border border-white/[0.08] max-w-4xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold block mb-2">
                Project Background &amp; Intent
              </span>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {project.clientBackground}
              </p>
            </div>

            {/* Quantitative Verified Results Ribbon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/[0.08]">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-5 rounded-2xl bg-[#090b10] border border-white/[0.08]"
                >
                  <p className="text-2xl sm:text-3xl font-black text-white font-mono">
                    {m.value}
                  </p>
                  <p className="text-xs font-mono text-[#00e5ff] uppercase tracking-wider mt-1">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 2. Project Visuals (Large Interactive Simulation Frame) */}
        <section className="relative py-10">
          <Container>
            <div className="relative w-full aspect-[16/9] max-h-[620px] rounded-3xl bg-[#06070a] border border-white/10 overflow-hidden shadow-2xl flex flex-col">
              {/* Browser Bar */}
              <div className="px-5 py-3 bg-black/90 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-neutral-400">
                  https://{project.mockupDetails.domain}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-neutral-300">
                  Preview Environment
                </span>
              </div>

              {/* High-Resolution Graphic Canvas */}
              <div className="flex-1 relative bg-gradient-to-br from-[#0c1017] via-[#050608] to-[#141d33] p-8 sm:p-16 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#00e5ff]">
                    {project.mockupDetails.highlight}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    Interactive Demonstration
                  </span>
                </div>

                <div className="relative z-10 text-center max-w-2xl mx-auto my-auto py-8">
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    {project.mockupDetails.headline}
                  </h2>
                  <p className="mt-4 text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
                    Simulated high-load demonstration architecture running on
                    Next.js 16 and multi-region edge nodes.
                  </p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2 justify-center pt-4 border-t border-white/[0.08]">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-neutral-300 bg-white/[0.06] px-3 py-1 rounded-md border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. Challenge, Strategy & Solution Breakdown */}
        <section className="relative py-20 bg-[#07090e] border-y border-white/[0.06]">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 01. Challenge */}
              <div className="rounded-3xl bg-[#090b10] border border-white/[0.08] p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-mono text-xs font-bold">
                      01
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      The Challenge
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </div>

              {/* 02. Strategy */}
              <div className="rounded-3xl bg-[#090b10] border border-white/[0.08] p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-7 h-7 rounded-lg bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff] font-mono text-xs font-bold">
                      02
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      The Strategy
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {project.strategy}
                  </p>
                </div>
              </div>

              {/* 03. Solution */}
              <div className="rounded-3xl bg-[#090b10] border border-white/[0.08] p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold">
                      03
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      The Solution
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 4. Deliverables & Verified Outcomes */}
        <section className="relative py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Deliverables Checklist */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Key Deliverables & Specifications
                </h3>
                <div className="space-y-3">
                  {project.deliverables.map((item) => (
                    <div
                      key={item}
                      className="p-4 rounded-xl bg-[#090b10] border border-white/[0.08] flex items-center gap-3 text-sm font-medium text-neutral-200"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#00e5ff] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results & Measurable Outcomes */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Verified Architectural Outcomes
                </h3>
                <div className="space-y-3">
                  {project.keyOutcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#090b10] border border-white/[0.08] flex items-start gap-3 text-sm text-neutral-300 leading-relaxed"
                    >
                      <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 5. Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="relative py-20 bg-[#07090e] border-t border-white/[0.06]">
            <Container>
              <div className="flex items-center justify-between mb-10">
                <div>
                  <Badge variant="electric" dot className="mb-2">
                    Case Study Index
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Related Projects &amp; Architectures
                  </h3>
                </div>
                <Button href="/work" variant="glass" size="sm">
                  View All Works
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/work/${rel.slug}`}
                    className="group p-5 rounded-2xl bg-[#090b10] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-[#00e5ff] uppercase tracking-wider">
                        {rel.category}
                      </span>
                      <h4 className="text-base font-bold text-white group-hover:text-[#00e5ff] transition-colors mt-1">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-2 line-clamp-2">
                        {rel.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400">
                      <span>{rel.badgeType}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* 6. CTA */}
        <section className="relative py-12">
          <Container className="max-w-4xl">
            <div className="rounded-3xl bg-gradient-to-r from-[#00e5ff]/10 via-[#0a0f1d] to-indigo-950/20 border border-white/[0.12] p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Ready to engineer your custom digital architecture?
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 max-w-lg mx-auto mb-6">
                Receive an itemized milestone proposal and technical roadmap for
                your platform.
              </p>
              <Button
                href="/contact"
                variant="electric"
                size="lg"
                icon={<ArrowUpRight className="w-5 h-5 text-black" />}
              >
                Schedule Technical Review
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
