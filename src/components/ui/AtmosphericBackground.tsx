"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AtmosphericBackgroundProps {
  className?: string;
  variant?: "primary" | "subtle" | "horizon";
}

export function AtmosphericBackground({
  className,
  variant = "primary",
}: AtmosphericBackgroundProps) {
  if (variant === "subtle") {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden select-none",
          className
        )}
      >
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-[#00e5ff]/5 blur-[140px] animate-drift-slow" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[160px] animate-drift-reverse" />
        <div className="absolute inset-0 bg-grid-subtle opacity-25" />
      </div>
    );
  }

  if (variant === "horizon") {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden select-none",
          className
        )}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-gradient-to-t from-[#00e5ff]/15 via-indigo-600/5 to-transparent rounded-full blur-[180px] animate-drift-slow" />
        <div className="absolute inset-0 bg-grid-subtle opacity-30" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden select-none",
        className
      )}
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#00e5ff]/12 via-indigo-950/20 to-transparent rounded-full blur-[160px] animate-drift-slow" />
      <div className="absolute -bottom-32 -left-32 w-[650px] h-[650px] bg-blue-900/10 rounded-full blur-[180px] animate-drift-reverse" />
      <div className="absolute inset-0 bg-grid-subtle opacity-30" />
    </div>
  );
}

