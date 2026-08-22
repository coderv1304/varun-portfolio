const stack = [
  {
    group: "Languages",
    items: ["Python", "Go", "Bash", "SQL"],
  },
  {
    group: "Containers & Orchestration",
    items: ["Docker", "Docker Compose", "Kubernetes (learning)"],
  },
  {
    group: "Cloud",
    items: ["AWS EC2", "AWS S3", "AWS IAM"],
  },
  {
    group: "CI/CD & Supply Chain",
    items: ["GitHub Actions", "hadolint", "shellcheck", "syft (SBOM)", "cosign"],
  },
  {
    group: "Systems",
    items: ["Linux", "systemd", "Ubuntu (VMware)"],
  },
  {
    group: "Data & ML",
    items: ["scikit-learn", "PostgreSQL", "Random Forest / anomaly detection"],
  },
];

export default function Skills() {
  return (
    <section id="stack" className="border-t border-grid bg-panel2/30">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueprint">
          // stack
        </p>
        <h2 className="mt-3 font-mono text-2xl font-bold text-ink sm:text-3xl">
          Tools I reach for
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((s) => (
            <div
              key={s.group}
              className="panel-border rounded-sm bg-panel px-5 py-4"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-signal">
                {s.group}
              </div>
              <ul className="mt-3 space-y-1.5">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span className="text-blueprint">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
