"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:pt-24">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
        className="font-mono text-xs uppercase tracking-[0.3em] text-blueprint"
      >
        // sre &amp; platform engineering
      </motion.p>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={1}
        className="mt-4 max-w-3xl font-mono text-4xl font-bold leading-tight text-ink text-glow sm:text-5xl md:text-6xl"
      >
        Varun Nair builds systems{" "}
        <span className="text-blueprint">that don&apos;t fall over</span>{" "}
        at 3 AM.
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={2}
        className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
      >
        MCA student at VESIT, Mumbai, building a hands-on DevOps portfolio from
        the ground up — hardened Bash tooling, containerized services with
        real CI/CD, and ML-based anomaly detection. I test the failure paths,
        not just the happy ones.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={3}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <Link
          href="/contact"
          className="rounded-sm bg-blueprint px-5 py-3 font-mono text-sm font-medium text-base transition-transform hover:-translate-y-0.5 hover:bg-blueprint/90"
        >
          get in touch →
        </Link>
        <a
          href="#projects"
          className="rounded-sm border border-grid px-5 py-3 font-mono text-sm text-muted transition-colors hover:border-blueprint/40 hover:text-ink"
        >
          view projects
        </a>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={4}
        className="mt-16 grid grid-cols-2 gap-4 border-t border-grid pt-8 sm:grid-cols-4"
      >
        {[
          { label: "CGPA (MCA, sem 2)", value: "8.5" },
          { label: "Bash scripts hardened", value: "05" },
          { label: "CI/CD pipelines shipped", value: "04" },
          { label: "Portfolio projects", value: "02/06" },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="font-mono text-2xl font-bold text-ink sm:text-3xl">
              {stat.value}
            </div>
            <div className="mt-1 text-xs text-faint">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
