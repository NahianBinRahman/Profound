"use client";

import React from "react";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";

export function CtaSection() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#050608] border-t border-white/[0.06] overflow-hidden">
      {/* Background Volumetric Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-[#00e5ff]/15 via-indigo-600/10 to-transparent rounded-full blur-[140px] pointer-events-none animate-drift-slow" />
      <div className="absolute inset-0 bg-grid-subtle opacity-25 pointer-events-none" />

      <Container className="relative z-10 max-w-5xl">
        <ScrollReveal variant="scaleIn">
          <SpotlightCard
            data-cursor
            data-cursor-text="START"
            className="rounded-3xl bg-gradient-to-b from-[#0a0e18]/90 via-[#07090e]/95 to-[#050608] border border-white/[0.12] p-8 sm:p-16 text-center relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(0,229,255,0.12)] hover:border-[#00e5ff]/40 transition-all duration-500"
          >
            {/* Subtle Top Specular Line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/60 to-transparent pointer-events-none" />

            <Badge variant="electric" dot className="mb-6 mx-auto">
              Initiate Engagement
            </Badge>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-3xl mx-auto">
              Ready to build something{" "}
              <span className="font-editorial font-normal italic text-slate-200">
                profound
              </span>
              <span className="text-[#00e5ff]">?</span>
            </h2>

            <p className="mt-6 text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Partner with an elite digital agency combining high-precision software
              engineering, cloud security, and unforgettable brand design.
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

              <Button
                href="/contact?type=consultation"
                variant="glass"
                size="lg"
                icon={<Calendar className="w-4 h-4 text-neutral-400" />}
              >
                Schedule Consultation
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
                Fixed Milestone Quotes
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
                Direct Lead Engineer Access
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
                Global Delivery Standards
              </span>
            </div>
          </SpotlightCard>
        </ScrollReveal>
      </Container>
    </section>
  );
}
