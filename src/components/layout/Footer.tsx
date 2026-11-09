"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Container } from "@/components/ui/Container";

const SOCIAL_LINKS = [
  { name: "Twitter / X", href: "https://twitter.com", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
];

export function Footer() {
  return (
    <footer className="relative bg-[#030406] border-t border-white/[0.08] pt-20 pb-12 overflow-hidden">
      {/* 1. Monumental Horizon Monogram / Illuminated Logotype (Visuvate Footer Inspiration) */}
      <div className="relative w-full overflow-hidden flex items-center justify-center select-none pointer-events-none pb-8 sm:pb-12">
        {/* Horizon Glow Flare */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t from-[#00e5ff]/20 to-transparent blur-3xl" />
        
        <h2 className="text-[clamp(4.5rem,15vw,16rem)] font-black tracking-[-0.06em] text-transparent bg-clip-text bg-gradient-to-b from-white/25 via-white/[0.08] to-transparent leading-none">
          PROFOUND
        </h2>
      </div>

      <Container className="relative z-10">
        {/* 2. Segmented Social Action Strip (Visuvate Screenshot 232230 Inspiration) */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-white/[0.08] divide-x divide-white/[0.08] mb-16">
          {SOCIAL_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group py-5 px-6 flex items-center justify-between text-neutral-400 hover:text-white hover:bg-white/[0.03] transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-neutral-400 group-hover:text-[#00e5ff] transition-colors" />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            );
          })}
        </div>

        {/* 3. Multi-Column Directory Sitemap */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              <div className="w-7 h-7 rounded-lg bg-neutral-900 border border-white/20 flex items-center justify-center shadow-[0_0_12px_rgba(22,119,255,0.2)] group-hover:border-[#1677FF]/60 transition-colors">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="16" y="14" width="16" height="72" rx="3" fill="#FFFFFF"/>
                  <path d="M32 14 H66 C78.15 14 88 23.85 88 36 C88 48.15 78.15 58 66 58 H32 V14 Z M48 28 V44 H64 C68.418 44 72 40.418 72 36 C72 31.582 68.418 28 64 28 H48 Z" fill="#FFFFFF"/>
                  <rect x="56" y="32" width="8" height="8" rx="2" fill="#1677FF"/>
                </svg>
              </div>
              <span className="font-bold tracking-tight text-xl text-white group-hover:text-neutral-200 transition-colors flex items-center">
                <span>PROFOUND</span>
                <span className="w-1.5 h-1.5 rounded-[1px] bg-[#1677FF] inline-block ml-1" />
              </span>
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed mb-6">
              A premium digital engineering and experience agency. We architect
              next-generation software, secure cloud infrastructure, and iconic
              brand flagships.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
              <span>Global Studio Availability Active</span>
            </div>
          </div>

          {/* Practice Services */}
          <div>
            <h4 className="text-xs font-mono tracking-wider uppercase text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link
                  href="/services/software-saas-development"
                  className="hover:text-white transition-colors"
                >
                  Software & SaaS
                </Link>
              </li>
              <li>
                <Link
                  href="/services/it-infrastructure-cybersecurity"
                  className="hover:text-white transition-colors"
                >
                  IT & Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  href="/services/website-design-development"
                  className="hover:text-white transition-colors"
                >
                  Website Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo-aeo-geo"
                  className="hover:text-white transition-colors"
                >
                  SEO, AEO & GEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/graphic-design-branding"
                  className="hover:text-white transition-colors"
                >
                  Graphic & Branding
                </Link>
              </li>
              <li>
                <Link
                  href="/services/social-media-ads-content"
                  className="hover:text-white transition-colors"
                >
                  Social, Ads & Content
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation & Company */}
          <div>
            <h4 className="text-xs font-mono tracking-wider uppercase text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/approach" className="hover:text-white transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Selected Works
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-mono tracking-wider uppercase text-white mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li className="text-neutral-300 font-medium">
                inquiries@profound.agency
              </li>
              <li>London &bull; New York &bull; Singapore</li>
              <li className="pt-2 text-xs text-neutral-400">
                Response SLA: Within 24 hours
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Bottom Legal Strip */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <p>&copy; 2026 Profound Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-neutral-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-neutral-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:text-neutral-400 transition-colors">
              Security Compliance
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
