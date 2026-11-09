"use client";

import React from "react";
import {
  Layers,
  TrendingUp,
  Cpu,
  Sparkles,
  LifeBuoy,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";

const PILLARS = [
  {
    icon: Layers,
    title: "Integrated Digital Capabilities",
    subtitle: "One Team, Zero Silos",
    desc: "We eliminate agency fragmentation by combining SaaS software engineering, cloud cybersecurity, bespoke web development, and algorithmic marketing under one unified execution team.",
    highlight: "6 Disciplines in Sync",
  },
  {
    icon: TrendingUp,
    title: "Business-Focused Solutions",
    subtitle: "Built for Revenue & Conversion",
    desc: "We don't build vanity experiments. Every architectural decision, interface animation, and content funnel is measured by its impact on customer conversion, user retention, and enterprise valuation.",
    highlight: "Measurable ROI",
  },
  {
    icon: Cpu,
    title: "Scalable Technology",
    subtitle: "Engineered for Exponential Growth",
    desc: "From modern serverless microservices to sub-millisecond database queries and automated CI/CD pipelines, we engineer architectures that support millions of requests without rewriting.",
    highlight: "Zero Technical Debt",
  },
  {
    icon: Sparkles,
    title: "Creative & Technical Expertise",
    subtitle: "High Fashion Meets Hard Engineering",
    desc: "Where traditional developers lack aesthetic sensibility and design agencies lack engineering rigor, Profound operates seamlessly at the intersection of cinematic design and elite computer science.",
    highlight: "Elite Craftsmanship",
  },
  {
    icon: LifeBuoy,
    title: "Long-Term Strategic Support",
    subtitle: "Partnership Beyond Deployment",
    desc: "Launch is day zero. We provide continuous maintenance, zero-day security patching, performance monitoring, and iterative feature sprints to maintain your competitive advantage.",
    highlight: "Continuous Evolution",
  },
];

export function WhyChooseProfound() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#050608] border-t border-white/[0.06] overflow-hidden">
      {/* Background Radial Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00e5ff]/5 rounded-full blur-[140px] pointer-events-none animate-drift-slow" />

      <Container className="relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="electric" dot className="mb-4">
            The Profound Advantage
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            Why choose{" "}
            <span className="font-editorial font-normal italic text-slate-200">
              Profound
            </span>
            <span className="text-[#00e5ff]">?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            We operate at the convergence of relentless engineering standards and
            visionary design, ensuring your enterprise scales with speed and
            distinction.
          </p>
        </ScrollReveal>

        {/* Bento Grid: 2 Top Large Cards, 3 Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 (Span 2 on tablet/desktop) */}
          <ScrollReveal variant="fadeUp" delay={0.05} className="lg:col-span-2 h-full">
            <SpotlightCard
              data-cursor
              data-cursor-text="WHY US"
              className="group h-full p-6 sm:p-10 transition-all duration-500 flex flex-col justify-between hover:border-[#00e5ff]/35 hover:shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(0,229,255,0.15)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff] shadow-[0_0_20px_rgba(0,229,255,0.25)] group-hover:scale-110 transition-transform duration-300">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-[#00e5ff] bg-[#00e5ff]/10 px-3 py-1 rounded-full border border-[#00e5ff]/25 shadow-sm">
                    {PILLARS[0].highlight}
                  </span>
                </div>
                <p className="text-xs font-mono tracking-wider uppercase text-neutral-400">
                  {PILLARS[0].subtitle}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 group-hover:text-white transition-colors">
                  {PILLARS[0].title}
                </h3>
                <p className="mt-4 text-base text-neutral-400 leading-relaxed max-w-xl group-hover:text-neutral-300 transition-colors">
                  {PILLARS[0].desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00e5ff]" />
                  <span>Zero vendor handoffs</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00e5ff]" />
                  <span>Single accountability</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00e5ff]" />
                  <span>End-to-end velocity</span>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal variant="fadeUp" delay={0.1} className="h-full">
            <SpotlightCard
              data-cursor
              data-cursor-text="WHY US"
              className="group h-full p-6 sm:p-10 transition-all duration-500 flex flex-col justify-between hover:border-emerald-500/30 hover:shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(52,211,153,0.12)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(52,211,153,0.2)]">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    {PILLARS[1].highlight}
                  </span>
                </div>
                <p className="text-xs font-mono tracking-wider uppercase text-neutral-400">
                  {PILLARS[1].subtitle}
                </p>
                <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-white transition-colors">
                  {PILLARS[1].title}
                </h3>
                <p className="mt-4 text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                  {PILLARS[1].desc}
                </p>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 3 */}
          <ScrollReveal variant="fadeUp" delay={0.15} className="h-full">
            <SpotlightCard
              data-cursor
              data-cursor-text="WHY US"
              className="group h-full p-6 sm:p-10 transition-all duration-500 flex flex-col justify-between hover:border-[#00e5ff]/35 hover:shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(0,229,255,0.12)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#00e5ff]/10 border border-[#00e5ff]/25 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                    <Cpu className="w-6 h-6 text-[#00e5ff]" />
                  </div>
                  <span className="text-xs font-mono text-[#00e5ff] bg-[#00e5ff]/10 px-3 py-1 rounded-full border border-[#00e5ff]/20">
                    {PILLARS[2].highlight}
                  </span>
                </div>
                <p className="text-xs font-mono tracking-wider uppercase text-neutral-400">
                  {PILLARS[2].subtitle}
                </p>
                <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-white transition-colors">
                  {PILLARS[2].title}
                </h3>
                <p className="mt-4 text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                  {PILLARS[2].desc}
                </p>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 4 */}
          <ScrollReveal variant="fadeUp" delay={0.2} className="h-full">
            <SpotlightCard
              data-cursor
              data-cursor-text="WHY US"
              className="group h-full p-6 sm:p-10 transition-all duration-500 flex flex-col justify-between hover:border-purple-500/35 hover:shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(168,85,247,0.12)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                    {PILLARS[3].highlight}
                  </span>
                </div>
                <p className="text-xs font-mono tracking-wider uppercase text-neutral-400">
                  {PILLARS[3].subtitle}
                </p>
                <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-white transition-colors">
                  {PILLARS[3].title}
                </h3>
                <p className="mt-4 text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                  {PILLARS[3].desc}
                </p>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 5 */}
          <ScrollReveal variant="fadeUp" delay={0.25} className="h-full">
            <SpotlightCard
              data-cursor
              data-cursor-text="WHY US"
              className="group h-full p-6 sm:p-10 transition-all duration-500 flex flex-col justify-between hover:border-sky-500/35 hover:shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(14,165,233,0.12)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(14,165,233,0.2)]">
                    <LifeBuoy className="w-6 h-6 text-sky-400" />
                  </div>
                  <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                    {PILLARS[4].highlight}
                  </span>
                </div>
                <p className="text-xs font-mono tracking-wider uppercase text-neutral-400">
                  {PILLARS[4].subtitle}
                </p>
                <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-white transition-colors">
                  {PILLARS[4].title}
                </h3>
                <p className="mt-4 text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                  {PILLARS[4].desc}
                </p>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
