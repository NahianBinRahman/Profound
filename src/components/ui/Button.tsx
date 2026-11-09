"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "electric" | "glass" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      icon,
      iconPosition = "right",
      isExternal,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium rounded-full cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e5ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608] overflow-hidden transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0";

    const variants = {
      primary:
        "bg-white text-[#050608] hover:bg-slate-200 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.25)]",
      electric:
        "bg-[#00e5ff] text-[#050608] font-semibold hover:bg-[#38bdf8] shadow-[0_0_25px_rgba(0,229,255,0.35)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)]",
      glass:
        "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.12] hover:border-white/[0.24] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]",
      ghost:
        "bg-transparent text-neutral-300 hover:text-white hover:bg-white/[0.05]",
      secondary:
        "bg-neutral-900 text-neutral-200 hover:text-white hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700",
    };

    const sizes = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-sm px-6 py-3 gap-2",
      lg: "text-base px-8 py-4 gap-2.5",
    };

    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span className="relative z-10">{children}</span>
        {icon && iconPosition === "right" && (
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </>
    );

    const combinedClassName = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      "group",
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
