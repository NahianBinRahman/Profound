"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import {
  NextJsIcon,
  TypeScriptIcon,
  AwsIcon,
  OpenAiIcon,
  DockerIcon,
  StripeIcon,
  CloudflareIcon,
  PostgresIcon,
  TailwindIcon,
  FigmaIcon,
  GraphqlIcon,
  ThreeJsIcon,
} from "@/components/icons/TechIcons";

const TECH_ITEMS = [
  { name: "Next.js 16", category: "Framework", Icon: NextJsIcon },
  { name: "TypeScript", category: "Language", Icon: TypeScriptIcon },
  { name: "AWS Cloud", category: "Infrastructure", Icon: AwsIcon },
  { name: "OpenAI / Claude", category: "AI Models", Icon: OpenAiIcon },
  { name: "Docker & K8s", category: "DevOps", Icon: DockerIcon },
  { name: "Stripe", category: "Payments", Icon: StripeIcon },
  { name: "Cloudflare", category: "Edge CDN", Icon: CloudflareIcon },
  { name: "PostgreSQL", category: "Database", Icon: PostgresIcon },
  { name: "Tailwind CSS", category: "Styling", Icon: TailwindIcon },
  { name: "Figma", category: "Design", Icon: FigmaIcon },
  { name: "GraphQL", category: "API", Icon: GraphqlIcon },
  { name: "Three.js", category: "WebGL", Icon: ThreeJsIcon },
];

export function TechEcosystem() {
  // Repeating list to guarantee seamless infinite loop
  const duplicatedItems = [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <section className="relative py-10 sm:py-14 bg-[#050608] border-y border-white/[0.06] overflow-hidden">
      <Container className="mb-6">
        <p className="text-center text-xs font-mono tracking-[0.2em] uppercase text-neutral-400">
          Powered By Modern Engineering &amp; Cloud Standards
        </p>
      </Container>

      {/* Infinite Continuous Marquee Track */}
      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex shrink-0 items-center gap-4 sm:gap-6 animate-marquee py-2 select-none">
          {duplicatedItems.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div
                key={`${item.name}-${idx}`}
                className="flex items-center gap-3 px-4 sm:px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.07] hover:border-[#00e5ff]/40 hover:bg-white/[0.07] transition-all duration-300 group cursor-default shadow-sm shrink-0"
              >
                {/* Official Authentic Brand Icon */}
                <div className="w-5 h-5 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-115">
                  <Icon className="w-4 h-4" />
                </div>

                <span className="text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">
                  {item.name}
                </span>

                <span className="text-[10px] font-mono text-neutral-400 bg-white/[0.05] border border-white/[0.06] px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
