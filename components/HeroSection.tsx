"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import HeroArtifact from "./HeroArtifact";
import { site } from "@/lib/content";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const revealLineRef = useRef<HTMLSpanElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMotionOff = document.documentElement.getAttribute("data-motion") === "off";
    if (isMotionOff) return;

    const ctx = gsap.context(() => {
      // H1 Reveal upward
      if (revealLineRef.current) {
        gsap.fromTo(
          revealLineRef.current,
          { y: "110%" },
          {
            y: "0%",
            duration: 1.1,
            ease: "cubic-bezier(0.16, 1, 0.3, 1)",
          }
        );
      }

      // Kicker, description, actions reveal
      const items = elementsRef.current?.querySelectorAll(".hero-fade");
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.09,
            delay: 0.25,
            ease: "power2.out",
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={heroRef} className="hero" aria-label="Hero Introduction">
      {/* 1. Vertical grid backdrop */}
      <div className="hero-grid" aria-hidden="true" />

      {/* 2. Hero portrait signal artifact (centered, behind title) */}
      <HeroArtifact />

      {/* 3. Topline */}
      <div className="hero-topline">
        <span>
          <i className="live-dot" aria-hidden="true" /> ENGINEER. BUILDER. AUTOMATOR.
        </span>
        <span className="hidden sm:inline">BASED IN MUMBAI · THINKING IN SYSTEMS</span>
      </div>

      {/* 4. Hero Content (Centered, layered over lower portion of portrait) */}
      <div ref={elementsRef} className="hero-content">
        {/* H1: Huge display typography */}
        <h1>
          <span className="line-mask">
            <span ref={revealLineRef} className="reveal-line">
              Varun <em>Nair</em>
            </span>
          </span>
        </h1>

        {/* Kicker — sits below the name so it never crosses the portrait */}
        <span className="hero-kicker hero-fade">
          <span className="signal-text">{site.bio.kicker}</span>
        </span>

        {/* Description & Action CTA Buttons */}
        <div className="hero-description hero-fade">
          <p>
            I build secure, observable infrastructure —
            <br className="desktop-break" />
            and the automation that keeps it running.
          </p>

          <div className="hero-actions">
            <a href="#work" className="pill-link">
              <span>Explore my work</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </a>

            <Link href="/contact" className="text-link">
              <span>Start a conversation</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* 5. Side note (editorial mono column) */}
      <div className="hero-side-note">
        <span>01 / PRESENCE</span>
        <span>
          INFRASTRUCTURE
          <br />
          SECURITY
          <br />
          AUTOMATION
        </span>
      </div>

      {/* 6. Bottom bar */}
      <div className="hero-bottom">
        <a href="#about">
          <span className="scroll-line" aria-hidden="true" />
          <span>SCROLL TO DISCOVER</span>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </a>
        <span className="hidden sm:inline">BUILDING SINCE 2024</span>
        <span className="hero-edition">AN ONGOING EXPLORATION ↗</span>
      </div>
    </section>
  );
}
