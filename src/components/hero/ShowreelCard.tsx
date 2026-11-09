"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Maximize2, X, Sparkles } from "lucide-react";

export function ShowreelCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {/* Glow ambient highlight */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00e5ff]/20 to-indigo-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Card Box */}
        <div className="relative w-56 sm:w-64 h-28 sm:h-32 rounded-xl bg-[#090b10]/85 backdrop-blur-xl border border-white/10 p-2.5 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] group-hover:border-white/20 transition-all duration-300">
          {/* Animated Graphic Canvas Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c1017] via-[#050608] to-[#0d1424] opacity-90" />

          {/* Subtle Grid & Particle Graphic */}
          <div className="absolute inset-0 bg-grid-subtle opacity-30" />
          <div className="absolute top-2 right-3 flex items-center gap-1.5 text-[10px] text-neutral-400 font-mono tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse" />
            <span>2026 Reel</span>
          </div>

          {/* Looping Graphic Letters / Dimensional Patterns (Inspired by Huge's mini H grid) */}
          <div className="absolute inset-0 flex items-center justify-around opacity-20 pointer-events-none px-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-16 rounded-md border border-[#00e5ff]/40 bg-[#00e5ff]/5 flex items-center justify-center font-bold text-lg text-white"
                style={{ transform: `rotate(${(i - 2.5) * 6}deg)` }}
              >
                P
              </div>
            ))}
          </div>

          {/* Bottom Card Meta */}
          <div className="relative z-10 flex items-center justify-between mt-auto w-full pt-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Sparkles className="w-3.5 h-3.5 text-[#00e5ff]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white tracking-wide">
                  Agency Vision
                </p>
                <p className="text-[10px] text-neutral-400">
                  Directing the Future
                </p>
              </div>
            </div>

            {/* Central Glass Pill Trigger */}
            <div className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md flex items-center gap-1.5 text-xs font-medium text-white shadow-lg group-hover:scale-105 transition-all duration-300">
              <Play className="w-3 h-3 fill-white text-white" />
              <span>Play</span>
              <Maximize2 className="w-2.5 h-2.5 text-neutral-400 ml-0.5" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Video Modal Dialogue */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="relative w-full max-w-4xl rounded-3xl bg-[#0a0d14] border border-white/20 overflow-hidden shadow-[0_0_80px_rgba(0,229,255,0.25)] p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-ping" />
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    Profound Agency Showreel // 2026
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Simulated High-Res Motion Graphic Player */}
              <div className="relative aspect-video w-full rounded-2xl bg-neutral-950 mt-4 overflow-hidden border border-white/10 flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00e5ff]/10 via-black to-indigo-900/20" />

                {/* Visual pulse & audio wave simulation */}
                <div className="relative z-10 text-center px-6">
                  <div className="w-16 h-16 rounded-full bg-[#00e5ff]/20 border border-[#00e5ff]/50 flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(0,229,255,0.4)]">
                    <Play className="w-6 h-6 fill-[#00e5ff] text-[#00e5ff] translate-x-0.5" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    Engineering Profound Digital Realities
                  </h4>
                  <p className="text-neutral-400 text-sm max-w-md mx-auto">
                    Full-motion cinematic reel featuring SaaS architectures, interactive WebGL, AI search optimization & global brand systems.
                  </p>
                </div>

                {/* Looping timeline bar */}
                <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3">
                  <span className="text-[10px] font-mono text-neutral-400">01:24</span>
                  <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00e5ff] w-2/5 rounded-full shadow-[0_0_8px_#00e5ff]" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">03:40</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

