"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, ExternalLink, ShieldCheck, Layers, Eye } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CASE_STUDIES_DATA } from "@/data/projects";
import { cn } from "@/lib/utils";

const FILTER_CATEGORIES = [
  "All",
  "Software & SaaS",
  "Websites",
  "E-commerce",
  "Branding",
  "Digital Marketing",
  "Infrastructure",
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? CASE_STUDIES_DATA
      : CASE_STUDIES_DATA.filter((p) => p.category === activeFilter);

  return (
    <div className="relative min-h-screen bg-[#050608] text-white flex flex-col selection:bg-[#00e5ff] selection:text-[#050608]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* 1. Visuvate-Inspired Editorial Works Hero */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-[#00e5ff]/10 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

          <Container className="relative z-10 text-center max-w-4xl">
            <Badge variant="electric" dot className="mb-6">
              Curated Portfolio &amp; Case Studies
            </Badge>

            {/* Monumental Editorial Heading (Prompt 6 Specification) */}
            <h1 className="text-[clamp(3rem,8vw,7.5rem)] font-bold tracking-tight text-white leading-[1.02]">
              Selected{" "}
              <span className="font-editorial font-normal italic text-slate-200">
                Works
              </span>
              <span className="text-[#00e5ff]">.</span>
            </h1>

            {/* Supporting Text (Prompt 6 Specification) */}
            <p className="mt-6 text-lg sm:text-2xl text-neutral-400 font-normal max-w-2xl mx-auto leading-relaxed">
              Digital experiences built with purpose, precision and
              perspective.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-400">
              <Sparkles className="w-3.5 h-3.5 text-[#00e5ff]" />
              <span>
                Demonstration Portfolio &bull; Benchmark Specifications
              </span>
            </div>
          </Container>
        </section>

        {/* 2. Category Filters (Animated Pill Ribbon) */}
        <section className="relative pb-12">
          <Container>
            <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar justify-start md:justify-center">
              {FILTER_CATEGORIES.map((cat) => {
                const isActive = activeFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={cn(
                      "relative px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 shrink-0 cursor-pointer select-none",
                      isActive
                        ? "text-black font-semibold"
                        : "text-neutral-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08]"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterPill"
                        className="absolute inset-0 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 3. Responsive Portfolio Grid (Animated Category Filtering) */}
        <section className="relative py-4">
          <Container>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    data-cursor
                    data-cursor-text="VIEW"
                    className="group rounded-3xl bg-[#090b10] border border-white/[0.09] hover:border-white/20 p-5 sm:p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(0,229,255,0.1)] hover:-translate-y-1.5"
                  >
                    {/* Large Project Preview with Smooth Scaling & Overlay Hover */}
                    <Link
                      href={`/work/${project.slug}`}
                      className="relative block w-full aspect-[16/10] rounded-2xl bg-[#06070a] border border-white/10 overflow-hidden mb-6 cursor-pointer"
                    >
                      {/* Browser Mockup Top Header */}
                      <div className="absolute top-0 inset-x-0 z-20 px-3.5 py-2 bg-black/80 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                          <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                          <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[9px] font-mono text-neutral-400 truncate max-w-[150px]">
                          https://{project.mockupDetails.domain}
                        </span>
                        <div className="w-2 h-2" />
                      </div>

                      {/* Canvas Graphics with Zoom on Hover */}
                      <div className="absolute inset-0 pt-7 bg-gradient-to-br from-[#0c1017] via-[#050608] to-[#12182a] p-4 flex flex-col justify-between overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-out">
                        <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

                        {/* Top Badges */}
                        <div className="relative z-10 flex items-center justify-between">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[9px] font-mono uppercase tracking-wider font-semibold">
                            {project.badgeType}
                          </span>
                          <span className="text-[10px] font-mono text-[#00e5ff] font-bold">
                            {project.metrics[0].value}
                          </span>
                        </div>

                        {/* Centered Graphic Preview */}
                        <div className="relative z-10 my-auto text-center px-2">
                          <p className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                            {project.mockupDetails.highlight}
                          </p>
                          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight line-clamp-2">
                            {project.mockupDetails.headline}
                          </h3>
                        </div>

                        {/* Technology Footer Chips */}
                        <div className="relative z-10 flex flex-wrap gap-1.5 pt-2.5 border-t border-white/[0.08]">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-[9px] font-mono text-neutral-400 bg-white/[0.05] px-2 py-0.5 rounded border border-white/[0.08]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Subtle Overlay Transition on Hover */}
                      <div className="absolute inset-0 z-30 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex items-center justify-center">
                        <div className="px-4 py-2 rounded-full bg-white text-black text-xs font-bold flex items-center gap-1.5 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Case Study</span>
                        </div>
                      </div>
                    </Link>

                    {/* Card Meta & Typography */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Service Category & Industry Meta */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[11px] font-mono text-[#00e5ff] uppercase tracking-wider font-semibold">
                            {project.category}
                          </span>
                          <span className="text-[10px] font-mono text-neutral-400 truncate max-w-[140px]">
                            {project.industry}
                          </span>
                        </div>

                        {/* Project Name */}
                        <h2 className="text-xl font-bold text-white group-hover:text-[#00e5ff] transition-colors duration-300">
                          <Link href={`/work/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h2>

                        {/* Short Description */}
                        <p className="mt-2.5 text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3">
                          {project.summary}
                        </p>
                      </div>

                      {/* Action Trigger */}
                      <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                        <span className="text-[11px] font-mono text-neutral-400">
                          {project.deliverables.length} Deliverables
                        </span>

                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.06] group-hover:bg-[#00e5ff] text-xs font-semibold text-neutral-200 group-hover:text-[#050608] transition-all duration-300 shadow-sm"
                        >
                          <span>View Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </Container>
        </section>

        {/* 4. Demonstration Architecture Notice & CTA */}
        <section className="relative py-20 mt-12">
          <Container className="max-w-4xl">
            <div className="rounded-3xl bg-gradient-to-r from-[#00e5ff]/10 via-[#0a0f1d] to-indigo-950/20 border border-white/[0.12] p-8 sm:p-14 text-center">
              <Badge variant="electric" dot className="mb-4 mx-auto">
                Demonstration Verification
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Need an architectural demonstration customized for your team?
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto mb-8 leading-relaxed">
                All showcased case studies represent reproducible engineering
                benchmarks and design systems. We can prepare a dedicated live
                prototype addressing your stack.
              </p>
              <Button
                href="/contact"
                variant="electric"
                size="lg"
                icon={<ArrowUpRight className="w-5 h-5 text-black" />}
              >
                Schedule Technical Architecture Review
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
