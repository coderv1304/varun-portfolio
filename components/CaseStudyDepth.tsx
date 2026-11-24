"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const MILESTONES = [25, 50, 75, 100];

/**
 * Reports case-study scroll depth once per milestone. Uses a passive scroll
 * listener with requestAnimationFrame, so it never blocks scrolling and costs
 * one read per frame at most.
 */
export default function CaseStudyDepth({ slug }: { slug: string }) {
  useEffect(() => {
    const reported = new Set<number>();
    let frame = 0;

    const measure = () => {
      frame = 0;

      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) return;

      const depth = Math.min(100, Math.round((window.scrollY / max) * 100));

      for (const milestone of MILESTONES) {
        if (depth >= milestone && !reported.has(milestone)) {
          reported.add(milestone);
          trackEvent("case_study_depth", { slug, depth: milestone });
        }
      }

      if (reported.size === MILESTONES.length) {
        window.removeEventListener("scroll", onScroll);
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    measure();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [slug]);

  return null;
}
