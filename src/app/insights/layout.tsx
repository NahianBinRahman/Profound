import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Technical Perspectives | Profound",
  description:
    "Engineering research, architectural patterns, generative search strategies (AEO/GEO), and digital brand essays authored by Profound's practice directors.",
  alternates: {
    canonical: "https://profound.agency/insights",
  },
  openGraph: {
    title: "Insights & Technical Perspectives | Profound Agency",
    description: "Deep-dives into modern software architecture, AEO, cybersecurity, and experience craft.",
    url: "https://profound.agency/insights",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

