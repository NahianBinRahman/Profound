"use client";

import React from "react";
import { ArrowUpRight, Cpu, Sparkles, Layers, Shield, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";

export function AgencyIntro() {
  const capabilities = [
    {
      icon: Cpu,
      title: "Software & SaaS Engineering",
      desc: "Robust cloud architectures, custom APIs, and full-stack platforms engineered for scale.",
    },
    {
      icon: Shield,
      title: "Hardened Infrastructure",
      desc: "Zero-trust cyber defense, automated DevOps pipelines, and compliant cloud perimeters.",
    },
    {
      icon: Sparkles,
      title: "Bespoke Web Experiences",
      desc: "Cinematic, sub-second web flagships blending fluid motion with high conversion.",
    },
    {
      icon: Zap,
      title: "AEO & Algorithmic Growth",
      desc: "Entity-driven optimization dominating AI answer engines, paid ads, and viral content.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#050608] overflow-hidden">
      {/* Background Lighting with subtle drift */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#00e5ff]/5 rounded-full blur-[140px] pointer-events-none animate-drift-slow" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline & Editorial Narrative */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <Badge variant="electric" dot className="mb-6">
                Our Agency Philosophy
              </Badge>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                Technology meets{" "}
                <span className="font-editorial font-normal italic text-slate-200">
                  thoughtful
                </span>{" "}
                creativity<span className="text-[#00e5ff]">.</span>
              </h2>

              <div className="mt-6 sm:mt-8 space-y-4 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl">
                <p>
                  At Profound, we bridge the divide between deep software
                  engineering and luxury brand storytelling. We believe ambitious
                  businesses shouldn&apos;t have to choose between flawless code
                  and unforgettable design.
                </p>
                <p className="text-neutral-400">
                  From high-concurrency SaaS backends and hardened cybersecurity
                  protocols to bespoke web flagships, answer engine optimization
                  (AEO/GEO), and performance creative — our integrated practice
                  delivers unified digital supremacy.
                </p>
              </div>

              <div className="mt-8 sm:mt-10 flex items-center gap-4">
                <Button
                  href="/about"
                  variant="primary"
                  size="md"
                  icon={<ArrowUpRight className="w-4 h-4 text-black" />}
                >
                  Learn Our Story
                </Button>
                <Button href="/approach" variant="glass" size="md">
                  Our Methodology
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Capability Matrix & Perspective Cards */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.08}>
              <SpotlightCard
                data-cursor
                data-cursor-text="PROFOUND"
                className="p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(0,229,255,0.1)] hover:border-[#00e5ff]/35 transition-all duration-500"
              >
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] animate-pulse" />
                    <span className="text-xs font-mono tracking-wider uppercase text-neutral-300">
                      Unified Agency Architecture
                    </span>
                  </div>
                  <Layers className="w-4 h-4 text-neutral-400" />
                </div>

                <div className="divide-y divide-white/[0.06] mt-2">
                  {capabilities.map((cap) => {
                    const Icon = cap.icon;
                    return (
                      <div
                        key={cap.title}
                        className="py-4.5 group hover:pl-2 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-1.5">
                          <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-neutral-300 group-hover:text-[#00e5ff] group-hover:border-[#00e5ff]/30 transition-colors">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <h4 className="text-sm font-semibold text-white group-hover:text-[#00e5ff] transition-colors">
                            {cap.title}
                          </h4>
                        </div>
                        <p className="text-xs text-neutral-400 leading-relaxed pl-10">
                          {cap.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>Integrated Disciplines</span>
                  <span className="text-[#00e5ff]">6 Capabilities</span>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
