"use client";

import React from "react";
import { motion, type TargetAndTransition } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "fadeUp" | "fadeIn" | "scaleIn" | "stagger" | "slideLeft" | "slideRight";
  delay?: number;
  className?: string;
  once?: boolean;
  amount?: number | "some" | "all";
}

const VARIANTS: Record<string, { initial: TargetAndTransition; inView: TargetAndTransition }> = {
  fadeUp: {
    initial: { opacity: 0, y: 32, scale: 0.98 },
    inView: { opacity: 1, y: 0, scale: 1 },
  },
  fadeIn: {
    initial: { opacity: 0, scale: 0.95 },
    inView: { opacity: 1, scale: 1 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.92, y: 24 },
    inView: { opacity: 1, scale: 1, y: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: -32 },
    inView: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: 32 },
    inView: { opacity: 1, x: 0 },
  },
  stagger: {
    initial: { opacity: 0, y: 24 },
    inView: { opacity: 1, y: 0 },
  },
};

export function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
  once = false, // Enables fluid scroll animation on both down and up scroll
  amount = 0.08,
}: ScrollRevealProps) {
  const selectedVariant = VARIANTS[variant] || VARIANTS.fadeUp;

  return (
    <motion.div
      initial={selectedVariant.initial}
      whileInView={selectedVariant.inView}
      viewport={{ once, amount }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
