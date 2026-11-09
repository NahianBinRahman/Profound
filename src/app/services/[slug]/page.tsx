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
  HelpCircle,
  AlertCircle,
  Layers,
  Cpu,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SERVICES_DATA } from "@/data/services";
import { CASE_STUDIES_DATA } from "@/data/projects";
import { ServiceCanvasPreview } from "@/components/services/ServiceCanvasPreview";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Practice | Profound Agency",
    };
  }

  return {
    title: `${service.title} | Practice Discipline | Profound Agency`,
    description: service.shortDesc,
    alternates: {
      canonical: `https://profound.agency/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Profound Agency`,
      description: service.shortDesc,
      url: `https://profound.agency/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Lookup relevant demonstration portfolio projects
  const relatedProjects = CASE_STUDIES_DATA.filter((project) =>
    service.relatedCaseStudySlugs.includes(project.slug)
  );

  return (
    <div className="relative min-h-screen bg-[#050608] text-white flex flex-col selection:bg-[#00e5ff] selection:text-[#050608]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Breadcrumb Navigation */}
        <Container className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Practice Disciplines</span>
          </Link>
        </Container>

        {/* 1. Hero Section */}
        <section className="relative pb-16 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#00e5ff]/10 rounded-full blur-[140px] pointer-events-none" />

          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <Badge variant="electric" dot className="mb-4">
                  Practice Discipline &bull; {service.categoryTag}
                </Badge>

                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                  {service.title}
                  <span className="text-[#00e5ff]">.</span>
                </h1>

                <p className="mt-4 text-xl text-neutral-300 font-medium">
                  {service.subtitle}
                </p>

                <p className="mt-6 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl">
                  {service.fullDesc}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button
                    href={`/contact?service=${service.slug}`}
                    variant="electric"
                    size="lg"
                    icon={<ArrowUpRight className="w-5 h-5 text-black" />}
                  >
                    Initiate {service.title}
                  </Button>
                  <Button href="#problems" variant="glass" size="lg">
                    Problems We Solve
                  </Button>
                </div>
              </div>

              {/* Right Visual Canvas */}
              <div className="lg:col-span-5">
                <div className="p-2 rounded-3xl bg-[#090b10] border border-white/10 shadow-2xl">
                  <ServiceCanvasPreview type={service.previewType} />
                  <div className="p-4 mt-2 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span>Performance Benchmark</span>
                    <span className="text-[#00e5ff] font-semibold">
                      {service.metrics.label}: {service.metrics.value}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 2. Problems We Solve (Requested explicitly in Prompt 7) */}
        <section id="problems" className="relative py-20 bg-[#07090e] border-y border-white/[0.06]">
          <Container>
            <div className="max-w-3xl mb-12">
              <Badge variant="electric" dot className="mb-3">
                Commercial &amp; Technical Bottlenecks
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Problems We{" "}
                <span className="font-editorial font-normal italic text-slate-200">
                  Solve
                </span>
                <span className="text-[#00e5ff]">.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-400">
                The common bottlenecks that hold ambitious companies back, and
                how our practice resolves them permanently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.problemsWeSolve.map((item, i) => (
                <div
                  key={i}
                  className="rounded-3xl bg-[#090b10] border border-white/[0.08] p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
                >
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider mb-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>The Challenge</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {item.problem}
                    </h3>
                  </div>

                  <div className="pt-6 border-t border-white/[0.06]">
                    <div className="flex items-center gap-2 text-[#00e5ff] text-xs font-mono uppercase tracking-wider mb-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>The Profound Resolution</span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {item.resolution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 3. Detailed Capabilities */}
        <section className="relative py-24">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="electric" dot className="mb-3">
                Practice Breadth
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Detailed Practice{" "}
                <span className="font-editorial font-normal italic text-slate-200">
                  Capabilities
                </span>
                <span className="text-[#00e5ff]">.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {service.capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.08] hover:border-white/20 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#00e5ff]" />
                    {cap.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 4. Technologies & Tools + Deliverables */}
        <section className="relative py-20 bg-[#07090e] border-y border-white/[0.06]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Deliverables */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Standard Practice Deliverables
                </h3>
                <div className="space-y-3">
                  {service.deliverables.map((d) => (
                    <div
                      key={d}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#00e5ff] shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-200 font-medium">
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Technologies &amp; Architecture Tools
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="p-3.5 rounded-xl bg-[#090b10] border border-white/[0.08] flex items-center gap-2.5 text-xs font-mono text-neutral-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#00e5ff]" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-xs text-neutral-400 leading-relaxed">
                  <p className="font-semibold text-white mb-1">
                    Automated Quality Commitment
                  </p>
                  Every practice deliverable is validated against strict unit and
                  regression test suites with zero deprecated packages.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 5. 4-Step Practice Process */}
        <section className="relative py-24 sm:py-32">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="electric" dot className="mb-3">
                Execution Workflow
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                How We Deliver{" "}
                <span className="font-editorial font-normal italic text-slate-200">
                  {service.title}
                </span>
                <span className="text-[#00e5ff]">.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((p) => (
                <div
                  key={p.step}
                  className="rounded-3xl bg-[#090b10] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-mono font-black text-[#00e5ff] block mb-3">
                      {p.step}
                    </span>
                    <h3 className="text-base font-bold text-white mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 6. Relevant Portfolio Projects (Requested explicitly in Prompt 7) */}
        {relatedProjects.length > 0 && (
          <section className="relative py-20 bg-[#07090e] border-y border-white/[0.06]">
            <Container>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                <div>
                  <Badge variant="electric" dot className="mb-2">
                    Case Study Demonstrations
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Relevant {service.title} Projects
                  </h3>
                </div>
                <Button href="/work" variant="glass" size="sm">
                  View All Works
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className="group rounded-3xl bg-[#090b10] border border-white/[0.08] hover:border-white/20 p-6 flex flex-col justify-between transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold">
                          {proj.category}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px] font-mono">
                          {proj.badgeType}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-white group-hover:text-[#00e5ff] transition-colors">
                        {proj.title}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-2 line-clamp-2">
                        {proj.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-xs font-mono text-neutral-300">
                        {proj.metrics[0].label}: {proj.metrics[0].value}
                      </span>
                      <Link
                        href={`/work/${proj.slug}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-[#00e5ff] text-xs font-semibold text-white hover:text-black transition-colors"
                      >
                        <span>Inspect Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* 7. Practice FAQs */}
        <section className="relative py-24">
          <Container className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              Practice Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-8 rounded-2xl bg-[#090b10] border border-white/[0.08]"
                >
                  <h3 className="text-base font-semibold text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 8. Contact CTA */}
        <section className="relative py-12">
          <Container className="max-w-4xl">
            <div className="rounded-3xl bg-gradient-to-r from-[#00e5ff]/10 via-[#0a0f1d] to-indigo-950/20 border border-white/[0.12] p-8 sm:p-14 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Ready to deploy our {service.title} practice?
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 max-w-lg mx-auto mb-8 leading-relaxed">
                Receive an itemized milestone proposal and technical roadmap
                within 48 hours of discovery.
              </p>
              <Button
                href={`/contact?service=${service.slug}`}
                variant="electric"
                size="lg"
                icon={<ArrowUpRight className="w-5 h-5 text-black" />}
              >
                Request Architectural Proposal
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
