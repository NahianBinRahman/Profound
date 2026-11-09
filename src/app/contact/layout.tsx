import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries | Have an idea? Let's make it happen | Profound",
  description:
    "Have an idea? Let's make it happen. Connect with Profound's lead software architects and creative directors. Submit your project brief to receive an itemized proposal within 24 hours.",
  alternates: {
    canonical: "https://profound.agency/contact",
  },
  openGraph: {
    title: "Contact Profound | Have an idea? Let's make it happen.",
    description: "Submit your project brief to assemble an elite multi-disciplinary squad.",
    url: "https://profound.agency/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

