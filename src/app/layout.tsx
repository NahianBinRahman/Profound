import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { JsonLd } from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfairSerif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Profound | Premium Digital Engineering & Experience Agency",
  description:
    "We design, build and accelerate digital experiences that help ambitious businesses move forward. Software, Infrastructure, Websites, AEO & Growth.",
  keywords: [
    "Digital Agency",
    "Software Development",
    "SaaS Platform Engineering",
    "IT Infrastructure",
    "Cybersecurity",
    "Website Design & Development",
    "SEO AEO GEO",
    "AI Search Optimization",
    "Branding",
    "Next.js Agency",
  ],
  authors: [{ name: "Profound Engineering & Experience Studio" }],
  creator: "Profound",
  publisher: "Profound",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/assets/brand/profound-favicon.svg", type: "image/svg+xml" },
      { url: "/assets/brand/profound-favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/assets/brand/profound-favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://profound.agency",
    title: "Profound | Premium Digital Engineering & Experience Agency",
    description:
      "Beyond Digital. Into Possibility. We engineer high-velocity digital experiences, software platforms, and resilient infrastructure.",
    siteName: "Profound",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profound | Premium Digital Engineering & Experience Agency",
    description:
      "Beyond Digital. Into Possibility. High-velocity digital engineering and immersive experience design.",
    creator: "@profound_agency",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfairSerif.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-[#050608] text-[#f8fafc] font-sans antialiased selection:bg-[#00e5ff] selection:text-[#050608] min-h-screen">
        <JsonLd />
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
