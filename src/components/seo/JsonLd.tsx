export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://profound.agency/#organization",
    name: "Profound",
    legalName: "Profound Digital Engineering & Experience Agency",
    url: "https://profound.agency",
    logo: "https://profound.agency/logo.png",
    description:
      "Profound is a premier digital engineering and experience agency building enterprise software, resilient IT infrastructure, immersive web experiences, and algorithmic growth systems.",
    foundingDate: "2024",
    sameAs: [
      "https://twitter.com/profound_agency",
      "https://linkedin.com/company/profound-agency",
      "https://github.com/profound-agency",
      "https://dribbble.com/profound-agency",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Client Partnerships & New Business",
      email: "hello@profound.agency",
      availableLanguage: ["English"],
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://profound.agency/#service",
    name: "Profound",
    url: "https://profound.agency",
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "UK",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Core Digital Disciplines",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Software & SaaS Development",
            description: "Full-stack enterprise SaaS platforms, bespoke web apps, APIs, microservices, and database architecture.",
            url: "https://profound.agency/services/software-saas-development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IT Infrastructure & Cybersecurity",
            description: "Zero-trust network architecture, multi-cloud management, DevSecOps, and continuous penetration testing.",
            url: "https://profound.agency/services/it-infrastructure-cybersecurity",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Design & Development",
            description: "Performant flagship websites built with Next.js, WebGL/Three.js 3D physics, headless CMS, and responsive engineering.",
            url: "https://profound.agency/services/website-design-development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO, AEO & GEO",
            description: "Algorithmic search dominance across Google, Perplexity, ChatGPT Search, and generative AI answer engines.",
            url: "https://profound.agency/services/seo-aeo-geo",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Graphic Design & Branding",
            description: "Editorial visual identities, dimensional typography systems, motion design, and comprehensive brand guidelines.",
            url: "https://profound.agency/services/graphic-design-branding",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media, Ads & Content",
            description: "Omnichannel performance marketing, data-led paid acquisition, creative production, and revenue attribution.",
            url: "https://profound.agency/services/social-media-ads-content",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://profound.agency/#website",
    url: "https://profound.agency",
    name: "Profound",
    publisher: {
      "@id": "https://profound.agency/#organization",
    },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

