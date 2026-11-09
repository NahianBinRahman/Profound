"use client";

import React, { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
  tilt?: boolean;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(0, 229, 255, 0.16)",
  spotlightSize = 480,
  tilt = true,
  style,
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });

    if (tilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Calculate smooth tilt angles (-6 to +6 degrees)
      const rotateX = ((y - centerY) / centerY) * -5.5;
      const rotateY = ((x - centerX) / centerX) * 5.5;
      setRotation({ x: rotateX, y: rotateY });
    }
  }, [isFocused, tilt]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    setOpacity(1);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setOpacity(0);
    setRotation({ x: 0, y: 0 });
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    setOpacity(1);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
    setRotation({ x: 0, y: 0 });
  }, []);

  return (
    <div
      style={{ perspective: 1200 }}
      className="h-full w-full"
    >
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative rounded-3xl bg-[#090b10] border border-white/[0.08] overflow-hidden transition-all duration-300 ease-out will-change-transform",
          "hover:border-white/[0.22] hover:shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_40px_rgba(0,229,255,0.12)]",
          className
        )}
        style={{
          transform: tilt && opacity > 0
            ? `rotateX(${rotation.x.toFixed(2)}deg) rotateY(${rotation.y.toFixed(2)}deg) translateZ(8px)`
            : "rotateX(0deg) rotateY(0deg) translateZ(0px)",
          transformStyle: "preserve-3d",
          ...style,
        }}
        {...props}
      >
        {/* Dynamic Cursor Spotlight Layer (Surface Glow) */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 rounded-3xl z-10"
          style={{
            opacity,
            background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 75%)`,
          }}
        />

        {/* Dynamic Specular Border Illumination Layer */}
        <div
          className="pointer-events-none absolute -inset-[1px] opacity-0 transition-opacity duration-300 rounded-3xl z-20"
          style={{
            opacity: opacity * 0.7,
            background: `radial-gradient(${spotlightSize * 0.6}px circle at ${position.x}px ${position.y}px, rgba(0, 229, 255, 0.4), transparent 70%)`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />

        <div className="relative z-20 h-full w-full flex flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  );
}
