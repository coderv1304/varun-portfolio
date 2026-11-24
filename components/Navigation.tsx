"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

const RESUME_HREF = "/Varun_Nair_Resume.pdf";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const updateNavigation = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY.current + 10) {
          setIsVisible(false); // scrolling down
        } else if (currentScrollY < lastScrollY.current - 10) {
          setIsVisible(true); // scrolling up
        }
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;

      // Active section detection
      const sections = ["hero", "work", "about", "notes", "contact"];
      const scrollPosition = currentScrollY + 250;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Layout reads in offsetTop force reflow — do them at most once per frame.
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateNavigation();
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll, trap focus, close on Escape, and restore focus on exit.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const drawer = drawerRef.current;
    const focusable = drawer?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    document.body.style.overflow = "hidden";
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        return;
      }
      if (event.key !== "Tab" || !focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      (previousFocus ?? menuButtonRef.current)?.focus();
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Work", href: "/#work", sectionId: "work" },
    { label: "About", href: "/#about", sectionId: "about" },
    { label: "Notes", href: "/#notes", sectionId: "notes" },
  ];

  return (
    <>
      <header
        className="navigation"
        style={{
          position: "fixed",
          top: "14px",
          left: "50%",
          transform: `translateX(-50%) translateY(${isVisible ? "0%" : "-120%"})`,
          width: "calc(100% - 32px)",
          maxWidth: "1550px",
          height: "76px",
          background: "#0c0b09",
          border: "1px solid #8e796340",
          borderRadius: "12px",
          padding: "0 clamp(12px, 2vw, 20px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 80,
          transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Left: Wordmark + Divider + Mono label */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            href="/"
            style={{
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "-0.5px",
              color: "var(--ink)",
              textDecoration: "none",
            }}
          >
            VARUN NAIR
          </Link>
          <div
            style={{
              width: "1px",
              height: "18px",
              background: "var(--line)",
            }}
            aria-hidden="true"
          />
          <span
            className="hidden md:inline-block"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "1.2px",
              color: "var(--muted)",
              textTransform: "uppercase",
            }}
          >
            PLATFORM / DEVOPS / SRE
          </span>
        </div>

        {/* Center / Right Links (desktop >=900px) */}
        <nav
          className="hidden min-[900px]:flex items-center"
          style={{ gap: "4px" }}
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname === "/" && activeSection === link.sectionId);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                style={{
                  fontSize: "12px",
                  fontWeight: 450,
                  letterSpacing: "0.1px",
                  color: isActive ? "#f0dfc7" : "var(--muted)",
                  padding: "14px 17px",
                  borderRadius: "7px",
                  textDecoration: "none",
                  transition: "background 0.2s ease, color 0.2s ease",
                  backgroundColor: isActive ? "#b99b7312" : "transparent",
                }}
                className="hover:bg-[#b99b7312] hover:text-[#f0dfc7]"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Far Right: Résumé (primary) + Let's talk (secondary) */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a
            href={RESUME_HREF}
            download
            aria-label="Download Varun Nair's résumé as a PDF"
            onClick={() => trackEvent("resume_download", { placement: "nav" })}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 18px",
              borderRadius: "999px",
              background: "var(--ink)",
              border: "1px solid var(--ink)",
              color: "#030303",
              fontSize: "12px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background 0.2s ease, border-color 0.2s ease",
              minHeight: "44px",
            }}
            className="hover:!bg-[#ff8c59] hover:!border-[#ff8c59]"
          >
            <span>Résumé</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
          </a>

          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "25px",
              padding: "12px 19px",
              borderRadius: "999px",
              border: "1px solid #4c4c4c",
              color: "var(--ink)",
              fontSize: "12px",
              fontWeight: 500,
              textDecoration: "none",
              transition: "all 0.2s ease",
              minHeight: "44px",
            }}
            className="hidden sm:inline-flex hover:border-[#ff8c59] hover:text-[#ff8c59]"
          >
            <span>Let&apos;s talk</span>
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
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>

          {/* Mobile menu trigger (<900px) */}
          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex min-[900px]:hidden items-center justify-center"
            style={{
              background: "transparent",
              border: "1px solid var(--line)",
              borderRadius: "8px",
              color: "var(--ink)",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "1px",
              padding: "8px 12px",
              minHeight: "44px",
              minWidth: "44px",
              cursor: "pointer",
            }}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (<900px) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          ref={drawerRef}
          style={{
            position: "fixed",
            inset: 0,
            background: "#030303",
            zIndex: 90,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "40px var(--gutter)",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            style={{
              position: "absolute",
              top: "24px",
              right: "var(--gutter)",
              background: "transparent",
              border: "1px solid var(--line)",
              borderRadius: "8px",
              color: "var(--ink)",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "1px",
              padding: "8px 12px",
              minHeight: "44px",
              minWidth: "44px",
              cursor: "pointer",
            }}
          >
            CLOSE
          </button>

          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <a
              href={RESUME_HREF}
              download
              onClick={() => {
                trackEvent("resume_download", { placement: "mobile_drawer" });
                setMobileMenuOpen(false);
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                borderRadius: "999px",
                background: "var(--ink)",
                color: "#030303",
                fontSize: "18px",
                fontWeight: 600,
                textDecoration: "none",
                minHeight: "56px",
              }}
            >
              <span>Download résumé (PDF)</span>
              <svg
                width="18"
                height="18"
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

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "24px",
                  fontWeight: 450,
                  color: "var(--ink)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--line)",
                  paddingBottom: "16px",
                  minHeight: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>{link.label}</span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--accent)",
                  }}
                >
                  ↗
                </span>
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "24px",
                fontWeight: 450,
                color: "var(--accent)",
                textDecoration: "none",
                minHeight: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "12px",
              }}
            >
              <span>Let&apos;s talk</span>
              <span style={{ fontSize: "18px" }}>↗</span>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
