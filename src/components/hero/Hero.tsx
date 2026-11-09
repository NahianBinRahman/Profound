"use client";

import React from "react";
import { ArrowUpRight, ChevronDown, Layers } from "lucide-react";
import { HeroCanvas3D } from "./HeroCanvas3D";
import { ShowreelCard } from "./ShowreelCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-4 sm:pb-6 overflow-hidden bg-[#050608]">
      {/* 1. Atmospheric Ambient Lighting Layers */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-[#00e5ff]/15 via-[#3b82f6]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-slate-300/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-subtle opacity-35 pointer-events-none" />

      {/* 2. Interactive 3D Dimensional Object (Canvas) */}
      <HeroCanvas3D />

      {/* 3. Main Hero Typography & Content Layer */}
      <Container className="relative z-20 flex-1 flex flex-col justify-center my-auto py-2 sm:py-4">
        <div className="max-w-5xl">
          {/* Eyebrow Pill */}
          <div className="mb-3 sm:mb-4 animate-fade-in-up">
            <Badge variant="electric" dot>
              Digital Studio &bull; Next-Gen Engineering
            </Badge>
          </div>

          {/* Monumental Oversized Typography (Refined Fluid Proportions) */}
          <div className="animate-fade-in-up [animation-delay:100ms]">
            <h1 className="text-[clamp(2.5rem,5.2vw,5.5rem)] font-extrabold tracking-[-0.04em] leading-[0.98] text-white select-none">
              Beyond Digital<span className="text-[#00e5ff]">.</span>
              <br />
              <span className="font-editorial font-normal italic text-slate-200">
                Into
              </span>{" "}
              Possibility<span className="text-[#00e5ff]">.</span>
            </h1>
          </div>

          {/* Subtitle & Value Statement */}
          <div className="mt-3.5 sm:mt-5 max-w-xl animate-fade-in-up [animation-delay:200ms]">
            <p className="text-base sm:text-lg lg:text-xl text-neutral-400 font-normal leading-relaxed tracking-tight">
              We design, build and accelerate digital experiences that help
              ambitious businesses move forward.
            </p>
          </div>

          {/* Dual Action CTAs (Prominently Above the Fold) */}
          <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-3.5 animate-fade-in-up [animation-delay:300ms]">
            <Button
              href="/contact"
              variant="electric"
              size="md"
              icon={<ArrowUpRight className="w-4 h-4 text-[#050608]" />}
            >
              Start a Project
            </Button>

            <Button
              href="/services"
              variant="glass"
              size="md"
              icon={<Layers className="w-4 h-4 text-neutral-400" />}
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </Container>

      {/* 4. Lower Anchor: Floating Showreel & Tactical Details */}
      <Container className="relative z-20 pt-4 sm:pt-6 mt-auto">
        <div className="flex flex-col-reverse lg:flex-row items-start lg:items-end justify-between gap-6 border-t border-white/[0.08] pt-4 sm:pt-5">
          {/* Agency Capability Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12">
            <div>
              <p className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">
                Core Disciplines
              </p>
              <p className="text-sm font-semibold text-white mt-1">
                6 Practice Groups
              </p>
            </div>
            <div>
              <p className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">
                Speed & Precision
              </p>
              <p className="text-sm font-semibold text-white mt-1">
                Zero Legacy Code
              </p>
            </div>
            <div className="hidden sm:block">
              <p className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">
                Global Footprint
              </p>
              <p className="text-sm font-semibold text-white mt-1">
                Worldwide Delivery
              </p>
            </div>
          </div>

          {/* Floating Showreel Capsule (Huge Lower-Right Inspired) */}
          <div className="w-full sm:w-auto flex justify-end">
            <ShowreelCard />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-2.5 sm:mt-3.5">
          <a
            href="#services"
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors duration-300 py-1"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </Container>
    </section>
  );
}
