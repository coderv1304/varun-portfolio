"use client";

import { useEffect, useState } from "react";

export default function MotionToggle({ inline = false }: { inline?: boolean }) {
  const [motionOn, setMotionOn] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("motion-preference");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const initialOn = saved ? saved === "on" : !prefersReduced;
    setMotionOn(initialOn);
    document.documentElement.setAttribute("data-motion", initialOn ? "on" : "off");
  }, []);

  const toggleMotion = () => {
    const nextState = !motionOn;
    setMotionOn(nextState);
    const value = nextState ? "on" : "off";
    localStorage.setItem("motion-preference", value);
    document.documentElement.setAttribute("data-motion", value);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleMotion}
      className={inline ? "motion-toggle motion-toggle-inline" : "motion-toggle"}
      aria-label={`Toggle animation motion. Currently ${motionOn ? "ON" : "OFF"}`}
      title="Toggle animation motion"
    >
      MOTION {motionOn ? "ON" : "OFF"}
    </button>
  );
}
