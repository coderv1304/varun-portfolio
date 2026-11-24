"use client";

import { useId, useState } from "react";

const RECALL = 0.5794;
const FPR = 0.00725;
const MIN_P = 0.0001;
const MAX_P = 0.2505;

const MEASURED = [
  { p: MAX_P, precision: 96.39, label: "25.05%" },
  { p: 0.001, precision: 7.4, label: "0.1%" },
  { p: MIN_P, precision: 0.79, label: "0.01%" },
];

function precisionAt(prevalence: number) {
  const tp = RECALL * prevalence;
  return (tp / (tp + FPR * (1 - prevalence))) * 100;
}

interface ChartProps {
  compact: boolean;
}

function Chart({ compact }: ChartProps) {
  const id = useId();
  const width = compact ? 380 : 780;
  const height = compact ? 320 : 360;
  const pad = compact
    ? { top: 30, right: 14, bottom: 48, left: 42 }
    : { top: 30, right: 28, bottom: 54, left: 56 };

  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;

  const xMin = Math.log10(MIN_P);
  const xMax = Math.log10(MAX_P);

  const x = (p: number) =>
    pad.left + ((Math.log10(p) - xMin) / (xMax - xMin)) * plotW;
  const y = (value: number) => pad.top + (1 - value / 100) * plotH;

  const samples = Array.from({ length: 160 }, (_, index) => {
    const t = index / 159;
    const p = 10 ** (xMin + t * (xMax - xMin));
    return { px: x(p), py: y(precisionAt(p)) };
  });

  const path = samples
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.px.toFixed(2)} ${point.py.toFixed(2)}`)
    .join(" ");

  const xTicks = compact
    ? [
        { p: 0.0001, label: "0.01%" },
        { p: 0.001, label: "0.1%" },
        { p: 0.01, label: "1%" },
        { p: MAX_P, label: "25%" },
      ]
    : [
        { p: 0.0001, label: "0.01%" },
        { p: 0.001, label: "0.1%" },
        { p: 0.01, label: "1%" },
        { p: 0.1, label: "10%" },
        { p: MAX_P, label: "25%" },
      ];

  const yTicks = compact ? [0, 50, 100] : [0, 25, 50, 75, 100];
  const fontSize = compact ? 11 : 12;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      role="img"
      aria-labelledby={`${id}-title ${id}-desc`}
      style={{ display: "block", overflow: "visible" }}
    >
      <title id={`${id}-title`}>
        Precision versus attack prevalence for NetShield
      </title>
      <desc id={`${id}-desc`}>
        Precision falls from 96.39% at 25.05% prevalence to 7.40% at 0.1% and
        0.79% at 0.01%, using measured recall of 57.94% and a false-positive
        rate of 0.725%.
      </desc>

      <g style={{ fontFamily: "var(--font-mono)" }}>

      {yTicks.map((tick) => (
        <g key={tick}>
          <line
            x1={pad.left}
            x2={pad.left + plotW}
            y1={y(tick)}
            y2={y(tick)}
            stroke="#ccdcf5"
            strokeOpacity={tick === 0 ? 0.24 : 0.1}
          />
          <text
            x={pad.left - 10}
            y={y(tick) + 4}
            textAnchor="end"
            fontFamily="inherit"
            fontSize={fontSize}
            fill="#aaa9a4"
          >
            {tick}%
          </text>
        </g>
      ))}

      {xTicks.map((tick) => (
        <g key={tick.label}>
          <line
            x1={x(tick.p)}
            x2={x(tick.p)}
            y1={pad.top}
            y2={pad.top + plotH}
            stroke="#ccdcf5"
            strokeOpacity={0.08}
          />
          <text
            x={x(tick.p)}
            y={height - pad.bottom + 20}
            textAnchor="middle"
            fontFamily="inherit"
            fontSize={fontSize}
            fill="#aaa9a4"
          >
            {tick.label}
          </text>
        </g>
      ))}

      <path d={path} fill="none" stroke="#ff8c59" strokeWidth={2} />

      {MEASURED.map((point, index) => {
        const cx = x(point.p);
        const cy = y(point.precision);
        const isRight = index === 0;
        const isLeft = index === 2;
        return (
          <g key={point.label}>
            <circle cx={cx} cy={cy} r={4.5} fill="#ff8c59" />
            <circle cx={cx} cy={cy} r={9} fill="none" stroke="#ff8c59" strokeOpacity={0.35} />
            <text
              x={isRight ? cx - 8 : isLeft ? cx + 10 : cx + 8}
              y={isLeft ? cy - 24 : cy - 12}
              textAnchor={isRight ? "end" : "start"}
              fontFamily="inherit"
              fontSize={compact ? 12 : 13}
              fill="#f1eee8"
            >
              {point.precision.toFixed(2)}%
            </text>
          </g>
        );
      })}

      <text
        x={pad.left + plotW / 2}
        y={height - 6}
        textAnchor="middle"
        fontSize={compact ? 10 : 11}
        fill="#8f8a83"
        letterSpacing="1"
      >
        ATTACK PREVALENCE
      </text>
      </g>
    </svg>
  );
}

export default function PrecisionCurve() {
  const [open, setOpen] = useState(false);
  const tableId = useId();

  return (
    <figure className="case-figure">
      <div className="case-figure-head">
        <span className="case-figure-title">
          FIG. 2.1 — Precision vs. prevalence
        </span>
        <span className="case-figure-sub">Random Forest · CIC-IDS-2017</span>
      </div>

      <div className="chart-desktop">
        <Chart compact={false} />
      </div>
      <div className="chart-mobile">
        <Chart compact />
      </div>

      <figcaption>
        Dataset: CIC-IDS-2017 · test partition 1,162,065 flows, 25.05% positive ·
        source: NetShield benchmark and prevalence evaluation. Precision = (recall
        × prevalence) ÷ (recall × prevalence + FPR × (1 − prevalence)), with recall
        57.94% and FPR 0.725% at the seed-42 operating point.
      </figcaption>

      <button
        type="button"
        className="case-table-toggle"
        aria-expanded={open}
        aria-controls={tableId}
        onClick={() => setOpen((value) => !value)}
        style={{ marginTop: "14px" }}
      >
        {open ? "Hide data table" : "View data table"}
      </button>

      {open && (
        <table className="case-data-table" id={tableId}>
          <caption className="case-figure-sub" style={{ textAlign: "left", paddingBottom: "8px" }}>
            Precision at measured prevalence points
          </caption>
          <thead>
            <tr>
              <th scope="col">Prevalence</th>
              <th scope="col">Precision</th>
              <th scope="col">Reading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>25.05%</td>
              <td>96.39%</td>
              <td>Benchmark-like balance</td>
            </tr>
            <tr>
              <td>0.1%</td>
              <td>7.40%</td>
              <td>Rare attacks</td>
            </tr>
            <tr>
              <td>0.01%</td>
              <td>0.79%</td>
              <td>One attack in 10,000 flows</td>
            </tr>
          </tbody>
        </table>
      )}
    </figure>
  );
}
