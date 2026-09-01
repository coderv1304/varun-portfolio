"use client";

import { useEffect, useState } from "react";

export default function BootScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let alreadySeen = false;

    try {
      alreadySeen = !!window.sessionStorage.getItem(
        "varun-portfolio-boot"
      );
    } catch {
      // If storage is unavailable, show the boot screen normally.
    }

    if (alreadySeen) {
      setVisible(false);
      return;
    }

    const start = Date.now();
    let hideTimer: number | undefined;

    const timer = window.setInterval(() => {
      const elapsed = Date.now() - start;
      const value = Math.min(
        100,
        Math.round((elapsed / 1900) * 100)
      );

      setProgress(value);

      if (value >= 100) {
        window.clearInterval(timer);

        try {
          window.sessionStorage.setItem(
            "varun-portfolio-boot",
            "true"
          );
        } catch {
          // Ignore storage errors.
        }

        hideTimer = window.setTimeout(() => {
          setVisible(false);
        }, 450);
      }
    }, 30);

    return () => {
      window.clearInterval(timer);

      if (hideTimer !== undefined) {
        window.clearTimeout(hideTimer);
      }
    };
  }, []);

  if (!visible) {
    return null;
  }

  let status = "INITIALIZING";

  if (progress >= 30 && progress < 60) {
    status = "MOUNTING PROJECTS";
  } else if (progress >= 60 && progress < 90) {
    status = "CONNECTING CLOUD";
  } else if (progress >= 90 && progress < 100) {
    status = "STARTING PORTFOLIO";
  } else if (progress >= 100) {
    status = "READY";
  }

  return (
    <div className="boot-screen">
      <div className="boot-content">
        <div className="boot-orbit">
          <div className="orbit-one" />
          <div className="orbit-two" />
          <div className="orbit-three" />
          <div className="orbit-core" />
        </div>

        <div className="boot-logo">
          VARUN<span>.DEV</span>
        </div>

        <div className="boot-box">
          <div className="boot-status">
            <span>{status}</span>
            <span className="boot-percent">
              {progress}%
            </span>
          </div>

          <div className="progress-track">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}