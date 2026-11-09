"use client";

import React from "react";
import {
  Code2,
  ShieldCheck,
  Globe,
  Search,
  Sparkles,
  TrendingUp,
  Terminal,
  Server,
  Lock,
  Cpu,
  Bot,
  ExternalLink,
} from "lucide-react";

interface ServiceCanvasPreviewProps {
  type: "code" | "security" | "browser" | "ai" | "branding" | "growth";
}

export function ServiceCanvasPreview({ type }: ServiceCanvasPreviewProps) {
  return (
    <div className="relative w-full h-52 sm:h-56 rounded-2xl bg-[#090b10] border border-white/[0.08] overflow-hidden flex flex-col justify-between p-4 group-hover:border-white/[0.18] transition-all duration-500">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#00e5ff]/10 rounded-full blur-2xl group-hover:bg-[#00e5ff]/20 transition-all duration-500 pointer-events-none" />

      {/* 1. Software & SaaS Preview (Live Code / API Telemetry) */}
      {type === "code" && (
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-neutral-400 ml-2">
                api.profound.dev/v1/deploy
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              200 OK
            </span>
          </div>

          <div className="font-mono text-xs text-neutral-300 space-y-1.5 py-2">
            <div className="text-neutral-500">// microservice orchestration</div>
            <div className="flex items-center gap-2">
              <span className="text-[#00e5ff]">const</span>
              <span className="text-purple-300">cluster</span> ={" "}
              <span className="text-amber-300">new</span> ProfoundMesh();
            </div>
            <div className="text-neutral-400 pl-4">
              latency: <span className="text-emerald-400">&quot;14ms&quot;</span>,
              status: <span className="text-cyan-400">&quot;healthy&quot;</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[10px] text-neutral-400">
            <span className="flex items-center gap-1">
              <Terminal className="w-3 h-3 text-[#00e5ff]" /> Edge Network
            </span>
            <span className="text-emerald-400 font-mono">99.99% SLA</span>
          </div>
        </div>
      )}

      {/* 2. IT Infrastructure & Cybersecurity Preview (Zero-Trust Shield & Nodes) */}
      {type === "security" && (
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-white">
              <ShieldCheck className="w-4 h-4 text-[#00e5ff]" /> Zero-Trust
              Perimeter
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/20">
              Active Defense
            </span>
          </div>

          {/* Connected Network Diagram */}
          <div className="relative flex items-center justify-around py-3">
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Server className="w-5 h-5 text-neutral-300" />
              </div>
              <span className="text-[10px] text-neutral-400">AWS / US-East</span>
            </div>

            <div className="flex-1 flex items-center justify-center relative">
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent animate-pulse" />
              <div className="absolute w-6 h-6 rounded-full bg-[#00e5ff]/20 border border-[#00e5ff] flex items-center justify-center shadow-[0_0_15px_#00e5ff]">
                <Lock className="w-3 h-3 text-[#00e5ff]" />
              </div>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-neutral-300" />
              </div>
              <span className="text-[10px] text-neutral-400">Zero-Trust Node</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-2 border-t border-white/[0.06]">
            <span>SOC2 Type II Compliant</span>
            <span className="text-[#00e5ff] font-mono">0 Incidents</span>
          </div>
        </div>
      )}

      {/* 3. Website Design & Development Preview (Responsive Framer-like Canvas) */}
      {type === "browser" && (
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-[#00e5ff]" />
              <span className="text-xs font-medium text-white">
                Canvas Preview
              </span>
            </div>
            <div className="flex items-center gap-1 bg-white/[0.05] rounded-md px-2 py-0.5 text-[10px] text-neutral-300 font-mono">
              <span>w 1440px</span>
              <span className="text-neutral-500">|</span>
              <span className="text-[#00e5ff]">100%</span>
            </div>
          </div>

          {/* Visual Mini Mockup */}
          <div className="relative rounded-lg bg-black/60 border border-white/10 p-2.5 my-auto overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <div className="w-14 h-2 rounded bg-white/20" />
              <div className="flex gap-1.5">
                <div className="w-6 h-2 rounded bg-white/10" />
                <div className="w-6 h-2 rounded bg-white/10" />
              </div>
            </div>
            <div className="w-3/4 h-3.5 rounded bg-gradient-to-r from-white to-neutral-500 mb-1.5" />
            <div className="w-1/2 h-2 rounded bg-white/10" />
            <div className="mt-3 flex gap-2">
              <div className="w-12 h-4 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
              <div className="w-12 h-4 rounded-full bg-white/10 border border-white/20" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-2 border-t border-white/[0.06]">
            <span>Fluid Typography & Motion</span>
            <span className="text-[#00e5ff] font-mono">100/100 Core Vitals</span>
          </div>
        </div>
      )}

      {/* 4. SEO, AEO & GEO Preview (AI Engine Citation Graph) */}
      {type === "ai" && (
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-white">
              <Bot className="w-4 h-4 text-[#00e5ff]" /> AI Citation Matrix
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              #1 Authority
            </span>
          </div>

          <div className="space-y-2 py-1 my-auto">
            <div className="flex items-center justify-between text-xs bg-white/[0.04] p-2 rounded-xl border border-white/[0.08]">
              <span className="flex items-center gap-2 text-neutral-300 text-[11px]">
                <span className="w-2 h-2 rounded-full bg-[#00e5ff]" />
                Perplexity AI Answer
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">
                98% Citation
              </span>
            </div>
            <div className="flex items-center justify-between text-xs bg-white/[0.04] p-2 rounded-xl border border-white/[0.08]">
              <span className="flex items-center gap-2 text-neutral-300 text-[11px]">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                ChatGPT Knowledge
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">
                Primary Ref
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-2 border-t border-white/[0.06]">
            <span>Generative Engine Optimization</span>
            <span className="text-[#00e5ff] font-mono">+380% AI Traffic</span>
          </div>
        </div>
      )}

      {/* 5. Graphic Design & Branding Preview (Typography & Chromatic Swatches) */}
      {type === "branding" && (
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-white">
              <Sparkles className="w-4 h-4 text-purple-400" /> Design System Tokens
            </span>
            <span className="text-[10px] font-mono text-neutral-400">
              v2.4 Spec
            </span>
          </div>

          <div className="flex items-center justify-between py-2 my-auto">
            {/* Swatches */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-12 rounded-lg bg-[#00e5ff] shadow-[0_0_12px_rgba(0,229,255,0.4)] flex flex-col justify-end p-1">
                <span className="text-[7px] font-mono text-black font-bold">
                  CYAN
                </span>
              </div>
              <div className="w-9 h-12 rounded-lg bg-indigo-600 shadow-[0_0_12px_rgba(79,70,229,0.3)] flex flex-col justify-end p-1">
                <span className="text-[7px] font-mono text-white font-bold">
                  INDIGO
                </span>
              </div>
              <div className="w-9 h-12 rounded-lg bg-neutral-900 border border-white/20 flex flex-col justify-end p-1">
                <span className="text-[7px] font-mono text-white font-bold">
                  VOID
                </span>
              </div>
            </div>

            {/* Typography Spec */}
            <div className="text-right">
              <div className="font-editorial text-2xl text-white italic leading-none">
                Aa
              </div>
              <div className="text-[10px] text-neutral-400 font-mono mt-1">
                Editorial Display
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-2 border-t border-white/[0.06]">
            <span>Monumental Brand Identity</span>
            <span className="text-purple-400 font-mono">100% Cohesion</span>
          </div>
        </div>
      )}

      {/* 6. Social Media, Ads & Content Preview (Viral Growth & Ad Frames) */}
      {type === "growth" && (
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-white">
              <TrendingUp className="w-4 h-4 text-[#00e5ff]" /> Growth & Ad Pipeline
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/20">
              4.8x ROAS
            </span>
          </div>

          {/* Dynamic Ad Preview Frames & Graph */}
          <div className="flex items-center justify-between my-auto py-2">
            <div className="w-20 h-24 rounded-xl bg-gradient-to-br from-indigo-950 to-neutral-900 border border-white/10 p-2 flex flex-col justify-between shadow-lg">
              <span className="text-[8px] font-mono text-[#00e5ff]">9:16 REEL</span>
              <div className="w-full h-1 bg-[#00e5ff]/40 rounded-full" />
              <span className="text-[9px] font-bold text-white leading-tight">
                Viral Hook
              </span>
            </div>

            <div className="flex-1 pl-4 flex flex-col justify-center">
              <div className="text-[11px] font-semibold text-white">
                Algorithmic Scale
              </div>
              <div className="text-[10px] text-neutral-400 mb-2">
                Multi-channel acquisition
              </div>
              <div className="flex items-end gap-1.5 h-10 w-full">
                <div className="w-1/5 bg-white/10 h-3 rounded-t" />
                <div className="w-1/5 bg-white/20 h-5 rounded-t" />
                <div className="w-1/5 bg-white/30 h-7 rounded-t" />
                <div className="w-1/5 bg-[#00e5ff]/60 h-8 rounded-t" />
                <div className="w-1/5 bg-[#00e5ff] h-10 rounded-t shadow-[0_0_10px_#00e5ff]" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-2 border-t border-white/[0.06]">
            <span>Meta & LinkedIn Ad Engine</span>
            <span className="text-emerald-400 font-mono">+240% Conv.</span>
          </div>
        </div>
      )}
    </div>
  );
}

