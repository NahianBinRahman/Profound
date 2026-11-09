"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { ServiceCanvasPreview } from "./ServiceCanvasPreview";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-28 sm:py-36 bg-[#050608] overflow-hidden">
      {/* Background Neural Web / Energy Glow with gentle drift */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-gradient-to-b from-[#00e5ff]/10 via-[#1e40af]/5 to-transparent rounded-full blur-[160px] pointer-events-none animate-drift-slow" />

      <Container className="relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <Badge variant="electric" dot className="mb-4">
              Core Practices
            </Badge>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Our{" "}
              <span className="font-editorial font-normal italic text-slate-200">
                Services
              </span>
              <span className="text-[#00e5ff]">.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-xl">
              Six foundational disciplines, one unified studio. We deploy
              end-to-end expertise tailored to your product&apos;s growth phase.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button href="/services" variant="glass" size="md">
              View All Services
            </Button>
            <Button
              href="/contact"
              variant="electric"
              size="md"
              icon={<ArrowUpRight className="w-4 h-4 text-[#050608]" />}
            >
              Start a Project
            </Button>
          </div>
        </ScrollReveal>

        {/* 6 Services Grid (3 Columns) with Staggered Scroll & Dynamic Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ScrollReveal
              key={service.id}
              variant="fadeUp"
              delay={index * 0.08}
              className="h-full"
            >
              <SpotlightCard
                data-cursor
                data-cursor-text="EXPLORE"
                className="group h-full p-6 sm:p-7 flex flex-col justify-between hover:border-[#00e5ff]/35 hover:shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_45px_rgba(0,229,255,0.18)] transition-all duration-500"
              >
                {/* Top Graphic Illustration Canvas */}
                <div className="mb-6 relative z-10 transition-transform duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1">
                  <ServiceCanvasPreview type={service.previewType} />
                </div>

                {/* Card Meta & Typography */}
                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono tracking-wider uppercase text-[#00e5ff] font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-ping" />
                        {service.categoryTag}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-300 bg-white/[0.05] px-2.5 py-0.5 rounded-full border border-white/[0.08] shadow-sm">
                        {service.metrics.label}: {service.metrics.value}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00e5ff] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-neutral-400 leading-relaxed line-clamp-3 group-hover:text-neutral-300 transition-colors">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Bottom Action Trigger */}
                  <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                      <span className="font-mono text-[11px]">Active Practice</span>
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.06] group-hover:bg-[#00e5ff] text-xs font-semibold text-neutral-200 group-hover:text-[#050608] transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
