export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceDetailItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  categoryTag: string;
  iconName: string;
  accentColor: string;
  deliverables: string[];
  metrics: { label: string; value: string };
  previewType: "code" | "security" | "browser" | "ai" | "branding" | "growth";
  technologies: string[];
  process: ServiceProcessStep[];
  capabilities: { title: string; desc: string }[];
  problemsWeSolve: { problem: string; resolution: string }[];
  relatedCaseStudySlugs: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES_DATA: ServiceDetailItem[] = [
  {
    id: "software-saas",
    slug: "software-saas-development",
    title: "Software & SaaS Development",
    subtitle: "Enterprise Platforms & Cloud Architectures",
    shortDesc:
      "Custom software, CRM systems, dashboards, customer portals and SaaS platforms.",
    fullDesc:
      "We design and engineer enterprise-grade SaaS platforms from foundational architecture to global deployment. Our engineering standards prioritize type-safety, resilience, automated CI/CD pipelines, and sub-millisecond API response times.",
    categoryTag: "Full-Stack & Cloud",
    iconName: "Code2",
    accentColor: "#00e5ff",
    deliverables: [
      "Custom Software & Enterprise Web Apps",
      "CRM Systems & Customer Portals",
      "Real-Time SaaS Analytics Dashboards",
      "RESTful & GraphQL API Infrastructure",
      "Automated CI/CD & Testing Pipelines",
    ],
    metrics: { label: "Uptime SLA", value: "99.99%" },
    previewType: "code",
    technologies: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Docker", "AWS Lambda", "Redis", "GraphQL"],
    process: [
      { step: "01", title: "Domain & Schema Modeling", description: "Designing database entities, permission boundaries, and API contracts." },
      { step: "02", title: "Microservice Engineering", description: "Building resilient backends, distributed queues, and secure endpoints." },
      { step: "03", title: "Front-End Experience", description: "Developing responsive, sub-second web applications with fluid state." },
      { step: "04", title: "Telemetry & Automated Deploy", description: "Automating zero-downtime CI/CD pipelines and multi-region failover." },
    ],
    capabilities: [
      { title: "Multi-Tenant Architectures", desc: "Isolate client data with cryptographically partitioned tenant databases and strict IAM roles." },
      { title: "Sub-Millisecond Edge APIs", desc: "Deploy global serverless workers routing requests with minimal compute latency." },
      { title: "Payment & Subscription Engines", desc: "Flawless Stripe billing integration supporting usage-based, tiered, and enterprise invoices." },
      { title: "Automated Test Suites", desc: "Comprehensive unit, integration, and end-to-end regression testing with 100% CI pass gates." },
    ],
    problemsWeSolve: [
      { problem: "Technical Debt & Brittle Backends", resolution: "We refactor legacy monolithic code into modular, type-safe Next.js microservices and clean event-driven queues." },
      { problem: "Slow Dashboard Latency Under Concurrency", resolution: "We implement PostgreSQL schema partitioning, Redis caching, and edge routing to maintain sub-15ms responses." },
      { problem: "Multi-Tenant Security Vulnerabilities", resolution: "We enforce cryptographically isolated database schemas with strict row-level security (RLS) policies." },
      { problem: "High SaaS Churn Caused by Clunky UI", resolution: "We engineer lightning-fast React 19 interfaces that load instantly and provide effortless user workflows." },
    ],
    relatedCaseStudySlugs: ["nexus-core-cloud-platform"],
    faqs: [
      { question: "Can you take over or refactor an existing codebase?", answer: "Yes. We perform comprehensive technical audits, isolate tech debt, and execute clean migration sprints without interrupting ongoing operations." },
      { question: "What cloud providers do you support?", answer: "We primarily architect for AWS, Google Cloud, and Vercel/Cloudflare edge networks, selecting the optimal configuration for your cost and latency profile." },
    ],
  },
  {
    id: "it-cybersecurity",
    slug: "it-infrastructure-cybersecurity",
    title: "IT Infrastructure & Cybersecurity",
    subtitle: "Zero-Trust Security & Resilient Cloud DevOps",
    shortDesc:
      "Business networks, servers, cloud infrastructure, security and infrastructure troubleshooting.",
    fullDesc:
      "Protect your enterprise perimeter with hardened cloud topologies, end-to-end data encryption, and automated compliance frameworks across AWS, GCP, and Azure.",
    categoryTag: "DevOps & Defense",
    iconName: "ShieldCheck",
    accentColor: "#38bdf8",
    deliverables: [
      "Business Networks & Dedicated Cloud Servers",
      "Zero-Trust Architecture & IAM Setup",
      "Cloud Security & Compliance (SOC2 / ISO)",
      "Automated Penetration Testing & Defense",
      "Infrastructure Troubleshooting & 24/7 Monitoring",
    ],
    metrics: { label: "Vulnerability Index", value: "Zero Zero-Day" },
    previewType: "security",
    technologies: ["Terraform", "Kubernetes", "AWS IAM", "Cloudflare Zero Trust", "Vault", "WAF", "Datadog", "OpenVPN"],
    process: [
      { step: "01", title: "Perimeter Threat Audit", description: "Identifying attack vectors, misconfigurations, and outdated dependencies." },
      { step: "02", title: "Zero-Trust Hardening", description: "Enforcing mutual TLS, identity-aware proxies, and least-privilege IAM." },
      { step: "03", title: "Infrastructure as Code", description: "Codifying multi-cloud topologies via Terraform with deterministic builds." },
      { step: "04", title: "24/7 Telemetry Shield", description: "Deploying automated anomaly detection, alerting, and rapid incident response." },
    ],
    capabilities: [
      { title: "SOC2 & ISO 27001 Readiness", desc: "Aligning infrastructure and policies with rigorous compliance standards." },
      { title: "DDoS & Layer 7 Defense", desc: "Filtering malicious requests through global edge rate limiters and smart WAF rules." },
      { title: "Automated Disaster Recovery", desc: "Configuring multi-region backup replication with instantaneous failover cutover." },
      { title: "Continuous Vulnerability Scanning", desc: "Automated daily dependency audits and automated static security analysis." },
    ],
    problemsWeSolve: [
      { problem: "Insecure Legacy VPN Tunnels", resolution: "We deploy Cloudflare Zero Trust and identity-aware proxies enforcing mutual TLS across all microservices." },
      { problem: "Painful, Manual SOC2 Compliance Audits", resolution: "We codify multi-cloud topology via Terraform with automated continuous evidence collection in Datadog." },
      { problem: "Single Point of Failure Risks", resolution: "We architect automated multi-region replication and instant disaster recovery cutovers (<60s RTO)." },
      { problem: "Cloud Spend Inefficiencies & Bloat", resolution: "We audit and right-size AWS/GCP resources to eliminate compute waste while guaranteeing high availability." },
    ],
    relatedCaseStudySlugs: ["strata-zero-trust-network"],
    faqs: [
      { question: "How do you help us prepare for SOC2 compliance?", answer: "We implement the entire technical perimeter—encryption at rest/transit, audit logging, IAM policies, and evidence gathering." },
      { question: "What is your incident response protocol?", answer: "We establish automated alerting with immediate on-call escalation, automated IP isolation, and post-incident forensic reporting." },
    ],
  },
  {
    id: "website-design",
    slug: "website-design-development",
    title: "Website Design & Development",
    subtitle: "Cinematic Experiences & High-Conversion Systems",
    shortDesc:
      "Custom-coded websites, business websites, landing pages, e-commerce and integrations.",
    fullDesc:
      "We build iconic websites that elevate brand prestige and accelerate conversion. Every pixel is crafted with responsive fluid typography, interactive WebGL accents, and ultra-fast Core Web Vitals.",
    categoryTag: "Experience Design",
    iconName: "Globe",
    accentColor: "#818cf8",
    deliverables: [
      "Custom-Coded Flagships & Business Sites",
      "High-Conversion Landing Pages & Microsites",
      "E-Commerce & Headless Shopify Stores",
      "Interactive 3D / WebGL / Canvas Motion",
      "Seamless API Integrations & Dynamic CMS",
    ],
    metrics: { label: "Performance Score", value: "99+ Lighthouse" },
    previewType: "browser",
    technologies: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion", "Sanity CMS", "Shopify Plus", "Lenis", "Vercel"],
    process: [
      { step: "01", title: "Art Direction & Wireframing", description: "Establishing typographic scale, spatial grids, and interactive user journeys." },
      { step: "02", title: "Interactive Prototyping", description: "Developing high-fidelity motion prototypes with physics-based transitions." },
      { step: "03", title: "Production Code Build", description: "Engineering sub-second SSR/SSG pages with semantic HTML and WebGL accents." },
      { step: "04", title: "Core Vitals Audit & Launch", description: "Benchmarking 100/100 Lighthouse scores and global CDN caching." },
    ],
    capabilities: [
      { title: "Fluid Editorial Typography", desc: "Precision responsive typography scales harmonizing modern sans with luxury serif accents." },
      { title: "Physics-Based Animations", desc: "Spring-damped smooth scrolling, magnetic buttons, and interactive 3D canvas visuals." },
      { title: "Headless Content Management", desc: "Intuitive publishing interfaces allowing your marketing team to edit copy without code." },
      { title: "Mobile-First Precision", desc: "Flawless rendering and ergonomic touch controls across iPhone, iPad, and desktop viewports." },
    ],
    problemsWeSolve: [
      { problem: "Commoditized, Generic Agency Templates", resolution: "We craft custom editorial digital flagships that evoke luxury prestige, tailored typography, and bespoke 3D WebGL motion." },
      { problem: "Poor Core Web Vitals & High Bounce Rates", resolution: "We optimize all critical sub-resources, achieving consistent 100/100 Lighthouse performance benchmarks." },
      { problem: "Clunky Mobile Shopping Experiences", resolution: "We engineer ergonomic mobile-first interfaces with sub-second headless checkout on Shopify Plus." },
      { problem: "Rigid Marketing Publishing Workflows", resolution: "We integrate intuitive headless CMS architectures (Sanity/Strapi) enabling effortless marketing updates without developers." },
    ],
    relatedCaseStudySlugs: ["lumina-architectural-studio", "orion-horology-digital-flagship"],
    faqs: [
      { question: "Do you build on CMS platforms?", answer: "Yes, we integrate modern headless CMS solutions like Sanity, Strapi, or Framer, giving clients total content control while retaining maximum speed." },
      { question: "How do you ensure fast load speeds?", answer: "We optimize asset delivery, implement sub-resource prefetching, utilize next-gen image compression, and host on edge CDNs." },
    ],
  },
  {
    id: "seo-aeo-geo",
    slug: "seo-aeo-geo",
    title: "SEO, AEO & GEO",
    subtitle: "Next-Gen AI Search & Generative Engine Optimization",
    shortDesc:
      "Optimising visibility across search engines, answer engines and AI-powered search experiences.",
    fullDesc:
      "Search is no longer just keywords — it is algorithmic answers. We optimize your brand's digital entity footprint to be cited as the primary authority by Perplexity, ChatGPT, Gemini, and Google SGE.",
    categoryTag: "Algorithmic Search",
    iconName: "SearchCheck",
    accentColor: "#00e5ff",
    deliverables: [
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
      "Enterprise Technical SEO & Architecture",
      "Entity & Knowledge Graph Structuring",
      "AI Overview & Citation Maximization",
    ],
    metrics: { label: "AI Citation Rate", value: "+380% Lift" },
    previewType: "ai",
    technologies: ["Schema.org JSON-LD", "Knowledge Graphs", "Vector Embeddings", "Semantic Indexing", "Google SGE", "Perplexity API"],
    process: [
      { step: "01", title: "Entity Footprint Audit", description: "Evaluating how LLMs and search engines parse and cite your brand entity." },
      { step: "02", title: "Structured Data Schema", description: "Injecting comprehensive JSON-LD knowledge graphs across all pages." },
      { step: "03", title: "Answer-Engine Content", description: "Structuring content for direct extraction by ChatGPT, Perplexity, and Gemini." },
      { step: "04", title: "Citation Tracking & GEO", description: "Monitoring generative engine citations and continuously refining topical authority." },
    ],
    capabilities: [
      { title: "Answer Engine Optimization (AEO)", desc: "Direct response architecture tailored for Perplexity, ChatGPT search, and AI assistants." },
      { title: "Generative Engine Optimization (GEO)", desc: "Semantic entity authority designed to win prominent inclusion in Google AI Overviews." },
      { title: "Technical Crawl Optimization", desc: "Eliminating crawl waste, optimizing indexation speed, and perfecting XML sitemaps." },
      { title: "Topical Authority Clustering", desc: "Interlinking comprehensive pillar resources that establish definitive subject leadership." },
    ],
    problemsWeSolve: [
      { problem: "Loss of Organic Traffic to AI Summaries", resolution: "We engineer structured Schema.org entity graphs ensuring Perplexity, ChatGPT, and Gemini cite your brand as primary authority." },
      { problem: "AI Hallucination & Erroneous Brand Data", resolution: "We disambiguate brand entities and publish verified knowledge graph vectors for algorithmic ingestion." },
      { problem: "Zero Visibility in Google AI Overviews", resolution: "We optimize content schemas for direct extraction by Google SGE and Generative Engine scrapers." },
      { problem: "Inability to Attribute AI Search Conversions", resolution: "We implement custom telemetry tracking generative engine referrals and synthesized AI citations." },
    ],
    relatedCaseStudySlugs: ["synthex-answer-engine-authority"],
    faqs: [
      { question: "What is the difference between SEO and AEO/GEO?", answer: "Traditional SEO targets ten blue links on Google. AEO and GEO optimize your content so generative AI models synthesize and cite your business directly in synthesized answers." },
      { question: "How long does it take to see results in AI search?", answer: "With structured entity data and verified schema markup, answer engines typically update citations within 30 to 60 days." },
    ],
  },
  {
    id: "graphic-branding",
    slug: "graphic-design-branding",
    title: "Graphic Design & Branding",
    subtitle: "Iconic Identity Systems & Visual Direction",
    shortDesc:
      "Brand identity, logos, marketing materials, print graphics and environmental graphics.",
    fullDesc:
      "A brand is the emotional residue of an experience. We craft comprehensive visual identity systems, bespoke design tokens, packaging, and brand guidelines that resonate across global markets.",
    categoryTag: "Brand Engineering",
    iconName: "Palette",
    accentColor: "#c084fc",
    deliverables: [
      "Brand Identity & Monumental Logos",
      "Marketing Materials & Pitch Decks",
      "Print Graphics & Packaging Systems",
      "Environmental & Signage Graphics",
      "Comprehensive Brand Design Guidelines",
    ],
    metrics: { label: "Brand Recall", value: "Top Decile" },
    previewType: "branding",
    technologies: ["Figma", "Illustrator", "Cinema 4D", "After Effects", "Blender", "Design Tokens"],
    process: [
      { step: "01", title: "Brand Discovery & Persona", description: "Uncovering your core ethos, aesthetic positioning, and market whitespace." },
      { step: "02", title: "Logomark & Monogram", description: "Architecting geometric symbols and bespoke typographic logotypes." },
      { step: "03", title: "Visual Design System", description: "Defining color palettes, typography scales, iconography, and spatial rules." },
      { step: "04", title: "Collateral & Brand Book", description: "Delivering production assets, pitch decks, social kits, and style guides." },
    ],
    capabilities: [
      { title: "Monumental Logotype Craft", desc: "Iconic marks designed for immediate memorability from 16px favicons to billboard scales." },
      { title: "Complete Design Tokens", desc: "Seamless export of brand tokens directly into CSS variables, Tailwind, and React themes." },
      { title: "3D Brand Artifacts", desc: "High-end 3D sculptural assets and animated monograms for digital flagships." },
      { title: "Comprehensive Brand Guidelines", desc: "Exhaustive style books detailing tone of voice, spatial hierarchy, and usage protocols." },
    ],
    problemsWeSolve: [
      { problem: "Forgettable, Inconsistent Brand Identities", resolution: "We architect monumental geometric monograms, bespoke logotypes, and timeless visual systems designed to endure." },
      { problem: "Designer-to-Developer Handoff Friction", resolution: "We export automated design tokens directly into production Tailwind CSS, React themes, and Figma libraries." },
      { problem: "Weak Investor & Market Distinction", resolution: "We elevate deep-tech and scale-up branding into tier-1 institutional standards that command attention." },
      { problem: "Brand Dilution Across Multi-Channel Assets", resolution: "We deliver an exhaustive 120-page digital brand book standardizing spatial rules, typography, and tone." },
    ],
    relatedCaseStudySlugs: ["vanguard-autonomous-systems-branding"],
    faqs: [
      { question: "What files do you deliver upon completion?", answer: "We deliver full vector packages (SVG, EPS, AI), web-optimized raster formats, 3D assets, Figma source files, and a comprehensive PDF brand guidelines book." },
      { question: "Can you rebrand an existing company?", answer: "Yes. We specialize in strategic brand evolutions that modernize legacy visual identities without destroying existing customer equity." },
    ],
  },
  {
    id: "social-ads-content",
    slug: "social-media-ads-content",
    title: "Social Media, Ads & Content",
    subtitle: "Performance Marketing & Algorithmic Storytelling",
    shortDesc:
      "Content creation, social media campaigns, paid advertising and retargeting.",
    fullDesc:
      "Transform attention into revenue. We produce high-velocity creative campaigns, data-backed ad variations, and organic content pipelines engineered for viral algorithmic distribution.",
    categoryTag: "Performance Growth",
    iconName: "Flame",
    accentColor: "#38bdf8",
    deliverables: [
      "High-Production Content Creation (Video & Static)",
      "Multi-Channel Social Media Campaigns",
      "Paid Advertising (Meta, LinkedIn, Google)",
      "High-Intent Retargeting Funnels",
      "Full-Funnel CAC/LTV Attribution Analytics",
    ],
    metrics: { label: "Average ROAS", value: "4.8x Return" },
    previewType: "growth",
    technologies: ["Meta Ads Manager", "LinkedIn Ads", "Google Ads", "TikTok Ads", "After Effects", "Premiere Pro", "Triple Whale"],
    process: [
      { step: "01", title: "Audience & Angle Strategy", description: "Identifying high-intent buyer cohorts, pain points, and viral hook themes." },
      { step: "02", title: "High-Velocity Production", description: "Shooting and editing motion graphics, 9:16 short-form video, and statics." },
      { step: "03", title: "Algorithmic Testing", description: "Deploying multi-variant creatives to isolate winning hooks and low CAC angles." },
      { step: "04", title: "Scale & Attribution", description: "Scaling budget into validated winners while maintaining target ROAS benchmarks." },
    ],
    capabilities: [
      { title: "Paid Media Management", desc: "Full-funnel campaign management across Meta, LinkedIn, Google Search, and YouTube." },
      { title: "Algorithmic Short-Form Video", desc: "Engineered 9:16 reels and TikTok formats designed to capture attention in 0.8 seconds." },
      { title: "Landing Page CRO Sprints", desc: "Direct pairing of ad creatives with dedicated, ultra-high conversion landing funnels." },
      { title: "First-Party Attribution", desc: "Precise tracking eliminating cookie degradation to surface true customer lifetime value." },
    ],
    problemsWeSolve: [
      { problem: "Skyrocketing Customer Acquisition Costs (CAC)", resolution: "We test high-velocity 3-second motion hooks paired directly with sub-second Next.js landing pages to systematically drive down CAC." },
      { problem: "Rapid Creative Ad Fatigue on Paid Social", resolution: "We maintain an ongoing agile creative production sprint delivering 30+ new static and video hooks monthly." },
      { problem: "iOS Tracking Loss & Inaccurate Attribution", resolution: "We integrate first-party attribution modeling (Triple Whale / server-side CAPI) to accurately trace customer LTV." },
      { problem: "Disconnect Between Ad Creative & Landing Pages", resolution: "We engineer dedicated, personalized landing page funnels that align with specific ad angles for maximum conversion." },
    ],
    relatedCaseStudySlugs: ["hyperion-algorithmic-acquisition"],
    faqs: [
      { question: "What ad spend budgets do you manage?", answer: "We typically partner with brands spending between $10,000 and $250,000+ monthly in paid acquisition across digital channels." },
      { question: "Do you handle creative production as well as media buying?", answer: "Yes. Our creative studio produces all video, copywriting, static assets, and landing pages directly integrated with media buying." },
    ],
  },
];
