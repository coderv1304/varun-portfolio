"use client";

import { useEffect } from "react";

/**
 * Reveals case-study sections on first view. Content is visible by default, so
 * a failed script or a crawler never sees a blank section. Motion is transform
 * and opacity only, and is skipped entirely when motion is off.
 */
export default function CaseStudyReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stored = (() => {
      try {
        return window.localStorage.getItem("motion-preference");
      } catch {
        return null;
      }
    })();
    if (reduced || stored === "off" || root.getAttribute("data-motion") === "off") return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".case-shell .case-section"),
    );
    if (!sections.length) return;

    const viewport = window.innerHeight;
    const pending = sections.filter(
      (section) => section.getBoundingClientRect().top > viewport * 0.92,
    );

    if (!pending.length) return;

    for (const section of pending) section.dataset.reveal = "pending";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target as HTMLElement;
          target.dataset.reveal = "in";
          observer.unobserve(target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    for (const section of pending) observer.observe(section);

    // Safety net for a background tab, where intersection callbacks may not be
    // delivered: reveal everything rather than leaving sections invisible.
    const fallback = window.setTimeout(() => {
      if (document.visibilityState !== "hidden") return;
      for (const section of pending) {
        if (section.dataset.reveal === "pending") section.dataset.reveal = "in";
      }
    }, 2500);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
      for (const section of pending) delete section.dataset.reveal;
    };
  }, []);

  return null;
}
