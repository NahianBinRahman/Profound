import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach | Six-Phase Engineering Framework | Profound",
  description:
    "Explore Profound's battle-tested six-phase methodology: Discovery, Research & Strategy, Planning, Design, Development, and Deployment & Optimisation. Zero technical debt and guaranteed SLAs.",
  alternates: {
    canonical: "https://profound.agency/approach",
  },
  openGraph: {
    title: "Our Approach | Six-Phase Engineering Framework | Profound",
    description: "Battle-tested 6-stage engineering and design methodology.",
    url: "https://profound.agency/approach",
  },
};

export default function ApproachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

