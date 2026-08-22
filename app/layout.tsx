import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Varun Nair — DevOps / SRE / Platform Engineering",
  description:
    "Varun Nair — MCA student building a production-grade DevOps portfolio. Open to DevOps, DevSecOps, Cloud, MLOps and AIOps internships & full-time roles.",
  metadataBase: new URL("https://varunnair.dev"),
  openGraph: {
    title: "Varun Nair — DevOps / SRE / Platform Engineering",
    description:
      "MCA student building a production-grade DevOps portfolio. Open to DevOps, DevSecOps, Cloud, MLOps and AIOps roles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body className="bg-base text-ink font-sans antialiased selection:bg-blueprint/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
