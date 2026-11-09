"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, Cpu } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import {
  NextJsIcon,
  TypeScriptIcon,
  AwsIcon,
  OpenAiIcon,
  ClaudeIcon,
  DockerIcon,
  KubernetesIcon,
  ShopifyIcon,
  FigmaIcon,
  StripeIcon,
  CloudflareIcon,
  PostgresIcon,
  TailwindIcon,
  ThreeJsIcon,
} from "@/components/icons/TechIcons";

const PLATFORMS_ROW_1 = [
  { name: "Next.js", type: "Full-Stack Web", Icon: NextJsIcon },
  { name: "AWS Cloud", type: "Infrastructure", Icon: AwsIcon },
  { name: "OpenAI", type: "Generative AI", Icon: OpenAiIcon },
  { name: "Docker & K8s", type: "Containerization", Icon: DockerIcon },
  { name: "PostgreSQL", type: "Database Engine", Icon: PostgresIcon },
  { name: "TypeScript", type: "Type-Safe System", Icon: TypeScriptIcon },
];

const PLATFORMS_ROW_2 = [
  { name: "Shopify Plus", type: "Headless E-Com", Icon: ShopifyIcon },
  { name: "Figma", type: "Design Systems", Icon: FigmaIcon },
  { name: "Stripe", type: "Payment Systems", Icon: StripeIcon },
  { name: "Cloudflare", type: "Security & Edge", Icon: CloudflareIcon },
  { name: "Claude AI", type: "Reasoning Models", Icon: ClaudeIcon },
  { name: "Three.js", type: "3D & WebGL", Icon: ThreeJsIcon },
];

const TICKER_ITEMS = [
  "Software & SaaS Architecture",
  "Zero-Trust Cybersecurity",
  "Answer Engine Optimization (AEO)",
  "Bespoke Web Experiences",
  "Generative Search (GEO)",
  "Brand Identity Systems",
  "Algorithmic Performance Growth",
  "Cloud DevOps & Telemetry",
];

export function PlatformFlexibility() {
  // Duplicating arrays for infinite continuous scroll
  const row1Duplicated = [...PLATFORMS_ROW_1, ...PLATFORMS_ROW_1, ...PLATFORMS_ROW_1];
  const row2Duplicated = [...PLATFORMS_ROW_2, ...PLATFORMS_ROW_2, ...PLATFORMS_ROW_2];

  return (
    <section className="relative py-24 sm:py-32 bg-[#050608] border-t border-white/[0.06] overflow-hidden">
      <Container className="mb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Feature Card with Cosmic Starry Atmosphere */}
          <ScrollReveal variant="fadeUp" delay={0.05} className="lg:col-span-5 h-full">
            <SpotlightCard className="h-full relative bg-gradient-to-br from-[#0a0f1d] via-[#06080e] to-[#040507] border border-white/10 p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00e5ff]/15 via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <Badge variant="electric" dot className="mb-6">
                  Engineering Stack
                </Badge>

                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                  Platform flexibility<span className="text-[#00e5ff]">.</span>
                  <br />
                  Design consistency<span className="text-[#00e5ff]">.</span>
                </h3>

                <p className="mt-6 text-base text-neutral-300 leading-relaxed">
                  No matter the ecosystem or scale, our architectural standards
                  stay resilient, refined, ultra-responsive, and engineered to
                  perform under peak enterprise load.
                </p>
              </div>

              <div className="relative z-10 mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
                <Button
                  href="/services"
                  variant="primary"
                  size="md"
                  icon={<ArrowUpRight className="w-4 h-4 text-black" />}
                >
                  Inspect Tech Stack
                </Button>

                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <Cpu className="w-3.5 h-3.5 text-[#00e5ff]" />
                  <span>14+ Active Stacks</span>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Right Platform Flow (Dual Horizontal Gliding Tracks of Rich Tech Cards) */}
          <ScrollReveal variant="fadeUp" delay={0.12} className="lg:col-span-7 h-full">
            <div className="h-full rounded-3xl bg-[#090b10] border border-white/[0.09] p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
              <div className="mb-6 pb-4 border-b border-white/[0.06]">
                <h4 className="text-sm font-semibold text-white tracking-wide">
                  Certified Production Ecosystems
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  High-availability frameworks engineered for zero legacy debt
                </p>
              </div>

              {/* Dual Sliding Marquee Container with edge mask */}
              <div className="space-y-4 my-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                {/* Track 1: Gliding Left */}
                <div className="flex items-center gap-3 sm:gap-4 animate-marquee select-none py-1">
                  {row1Duplicated.map((platform, idx) => {
                    const Icon = platform.Icon;
                    return (
                      <div
                        key={`row1-${platform.name}-${idx}`}
                        className="group w-44 sm:w-48 shrink-0 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#00e5ff]/40 hover:bg-white/[0.06] p-4 flex items-center gap-3.5 transition-all duration-300 shadow-sm cursor-default"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#00e5ff]/40 transition-all shadow-inner">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="overflow-hidden">
                          <h5 className="text-xs sm:text-sm font-semibold text-white truncate group-hover:text-[#00e5ff] transition-colors">
                            {platform.name}
                          </h5>
                          <p className="text-[10px] font-mono text-neutral-400 truncate mt-0.5">
                            {platform.type}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Track 2: Gliding Right (Reverse Direction) */}
                <div className="flex items-center gap-3 sm:gap-4 animate-marquee-reverse select-none py-1">
                  {row2Duplicated.map((platform, idx) => {
                    const Icon = platform.Icon;
                    return (
                      <div
                        key={`row2-${platform.name}-${idx}`}
                        className="group w-44 sm:w-48 shrink-0 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#00e5ff]/40 hover:bg-white/[0.06] p-4 flex items-center gap-3.5 transition-all duration-300 shadow-sm cursor-default"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#00e5ff]/40 transition-all shadow-inner">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="overflow-hidden">
                          <h5 className="text-xs sm:text-sm font-semibold text-white truncate group-hover:text-[#00e5ff] transition-colors">
                            {platform.name}
                          </h5>
                          <p className="text-[10px] font-mono text-neutral-400 truncate mt-0.5">
                            {platform.type}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Footer Info */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400">
                <span>Cloud Agnostic Architecture</span>
                <span className="text-emerald-400 font-mono">
                  100% Type-Safe CI/CD
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Ticker Ribbon */}
      <div className="w-full overflow-hidden border-y border-white/[0.06] bg-[#07090e]/60 py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 items-center gap-8 animate-marquee select-none">
          {TICKER_ITEMS.concat(TICKER_ITEMS).concat(TICKER_ITEMS).map((item, idx) => (
            <div
              key={`${item}-${idx}`}
              className="flex items-center gap-4 text-xs font-mono tracking-widest uppercase text-neutral-400 shrink-0"
            >
              <span>{item}</span>
              <span className="text-[#00e5ff]">&bull;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
