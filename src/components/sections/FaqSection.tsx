"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";

interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "services-breadth",
    number: "01",
    question: "How does Profound integrate 6 distinct service disciplines?",
    answer:
      "Unlike traditional agencies that outsource or operate in silos, Profound was built from the ground up as a unified engineering and creative studio. Our full-stack software architects, cybersecurity engineers, UI/UX designers, and growth strategists work in shared sprint environments using synchronized design tokens, version control, and CI/CD pipelines.",
    category: "Services",
  },
  {
    id: "timelines",
    number: "02",
    question: "What is your standard project timeline for builds?",
    answer:
      "Timelines range depending on scope. Rapid digital flagships and website redesigns typically launch within 4 to 8 weeks. Comprehensive full-stack SaaS builds, zero-trust cloud infrastructure migrations, and multi-platform brand launches typically span 8 to 14 weeks. We provide milestone schedules with guaranteed sprint deliverables during architectural discovery.",
    category: "Timelines",
  },
  {
    id: "communication",
    number: "03",
    question: "How do you manage communication and project governance?",
    answer:
      "We operate transparently using dedicated Slack/Teams channels, weekly video sprint demos, and live Linear or Jira boards. Clients have direct access to lead engineers and design directors with zero gatekeeping or unnecessary bureaucracy.",
    category: "Collaboration",
  },
  {
    id: "pricing-models",
    number: "04",
    question: "How are projects scoped and priced?",
    answer:
      "We offer two flexible engagement models: Fixed-Scope Milestones (ideal for well-defined web flagships, MVP builds, or security audits with clear specifications) and Dedicated Practice Retainers (for growing SaaS platforms requiring ongoing engineering, AEO/GEO optimization, and continuous development). We provide itemized, transparent cost breakdowns prior to kickoff.",
    category: "Pricing",
  },
  {
    id: "post-launch-support",
    number: "05",
    question: "Do you provide post-launch support and infrastructure maintenance?",
    answer:
      "Yes. Launch is only day zero. We provide continuous maintenance SLAs including 24/7 uptime monitoring, zero-day security patching, database optimization, Core Web Vitals maintenance, and quarterly generative search (AEO) audits to ensure your platform remains ahead of the market.",
    category: "Support",
  },
  {
    id: "global-presence",
    number: "06",
    question: "Do you work with international clients across time zones?",
    answer:
      "Yes. Profound partners with ambitious technology companies, venture-backed startups, and established enterprises across North America, the UK, Europe, and Asia-Pacific. Our team coordinates asynchronously to ensure real-time overlap and 24-hour turnaround cycles.",
    category: "Global",
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("services-breadth");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-28 sm:py-36 bg-[#050608] border-t border-white/[0.06] overflow-hidden">
      <Container className="max-w-4xl relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="text-center mb-16 sm:mb-20">
          <Badge variant="electric" dot className="mb-4">
            Clear Answers
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            Frequently Asked{" "}
            <span className="font-editorial font-normal italic text-slate-200">
              Questions
            </span>
            <span className="text-[#00e5ff]">.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Everything you need to know about partnering with Profound for
            engineering and digital transformation.
          </p>
        </ScrollReveal>

        {/* Accordion List with Framer Motion expansion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <ScrollReveal
                key={item.id}
                variant="fadeUp"
                delay={index * 0.05}
                className="w-full"
              >
                <div
                  className={cn(
                    "rounded-2xl transition-colors duration-300 border overflow-hidden",
                    isOpen
                      ? "bg-[#090c14] border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
                      : "bg-[#08090d]/60 hover:bg-[#090b10] border-white/[0.07] hover:border-white/15"
                  )}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left gap-4 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00e5ff]"
                    aria-expanded={isOpen}
                    id={`faq-btn-${item.id}`}
                    aria-controls={`faq-content-${item.id}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-[#00e5ff] font-semibold">
                        {item.number}.
                      </span>
                      <span className="text-base sm:text-lg font-semibold text-white">
                        {item.question}
                      </span>
                    </div>

                    <motion.div
                      animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={cn(
                        "w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 transition-colors",
                        isOpen && "bg-[#00e5ff]/15 border-[#00e5ff]/40 text-[#00e5ff]"
                      )}
                    >
                      <ChevronDown className="w-4 h-4 text-neutral-300" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-content-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-btn-${item.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 text-sm sm:text-base text-neutral-400 leading-relaxed border-t border-white/[0.04]">
                          <p className="mt-4">{item.answer}</p>
                          <div className="mt-4 pt-3 flex items-center gap-2 text-xs font-mono text-neutral-400">
                            <span>Category: {item.category}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
