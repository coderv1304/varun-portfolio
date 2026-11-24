"use client";

import { useEffect, useRef } from "react";

const TOTAL = 10_000;
const GRID = 100;
const FALSE_ALERTS = 73; // round(10_000 × 0.725% FPR)
const ATTACKS = 1; // 10_000 × 0.01% prevalence

/** Deterministic shuffle so the grid is stable between renders. */
function shuffledIndices(total: number, seed: number) {
  const values = Array.from({ length: total }, (_, index) => index);
  let state = seed;
  for (let i = total - 1; i > 0; i -= 1) {
    state = (state * 1664525 + 1013904223) % 4294967296;
    const j = state % (i + 1);
    [values[i], values[j]] = [values[j], values[i]];
  }
  return values;
}

export default function PrevalenceGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let drawn = false;

    const draw = () => {
      if (drawn) return;
      drawn = true;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const size = 420;
      canvas.width = size * dpr;
      canvas.height = size * dpr;

      const context = canvas.getContext("2d");
      if (!context) return;

      context.scale(dpr, dpr);
      context.clearRect(0, 0, size, size);

      const cell = size / GRID;
      const radius = Math.max(1, cell * 0.28);

      const order = shuffledIndices(TOTAL, 20260809);
      const falseAlertSet = new Set(order.slice(0, FALSE_ALERTS));
      const attackIndex = order[FALSE_ALERTS];

      for (let index = 0; index < TOTAL; index += 1) {
        const row = Math.floor(index / GRID);
        const column = index % GRID;
        const cx = column * cell + cell / 2;
        const cy = row * cell + cell / 2;

        if (index === attackIndex) {
          context.fillStyle = "#f1eee8";
        } else if (falseAlertSet.has(index)) {
          context.fillStyle = "#c8553d";
        } else {
          context.fillStyle = "#38352f";
        }

        context.beginPath();
        context.arc(cx, cy, index === attackIndex ? radius * 1.9 : radius, 0, Math.PI * 2);
        context.fill();
      }
    };

    if (typeof IntersectionObserver === "undefined") {
      draw();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          draw();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="case-figure">
      <div className="case-figure-head">
        <span className="case-figure-title">
          FIG. 2.2 — 10,000 flows at 0.01% prevalence
        </span>
        <span className="case-figure-sub">1 attack · 73 false alerts</span>
      </div>

      <div className="prevalence-wrap">
        <canvas
          ref={canvasRef}
          className="prevalence-canvas"
          aria-hidden="true"
        />

        <dl className="prevalence-legend">
          <div>
            <dt>
              <span className="legend-dot legend-dot--ink" aria-hidden="true" />
              Attack traffic
            </dt>
            <dd>{ATTACKS} flow in {TOTAL.toLocaleString("en-IN")}</dd>
          </div>
          <div>
            <dt>
              <span className="legend-dot legend-dot--alert" aria-hidden="true" />
              False alerts
            </dt>
            <dd>
              ~{FALSE_ALERTS} flows at the measured 0.725% false-positive rate
            </dd>
          </div>
          <div>
            <dt>
              <span className="legend-dot legend-dot--muted" aria-hidden="true" />
              Benign traffic
            </dt>
            <dd>{(TOTAL - FALSE_ALERTS - ATTACKS).toLocaleString("en-IN")} flows</dd>
          </div>
          <div>
            <dt>Expected true detections</dt>
            <dd>
              ~0.6 per 10,000 flows at 57.94% recall — most windows show none
            </dd>
          </div>
        </dl>
      </div>

      <figcaption>
        Dataset: CIC-IDS-2017 · 10,000-flow illustration · source: NetShield
        measured recall 57.94% and false-positive rate 0.725%. Dot placement is
        illustrative; counts are derived from those two rates.
      </figcaption>
    </figure>
  );
}
