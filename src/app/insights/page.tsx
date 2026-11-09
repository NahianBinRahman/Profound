"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, BookOpen, Clock, Calendar } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const ARTICLES = [
  {
    slug: "generative-engine-optimization-future-search",
    title:
      "The Death of 10 Blue Links: Why Generative Engine Optimization (GEO) is the New Search Frontier",
    category: "AI & Search Architecture",
    date: "November 2026",
    readTime: "7 Min Read",
    excerpt:
      "How LLMs like ChatGPT, Perplexity, and Gemini AI Overviews are replacing traditional search results, and why entity knowledge graphs are essential for organic authority.",
    highlight: "Featured Perspective",
  },
  {
    slug: "zero-trust-cloud-perimeters-2026",
    title:
      "Zero-Trust Architecture in 2026: Hardening Cloud Perimeters Without Sacrificing Engineering Velocity",
    category: "Cybersecurity & DevOps",
    date: "October 2026",
    readTime: "9 Min Read",
    excerpt:
      "Eliminating perimeter trust assumptions entirely: A practical architectural guide to mutual TLS, identity-aware proxies, and automated continuous SOC2 telemetry.",
    highlight: "Technical Deep-Dive",
  },
  {
    slug: "nextjs-16-sub-second-web-flagships",
    title:
      "Next.js 16 and React 19: Building Sub-Second Luxury Flagships on Global Edge Networks",
    category: "Software & Web Engineering",
    date: "September 2026",
    readTime: "6 Min Read",
    excerpt:
      "How to harmonize high-fashion editorial typography and interactive Three.js 3D WebGL shaders with 100/100 Core Web Vitals performance benchmarks.",
    highlight: "Engineering Standard",
  },
  {
    slug: "editorial-typography-enterprise-conversion",
    title:
      "The Neuroscience of Luxury: Why Editorial Typography Outperforms Generic SaaS Patterns",
    category: "Brand & Experience Design",
    date: "August 2026",
    readTime: "5 Min Read",
    excerpt:
      "Exploring the psychological impact of pairing precision geometric grotesks with luxury serif italics to establish unassailable market authority.",
    highlight: "Design Philosophy",
  },
];

export default function InsightsPage() {
  return (
    <div className="relative min-h-screen bg-[#050608] text-white flex flex-col selection:bg-[#00e5ff] selection:text-[#050608]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-[#00e5ff]/10 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

          <Container className="relative z-10 text-center max-w-4xl">
            <Badge variant="electric" dot className="mb-6">
              Thought Leadership &amp; Engineering Research
            </Badge>

            <h1 className="text-[clamp(2.75rem,7.5vw,6.5rem)] font-bold tracking-tight text-white leading-[1.04]">
              Agency{" "}
              <span className="font-editorial font-normal italic text-slate-200">
                Insights
              </span>
              <span className="text-[#00e5ff]">.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-2xl text-neutral-400 font-normal max-w-2xl mx-auto leading-relaxed">
              Perspectives on modern software architecture, generative AI search,
              cloud defense, and luxury brand design.
            </p>
          </Container>
        </section>

        {/* Articles Grid */}
        <section className="relative py-12">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ARTICLES.map((article) => (
                <article
                  key={article.slug}
                  className="group rounded-3xl bg-[#090b10] border border-white/[0.08] hover:border-white/20 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:-translate-y-1.5"
                >
                  <div>
                    <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                        <span>{article.date}</span>
                        <span>&bull;</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white group-hover:text-[#00e5ff] transition-colors leading-tight mb-4">
                      {article.title}
                    </h2>

                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-400">
                      {article.highlight}
                    </span>
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#00e5ff] transition-colors">
                      <span>Read Perspective</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Newsletter Ingestion */}
        <section className="relative py-16 mt-12 bg-[#07090e] border-y border-white/[0.06]">
          <Container className="max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Subscribe to Profound Dispatch
            </h2>
            <p className="text-sm text-neutral-400 max-w-md mx-auto mb-8">
              Monthly technical architectural blueprints and digital strategy
              delivered directly to your inbox.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to Profound Dispatch.");
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your work email"
                className="flex-1 px-4 py-3 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs text-white focus:outline-none focus:border-[#00e5ff]"
              />
              <Button type="submit" variant="electric" size="sm">
                Subscribe
              </Button>
            </form>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
