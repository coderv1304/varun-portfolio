"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const links = [
  ["ABOUT", "/about"],
  ["PROJECTS", "/projects"],
  ["SKILLS", "/skills"],
  ["EXPERIENCE", "/experience"],
  ["BLOG", "/blog"],
  ["CONTACT", "/contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#020711]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link href="/" className="font-black tracking-tight">
          VARUN<span className="text-cyan-400">.DEV</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-xs font-semibold tracking-[0.18em] text-slate-400 transition hover:text-cyan-300"
            >
              {label}
            </Link>
          ))}
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-400/30 px-4 py-2 text-xs font-bold tracking-wider text-cyan-300 transition hover:bg-cyan-400/10"
          >
            RESUME
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#020711] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-bold tracking-[0.2em] text-slate-300"
              >
                {label}
              </Link>
            ))}
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold tracking-[0.2em] text-cyan-300"
            >
              RESUME
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
