"use client";

import React from "react";
import { motion } from "framer-motion";
import { PREMIUM_EASE } from "./MotionVariants";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  italicWordIndices?: number[];
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function TextReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  italicWordIndices = [],
  as: Component = "span",
}: TextRevealProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: "115%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: PREMIUM_EASE,
      },
    },
  };

  return (
    <Component className={cn("inline-flex flex-wrap gap-x-[0.28em] gap-y-1 leading-[1.08]", className)}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.02 }}
        variants={containerVariants}
        className="inline-flex flex-wrap gap-x-[0.28em] gap-y-1"
      >
        {words.map((word, i) => {
          const isItalic = italicWordIndices.includes(i);
          return (
            <span
              key={`${word}-${i}`}
              className="inline-block overflow-hidden pb-1"
            >
              <motion.span
                variants={wordVariants}
                className={cn(
                  "inline-block",
                  isItalic && "font-editorial italic font-normal text-slate-200",
                  wordClassName
                )}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
}
