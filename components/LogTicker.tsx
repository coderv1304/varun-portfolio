const entries = [
  "backup.service: restore verification PASSED — checksum match confirmed",
  "monitor.service: anomaly detector baseline updated (rolling window: 24h)",
  "ci/cd: sbom generated via syft, image signed via cosign",
  "network-anomaly-detection: inference latency < 1ms (Random Forest, CIC-IDS-2017)",
  "docker-compose: multi-arch build passed on amd64 + arm64",
  "auth: migrated repo remote from HTTPS/PAT to SSH (ed25519)",
  "linux-administration: shellcheck clean across 5 scripts",
  "status: OPEN_TO_WORK — devops / devsecops / cloud / mlops / aiops",
];

export default function LogTicker() {
  const loop = [...entries, ...entries];
  return (
    <div className="overflow-hidden border-y border-grid bg-panel2/60 py-3">
      <div className="flex w-max animate-marquee gap-10 font-mono text-xs text-faint">
        {loop.map((line, i) => (
          <span key={i} className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-online">●</span>
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}
