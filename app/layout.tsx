import type { Metadata } from "next";
import "./globals.css";
import { GridBackground } from "@/components/GridBackground";

export const metadata: Metadata = {
  title: "Varun Nair | DevOps • Cloud • DevSecOps",
  description:
    "Portfolio of Varun Nair — MCA student at VESIT Mumbai focused on DevOps, DevSecOps, Cloud, MLOps and AIOps.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <GridBackground />
        {children}
      </body>
    </html>
  );
}
