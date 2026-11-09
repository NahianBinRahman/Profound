"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SELECTED_PROJECTS } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All",
  "Software & SaaS",
  "Cybersecurity & IT",
  "Website Design",
  "SEO & AEO",
];

export function SelectedWorks() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? SELECTED_PROJECTS
      : SELECTED_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="relative py-28 sm:py-36 bg-[#050608] border-t border-white/[0.06] overflow-hidden">
      <Container className="relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <Badge variant="electric" dot className="mb-4">
              Featured Portfolio
            </Badge>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Selected{" "}
              <span className="font-editorial font-normal italic text-slate-200">
                Works
              </span>
              <span className="text-[#00e5ff]">.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-xl">
              A curated preview of our technical architecture, bespoke websites,
              and engineering capabilities.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-neutral-400 bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/[0.08]">
              Notice: All entries labeled as demonstration concepts
            </span>
          </div>
        </ScrollReveal>

        {/* Filter Pills Ribbon with Smooth Layout Transitions */}
        <ScrollReveal variant="fadeIn" delay={0.1} className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "relative px-5 py-2 rounded-full text-xs font-medium transition-colors shrink-0 cursor-pointer select-none",
                  isActive ? "text-black font-semibold" : "text-neutral-400 hover:text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-work-filter-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.35)]"
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </ScrollReveal>

        {/* 2-Column Showcase Grid with Stagger & Image Transitions */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <SpotlightCard
                  data-cursor
                  data-cursor-text="VIEW"
                  className="group p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.85)] h-full"
                >
                  {/* Large Visual Browser/Device Container */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl bg-[#06070a] border border-white/10 overflow-hidden mb-6 flex flex-col group/mockup">
                    {/* Browser Window Header */}
                    <div className="px-4 py-2.5 bg-black/80 border-b border-white/[0.08] flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400">
                        https://{project.mockupDetails.domain}
                      </span>
                      <div className="w-3 h-3" />
                    </div>

                    {/* Simulated High-Res Project UI with subtle scale on hover */}
                    <div className="flex-1 relative bg-gradient-to-br from-[#0c1017] via-[#050608] to-[#111726] p-6 flex flex-col justify-between overflow-hidden transition-transform duration-700 ease-out group-hover/mockup:scale-[1.03]">
                      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

                      {/* Demonstration Stamp */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px] font-mono uppercase tracking-wider font-semibold">
                          <Sparkles className="w-3 h-3" />
                          {project.badgeType}
                        </span>
                        <span className="text-xs font-mono text-[#00e5ff] font-bold">
                          {project.metrics[0].value}
                        </span>
                      </div>

                      {/* Core Preview Graphic Canvas */}
                      <div className="relative z-10 my-auto text-center px-4">
                        <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                          {project.mockupDetails.highlight}
                        </p>
                        <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {project.mockupDetails.headline}
                        </h4>
                      </div>

                      {/* Technology Badges */}
                      <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
                        {project.deliverables.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono text-neutral-400 bg-white/[0.05] px-2.5 py-1 rounded-md border border-white/[0.08]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Meta & Details */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#00e5ff]">
                        {project.category}
                      </span>
                      <span className="text-xs text-neutral-400">
                        {project.scope}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-[#00e5ff] transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                      <span className="text-xs text-neutral-400">
                        {project.deliverables.length} Key Deliverables
                      </span>
                      <Button
                        href={`/work/${project.slug}`}
                        variant="glass"
                        size="sm"
                        icon={<ArrowUpRight className="w-3.5 h-3.5 text-neutral-300" />}
                      >
                        View Case Study
                      </Button>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
