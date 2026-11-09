import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Works & Architecture Concepts | Profound",
  description:
    "Explore our portfolio of bespoke SaaS software platforms, zero-trust cloud infrastructure, high-velocity Next.js flagships, and brand identity systems.",
  alternates: {
    canonical: "https://profound.agency/work",
  },
  openGraph: {
    title: "Selected Works | Profound Digital Engineering & Experience Studio",
    description: "Curated portfolio of digital experiences built with purpose, precision and perspective.",
    url: "https://profound.agency/work",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

