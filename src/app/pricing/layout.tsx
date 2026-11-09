import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment Tiers & Interactive Scope Estimator | Profound",
  description:
    "Transparent, itemized pricing tiers and interactive project cost estimator. Calculate sprint investment for software development, IT infrastructure, websites, and growth.",
  alternates: {
    canonical: "https://profound.agency/pricing",
  },
  openGraph: {
    title: "Pricing & Scope Estimator | Profound Agency",
    description: "Itemized investment tiers and interactive cost calculation for enterprise digital builds.",
    url: "https://profound.agency/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

