import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "electric" | "silver" | "outline";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "default",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "bg-white/[0.06] text-neutral-300 border border-white/[0.08] backdrop-blur-sm",
    electric:
      "bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 shadow-[0_0_15px_rgba(0,229,255,0.15)]",
    silver:
      "bg-slate-500/10 text-slate-300 border border-slate-400/20",
    outline:
      "border border-white/15 text-neutral-400 hover:text-white hover:border-white/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase transition-colors select-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full",
            variant === "electric"
              ? "bg-[#00e5ff] animate-pulse"
              : "bg-emerald-400"
          )}
        />
      )}
      {children}
    </span>
  );
}

