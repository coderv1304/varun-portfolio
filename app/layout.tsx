import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";

export const metadata: Metadata = {
  title: "Varun Nair | Infrastructure, Security & Cloud",
  description:
    "Varun Nair's portfolio: infrastructure, cloud, automation, and security engineering—with a little music on the side.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GridBackground />
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}