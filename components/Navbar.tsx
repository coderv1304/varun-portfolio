"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="logo" onClick={closeMenu}>
          VARUN<span>.DEV</span>
        </Link>

        <nav className="nav-links">
          <Link href="/about">ABOUT</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="/skills">SKILLS</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>

        <a
          href={site.resume}
          target="_blank"
          rel="noreferrer"
          className="nav-resume"
        >
          RESUME
        </a>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          MENU
        </button>
      </div>

      {open && (
        <nav
          style={{
            display: "grid",
            gap: "18px",
            padding: "20px 24px",
            borderTop: "1px solid var(--border)",
          }}
        >
          <Link href="/about" onClick={closeMenu}>
            ABOUT
          </Link>

          <Link href="/projects" onClick={closeMenu}>
            PROJECTS
          </Link>

          <Link href="/skills" onClick={closeMenu}>
            SKILLS
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            CONTACT
          </Link>
        </nav>
      )}
    </header>
  );
}