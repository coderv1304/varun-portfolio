"use client";

import { useEffect, useRef, useState } from "react";

const STAGES = [
  { label: "Source tree", detail: "Files selected for backup" },
  { label: "Encrypt", detail: "AES-256-CBC · PBKDF2 100k" },
  { label: "Checksum", detail: "SHA-256 of the archive" },
  { label: "Store", detail: "Encrypted archive written" },
  { label: "Restore drill", detail: "Decrypt the newest archive" },
  { label: "Compare", detail: "Byte-for-byte verification" },
];

export default function BackupPipeline() {
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!running) return;

    timer.current = setInterval(() => {
      setStep((current) => {
        if (current >= STAGES.length - 1) {
          setRunning(false);
          return current;
        }
        return current + 1;
      });
    }, 620);

    return () => {
      if (timer.current) clearInterval(timer.current);
      timer.current = null;
    };
  }, [running]);

  // Stop the run the moment the last stage lands, so the button is not left
  // disabled and reading "Running drill…" after the drill has finished.
  useEffect(() => {
    if (step === STAGES.length - 1 && running) setRunning(false);
  }, [step, running]);

  const complete = step === STAGES.length - 1;

  const run = () => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setStep(STAGES.length - 1);
      setRunning(false);
      return;
    }

    setStep(0);
    setRunning(true);
  };

  return (
    <figure className="case-figure">
      <div className="case-figure-head">
        <span className="case-figure-title">FIG. 4.1 — Backup and restore drill</span>
        <span className="case-figure-sub">systemd timer · every 24 h</span>
      </div>

      <div className="pipeline" aria-hidden="true">
        {STAGES.map((stage, index) => {
          const state = index < step ? "done" : index === step ? "active" : "pending";
          return (
            <div className="pipeline-stage" data-state={state} key={stage.label}>
              <div className="pipeline-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="pipeline-label">{stage.label}</div>
              <div className="pipeline-detail">{stage.detail}</div>
            </div>
          );
        })}
      </div>

      <div className="pipeline-status">
        <button type="button" className="case-table-toggle" onClick={run} disabled={running}>
          {running ? "Running drill…" : complete ? "Run again" : "Run restore drill"}
        </button>
        <p aria-live="polite" className="pipeline-verdict" data-state={complete ? "ok" : "idle"}>
          {complete
            ? "VERIFIED — decrypted archive matches the source tree."
            : step >= 0
              ? `Stage ${step + 1} of ${STAGES.length}: ${STAGES[step].label}.`
              : "Idle — press run to walk the drill."}
        </p>
      </div>

      <figcaption>
        Source: Cipher-Watch README and unit files. The drill decrypts the newest
        archive and compares it with the source; a mismatch fails the unit rather
        than reporting success.
      </figcaption>
    </figure>
  );
}
