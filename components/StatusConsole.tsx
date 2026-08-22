"use client";

import { useEffect, useState } from "react";

function useUptime(since: string) {
  const [uptime, setUptime] = useState("");

  useEffect(() => {
    const start = new Date(since).getTime();
    const tick = () => {
      const diff = Date.now() - start;
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      setUptime(
        `${days}d ${String(hours).padStart(2, "0")}h ${String(mins).padStart(
          2,
          "0"
        )}m ${String(secs).padStart(2, "0")}s`
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [since]);

  return uptime;
}

export default function StatusConsole() {
  // MCA program start: August 2025
  const uptime = useUptime("2025-08-01T00:00:00");

  return (
    <div className="w-full border-b border-blueprint/20 bg-panel2/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2 font-mono text-[11px] text-muted sm:text-xs">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-online opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-online"></span>
          </span>
          <span className="text-online">STATUS: OPEN_TO_WORK</span>
        </div>
        <div className="hidden items-center gap-1 sm:flex">
          <span className="text-faint">UPTIME(career.build):</span>
          <span className="text-ink tabular-nums">{uptime}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-faint">ROLES:</span>
          <span className="text-signal">
            devops · devsecops · cloud · mlops · aiops
          </span>
        </div>
        <div className="hidden items-center gap-1 md:flex">
          <span className="text-faint">RESPONSE_TIME:</span>
          <span className="text-ink">&lt; 24h</span>
        </div>
      </div>
    </div>
  );
}
