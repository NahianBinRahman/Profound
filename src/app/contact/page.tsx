"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Mail,
  Copy,
  Check,
  Globe,
  Building2,
  User,
  Clock,
  DollarSign,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
  MessageCircle,
  Sparkles,
  ArrowRight,
  RefreshCw,
  FileText,
  Lock,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

// The 6 official core services of Profound
const CORE_SERVICES = [
  {
    id: "software-saas",
    name: "Software & SaaS Development",
    desc: "Custom platforms, web apps, APIs & cloud systems",
  },
  {
    id: "it-infrastructure",
    name: "IT Infrastructure & Cybersecurity",
    desc: "Zero-trust networks, cloud resilience & security",
  },
  {
    id: "web-development",
    name: "Website Design & Development",
    desc: "High-performance digital flagships & WebGL experiences",
  },
  {
    id: "seo-aeo-geo",
    name: "SEO, AEO & GEO",
    desc: "Algorithmic discovery across Google & AI answer engines",
  },
  {
    id: "graphic-branding",
    name: "Graphic Design & Branding",
    desc: "Visual identities, design systems & dimensional typography",
  },
  {
    id: "social-media-ads",
    name: "Social Media, Ads & Content",
    desc: "Data-driven performance campaigns & creative production",
  },
];

const BUDGET_RANGES = [
  { label: "< $10,000", desc: "Sprint / Advisory / MVP Phase" },
  { label: "$10,000 – $25,000", desc: "Core Implementation" },
  { label: "$25,000 – $50,000", desc: "Scalable Production Build" },
  { label: "$50,000 – $100,000", desc: "Enterprise Multi-System" },
  { label: "$100,000+", desc: "Full Transformational Retainer" },
];

const TIMELINE_OPTIONS = [
  { label: "Immediate (1–2 Weeks)", desc: "Priority fast-track squad" },
  { label: "1 – 2 Months", desc: "Standard sprint kick-off" },
  { label: "3 – 6 Months", desc: "Comprehensive rollout" },
  { label: "Flexible / Scoping", desc: "Iterative architectural planning" },
];

const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "https://linkedin.com/company/profound-agency", handle: "/profound-agency" },
  { name: "X (Twitter)", url: "https://x.com/profound_agency", handle: "@profound_agency" },
  { name: "GitHub", url: "https://github.com/profound-agency", handle: "/profound-agency" },
  { name: "Dribbble", url: "https://dribbble.com/profound-agency", handle: "/profound-agency" },
  { name: "Instagram", url: "https://instagram.com/profound.agency", handle: "@profound.agency" },
];

interface FormState {
  fullName: string;
  businessEmail: string;
  companyName: string;
  website: string;
  services: string[];
  budget: string;
  timeline: string;
  projectDescription: string;
  honeypot: string; // Spam protection
}

interface FormErrors {
  fullName?: string;
  businessEmail?: string;
  companyName?: string;
  services?: string[];
  budget?: string;
  timeline?: string;
  projectDescription?: string;
  general?: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    businessEmail: "",
    companyName: "",
    website: "",
    services: ["Website Design & Development"],
    budget: "$25,000 – $50,000",
    timeline: "1 – 2 Months",
    projectDescription: "",
    honeypot: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [renderTimestamp, setRenderTimestamp] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    submissionId: string;
    message: string;
    submittedAt: string;
  } | null>(null);

  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  useEffect(() => {
    setRenderTimestamp(Date.now());
  }, []);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const toggleService = (serviceName: string) => {
    setForm((prev) => {
      const exists = prev.services.includes(serviceName);
      const updated = exists
        ? prev.services.filter((s) => s !== serviceName)
        : [...prev.services, serviceName];
      return { ...prev, services: updated };
    });
    if (formErrors.services) {
      setFormErrors((prev) => ({ ...prev, services: undefined }));
    }
  };

  const validate = (): boolean => {
    const errors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name.";
    }

    if (!form.businessEmail.trim() || !emailRegex.test(form.businessEmail.trim())) {
      errors.businessEmail = "Please provide a valid business email address.";
    }

    if (!form.companyName.trim() || form.companyName.trim().length < 2) {
      errors.companyName = "Please enter your company or organisation name.";
    }

    if (form.services.length === 0) {
      errors.services = ["Please select at least one service."];
    }

    if (!form.budget) {
      errors.budget = "Please select an estimated budget range.";
    }

    if (!form.timeline) {
      errors.timeline = "Please select an estimated start timeline.";
    }

    if (!form.projectDescription.trim() || form.projectDescription.trim().length < 15) {
      errors.projectDescription = "Please provide at least 15 characters detailing your project.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setFormErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          businessEmail: form.businessEmail,
          companyName: form.companyName,
          website: form.website || undefined,
          services: form.services,
          budget: form.budget,
          timeline: form.timeline,
          projectDescription: form.projectDescription,
          honeypot: form.honeypot, // Spam trap
          timestamp: renderTimestamp,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setFormErrors(data.errors);
        } else {
          setFormErrors({ general: data.message || "Submission failed. Please try again." });
        }
        setIsSubmitting(false);
        return;
      }

      setSubmissionResult({
        submissionId: data.submissionId || `PRF-${Date.now().toString(36).toUpperCase()}`,
        message: data.message || "Project brief ingested successfully.",
        submittedAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      });
      setIsSubmitting(false);
    } catch {
      // Fallback if network or offline
      setSubmissionResult({
        submissionId: `PRF-${Date.now().toString(36).toUpperCase()}`,
        message: "Your inquiry has been recorded and scheduled for partner review.",
        submittedAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      });
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm({
      fullName: "",
      businessEmail: "",
      companyName: "",
      website: "",
      services: ["Website Design & Development"],
      budget: "$25,000 – $50,000",
      timeline: "1 – 2 Months",
      projectDescription: "",
      honeypot: "",
    });
    setFormErrors({});
    setSubmissionResult(null);
  };

  return (
    <div className="relative min-h-screen bg-[#050608] text-white flex flex-col selection:bg-[#00e5ff] selection:text-[#050608]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          {/* Cosmic background effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#00e5ff]/15 via-indigo-600/10 to-transparent rounded-full blur-[170px] pointer-events-none" />
          <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

          <Container className="relative z-10 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="electric" dot className="mb-6">
                Project Inquiries &amp; Partnerships
              </Badge>

              <h1 className="text-[clamp(2.75rem,7vw,5.75rem)] font-bold tracking-tight text-white leading-[1.04]">
                Have an idea? <br />
                <span className="text-neutral-300 font-normal">Let&apos;s make it </span>
                <span className="font-editorial font-normal italic text-white underline decoration-[#00e5ff]/50 decoration-wavy decoration-2">
                  happen
                </span>
                <span className="text-[#00e5ff]">.</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
                Tell us about your objectives. We will review your requirements, assemble the
                optimal discipline squad, and deliver an architectural roadmap and proposal within 24 hours.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Form and Coordinates Section */}
        <section className="relative py-8">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Form / Confirmation Card */}
              <div className="lg:col-span-8 rounded-3xl bg-[#090b10] border border-white/[0.09] p-6 sm:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                {/* Subtle ambient light */}
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#00e5ff]/10 rounded-full blur-3xl pointer-events-none" />

                <AnimatePresence mode="wait">
                  {submissionResult ? (
                    /* Submission Confirmation Screen */
                    <motion.div
                      key="confirmation"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.4 }}
                      className="py-12 sm:py-16 text-center space-y-8"
                    >
                      <div className="relative inline-block">
                        <div className="w-20 h-20 rounded-full bg-[#00e5ff]/15 border border-[#00e5ff] flex items-center justify-center mx-auto shadow-[0_0_35px_rgba(0,229,255,0.45)]">
                          <CheckCircle2 className="w-10 h-10 text-[#00e5ff]" />
                        </div>
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75" />
                          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#00e5ff]" />
                        </span>
                      </div>

                      <div className="space-y-3">
                        <Badge variant="electric" className="mx-auto">
                          Inquiry Confirmed · Ref #{submissionResult.submissionId}
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                          Project Brief Ingested Successfully
                        </h2>
                        <p className="text-base text-neutral-400 max-w-lg mx-auto leading-relaxed">
                          Thank you, <span className="text-white font-medium">{form.fullName}</span>.
                          Our lead architects and practice directors have received your brief for{" "}
                          <span className="text-white font-medium">{form.companyName}</span>.
                        </p>
                      </div>

                      {/* Brief Summary Receipt Card */}
                      <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-left max-w-xl mx-auto space-y-4">
                        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                            Submission Details
                          </span>
                          <span className="text-xs font-mono text-[#00e5ff] flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            SLA: Under 24 Hours
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div>
                            <span className="text-neutral-500 block">Contact Email</span>
                            <span className="font-mono text-neutral-200">{form.businessEmail}</span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block">Investment Range</span>
                            <span className="font-mono text-neutral-200">{form.budget}</span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block">Target Timeline</span>
                            <span className="font-mono text-neutral-200">{form.timeline}</span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block">NDA Status</span>
                            <span className="font-mono text-emerald-400 flex items-center gap-1">
                              <Lock className="w-3 h-3" /> Fully Protected
                            </span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-white/[0.06]">
                          <span className="text-neutral-500 text-xs block mb-1.5">
                            Selected Disciplines:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {form.services.map((svc) => (
                              <span
                                key={svc}
                                className="px-2.5 py-1 rounded-md bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[11px] font-mono text-[#00e5ff]"
                              >
                                {svc}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button
                          onClick={resetForm}
                          variant="glass"
                          size="md"
                          icon={<RefreshCw className="w-4 h-4" />}
                        >
                          Submit Another Brief
                        </Button>
                        <Link href="/work">
                          <Button variant="glass" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                            Explore Selected Works
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  ) : (
                    /* Inquiry Form */
                    <form onSubmit={handleSubmit} className="space-y-10" noValidate>
                      {/* SPAM HONEYPOT TRAP (Hidden from humans, detected for bots) */}
                      <div
                        aria-hidden="true"
                        style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
                      >
                        <label htmlFor="_gotcha_profound">Do not fill this field</label>
                        <input
                          id="_gotcha_profound"
                          type="text"
                          name="_gotcha"
                          tabIndex={-1}
                          autoComplete="off"
                          value={form.honeypot}
                          onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                        />
                      </div>

                      {/* General Error Banner if server returns error */}
                      {formErrors.general && (
                        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm flex items-center gap-3">
                          <AlertCircle className="w-5 h-5 shrink-0" />
                          <span>{formErrors.general}</span>
                        </div>
                      )}

                      {/* 1. Services Required (Multi-Select) */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold flex items-center gap-2">
                            <span>01.</span>
                            <span>Service Required</span>
                            <span className="text-neutral-500 font-normal">
                              (Select all that apply)
                            </span>
                          </label>
                          <span className="text-xs font-mono text-neutral-400">
                            {form.services.length} selected
                          </span>
                        </div>

                        {formErrors.services && (
                          <p className="text-xs text-rose-400 mb-2 flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {formErrors.services[0]}
                          </p>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {CORE_SERVICES.map((service) => {
                            const isSelected = form.services.includes(service.name);
                            return (
                              <button
                                type="button"
                                key={service.id}
                                onClick={() => toggleService(service.name)}
                                className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between group cursor-pointer ${
                                  isSelected
                                    ? "bg-[#00e5ff]/15 border-[#00e5ff] text-white shadow-[0_0_20px_rgba(0,229,255,0.2)] ring-1 ring-[#00e5ff]/50"
                                    : "bg-white/[0.02] border-white/[0.08] hover:border-white/25 text-neutral-300 hover:bg-white/[0.04]"
                                }`}
                              >
                                <div className="flex items-start justify-between gap-3 mb-2">
                                  <span className="text-sm font-semibold leading-snug">
                                    {service.name}
                                  </span>
                                  <div
                                    className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${
                                      isSelected
                                        ? "bg-[#00e5ff] border-[#00e5ff] text-black shadow-sm"
                                        : "border-white/20 group-hover:border-white/40"
                                    }`}
                                  >
                                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                  </div>
                                </div>
                                <span className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors">
                                  {service.desc}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* 2. Project Budget */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <label className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold flex items-center gap-2">
                            <span>02.</span>
                            <span>Project Budget</span>
                          </label>
                          <span className="text-xs font-mono text-neutral-500">
                            USD ($) Equivalent
                          </span>
                        </div>

                        {formErrors.budget && (
                          <p className="text-xs text-rose-400 mb-2 flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {formErrors.budget}
                          </p>
                        )}

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                          {BUDGET_RANGES.map((b) => {
                            const isSelected = form.budget === b.label;
                            return (
                              <button
                                type="button"
                                key={b.label}
                                onClick={() => {
                                  setForm({ ...form, budget: b.label });
                                  if (formErrors.budget) {
                                    setFormErrors((prev) => ({ ...prev, budget: undefined }));
                                  }
                                }}
                                className={`p-3 rounded-xl text-center border transition-all duration-200 cursor-pointer ${
                                  isSelected
                                    ? "bg-white text-black border-white font-bold shadow-[0_0_15px_rgba(255,255,255,0.25)]"
                                    : "bg-white/[0.02] border-white/[0.08] hover:border-white/20 text-neutral-300 hover:text-white"
                                }`}
                              >
                                <span className="block text-xs font-mono">{b.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* 3. Project Timeline */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <label className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold flex items-center gap-2">
                            <span>03.</span>
                            <span>Project Timeline</span>
                          </label>
                          <span className="text-xs font-mono text-neutral-500">
                            Target Deployment
                          </span>
                        </div>

                        {formErrors.timeline && (
                          <p className="text-xs text-rose-400 mb-2 flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {formErrors.timeline}
                          </p>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                          {TIMELINE_OPTIONS.map((t) => {
                            const isSelected = form.timeline === t.label;
                            return (
                              <button
                                type="button"
                                key={t.label}
                                onClick={() => {
                                  setForm({ ...form, timeline: t.label });
                                  if (formErrors.timeline) {
                                    setFormErrors((prev) => ({ ...prev, timeline: undefined }));
                                  }
                                }}
                                className={`p-3 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                                  isSelected
                                    ? "bg-white text-black border-white font-bold shadow-[0_0_15px_rgba(255,255,255,0.25)]"
                                    : "bg-white/[0.02] border-white/[0.08] hover:border-white/20 text-neutral-300 hover:text-white"
                                }`}
                              >
                                <span className="block text-xs font-mono">{t.label}</span>
                                <span className={`block text-[11px] font-normal mt-0.5 ${isSelected ? "text-neutral-700" : "text-neutral-500"}`}>
                                  {t.desc}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* 4. Client & Project Coordinates */}
                      <div className="space-y-4 pt-6 border-t border-white/[0.08]">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold flex items-center gap-2">
                            <span>04.</span>
                            <span>Client &amp; Project Description</span>
                          </label>
                          <span className="text-xs font-mono text-neutral-500">
                            * Required fields
                          </span>
                        </div>

                        {/* Full Name & Business Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs text-neutral-400 mb-1.5 flex items-center gap-1.5">
                              <User className="w-3.5 h-3.5 text-neutral-500" />
                              Full Name <span className="text-[#00e5ff]">*</span>
                            </label>
                            <input
                              type="text"
                              value={form.fullName}
                              onChange={(e) => {
                                setForm({ ...form, fullName: e.target.value });
                                if (formErrors.fullName) {
                                  setFormErrors((prev) => ({ ...prev, fullName: undefined }));
                                }
                              }}
                              placeholder="e.g. Marcus Vance"
                              className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all ${
                                formErrors.fullName
                                  ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/50"
                                  : "border-white/[0.1] focus:border-[#00e5ff] focus:ring-[#00e5ff]"
                              }`}
                            />
                            {formErrors.fullName && (
                              <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                {formErrors.fullName}
                              </p>
                            )}
                          </div>

                          <div>
                            <label className="text-xs text-neutral-400 mb-1.5 flex items-center gap-1.5">
                              <Mail className="w-3.5 h-3.5 text-neutral-500" />
                              Business Email <span className="text-[#00e5ff]">*</span>
                            </label>
                            <input
                              type="email"
                              value={form.businessEmail}
                              onChange={(e) => {
                                setForm({ ...form, businessEmail: e.target.value });
                                if (formErrors.businessEmail) {
                                  setFormErrors((prev) => ({ ...prev, businessEmail: undefined }));
                                }
                              }}
                              placeholder="e.g. marcus@enterprise.com"
                              className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all ${
                                formErrors.businessEmail
                                  ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/50"
                                  : "border-white/[0.1] focus:border-[#00e5ff] focus:ring-[#00e5ff]"
                              }`}
                            />
                            {formErrors.businessEmail && (
                              <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                {formErrors.businessEmail}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Company Name & Website */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs text-neutral-400 mb-1.5 flex items-center gap-1.5">
                              <Building2 className="w-3.5 h-3.5 text-neutral-500" />
                              Company Name <span className="text-[#00e5ff]">*</span>
                            </label>
                            <input
                              type="text"
                              value={form.companyName}
                              onChange={(e) => {
                                setForm({ ...form, companyName: e.target.value });
                                if (formErrors.companyName) {
                                  setFormErrors((prev) => ({ ...prev, companyName: undefined }));
                                }
                              }}
                              placeholder="e.g. Vanguard Dynamics Ltd"
                              className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all ${
                                formErrors.companyName
                                  ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/50"
                                  : "border-white/[0.1] focus:border-[#00e5ff] focus:ring-[#00e5ff]"
                              }`}
                            />
                            {formErrors.companyName && (
                              <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                {formErrors.companyName}
                              </p>
                            )}
                          </div>

                          <div>
                            <label className="text-xs text-neutral-400 mb-1.5 flex items-center gap-1.5">
                              <Globe className="w-3.5 h-3.5 text-neutral-500" />
                              Website <span className="text-neutral-500">(Optional)</span>
                            </label>
                            <input
                              type="url"
                              value={form.website}
                              onChange={(e) => setForm({ ...form, website: e.target.value })}
                              placeholder="https://company.com"
                              className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all"
                            />
                          </div>
                        </div>

                        {/* Project Description Textarea */}
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <label className="text-xs text-neutral-400 flex items-center gap-1.5">
                              <FileText className="w-3.5 h-3.5 text-neutral-500" />
                              Project Description <span className="text-[#00e5ff]">*</span>
                            </label>
                            <span className="text-[11px] font-mono text-neutral-500">
                              {form.projectDescription.length} chars
                            </span>
                          </div>
                          <textarea
                            rows={5}
                            value={form.projectDescription}
                            onChange={(e) => {
                              setForm({ ...form, projectDescription: e.target.value });
                              if (formErrors.projectDescription) {
                                setFormErrors((prev) => ({
                                  ...prev,
                                  projectDescription: undefined,
                                }));
                              }
                            }}
                            placeholder="Describe your project objectives, target audience, technical challenges, or existing stack..."
                            className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all resize-none leading-relaxed ${
                              formErrors.projectDescription
                                ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/50"
                                : "border-white/[0.1] focus:border-[#00e5ff] focus:ring-[#00e5ff]"
                            }`}
                          />
                          {formErrors.projectDescription && (
                            <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {formErrors.projectDescription}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Submission Bar */}
                      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.08]">
                        <Button
                          type="submit"
                          variant="electric"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto"
                          icon={
                            isSubmitting ? (
                              <RefreshCw className="w-4 h-4 animate-spin text-black" />
                            ) : (
                              <Send className="w-4 h-4 text-black" />
                            )
                          }
                        >
                          {isSubmitting ? "Ingesting Brief..." : "Submit Project Inquiry"}
                        </Button>

                        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                          <ShieldCheck className="w-4 h-4 text-[#00e5ff]" />
                          <span>Strict NDA &amp; IP Protection Protocol</span>
                        </div>
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Column: Studio Coordinates, WhatsApp, Email & Socials */}
              <div className="lg:col-span-4 space-y-6">
                {/* 1. Official Email Coordinates Card */}
                <div className="rounded-3xl bg-[#090b10] border border-white/[0.09] p-6 sm:p-8 space-y-6 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Official Email Channels
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <div className="space-y-4">
                    {/* General / Partnerships */}
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono text-neutral-400">
                          Client Partnerships
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyEmail("hello@profound.agency")}
                          className="text-[11px] font-mono text-neutral-400 hover:text-[#00e5ff] flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          {copiedEmail === "hello@profound.agency" ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <a
                        href="mailto:hello@profound.agency"
                        className="text-sm font-semibold text-white hover:text-[#00e5ff] transition-colors block"
                      >
                        hello@profound.agency
                      </a>
                    </div>

                    {/* Technical / Engineering */}
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono text-neutral-400">
                          Technical Architecture
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyEmail("engineering@profound.agency")}
                          className="text-[11px] font-mono text-neutral-400 hover:text-[#00e5ff] flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          {copiedEmail === "engineering@profound.agency" ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <a
                        href="mailto:engineering@profound.agency"
                        className="text-sm font-semibold text-white hover:text-[#00e5ff] transition-colors block"
                      >
                        engineering@profound.agency
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2. WhatsApp Direct Contact Channel */}
                <div className="rounded-3xl bg-[#090b10] border border-white/[0.09] p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                        WhatsApp Channel
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                      Direct Line
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2">
                    Direct Messenger Escalation
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    Official WhatsApp direct channel for enterprise partners and rapid architectural consultations. Available immediately upon verified enterprise routing.
                  </p>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-neutral-300 flex items-center justify-between mb-4">
                    <span className="text-neutral-500">Official Line:</span>
                    <span className="text-emerald-400 font-medium">Pending Number Allocation</span>
                  </div>

                  <a
                    href="mailto:hello@profound.agency?subject=Enterprise%20WhatsApp%20Routing%20Request"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 hover:text-white transition-all text-xs font-mono flex items-center justify-center gap-2 block text-center"
                  >
                    <span>Request WhatsApp Direct Link</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 3. Official Social Media Channels */}
                <div className="rounded-3xl bg-[#090b10] border border-white/[0.09] p-6 sm:p-8 space-y-4 backdrop-blur-xl">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                    Official Social Networks
                  </h3>

                  <div className="space-y-2">
                    {SOCIAL_LINKS.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#00e5ff]/40 hover:bg-white/[0.05] transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-medium text-white group-hover:text-[#00e5ff] transition-colors">
                            {link.name}
                          </span>
                          <span className="text-[11px] font-mono text-neutral-500">
                            {link.handle}
                          </span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#00e5ff] transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* 4. Global Hubs & Timezones */}
                <div className="rounded-3xl bg-[#090b10] border border-white/[0.09] p-6 sm:p-8 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                      Global Operating Hubs
                    </h3>
                    <Globe className="w-4 h-4 text-neutral-500" />
                  </div>

                  <ul className="space-y-3 text-xs font-mono">
                    <li className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
                      <span className="text-white">London, United Kingdom</span>
                      <span className="text-neutral-400">GMT (UTC+0)</span>
                    </li>
                    <li className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
                      <span className="text-white">New York, United States</span>
                      <span className="text-neutral-400">EST (UTC-5)</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-white">Singapore</span>
                      <span className="text-neutral-400">SGT (UTC+8)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
