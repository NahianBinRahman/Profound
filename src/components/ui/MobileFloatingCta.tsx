"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileFloatingCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down past the hero (280px)
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-4 inset-x-4 z-40 md:hidden transition-all duration-400 ease-out pointer-events-none",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-12 opacity-0"
      )}
    >
      <div className="w-full max-w-md mx-auto pointer-events-auto rounded-full bg-[#080a0f]/90 backdrop-blur-2xl border border-white/15 p-1.5 pl-4 shadow-[0_12px_40px_rgba(0,0,0,0.95),0_0_25px_rgba(0,229,255,0.15)] flex items-center justify-between gap-3">
        {/* Left: Studio Status */}
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e5ff]" />
          </span>
          <span className="text-[11px] font-mono tracking-wider text-neutral-300 truncate">
            Studio Open
          </span>
        </div>

        {/* Right: Direct High-Conversion CTA */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#00e5ff] text-[#050608] text-xs font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)] active:scale-95 transition-transform shrink-0"
        >
          <span>Start a Project</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

