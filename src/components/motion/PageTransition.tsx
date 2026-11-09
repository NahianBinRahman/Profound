"use client";

import React from "react";
import { motion } from "framer-motion";
import { pageTransitionVariant } from "./MotionVariants";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={pageTransitionVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
}
