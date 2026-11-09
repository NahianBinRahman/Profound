"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Compass,
  Search,
  Calendar,
  Palette,
  Terminal,
  Rocket,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const STAGES = [
  {
    id: "discovery",
    number: "01",
    name: "Discovery",
    icon: Compass,
    subtitle: "Uncovering Commercial & Technical Realities",
    duration: "Week 1",
    overview:
      "We begin by dissecting your commercial objectives, product vision, market positioning, and technical constraints. We align with your stakeholders to define success metrics, compliance requirements, and architectural boundaries.",
    focusAreas: [
      "Commercial Objective & ROI Modeling",
      "User Persona & Customer Journey Mapping",
      "Technical Debt & Legacy Stack Audit",
      "Data Governance & Compliance Scoping",
    ],
    deliverables: [
      "Executive Scoping & Feasibility Document",
      "Project Risk & Threat Surface Analysis",
      "High-Level System Architecture Brief",
    ],
    milestone: "Discovery Sign-Off & Sprint Budget Finalization",
  },
  {
    id: "research-strategy",
    number: "02",
    name: "Research and strategy",
    icon: Search,
    subtitle: "Algorithmic Market Intelligence & Tech Stacks",
    duration: "Week 2",
    overview:
      "We conduct deep technical research and competitive benchmarking. We analyze AI search landscape citations (AEO/GEO), evaluate multi-cloud latency profiles, and select the optimal modern technologies.",
    focusAreas: [
      "Competitive Digital & Architectural Benchmarking",
      "Generative Engine (AEO/GEO) Citation Opportunities",
      "Cloud Infrastructure Sizing & Cost Projections",
      "Database Schema & Entity Relationship Modeling",
    ],
    deliverables: [
      "Strategic Technology Roadmap",
      "AEO / GEO Entity Optimization Blueprint",
      "Target Cloud Infrastructure Topology Spec",
    ],
    milestone: "Architectural Strategy & Technology Stack Approval",
  },
  {
    id: "planning",
    number: "03",
    name: "Planning",
    icon: Calendar,
    subtitle: "Milestone Roadmaps & Immutable API Contracts",
    duration: "Week 3",
    overview:
      "Transforming strategy into granular engineering sprints. We define OpenAPI schema contracts, component hierarchies, sprint timelines, and quality gates with zero ambiguity.",
    focusAreas: [
      "Sprint-by-Sprint Milestone Planning",
      "OpenAPI / GraphQL Contract Definitions",
      "Design System Token Architecture",
      "Automated CI/CD Pipeline Configuration",
    ],
    deliverables: [
      "Detailed 6-to-12 Week Sprint Schedule",
      "API Schema Contracts & Data Dictionaries",
      "Linear / Jira Sprint Board Setup",
    ],
    milestone: "Sprint 0 Environment & CI/CD Pipeline Activation",
  },
  {
    id: "design",
    number: "04",
    name: "Design",
    icon: Palette,
    subtitle: "High-Fashion Editorial Meets Interactive 3D",
    duration: "Week 3–5",
    overview:
      "Crafting bespoke design systems, high-fidelity prototypes, 3D WebGL assets, and fluid micro-interactions with obsessive attention to typography, spatial rhythm, and ergonomic mobile controls.",
    focusAreas: [
      "Fluid Editorial Typography & Design Tokens",
      "Interactive High-Fidelity Motion Prototypes",
      "3D WebGL & Canvas Shaders (Three.js)",
      "Mobile-First Responsive Touch Layouts",
    ],
    deliverables: [
      "Complete Figma Design System & Component Library",
      "Interactive Prototype with Spring Physics",
      "Production 3D Assets & Vector Monograms",
    ],
    milestone: "Design System Review & Client Design Sign-Off",
  },
  {
    id: "development",
    number: "05",
    name: "Development",
    icon: Terminal,
    subtitle: "Sub-Second Speed & Zero Legacy Code",
    duration: "Week 5–8",
    overview:
      "Engineering clean, modular, and type-safe code using Next.js 16 App Router, TypeScript 5, Tailwind CSS v4, and hardened cloud services. Zero legacy patterns and 100% test coverage.",
    focusAreas: [
      "Next.js 16 Server Components & Edge Handlers",
      "Multi-Tenant Partitioned PostgreSQL Schemas",
      "Sub-15ms Serverless API Ingestion Layer",
      "Automated Unit, Integration & Security Tests",
    ],
    deliverables: [
      "Production-Grade Next.js & TypeScript Repository",
      "Stripe Payments & Multi-Tenant Billing Engine",
      "100% Automated CI/CD Regression Test Suite",
    ],
    milestone: "Feature Complete Staging Build & Penetration Testing",
  },
  {
    id: "deployment-optimisation",
    number: "06",
    name: "Deployment and optimisation",
    icon: Rocket,
    subtitle: "Zero-Downtime Global Edge Cutover & AEO",
    duration: "Week 8+ & Continuous",
    overview:
      "Executing rigorous penetration testing, Core Web Vitals optimization, zero-downtime DNS deployment, and cloud telemetry activation across global edge nodes, followed by generative search optimization.",
    focusAreas: [
      "Zero-Downtime Multi-Region DNS Cutover",
      "100/100 Core Web Vitals Performance Tuning",
      "Layer 7 DDoS & Security Hardening Verification",
      "Answer Engine Optimization (AEO/GEO) Ingestion",
    ],
    deliverables: [
      "Production Live Release with 99.99% SLA",
      "Core Web Vitals Audit Report (100/100)",
      "Continuous Telemetry & Anomaly Alerting",
      "Quarterly AEO Citation & Growth Sprints",
    ],
    milestone: "Global Live Launch & Ongoing Optimization SLA",
  },
];

const ENGINEERING_GUARANTEES = [
  {
    title: "Zero Technical Debt Policy",
    desc: "We write clean, strictly typed TypeScript with deterministic architectures. Every component is modular, documented, and built to outlive technology hype cycles.",
  },
  {
    title: "100/100 Core Web Vitals Benchmark",
    desc: "Sub-second load speeds are non-negotiable. We optimize image decoders, prefetch critical sub-resources, and leverage global edge caching.",
  },
  {
    title: "Zero-Trust Security Perimeter",
    desc: "Every endpoint, database query, and admin portal is protected by mutual TLS, context-aware IAM roles, and automated daily vulnerability scans.",
  },
  {
    title: "100% Unconditional IP Ownership",
    desc: "Upon milestone completion, you own every repository, Figma source file, database migration, and design token with zero licensing restrictions.",
  },
];

export default function ApproachPage() {
  const [activeStageId, setActiveStageId] = useState("discovery");
  const activeStage =
    STAGES.find((s) => s.id === activeStageId) || STAGES[0];

  return (
    <div className="relative min-h-screen bg-[#050608] text-white flex flex-col selection:bg-[#00e5ff] selection:text-[#050608]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* 1. Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#00e5ff]/15 via-indigo-600/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

          <Container className="relative z-10 text-center max-w-4xl">
            <Badge variant="electric" dot className="mb-6">
              The Profound Methodology
            </Badge>

            <h1 className="text-[clamp(2.75rem,7.5vw,6.5rem)] font-bold tracking-tight text-white leading-[1.04]">
              Our{" "}
              <span className="font-editorial font-normal italic text-slate-200">
                Approach
              </span>
              <span className="text-[#00e5ff]">.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-2xl text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
              An interactive six-stage workflow engineered to eliminate
              uncertainty, enforce architectural rigor, and deliver exceptional
              digital outcomes.
            </p>
          </Container>
        </section>

        {/* 2. Interactive Six-Stage Workflow Stepper */}
        <section className="relative py-12">
          <Container>
            {/* Interactive Stepper Navigation Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start lg:justify-between border-b border-white/[0.08]">
              {STAGES.map((s) => {
                const isActive = activeStageId === s.id;
                const Icon = s.icon;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveStageId(s.id)}
                    className={cn(
                      "group relative px-5 py-3.5 rounded-2xl flex items-center gap-3 transition-all duration-300 shrink-0 cursor-pointer select-none",
                      isActive
                        ? "bg-white/[0.08] border border-white/20 shadow-[0_0_25px_rgba(0,229,255,0.15)]"
                        : "hover:bg-white/[0.03] border border-transparent text-neutral-400 hover:text-white"
                    )}
                  >
                    <span
                      className={cn(
                        "w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-colors",
                        isActive
                          ? "bg-[#00e5ff] text-black"
                          : "bg-white/[0.06] text-neutral-400 group-hover:text-white"
                      )}
                    >
                      {s.number}
                    </span>
                    <div className="text-left">
                      <p
                        className={cn(
                          "text-xs font-semibold capitalize",
                          isActive ? "text-white" : "text-neutral-400"
                        )}
                      >
                        {s.name}
                      </p>
                      <p className="text-[10px] font-mono text-neutral-500">
                        {s.duration}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Deep-Dive Container (Animated Switch) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl bg-[#090b10] border border-white/[0.1] p-8 sm:p-14 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#00e5ff]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left Column: Stage Overview */}
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl sm:text-5xl font-black font-mono text-[#00e5ff]">
                        {activeStage.number}
                      </span>
                      <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-[#00e5ff] font-semibold">
                          Stage {activeStage.number} &bull; {activeStage.duration}
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold text-white capitalize">
                          {activeStage.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-neutral-300 font-medium mb-4">
                      {activeStage.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8">
                      {activeStage.overview}
                    </p>

                    {/* Milestone Checkpoint */}
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#00e5ff] shrink-0" />
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                          Stage Milestone Gate
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-white">
                          {activeStage.milestone}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Focus Areas & Deliverables */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* Focus Areas */}
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3">
                        Key Engineering Focus Areas:
                      </h3>
                      <ul className="space-y-2">
                        {activeStage.focusAreas.map((area) => (
                          <li
                            key={area}
                            className="flex items-start gap-2 text-xs text-neutral-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shrink-0 mt-1.5" />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3">
                        Tangible Stage Deliverables:
                      </h3>
                      <ul className="space-y-2.5">
                        {activeStage.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-xs text-neutral-200 font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </Container>
        </section>

        {/* 3. All Six Stages Bento Overview Grid */}
        <section className="relative py-20 bg-[#07090e] border-y border-white/[0.06]">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="electric" dot className="mb-4">
                Full-Lifecycle Architecture
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                The Complete{" "}
                <span className="font-editorial font-normal italic text-slate-200">
                  Lifecycle
                </span>
                <span className="text-[#00e5ff]">.</span>
              </h2>
              <p className="mt-4 text-base text-neutral-400">
                Explore all six phases of our structured engineering lifecycle at
                a glance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {STAGES.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.id}
                    onClick={() => setActiveStageId(s.id)}
                    className={cn(
                      "group rounded-3xl bg-[#090b10] border p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer hover:-translate-y-1",
                      activeStageId === s.id
                        ? "border-[#00e5ff]/50 shadow-[0_10px_35px_rgba(0,229,255,0.12)]"
                        : "border-white/[0.08] hover:border-white/20"
                    )}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                        <span className="text-3xl font-black font-mono text-neutral-400 group-hover:text-[#00e5ff] transition-colors">
                          {s.number}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-neutral-300 group-hover:text-[#00e5ff] transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <p className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold">
                        {s.duration}
                      </p>
                      <h3 className="text-xl font-bold text-white mt-1 capitalize group-hover:text-neutral-100">
                        {s.name}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3">
                        {s.overview}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400 font-mono">
                      <span>{s.deliverables.length} Deliverables</span>
                      <span className="text-[#00e5ff] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Inspect <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 4. Engineering Guarantees */}
        <section className="relative py-24 sm:py-32">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <Badge variant="electric" dot className="mb-4">
                Immutable Commitments
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Our Engineering{" "}
                <span className="font-editorial font-normal italic text-slate-200">
                  Guarantees
                </span>
                <span className="text-[#00e5ff]">.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {ENGINEERING_GUARANTEES.map((g) => (
                <div
                  key={g.title}
                  className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.08] hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff] mb-6 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {g.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 5. CTA */}
        <section className="relative py-12">
          <Container className="max-w-4xl">
            <div className="rounded-3xl bg-gradient-to-r from-[#00e5ff]/10 via-[#0a0f1d] to-indigo-950/20 border border-white/[0.12] p-8 sm:p-14 text-center">
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
                Ready to initiate Stage 01: Discovery?
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 max-w-lg mx-auto mb-8 leading-relaxed">
                Connect directly with our engineering directors to define your
                technical requirements, sprint timeline, and scope matrix.
              </p>
              <Button
                href="/contact"
                variant="electric"
                size="lg"
                icon={<ArrowUpRight className="w-5 h-5 text-black" />}
              >
                Schedule Architectural Discovery
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
