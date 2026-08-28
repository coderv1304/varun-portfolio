"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function BootScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("varun-boot-seen");
    if (seen) {
      setVisible(false);
      return;
    }

    const started = Date.now();
    const timer = window.setInterval(() => {
      const elapsed = Date.now() - started;
      const next = Math.min(100, Math.round((elapsed / 1900) * 100));
      setProgress(next);

      if (next >= 100) {
        window.clearInterval(timer);
        sessionStorage.setItem("varun-boot-seen", "1");
        window.setTimeout(() => setVisible(false), 450);
      }
    }, 30);

    return () => window.clearInterval(timer);
  }, []);

  if (!visible) return null;

  const status =
    progress < 30
      ? "INITIALIZING"
      : progress < 60
        ? "MOUNTING PROJECTS"
        : progress < 90
          ? "CONNECTING CLOUD"
          : progress < 100
            ? "STARTING PORTFOLIO"
            : "READY";

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020711]"
    >
      <div className="absolute inset-0 grid-bg opacity-70" />

      <div className="relative flex w-full max-w-xl flex-col items-center px-6">
        <div className="relative mb-14 h-64 w-64">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border border-cyan-400/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute inset-12 rounded-full border border-violet-400/30"
          />
          <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 border border-cyan-400/60 bg-gradient-to-br from-violet-500/40 to-cyan-400/30 shadow-[0_0_60px_rgba(34,211,238,0.25)]" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.span
              key={i}
              animate={{ rotate: 360 }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2,
              }}
              className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]"
              style={{
                transformOrigin: `${70 + i * 5}px 0`,
              }}
            />
          ))}
        </div>

        <div className="mb-8 text-center text-4xl font-black tracking-tight">
          VARUN<span className="text-cyan-400">.DEV</span>
        </div>

        <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur-xl">
          <div className="mb-4 flex items-center justify-between font-mono text-sm">
            <span className="tracking-[0.22em] text-slate-400">{status}</span>
            <span className="text-lg font-bold text-cyan-300">{progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.08 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
