"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  HelpCircle,
  Calculator,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const TIERS = [
  {
    name: "Foundation Sprint",
    category: "Bespoke Web Flagship",
    startingPrice: "$2,500",
    description:
      "A complete bespoke digital flagship designed from the ground up on Next.js 16 with fluid typography, sub-second load times, and an intuitive headless CMS.",
    timeline: "3–5 Weeks Delivery",
    deliverables: [
      "Custom UI/UX Design & Design Tokens",
      "Next.js 16 App Router & Tailwind CSS Codebase",
      "Fluid Editorial Typography & Motion Shaders",
      "Headless CMS for Self-Service Updates",
      "100/100 Core Web Vitals Optimization",
      "Essential Technical SEO & Structured Schema",
      "30 Days Post-Launch Warranty & Support",
    ],
    highlight: "Ideal for Series A Startups & Independent Studios",
    popular: false,
  },
  {
    name: "Growth Architecture",
    category: "Full-Stack SaaS & AEO Platform",
    startingPrice: "$5,000",
    description:
      "Comprehensive digital platform engineering combining full-stack software development, generative engine optimization (AEO/GEO), and zero-trust cloud infrastructure.",
    timeline: "6–10 Weeks Delivery",
    deliverables: [
      "Full-Stack Web App / SaaS Architecture",
      "PostgreSQL Partitioning & Distributed APIs",
      "Answer Engine Optimization (AEO/GEO) Setup",
      "Zero-Trust Cloud DevOps & IAM Hardening",
      "Stripe Billing / Multi-Tenant Subscriptions",
      "Automated CI/CD Test Gates & Deployment",
      "60 Days Dedicated Sprint Support & Telemetry",
    ],
    highlight: "Most Selected for High-Velocity Scale-Ups",
    popular: true,
  },
  {
    name: "Enterprise Dedicated",
    category: "Custom Global Ecosystem",
    startingPrice: "$10,000+",
    description:
      "A dedicated multi-disciplinary engineering and brand squad embedded directly with your technical executives for continuous feature delivery and cloud defense.",
    timeline: "Custom Milestone Retainer",
    deliverables: [
      "Dedicated Full-Stack & DevOps Squad",
      "Zero-Day Vulnerability Scanning & SOC2 Defense",
      "Continuous Generative Engine Citation Dominance",
      "Custom 3D WebGL / Canvas Feature Engineering",
      "24/7/365 Incident Response SLA (<15min)",
      "Weekly Sprint Demonstrations & Code Audits",
      "Executive Technical Advisory & Board Briefings",
    ],
    highlight: "For Venture-Backed Scale-Ups & Enterprises",
    popular: false,
  },
];

const SCOPE_OPTIONS = [
  { id: "web", name: "Bespoke Digital Flagship", baseCost: 2500 },
  { id: "saas", name: "Custom SaaS Platform / Web App", baseCost: 4500 },
  { id: "security", name: "Zero-Trust Infrastructure & SOC2", baseCost: 3000 },
  { id: "aeo", name: "Answer Engine Optimization (AEO/GEO)", baseCost: 2000 },
  { id: "branding", name: "Brand Identity & 3D Design Tokens", baseCost: 2500 },
  { id: "ads", name: "Performance Paid Acquisition Engine", baseCost: 2000 },
];

export default function PricingPage() {
  const [selectedScopes, setSelectedScopes] = useState<string[]>([
    "web",
    "saas",
  ]);

  const toggleScope = (id: string) => {
    setSelectedScopes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedCost = selectedScopes.reduce((total, id) => {
    const item = SCOPE_OPTIONS.find((s) => s.id === id);
    return total + (item ? item.baseCost : 0);
  }, 0);

  return (
    <div className="relative min-h-screen bg-[#050608] text-white flex flex-col selection:bg-[#00e5ff] selection:text-[#050608]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* 1. Hero Section (Visuvate Pricing Reference) */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#00e5ff]/15 via-indigo-600/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

          <Container className="relative z-10 text-center max-w-4xl">
            <Badge variant="electric" dot className="mb-6">
              Predictable Investment
            </Badge>

            <h1 className="text-[clamp(2.75rem,7.5vw,6.5rem)] font-bold tracking-tight text-white leading-[1.04]">
              Transparent{" "}
              <span className="font-editorial font-normal italic text-slate-200">
                Engagements
              </span>
              <span className="text-[#00e5ff]">.</span>
              <br />
              Zero{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
                Hidden Costs
              </span>
              <span className="text-[#00e5ff]">.</span>
            </h1>

            <p className="mt-8 text-lg sm:text-2xl text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
              Fixed milestone proposals, itemized deliverables, and dedicated
              multi-disciplinary squads.
            </p>
          </Container>
        </section>

        {/* 2. Three Elevated Pricing Cards (Visuvate Screenshot 232010 Inspiration) */}
        <section className="relative py-12">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-3xl bg-[#090b10] border p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.9)] ${
                    tier.popular
                      ? "border-[#00e5ff]/40 shadow-[0_0_35px_rgba(0,229,255,0.15)] ring-1 ring-[#00e5ff]/30"
                      : "border-white/[0.08] hover:border-white/20"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00e5ff] text-black text-[11px] font-bold uppercase tracking-wider shadow-lg">
                      Most Selected
                    </div>
                  )}

                  <div>
                    <div className="pb-6 border-b border-white/[0.08]">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold">
                        {tier.category}
                      </span>
                      <h2 className="text-2xl font-bold text-white mt-1">
                        {tier.name}
                      </h2>

                      <div className="mt-6 flex items-baseline gap-2">
                        <span className="text-xs text-neutral-400 font-mono">
                          from
                        </span>
                        <span className="text-4xl sm:text-5xl font-black text-white font-mono">
                          {tier.startingPrice}
                        </span>
                      </div>

                      <p className="mt-4 text-xs text-neutral-400 font-mono">
                        {tier.timeline}
                      </p>
                    </div>

                    <p className="mt-6 text-sm text-neutral-300 leading-relaxed">
                      {tier.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="mt-8 pt-6 border-t border-white/[0.06] space-y-3">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Included Deliverables:
                      </p>
                      {tier.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5 text-xs text-neutral-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#00e5ff] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-white/[0.08]">
                    <Button
                      href={`/contact?tier=${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                      variant={tier.popular ? "electric" : "glass"}
                      size="md"
                      className="w-full justify-center"
                      icon={<ArrowUpRight className="w-4 h-4 text-inherit" />}
                    >
                      Start a Project
                    </Button>
                    <p className="text-center text-[10px] font-mono text-neutral-400 mt-3">
                      {tier.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 3. Interactive Project Scope & Investment Calculator */}
        <section className="relative py-20 mt-12 bg-[#07090e] border-y border-white/[0.06]">
          <Container className="max-w-4xl">
            <div className="rounded-3xl bg-[#090b10] border border-white/[0.1] p-8 sm:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff]">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Interactive Scope &amp; Cost Estimator
                  </h2>
                  <p className="text-xs text-neutral-400">
                    Select your project requirements to calculate estimated
                    milestone investment.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {SCOPE_OPTIONS.map((opt) => {
                  const isSelected = selectedScopes.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleScope(opt.id)}
                      className={`p-4 rounded-2xl text-left border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? "bg-[#00e5ff]/10 border-[#00e5ff]/50 shadow-[0_0_20px_rgba(0,229,255,0.15)]"
                          : "bg-white/[0.02] border-white/[0.08] hover:border-white/20 text-neutral-300"
                      }`}
                    >
                      <div>
                        <span className="text-xs font-semibold text-white block">
                          {opt.name}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400">
                          +${opt.baseCost.toLocaleString()} base
                        </span>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected
                            ? "bg-[#00e5ff] border-[#00e5ff] text-black"
                            : "border-white/20"
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                    Estimated Scope Investment
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-white font-mono mt-1">
                    ~${calculatedCost.toLocaleString()}{" "}
                    <span className="text-xs font-normal text-neutral-400 font-sans">
                      (Fixed Quote)
                    </span>
                  </div>
                </div>

                <Button
                  href={`/contact?estimate=${calculatedCost}&scopes=${selectedScopes.join(",")}`}
                  variant="electric"
                  size="md"
                  icon={<ArrowUpRight className="w-4 h-4 text-black" />}
                >
                  Request Official Proposal
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* 4. Consultation Banner */}
        <section className="relative py-16">
          <Container className="max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Need custom scoping for enterprise compliance or RFPs?
            </h2>
            <p className="text-sm text-neutral-400 max-w-lg mx-auto mb-6">
              We provide formal architecture proposals, security audit plans,
              and master services agreements within 48 hours.
            </p>
            <Button href="/contact" variant="glass" size="lg">
              Contact Enterprise Scoping Team
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}

