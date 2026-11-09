"use client";

import React from "react";
import {
  Compass,
  Lightbulb,
  Palette,
  Terminal,
  Rocket,
  LineChart,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";

const STEPS = [
  {
    step: "01",
    title: "Discover",
    name: "Architectural Discovery",
    desc: "We begin by dissecting your commercial objectives, technical requirements, user personas, and competitive landscape to establish immutable project foundations.",
    icon: Compass,
    deliverable: "Scoping Matrix & Architecture Spec",
  },
  {
    step: "02",
    title: "Strategise",
    name: "Strategic Roadmap",
    desc: "Translating discovery findings into technical blueprints, database schema models, tech stack selection, and milestone roadmaps with precise sprint timelines.",
    icon: Lightbulb,
    deliverable: "Tech Blueprint & System Architecture",
  },
  {
    step: "03",
    title: "Design",
    name: "Precision UI/UX Design",
    desc: "Crafting bespoke design systems, high-fidelity prototypes, 3D WebGL assets, and fluid micro-interactions with obsessive attention to typography and spatial rhythm.",
    icon: Palette,
    deliverable: "Figma System & Interactive Prototype",
  },
  {
    step: "04",
    title: "Develop",
    name: "Full-Stack Development",
    desc: "Engineering clean, modular, and type-safe code using Next.js, TypeScript, Tailwind, and hardened cloud services. Zero legacy patterns and 100% test coverage.",
    icon: Terminal,
    deliverable: "Production Codebase & CI/CD Pipeline",
  },
  {
    step: "05",
    title: "Launch",
    name: "Zero-Downtime Launch",
    desc: "Executing rigorous penetration testing, Core Web Vitals optimization, zero-downtime DNS deployment, and cloud telemetry activation across global edge nodes.",
    icon: Rocket,
    deliverable: "Edge Deployment & Security Sign-Off",
  },
  {
    step: "06",
    title: "Optimise",
    name: "Continuous Growth",
    desc: "Post-launch generative engine optimization (AEO/GEO), multi-variant conversion rate optimization (CRO), speed audits, and proactive feature iterations.",
    icon: LineChart,
    deliverable: "Growth Telemetry & Quarterly Sprints",
  },
];

export function OurApproach() {
  return (
    <section id="approach" className="relative py-28 sm:py-36 bg-[#050608] border-t border-white/[0.06] overflow-hidden">
      <Container className="relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <Badge variant="electric" dot className="mb-4">
              Structured Methodology
            </Badge>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Our{" "}
              <span className="font-editorial font-normal italic text-slate-200">
                Approach
              </span>
              <span className="text-[#00e5ff]">.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-xl">
              A battle-tested six-phase engineering and design framework built to
              eliminate uncertainty and deliver exceptional digital outcomes.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-white/[0.04] px-4 py-2 rounded-full border border-white/[0.08]">
            <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-ping" />
            <span>Sprint Duration: 4–12 Weeks</span>
          </div>
        </ScrollReveal>

        {/* 6-Step Bento Workflow Grid (Visuvate-Inspired Interactive Spotlight Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {STEPS.map((s, index) => {
            const Icon = s.icon;
            return (
              <ScrollReveal
                key={s.step}
                variant="fadeUp"
                delay={index * 0.07}
                className="h-full"
              >
                <SpotlightCard
                  data-cursor
                  data-cursor-text="STAGE"
                  className="group p-8 flex flex-col justify-between hover:border-[#00e5ff]/30 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(0,229,255,0.12)] h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-3xl font-black font-mono text-neutral-500 group-hover:text-[#00e5ff] transition-colors duration-300">
                        {s.step}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-neutral-300 group-hover:text-[#00e5ff] group-hover:border-[#00e5ff]/40 group-hover:scale-110 transition-all duration-300 shadow-inner">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <p className="text-xs font-mono tracking-wider uppercase text-[#00e5ff] font-semibold">
                      {s.title}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 group-hover:text-white transition-colors">
                      {s.name}
                    </h3>
                    <p className="mt-3.5 text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs">
                    <span className="text-neutral-400 font-mono">Deliverable</span>
                    <span className="font-mono text-neutral-200 group-hover:text-[#00e5ff] font-medium text-[11px] transition-colors bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]">
                      {s.deliverable}
                    </span>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
