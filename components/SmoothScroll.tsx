"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const motionPreference = localStorage.getItem("motion-preference");
    const isMotionOff = motionPreference === "off" || isReducedMotion;

    if (isMotionOff) {
      document.documentElement.setAttribute("data-motion", "off");
      return;
    } else {
      document.documentElement.setAttribute("data-motion", "on");
    }

    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 1,
      syncTouch: false,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
