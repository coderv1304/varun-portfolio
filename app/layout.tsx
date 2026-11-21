import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import MotionToggle from "@/components/MotionToggle";
import { site } from "@/lib/content";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Varun Nair | Infrastructure, Security & Cloud",
  description:
    "DevOps, cloud, infrastructure and security engineering — systems, automation and AI operations.",
  metadataBase: new URL("https://varun-portfolio-rouge.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Varun Nair | Infrastructure, Security & Cloud",
    description:
      "DevOps, cloud, infrastructure and security engineering — systems, automation and AI operations.",
    locale: "en_IN",
    type: "website",
    siteName: "Varun Nair Portfolio",
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Varun Nair",
    jobTitle: "Infrastructure & Security Engineer",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "VESIT",
    },
    knowsAbout: [
      "DevOps",
      "Cloud",
      "Kubernetes",
      "DevSecOps",
      "AIOps",
      "Linux",
      "Terraform",
      "Observability",
    ],
    sameAs: [
      "https://github.com/coderv1304",
      "https://www.linkedin.com/in/connectvarun13",
      "https://varun-nair-13.hashnode.dev/",
    ],
    url: "https://varun-portfolio-rouge.vercel.app",
    email: site.email,
  };

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>
          {/* Skip link first in DOM */}
          <a className="skip-link" href="#main">
            Skip to main content
          </a>

          {/* Scroll progress bar */}
          <ScrollProgress />

          {/* Scene backdrop */}
          <div className="scene-backdrop" aria-hidden="true" />

          {/* Motion toggle fixed bottom-left */}
          <MotionToggle />

          {/* Floating pill navigation */}
          <Navigation />

          {children}

          {/* Footer */}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
