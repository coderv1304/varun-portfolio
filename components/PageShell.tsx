import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-screen max-w-7xl px-5 pb-24 pt-32">{children}</main>
      <Footer />
    </>
  );
}
