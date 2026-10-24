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
          VARUN NAIR
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
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
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

        <a href={site.resume} target="_blank" rel="noreferrer" onClick={closeMenu}>
          RESUME ↗
        </a>
      </nav>
    </header>
  );
}