"use client";

import { useEffect, useRef, useState } from "react";

interface AgentStep {
  label: string;
  detail: string;
  gate?: boolean;
}

const STEPS: AgentStep[] = [
  {
    label: "Alert received",
    detail: "Prometheus forwards the firing alert to the agent with its labels and window.",
  },
  {
    label: "Investigate",
    detail:
      "Read-only tools query Prometheus, Loki, runbooks, and Kubernetes state. The agent cannot mutate anything.",
  },
  {
    label: "Propose remediation",
    detail:
      "The agent selects one of three allowlisted verbs — restart, undo, or scale — and builds a concrete action payload.",
  },
  {
    label: "Server-side dry run",
    detail: "The policy service validates the action against the API server before approval is requested.",
  },
  {
    label: "Human approval",
    detail:
      "An operator approves the exact payload. The approval is bound to the action's SHA-256 hash.",
    gate: true,
  },
  {
    label: "Execute",
    detail:
      "The policy service re-hashes the action, confirms the approval still matches, and applies it with the write identity.",
  },
  {
    label: "Audit",
    detail: "Evidence, action, approver, and result are stored in PostgreSQL with pgvector embeddings.",
  },
];

export default function AgentLoop() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!playing) return;

    timer.current = setInterval(() => {
      setActive((current) => {
        if (current >= STEPS.length - 1) {
          setPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, 1500);

    return () => {
      if (timer.current) clearInterval(timer.current);
      timer.current = null;
    };
  }, [playing]);

  const current = STEPS[active];

  return (
    <figure className="case-figure">
      <div className="case-figure-head">
        <span className="case-figure-title">FIG. 3.1 — Agent loop with approval gate</span>
        <span className="case-figure-sub">Python · LangGraph · read-only tools</span>
      </div>

      <div className="agent-loop">
        <ol className="agent-steps">
          {STEPS.map((step, index) => {
            const state = index < active ? "done" : index === active ? "active" : "pending";
            return (
              <li className="agent-step" data-state={state} key={step.label}>
                <span className="agent-step-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <div className="agent-step-label">{step.label}</div>
                  <p className="agent-step-detail">{step.detail}</p>
                  {step.gate && <span className="agent-gate">Human approval required</span>}
                </div>
              </li>
            );
          })}
        </ol>

        <div className="agent-controls" role="group" aria-label="Agent loop playback">
          <button
            type="button"
            className="case-table-toggle"
            onClick={() => {
              setPlaying(false);
              setActive((value) => Math.max(0, value - 1));
            }}
            disabled={active === 0}
          >
            ← Back
          </button>
          <button
            type="button"
            className="case-table-toggle"
            onClick={() => {
              if (active === STEPS.length - 1) setActive(0);
              setPlaying((value) => !value);
            }}
          >
            {playing ? "Pause" : active === STEPS.length - 1 ? "Replay" : "Play"}
          </button>
          <button
            type="button"
            className="case-table-toggle"
            onClick={() => {
              setPlaying(false);
              setActive((value) => Math.min(STEPS.length - 1, value + 1));
            }}
            disabled={active === STEPS.length - 1}
          >
            Step →
          </button>
        </div>

        <div className="agent-transcript">
          <div className="case-figure-sub" style={{ marginBottom: "10px" }}>
            Transcript · step {active + 1} of {STEPS.length}
          </div>
          <p aria-live="polite" className="agent-live">
            {String(active + 1).padStart(2, "0")} — {current.label}: {current.detail}
          </p>
          <ol className="agent-log" aria-hidden="true">
            {STEPS.slice(0, active + 1).map((step, index) => (
              <li key={step.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {step.label.toLowerCase()}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <figcaption>
        Source: PrometheusAI README and policy tests. The approval gate cannot be
        skipped: execution fails closed if the action hash no longer matches what
        the operator approved.
      </figcaption>
    </figure>
  );
}
