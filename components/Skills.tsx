const stack = [
  {
    group: "Quant Finance & Rates",
    items: ["QuantLib", "Nelson-Siegel-Svensson", "DV01 & Convexity", "2s10s Steepeners", "SOFR Swaps"],
  },
  {
    group: "Math & Statistical Modeling",
    items: ["PCA Factor Analysis", "Time Series Econometrics", "Cointegration & Stationarity", "Deflated Sharpe"],
  },
  {
    group: "AWS Cloud & IaC",
    items: ["EC2, S3, IAM", "Lambda, EventBridge", "DynamoDB, CloudWatch", "Terraform (IaC)"],
  },
  {
    group: "Containers & Orchestration",
    items: [
      "Docker & Docker Compose",
      "Kubernetes Deployments & Services",
      "Kubernetes RBAC & ServiceAccounts",
      "Kubernetes NetworkPolicies",
      "ConfigMaps, Secrets & Persistent Volumes",
      "Probes, Resource Limits & Rollouts",
      "Kustomize & kind",
    ],
  },
  {
    group: "CI/CD & DevSecOps",
    items: ["GitHub Actions", "Bandit SAST", "ShellCheck & Hadolint", "Syft (SBOM) & Cosign"],
  },
  {
    group: "AI / LLM & Systems",
    items: [
      "Amazon Bedrock & Ollama",
      "LangGraph Agents & RAG",
      "Human-in-the-Loop AI Workflows",
      "Prometheus & Loki Observability",
      "Linux & systemd",
      "Python & Go",
    ],
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
