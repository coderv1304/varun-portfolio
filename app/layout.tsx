import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";

export const metadata: Metadata = {
  title: "Varun Nair | DevOps • Cloud • DevSecOps",
  description:
    "Portfolio of Varun Nair — DevOps, Cloud, DevSecOps, MLOps and AIOps.",
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

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}