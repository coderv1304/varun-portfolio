"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroArtifact from "./HeroArtifact";
import { site } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

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

        {/* Kicker — role line, below the name so it never crosses the portrait */}
        <span className="hero-kicker hero-fade">
          <span className="signal-text">{site.role}</span>
        </span>

        {/* Location + availability window */}
        <div className="hero-meta hero-fade">
          <span>{site.location}</span>
          <span className="hero-meta-sep" aria-hidden="true">
            /
          </span>
          <span>{site.availability}</span>
        </div>

        {/* Description, proof line, and action CTA buttons */}
        <div className="hero-description hero-fade">
          <p>{site.bio.description}</p>

          <p className="hero-proof">
            <span className="hero-proof-value">{site.proof.value}</span>
            <span>{site.proof.label}</span>
            <span className="hero-proof-source">{site.proof.source}</span>
          </p>

          <div className="hero-actions">
            <a
              href="/Varun_Nair_Resume.pdf"
              download
              className="pill-link"
              onClick={() =>
                trackEvent("resume_download", { placement: "hero" })
              }
            >
              <span>Download résumé (PDF)</span>
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
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
            </a>

            <a href="#work" className="text-link">
              <span>View selected work</span>
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
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </a>
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
        <span className="hidden sm:inline">BUILDING SINCE {site.startYear}</span>
        <span className="hero-edition">AN ONGOING EXPLORATION ↗</span>
      </div>
    </section>
  );
}
