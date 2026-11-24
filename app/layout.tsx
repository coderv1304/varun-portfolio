import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd from "@/components/JsonLd";
import ReferralGreeting from "@/components/ReferralGreeting";
import { Analytics } from "@vercel/analytics/next";
import { personSchema, websiteSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
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
  ...buildMetadata({
    title: "Varun Nair | DevOps, SRE & Platform Intern, Mumbai",
    description:
      "Platform, DevOps and SRE intern in Mumbai, available Dec 2026 to Jun 2027. Six infrastructure case studies with methodology and stated limits.",
    path: "/",
  }),
  metadataBase: new URL(site.url),
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
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
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <JsonLd data={{ "@graph": [personSchema(), websiteSchema()] }} />
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

          {/* Floating pill navigation */}
          <Navigation />

          {/* Visible referral greeting, only when ?ref= is present */}
          <ReferralGreeting />

          {children}

          {/* Footer */}
          <Footer />

          {/* Vercel Web Analytics only exists on a Vercel deployment; gating it
              keeps local Lighthouse runs free of a 404 console error. */}
          {process.env.VERCEL ? <Analytics /> : null}
        </SmoothScroll>
      </body>
    </html>
  );
}
