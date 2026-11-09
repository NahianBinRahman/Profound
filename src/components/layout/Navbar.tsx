"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const mobileContainerVariants: Variants = {
  hidden: { opacity: 0, y: -16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.98,
    transition: { duration: 0.2 },
  },
};

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out py-4 sm:py-6 px-4 sm:px-6 pointer-events-none flex justify-center",
          isScrolled ? "sm:py-3.5" : "sm:py-6"
        )}
      >
        <div
          className={cn(
            "w-full max-w-7xl mx-auto flex items-center justify-between pointer-events-auto transition-all duration-500 rounded-full px-5 py-2.5 sm:py-3",
            "bg-[#08090D]/80 backdrop-blur-2xl border border-white/[0.09] shadow-[0_12px_36px_-10px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)]",
            isScrolled && "bg-[#06070B]/90 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.9)] border-white/[0.12]"
          )}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Profound Homepage"
          >
            {/* Official Aperture P Symbol */}
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-950 border border-white/20 flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(22,119,255,0.2)] group-hover:border-[#1677FF]/60 transition-colors duration-300">
              <svg
                width="20"
                height="20"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-105"
              >
                <rect x="16" y="14" width="16" height="72" rx="3" fill="#FFFFFF"/>
                <path d="M32 14 H66 C78.15 14 88 23.85 88 36 C88 48.15 78.15 58 66 58 H32 V14 Z M48 28 V44 H64 C68.418 44 72 40.418 72 36 C72 31.582 68.418 28 64 28 H48 Z" fill="#FFFFFF"/>
                <rect x="56" y="32" width="8" height="8" rx="2" fill="#1677FF"/>
              </svg>
            </div>
            <span className="font-bold tracking-tight text-lg text-white font-sans group-hover:text-neutral-200 transition-colors flex items-center gap-0.5">
              <span>PROFOUND</span>
              <span className="w-1.5 h-1.5 rounded-[1px] bg-[#1677FF] inline-block ml-0.5" />
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-2 py-1">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 select-none",
                    isActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-neutral-100 hover:bg-white/[0.04]"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/[0.1] border border-white/[0.15] rounded-full shadow-[0_0_12px_rgba(255,255,255,0.06)]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3">
            {/* Live Studio Status (Desktop) */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-ping" />
              <span>Available for Q1/Q2</span>
            </div>

            {/* Prominent "Let's Talk" button */}
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowUpRight className="w-3.5 h-3.5 text-neutral-900" />}
              className="hidden sm:inline-flex shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Let&apos;s Talk
            </Button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/[0.08] transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay with staggered children */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-x-4 top-20 z-40 lg:hidden rounded-3xl bg-[#090b10]/95 backdrop-blur-3xl border border-white/10 p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)]"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);

                return (
                  <motion.div
                    key={item.label}
                    variants={mobileItemVariants}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-colors",
                        isActive
                          ? "bg-white/[0.08] text-white"
                          : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                      )}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight
                        className={cn(
                          "w-4 h-4 transition-transform",
                          isActive ? "text-[#00e5ff]" : "text-neutral-600"
                        )}
                      />
                    </Link>
                  </motion.div>
                );
              })}

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                <Button
                  href="/contact"
                  variant="electric"
                  size="md"
                  className="w-full justify-center"
                  icon={<ArrowUpRight className="w-4 h-4 text-[#050608]" />}
                >
                  Let&apos;s Talk
                </Button>
                <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 py-1">
                  <span className="w-2 h-2 rounded-full bg-[#00e5ff]" />
                  <span>Available for high-impact projects</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
