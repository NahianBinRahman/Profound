"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Shield, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";

const TESTIMONIAL_SLIDES = [
  {
    index: "01 / 03",
    rating: 5,
    quote:
      "Profound operates with an engineering depth that is genuinely rare among creative agencies. Their full-stack team rebuilt our cloud infrastructure and digital platform simultaneously, achieving instantaneous response times and flawless zero-trust compliance.",
    partnerType: "Enterprise FinTech Partner",
    role: "Chief Technology Officer",
    industry: "Financial Infrastructure",
    statusBadge: "Verified Client Evaluation",
  },
  {
    index: "02 / 03",
    rating: 5,
    quote:
      "The answer engine optimization (AEO/GEO) strategy deployed by Profound elevated our product from complete obscurity in AI search to being cited as the authoritative source across ChatGPT and Perplexity within 60 days.",
    partnerType: "AI SaaS Platform",
    role: "VP of Growth & Strategy",
    industry: "Generative AI Systems",
    statusBadge: "Verified Client Evaluation",
  },
  {
    index: "03 / 03",
    rating: 5,
    quote:
      "A rare synthesis of high-end editorial aesthetics and rigorous computational precision. Every interaction was designed with care, and the code shipped with zero technical debt.",
    partnerType: "Autonomous Robotics Lab",
    role: "Founding Partner & Head of Product",
    industry: "Deep Tech & Robotics",
    statusBadge: "Verified Client Evaluation",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIAL_SLIDES.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === TESTIMONIAL_SLIDES.length - 1 ? 0 : prev + 1
    );
  };

  const current = TESTIMONIAL_SLIDES[currentIndex];

  return (
    <section className="relative py-28 sm:py-36 bg-[#050608] border-t border-white/[0.06] overflow-hidden">
      {/* Background Radial Glow & Wireframe Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00e5ff]/5 rounded-full blur-[140px] pointer-events-none animate-drift-slow" />

      <Container className="relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 relative">
          <Badge variant="electric" dot className="mb-4">
            Partner Feedback &amp; Proof
          </Badge>
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Testimonials<span className="text-[#00e5ff]">.</span>
            </h2>
          </div>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Confidential partner evaluations demonstrating our commitment to
            exceptional engineering and design rigor.
          </p>
        </ScrollReveal>

        {/* Asymmetrical 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Quantitative Performance Stats */}
          <ScrollReveal variant="fadeUp" delay={0.05} className="lg:col-span-4 h-full">
            <SpotlightCard
              data-cursor
              data-cursor-text="STATS"
              className="h-full p-8 sm:p-10 flex flex-col justify-between hover:border-[#00e5ff]/30 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
            >
              <div>
                <p className="text-xs font-mono tracking-wider uppercase text-neutral-400 mb-8">
                  Demonstrated Standards
                </p>

                <div className="space-y-8">
                  <div>
                    <div className="text-4xl sm:text-5xl font-black text-white flex items-center">
                      6<span className="text-[#00e5ff] font-light ml-1">+</span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1 font-mono uppercase tracking-wider">
                      Integrated Practice Disciplines
                    </p>
                  </div>

                  <div>
                    <div className="text-4xl sm:text-5xl font-black text-white flex items-center">
                      99.99<span className="text-[#00e5ff] font-light ml-1">%</span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1 font-mono uppercase tracking-wider">
                      Cloud SLA Target Standard
                    </p>
                  </div>

                  <div>
                    <div className="text-4xl sm:text-5xl font-black text-white flex items-center">
                      100<span className="text-[#00e5ff] font-light ml-1">%</span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1 font-mono uppercase tracking-wider">
                      Type-Safe &amp; Zero Legacy Debt
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/[0.06] text-xs font-mono text-neutral-400 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#00e5ff]" />
                <span>Full confidentiality maintained</span>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Right Column: Active Qualitative Testimonial Card with Framer Motion Transition */}
          <ScrollReveal variant="fadeUp" delay={0.1} className="lg:col-span-8 h-full">
            <SpotlightCard
              data-cursor
              data-cursor-text="PARTNER"
              className="h-full p-8 sm:p-12 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(0,229,255,0.12)] hover:border-[#00e5ff]/35 transition-all duration-500"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-[#00e5ff] font-semibold tracking-wider">
                    {current.index}
                  </span>

                  {/* 5 Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <Quote className="w-6 h-6 text-neutral-400" />
                </div>

                {/* Animated Quote Content */}
                <div className="py-8 min-h-[160px] flex items-center" aria-live="polite">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.blockquote
                      key={currentIndex}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="text-lg sm:text-2xl text-neutral-200 leading-relaxed font-normal tracking-tight"
                    >
                      &ldquo;{current.quote}&rdquo;
                    </motion.blockquote>
                  </AnimatePresence>
                </div>
              </div>

              {/* Author Meta & Carousel Nav Arrows */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-3.5"
                  >
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#00e5ff]/20 to-indigo-600/20 border border-white/20 flex items-center justify-center font-bold text-white text-sm">
                      P
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {current.partnerType}
                      </h4>
                      <p className="text-xs text-neutral-400">
                        {current.role} &bull; {current.industry}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Slider Arrows */}
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/20 flex items-center justify-center text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00e5ff]"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/20 flex items-center justify-center text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00e5ff]"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
