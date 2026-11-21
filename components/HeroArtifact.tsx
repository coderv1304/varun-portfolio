"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroArtifact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const motionPreference = localStorage.getItem("motion-preference");
    const isMotionOff =
      motionPreference === "off" ||
      document.documentElement.getAttribute("data-motion") === "off";
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (isMotionOff || isReduced || !hasFinePointer) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = 0;

    // Write the transform straight to the DOM instead of re-rendering React on
    // every frame, and stop the loop once the pointer-driven offset settles.
    const updateParallax = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      const settled =
        Math.abs(targetX - currentX) < 0.05 && Math.abs(targetY - currentY) < 0.05;

      if (settled) {
        currentX = targetX;
        currentY = targetY;
      }

      el.style.transform = `translate3d(calc(-50% + ${currentX.toFixed(2)}px), ${currentY.toFixed(
        2
      )}px, 0)`;

      rafId = settled ? 0 : requestAnimationFrame(updateParallax);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 12;
      targetY = (e.clientY / innerHeight - 0.5) * 8;
      if (!rafId) rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
      el.style.transform = "";
    };
  }, []);

  return (
    <div ref={containerRef} className="artifact-fallback" aria-hidden="true">
      <Image
        src="/images/varun-hero.webp"
        alt=""
        width={1000}
        height={1075}
        priority
        sizes="(max-width: 700px) 84vw, (max-width: 1200px) 520px, 640px"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center bottom",
        }}
      />
    </div>
  );
}
