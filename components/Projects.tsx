const projects = [
  {
    id: "01",
    status: "SHIPPED",
    title: "Cipher-Watch",
    description:
      "Production-grade Linux admin toolkit — backup, monitor, dependency checks, user management, and log rotation. Hardened with AES-256 PBKDF2 encryption, automated restore-testing, and systemd service/timer integration.",
    tags: ["Bash", "Linux", "systemd", "AES-256", "Security"],
    href: "https://github.com/coderv1304/Cipher-Watch",
  },
  {
    id: "02",
    status: "SHIPPED",
    title: "Network Anomaly Detection",
    description:
      "ML-based intrusion detection engine using Random Forest trained on CIC-IDS-2017 with sub-millisecond inference. Shipped with Docker packaging and GitHub Actions security pipelines (Bandit, pip-audit).",
    tags: ["Python", "scikit-learn", "Docker", "Security", "CI/CD"],
    href: "https://github.com/coderv1304/network-anomaly-detection",
  },
  {
    id: "03",
    status: "SHIPPED",
    title: "Varun Portfolio",
    description:
      "Personal DevOps & Cloud portfolio built with Next.js 14 and TypeScript, styled like a futuristic operations control dashboard with live telemetry and interactive widgets.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    href: "https://github.com/coderv1304/varun-portfolio",
  },
  {
    id: "04",
    status: "SHIPPED",
    title: "Data Structures & Algorithms",
    description:
      "Core computer science repository covering algorithm design, data structures, space-time complexity analysis, graph algorithms, and problem solving in C++ and Python.",
    tags: ["C++", "Python", "Algorithms", "Data Structures"],
    href: "https://github.com/coderv1304/DSA",
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
