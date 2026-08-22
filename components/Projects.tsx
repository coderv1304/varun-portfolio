const projects = [
  {
    id: "01",
    status: "SHIPPED",
    title: "Linux Administration Toolkit",
    description:
      "Five production-style Bash scripts — backup, monitor, dependency checks, user management, and log rotation. Hardened with AES-256 encryption (PBKDF2), automated restore-testing, statistical anomaly detection, and systemd service/timer integration.",
    tags: ["Bash", "systemd", "AES-256", "shellcheck"],
    href: "https://github.com/coderv1304/linux-administration",
  },
  {
    id: "02",
    status: "SHIPPED",
    title: "Dockerized Admin Services",
    description:
      "Containerized the Linux admin toolkit into backup + monitor services with Docker Compose. Production-grade CI: hadolint & shellcheck linting, bats test suite, SBOM via syft, multi-arch builds, and image signing with cosign, plus full governance docs.",
    tags: ["Docker", "GitHub Actions", "SBOM", "cosign"],
    href: "https://github.com/coderv1304",
  },
  {
    id: "03",
    status: "SHIPPED",
    title: "Network Anomaly Detection",
    description:
      "ML-based intrusion detection using a Random Forest model trained on CIC-IDS-2017, with sub-millisecond inference. Shipped with Docker packaging and a GitHub Actions pipeline running Bandit and pip-audit for supply-chain security.",
    tags: ["Python", "scikit-learn", "Docker", "Security"],
    href: "https://github.com/coderv1304/network-anomaly-detection",
  },
  {
    id: "04",
    status: "IN PROGRESS",
    title: "Kubernetes & IaC",
    description:
      "Next in the roadmap — deploying the containerized services onto Kubernetes, with Terraform-managed AWS infrastructure underneath.",
    tags: ["Kubernetes", "Terraform", "AWS"],
    href: "https://github.com/coderv1304",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueprint">
        // projects
      </p>
      <h2 className="mt-3 font-mono text-2xl font-bold text-ink sm:text-3xl">
        Cipher-Watch portfolio
      </h2>
      <p className="mt-3 max-w-2xl text-muted">
        A 6-project build, structured under one umbrella repo. Each project
        is designed, hardened, and documented like it&apos;s going into a
        real environment — not left as a tutorial checkbox.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group panel-border relative flex flex-col justify-between rounded-sm bg-panel p-6 transition-colors hover:border-blueprint/40"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-faint">{p.id}</span>
                <span
                  className={`rounded-sm px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                    p.status === "SHIPPED"
                      ? "bg-online/10 text-online"
                      : "bg-signal/10 text-signal"
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <h3 className="mt-3 font-mono text-lg font-semibold text-ink group-hover:text-blueprint">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {p.description}
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-sm border border-grid px-2 py-0.5 font-mono text-[10px] text-faint"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
