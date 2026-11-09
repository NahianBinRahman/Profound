export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: "Software & SaaS" | "Websites" | "E-commerce" | "Branding" | "Digital Marketing" | "Infrastructure";
  industry: string;
  scope: string;
  badgeType: "Demonstration Project" | "Architecture Concept";
  summary: string;
  clientBackground: string;
  challenge: string;
  strategy: string;
  solution: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  timeline: string;
  themeColor: string;
  mockupDetails: {
    domain: string;
    headline: string;
    highlight: string;
  };
  keyOutcomes: string[];
  relatedSlugs: string[];
}

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: "nexus-core-saas",
    slug: "nexus-core-cloud-platform",
    title: "Nexus Core Cloud Platform",
    category: "Software & SaaS",
    industry: "Enterprise Cloud & Developer Tools",
    scope: "Full-Stack Web App / Distributed Microservices",
    badgeType: "Demonstration Project",
    summary:
      "A planetary-scale multi-tenant SaaS architecture designed for high-concurrency data streaming, sub-15ms edge routing, and automated tenant isolation.",
    clientBackground:
      "Nexus Core is an enterprise cloud telemetry demonstration platform designed to illustrate high-load distributed architectures for Fortune 500 engineering organizations.",
    challenge:
      "Enterprise SaaS platforms frequently suffer from multi-tenant data leaks, latency spikes during concurrency surges, and sluggish dashboard rendering when aggregating millions of time-series data points.",
    strategy:
      "Partition database workloads into isolated tenant schemas, decouple telemetry ingestion from user queries using event queues, and serve UI state from global edge nodes.",
    solution:
      "We engineered an event-driven architecture using Next.js 16 App Router on the edge, backed by PostgreSQL partitioned schemas, Redis queues, and automated Docker orchestration.",
    deliverables: [
      "Multi-Tenant Partitioned Database Architecture",
      "Sub-15ms Serverless Edge API Layer",
      "Real-Time WebSocket Telemetry Dashboard",
      "Stripe Usage-Based Metered Billing",
      "Automated CI/CD Pipeline & 100% Type-Safe Contracts",
    ],
    metrics: [
      { label: "Architecture SLA", value: "99.99% (Simulated)" },
      { label: "Edge Response Latency", value: "<14ms (Benchmark)" },
      { label: "Concurrent Connections", value: "250K+ (Stress Test)" },
      { label: "Query Execution Speed", value: "3.2ms (Median)" },
    ],
    technologies: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Redis", "Tailwind CSS", "AWS Lambda"],
    timeline: "8 Weeks Architecture Sprint",
    themeColor: "#00e5ff",
    mockupDetails: {
      domain: "nexuscore.cloud.preview",
      headline: "Distributed Microservices at Planetary Scale",
      highlight: "Real-time Telemetry Engine",
    },
    keyOutcomes: [
      "Zero cross-tenant data leakage verified via automated fuzz testing.",
      "Instantaneous real-time dashboard data refresh under 250,000 simulated client connections.",
      "Sub-second cold-boot times across global edge compute regions.",
    ],
    relatedSlugs: ["strata-zero-trust-network", "pulse-health-analytics", "orion-horology-digital-flagship"],
  },
  {
    id: "strata-zero-trust",
    slug: "strata-zero-trust-network",
    title: "Strata Zero-Trust Network Defense",
    category: "Infrastructure",
    industry: "Cybersecurity & Cloud Defense",
    scope: "Hardened Perimeter & Identity-Aware Governance",
    badgeType: "Architecture Concept",
    summary:
      "A zero-trust cloud infrastructure perimeter featuring automated continuous posture auditing, mTLS identity verification, and multi-region failover.",
    clientBackground:
      "Strata is an architectural concept representing a defense-in-depth infrastructure framework for cloud-native organizations handling sensitive financial records.",
    challenge:
      "Distributed engineering teams face expanding attack surfaces, insecure legacy VPN tunnels, credential stuffing, and arduous manual SOC2 compliance audits.",
    strategy:
      "Eliminate perimeter trust assumptions entirely. Authenticate and encrypt every packet with mutual TLS and enforce dynamic, context-aware least-privilege access rules.",
    solution:
      "We designed an immutable Infrastructure-as-Code topology using Terraform and Kubernetes, coupled with Cloudflare Zero Trust, mutual TLS access proxies, and automated Datadog anomaly detection.",
    deliverables: [
      "Zero-Trust Identity-Aware Proxy (IAP)",
      "Automated Terraform Multi-Cloud Topology",
      "Continuous SOC2 / ISO 27001 Evidence Engine",
      "Automated Layer 7 DDoS Mitigation",
      "24/7 Automated Threat Quarantine Protocol",
    ],
    metrics: [
      { label: "Perimeter Vulnerabilities", value: "Zero Zero-Day (Audit)" },
      { label: "Compliance Readiness", value: "100% SOC2 Standard" },
      { label: "Automated Threat Cutoff", value: "<500ms (Benchmark)" },
      { label: "Disaster Recovery RTO", value: "<60s (Failover)" },
    ],
    technologies: ["Terraform", "Kubernetes", "AWS IAM", "Cloudflare Zero Trust", "HashiCorp Vault", "Datadog", "Docker"],
    timeline: "6 Weeks Hardening Sprint",
    themeColor: "#38bdf8",
    mockupDetails: {
      domain: "strata.defense.internal",
      headline: "Autonomous Threat Mitigation & Access Governance",
      highlight: "SOC2 Automated Auditing",
    },
    keyOutcomes: [
      "Eliminated legacy VPN dependency with cryptographically verified identity proxies.",
      "Reduced compliance audit preparation time from 6 months to automated daily telemetry.",
      "Achieved sub-minute automated disaster recovery cutover across secondary AWS regions.",
    ],
    relatedSlugs: ["nexus-core-cloud-platform", "synthex-answer-engine-authority", "hyperion-algorithmic-acquisition"],
  },
  {
    id: "lumina-architecture",
    slug: "lumina-architectural-studio",
    title: "Lumina Architectural Studio",
    category: "Websites",
    industry: "High-End Architecture & Spatial Design",
    scope: "Cinematic Digital Portfolio & Editorial Direction",
    badgeType: "Demonstration Project",
    summary:
      "A bespoke editorial digital presence celebrating monumental spatial architecture with full-bleed canvas transitions, custom cursor physics, and sub-second load times.",
    clientBackground:
      "Lumina is an architectural design studio demonstration project exploring minimal brutalist typography and fluid spatial navigation for luxury studios.",
    challenge:
      "High-resolution architectural photography frequently bogs down website performance, leading to sluggish scroll stutter and compromised visual storytelling on mobile devices.",
    strategy:
      "Utilize modern AVIF/WebP next-gen compression, responsive sub-resource prefetching, and hardware-accelerated transforms to maintain 60fps frame rates.",
    solution:
      "We built a fluid Next.js experience paired with Lenis smooth scrolling, adaptive image decoders, and a headless Sanity CMS allowing instant gallery updates.",
    deliverables: [
      "Monumental Editorial Web Flagship",
      "Custom Smooth-Scroll Interaction Engine",
      "Adaptive Multi-Resolution Gallery Decoders",
      "Headless Sanity CMS Asset Manager",
      "100/100 Core Web Vitals Benchmark",
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "100/100" },
      { label: "First Contentful Paint", value: "0.38s" },
      { label: "Scroll Frame Rate", value: "60 FPS Constant" },
      { label: "Asset Compression Ratio", value: "78% Smaller" },
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Lenis", "Sanity CMS", "TypeScript"],
    timeline: "5 Weeks Design & Build",
    themeColor: "#e2e8f0",
    mockupDetails: {
      domain: "lumina.architects.preview",
      headline: "Spatial Monoliths & Tactile Materiality",
      highlight: "60 FPS Editorial Experience",
    },
    keyOutcomes: [
      "Maintained unbroken 60fps smooth scrolling during heavy image rendering across all viewports.",
      "Achieved sub-400ms First Contentful Paint while rendering 4K architectural imagery.",
      "Delivered a bespoke CMS schema enabling intuitive editorial curation without code changes.",
    ],
    relatedSlugs: ["orion-horology-digital-flagship", "vanguard-autonomous-systems-branding", "nexus-core-cloud-platform"],
  },
  {
    id: "orion-horology",
    slug: "orion-horology-digital-flagship",
    title: "Orion Horology Digital Flagship",
    category: "E-commerce",
    industry: "Luxury Horology & Haute Watchmaking",
    scope: "Luxury Digital Flagship & 3D WebGL Watch Customizer",
    badgeType: "Demonstration Project",
    summary:
      "An award-winning luxury e-commerce experience combining high-fashion editorial typography with real-time 3D WebGL material shaders and instant headless checkout.",
    clientBackground:
      "Orion Horology is an independent luxury watchmaker demonstration concept showcasing the marriage of Swiss craft with cutting-edge 3D WebGL e-commerce.",
    challenge:
      "High-end luxury brands struggle to translate the tactile prestige of high watchmaking to digital screens without slow loading times and clumsy mobile interactions.",
    strategy:
      "Build a lightweight 3D WebGL asset pipeline that renders metallic specular reflections and sapphire crystal glass in real time without exceeding a 2MB total payload.",
    solution:
      "We crafted a cinematic digital flagship using Next.js, Three.js WebGL, and Framer Motion, integrated with headless Shopify Plus and instant serverless cart checkout.",
    deliverables: [
      "Interactive 3D WebGL Dial & Case Customizer",
      "Fluid Editorial Responsive Typography System",
      "Headless Shopify Plus Instant Checkout",
      "Sanity CMS Visual Storytelling Pipeline",
      "100/100 Core Web Vitals Optimization",
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "100/100" },
      { label: "First Contentful Paint", value: "0.4s" },
      { label: "Session Duration", value: "+185% (Benchmark)" },
      { label: "Mobile Checkout Speed", value: "1.2s" },
    ],
    technologies: ["Three.js", "Next.js", "Tailwind CSS", "Shopify Plus", "Sanity CMS", "Lenis", "Framer Motion"],
    timeline: "7 Weeks Design & Build",
    themeColor: "#c084fc",
    mockupDetails: {
      domain: "orion-horology.store",
      headline: "The Art of Precision Swiss Engineering",
      highlight: "Interactive 3D WebGL Dial",
    },
    keyOutcomes: [
      "Flawless 60fps 3D watch model inspection with dynamic metallic reflections.",
      "Sub-second page transitions powered by Lenis smooth scrolling and predictive prefetching.",
      "Doubled mobile checkout completion speed compared to traditional luxury e-commerce benchmarks.",
    ],
    relatedSlugs: ["lumina-architectural-studio", "vanguard-autonomous-systems-branding", "hyperion-algorithmic-acquisition"],
  },
  {
    id: "vanguard-identity",
    slug: "vanguard-autonomous-systems-branding",
    title: "Vanguard Autonomous Systems Brand",
    category: "Branding",
    industry: "Deep-Tech & Autonomous Aviation",
    scope: "Visual Identity System, 3D Assets & Design Tokens",
    badgeType: "Demonstration Project",
    summary:
      "A futuristic, monolithic brand identity system engineered for an autonomous deep-tech robotics company, featuring custom typography and digital guidelines.",
    clientBackground:
      "Vanguard Systems is a demonstration brand identity conceived for autonomous aerospace and robotics enterprises seeking tier-1 institutional positioning.",
    challenge:
      "Deep-tech companies often have groundbreaking technology trapped behind dry academic branding that fails to attract institutional capital or world-class engineering talent.",
    strategy:
      "Develop a monumental, geometric aesthetic centered around precision aerodynamics, dark obsidian materiality, and code-ready design tokens.",
    solution:
      "We engineered an iconic visual identity featuring a sculptural geometric monogram, bespoke typographic scale, chromatic design tokens, and cinematic 3D motion assets.",
    deliverables: [
      "Monumental Geometric Monogram & Logotype",
      "Comprehensive Design Tokens (CSS/Tailwind/Figma)",
      "3D Rendered Hardware Artifacts & Animations",
      "Complete 120-Page Digital Brand Book",
      "Investor Pitch Decks & Marketing Collateral",
    ],
    metrics: [
      { label: "Brand Distinction Score", value: "Top 1% (Assessment)" },
      { label: "Token System Export", value: "100% Code-Ready" },
      { label: "Design Consistency", value: "Zero Divergence" },
      { label: "Brand Recall Lift", value: "4.6x (Audited)" },
    ],
    technologies: ["Figma Enterprise", "Cinema 4D", "Adobe Illustrator", "Design Tokens", "Tailwind CSS"],
    timeline: "6 Weeks Brand Sprint",
    themeColor: "#c084fc",
    mockupDetails: {
      domain: "vanguard.systems/brand-spec",
      headline: "The Visual Language of Autonomous Flight",
      highlight: "Geometric Monogram Specimen",
    },
    keyOutcomes: [
      "Created an instantly recognizable silhouette that works from 16px micro-favicons to hardware chassis.",
      "Exported automated design tokens directly into production React component libraries.",
      "Delivered a complete brand asset repository ready for global marketing and enterprise deployment.",
    ],
    relatedSlugs: ["nexus-core-cloud-platform", "orion-horology-digital-flagship", "lumina-architectural-studio"],
  },
  {
    id: "hyperion-growth",
    slug: "hyperion-algorithmic-acquisition",
    title: "Hyperion Algorithmic Growth Engine",
    category: "Digital Marketing",
    industry: "B2B SaaS & Enterprise Tech",
    scope: "High-Production Video, Paid Media & CRO Funnels",
    badgeType: "Demonstration Project",
    summary:
      "A high-velocity performance acquisition engine combining algorithmic 9:16 short-form video hooks with programmatic paid ad testing across Meta and LinkedIn.",
    clientBackground:
      "Hyperion is a growth framework demonstration illustrating full-funnel customer acquisition, creative velocity, and multi-variant landing page optimization.",
    challenge:
      "High ad saturation, rising Customer Acquisition Costs (CAC), and iOS tracking degradation make traditional digital advertising unprofitable for scale-up brands.",
    strategy:
      "Isolate winning customer pain points using rapid-fire 3-second motion hooks, paired directly with sub-second Next.js landing funnels for immediate conversion.",
    solution:
      "We combined rapid-iteration creative testing with dedicated custom landing page funnels and first-party attribution modeling to systematically drive down CAC.",
    deliverables: [
      "Paid Performance Ad Campaigns (Meta / LinkedIn / Google)",
      "High-Production 9:16 Short-Form Motion Hooks",
      "Dynamic Multi-Variant Landing Page Funnels",
      "First-Party Triple Whale Attribution Setup",
      "Weekly Creative Iteration Sprints",
    ],
    metrics: [
      { label: "Blended ROAS", value: "4.8x Return (Target)" },
      { label: "CAC Reduction", value: "-42% Cost (Benchmark)" },
      { label: "Hook Retention Rate", value: "48% at 3s (Average)" },
      { label: "Landing Conversion Rate", value: "8.4% (Test Funnel)" },
    ],
    technologies: ["Meta Ads Manager", "LinkedIn Ads", "Premiere Pro", "After Effects", "Next.js", "Triple Whale"],
    timeline: "Ongoing Sprint Engine",
    themeColor: "#38bdf8",
    mockupDetails: {
      domain: "hyperion.growth.engine/reports",
      headline: "Algorithmic Ad Variations at Scale",
      highlight: "Real-Time Attribution Dashboard",
    },
    keyOutcomes: [
      "Produced over 40 distinct creative hook iterations in the first 30 days of testing.",
      "Lowered customer acquisition cost by 42% while scaling monthly ad volume in test campaigns.",
      "Paired top-performing ads with dedicated sub-second Next.js landing pages for an 8.4% conversion rate.",
    ],
    relatedSlugs: ["synthex-answer-engine-authority", "nexus-core-cloud-platform", "orion-horology-digital-flagship"],
  },
  {
    id: "synthex-ai-engine",
    slug: "synthex-answer-engine-authority",
    title: "Synthex Answer Engine Authority",
    category: "Software & SaaS",
    industry: "AI Search & Knowledge Graph Systems",
    scope: "Generative Search & Knowledge Graph Architecture",
    badgeType: "Architecture Concept",
    summary:
      "An advanced semantic entity optimization program designed to establish primary topical authority across Perplexity, ChatGPT, Gemini, and Google AI Overviews.",
    clientBackground:
      "Synthex is a research architecture demonstration showcasing how modern digital entities are indexed, parsed, and cited by Large Language Models.",
    challenge:
      "Traditional keyword SEO is failing as AI answer engines synthesize answers directly without sending clicks to standard search results.",
    strategy:
      "Re-architect site ontology into unambiguous Schema.org entity graphs, providing machine-verifiable citations and vector-aligned answers.",
    solution:
      "We restructured the digital entity footprint using comprehensive Schema.org JSON-LD knowledge graphs, entity disambiguation schemas, and authoritative Q&A citation vectors.",
    deliverables: [
      "Comprehensive Entity Knowledge Graph Architecture",
      "Schema.org JSON-LD Multi-Type Modeling",
      "Perplexity & ChatGPT Citation Strategy",
      "Google AI Overview (SGE) Dominance Blueprint",
      "Generative Engine Tracking & Telemetry",
    ],
    metrics: [
      { label: "AI Citation Rate", value: "+380% Lift (Model)" },
      { label: "Perplexity Authority", value: "#1 Source (Eval)" },
      { label: "AI Search Share", value: "68% Total (Simulated)" },
      { label: "Organic Ingestion Time", value: "<21 Days (Observed)" },
    ],
    technologies: ["Schema.org", "JSON-LD", "Vector Embeddings", "Semantic Indexing", "Google SGE", "Perplexity API"],
    timeline: "5 Weeks Strategy & Rollout",
    themeColor: "#34d399",
    mockupDetails: {
      domain: "synthex.ai/knowledge-graph",
      headline: "Primary Entity Authority in Generative Engines",
      highlight: "#1 Perplexity Citation Source",
    },
    keyOutcomes: [
      "Established brand as the top citation source for over 140 high-intent enterprise prompts.",
      "Achieved verified entity status in Google's Knowledge Graph within 3 weeks.",
      "Demonstrated direct citation pipeline from knowledge graph ingestion to Perplexity answer synthesis.",
    ],
    relatedSlugs: ["nexus-core-cloud-platform", "strata-zero-trust-network", "hyperion-algorithmic-acquisition"],
  },
];

export const SELECTED_PROJECTS = CASE_STUDIES_DATA;
