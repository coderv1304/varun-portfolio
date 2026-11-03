export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  highlights?: string[];
  skillsLearned?: string[];
  scopeNote?: string;
};

export const projects: Project[] = [
  {
    slug: "prometheus-ai",
    title: "PrometheusAI",
    category: "AI / KUBERNETES INCIDENT RESPONSE",
    description:
      "Approval-gated incident response for Kubernetes: an AI agent investigates alerts, proposes bounded remediations, and requires human approval before execution.",
    longDescription:
      "PrometheusAI is a Kubernetes incident-response demo that investigates alerts with observability data and read-only cluster tools, proposes an allowlisted remediation, and validates it with a server-side dry run. A separate policy service checks the exact action and human approval before executing it, then records the decision and verifies the outcome. It supports deterministic fake-model, Ollama, and Bedrock backends.",
    tech: [
      "Python",
      "LangGraph",
      "FastAPI",
      "Kubernetes",
      "Prometheus",
      "Loki",
      "PostgreSQL",
      "pgvector",
      "pytest",
    ],
    github: "https://github.com/coderv1304/PrometheusAI",
    featured: true,
    highlights: [
      "Investigate alerts using Prometheus, Loki, runbooks, and read-only Kubernetes tools.",
      "Limit remediations to allowlisted restart, undo, and scale operations.",
      "Require a successful server-side dry run and human approval bound to the action hash.",
      "Separate agent read access from the policy service's Kubernetes write identity.",
      "Record decisions and verify execution outcomes with deterministic evaluation and tests.",
    ],
    skillsLearned: [
      "Designing stateful AI agent workflows with LangGraph and pluggable model backends.",
      "Separating LLM-generated proposals from deterministic authorization and execution.",
      "Applying least-privilege Kubernetes RBAC and isolating services with NetworkPolicies.",
      "Building Python APIs and CLI workflows for incident investigation and approvals.",
      "Collecting observability evidence from Prometheus, Loki, and Kubernetes.",
      "Testing safety boundaries with pytest, policy tests, and deterministic scenario evaluations.",
    ],
    scopeNote:
      "This is a working demo for injected faults in a local kind cluster. It has not been validated on real production incidents and is not a production-ready autonomous operator.",
  },
  {
    slug: "cipher-watch",
    title: "Cipher-Watch",
    category: "DEVOPS / LINUX AUTOMATION",
    description:
      "Linux administration project focused on Bash automation, systemd service timers, PBKDF2 AES-256 encryption, and operational monitoring workflows.",
    longDescription:
      "Cipher-Watch is a comprehensive Linux administration project focused on Bash automation, systemd background timers, and operational monitoring workflows. Designed for hardened server infrastructure, featuring AES-256 PBKDF2 encrypted backups, automated restore-testing, log rotation, and statistical anomaly detection.",
    tech: ["Bash", "Linux", "systemd", "AES-256", "Security"],
    github: "https://github.com/coderv1304/Cipher-Watch",
    featured: true,
  },
  {
    slug: "network-anomaly-detection",
    title: "NetShield — Network Anomaly Detection",
    category: "MACHINE LEARNING / NETWORK SECURITY",
    description:
      "An end-to-end network-flow analysis project combining a Flask dashboard, Random Forest classification, PCAP/CSV analysis, and live-flow monitoring.",
    longDescription:
      "NetShield explores the practical challenges of network anomaly detection using CIC-IDS-2017. Its primary runnable experience is a Flask application for analyzing flow CSVs and PCAP/PCAPNG captures, classifying flows with a scikit-learn Random Forest, and monitoring incoming events through a Flask-SocketIO dashboard. The repository also includes SQLite-backed flow history, feature-name normalization, optional AbuseIPDB enrichment, model evaluation utilities, and a separate experimental Go capture prototype.",
    tech: [
      "Python",
      "Flask",
      "scikit-learn",
      "Flask-SocketIO",
      "SQLite",
      "PyFlowMeter",
      "Go",
      "pytest",
    ],
    github: "https://github.com/coderv1304/network-anomaly-detection",
    featured: true,
    highlights: [
      "Analyze CSV, PCAP, and PCAPNG traffic through the web interface.",
      "Inspect live-flow events, capture status, and persisted flow statistics.",
      "Evaluate training pipelines with dataset audits, baselines, and offline SHAP analysis.",
      "Normalize capture-tool feature names and report unmapped fields for diagnosis.",
    ],
    scopeNote:
      "The project is for education and controlled lab use, not production intrusion prevention. Its documented Random Forest baseline macro-F1 is 0.1072 ± 0.0030; random row splits can overstate performance on unseen networks. The Go capture tool is an experimental standalone prototype, and dashboard response controls are simulations.",
  },
  {
    slug: "incident-command-center",
    title: "Incident Command Center",
    category: "DEVOPS / INCIDENT MANAGEMENT",
    description:
      "Full-stack incident management platform built with JavaScript, Java, and Terraform (HCL) — real-time alerting, runbook automation, and multi-cloud infrastructure provisioning.",
    longDescription:
      "Incident Command Center is a production-grade incident management and operations platform. Features real-time alerting dashboards, automated runbook execution, on-call scheduling, and multi-cloud infrastructure provisioning via Terraform HCL. Built with a JavaScript/Node.js frontend, Java backend services, and Python automation scripts. Forked and used by the wider community.",
    tech: ["JavaScript", "Java", "Terraform", "HCL", "Python", "CSS"],
    github: "https://github.com/coderv1304/incident-command-center",
    featured: true,
  },
  {
    slug: "varun-portfolio",
    title: "Varun Portfolio",
    category: "CLOUD / INFRASTRUCTURE",
    description:
      "Personal DevOps & Cloud portfolio built with Next.js 14 and TypeScript, styled like a futuristic operations control dashboard.",
    longDescription:
      "Personal portfolio website built with Next.js 14, React, and TypeScript. Styled like a high-tech DevOps operations console with glassmorphic cards, live status telemetry, terminal emulation, responsive layouts, and modern web aesthetics.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/coderv1304/varun-portfolio",
    demo: "https://varun-portfolio-rouge.vercel.app",
    featured: true,
  },
  {
    slug: "my-learnings",
    title: "MY LEARNINGS",
    category: "ENGINEERING / DSA / KNOWLEDGE REPO",
    description:
      "Growing engineering knowledge repository covering DevOps, AWS Cloud, DevSecOps, Linux, AI engineering, and my ongoing Data Structures & Algorithms learning in C++.",
    longDescription:
      "A dedicated, continuous learning repository cataloging technical notes, architectural diagrams, proof-of-concepts, and hands-on implementations across Linux systems administration, AWS cloud engineering, container orchestration, CI/CD security pipelines, LLM/agentic workflows, and Data Structures & Algorithms in C++.",
    tech: ["C++", "DSA", "DevOps", "AWS Cloud", "Linux", "DevSecOps", "Docker", "AI / MLOps"],
    github: "https://github.com/coderv1304/MY-LEARNINGS",
    featured: true,
  },
  {
    slug: "rates-strategy-lab",
    title: "Rates Strategy Lab",
    category: "QUANT / FIXED INCOME RESEARCH",
    description:
      "Python quantitative research platform for US rates: Treasury curve construction (Nelson-Siegel-Svensson & QuantLib), PCA factor modeling, bond analytics (DV01, convexity), and walk-forward backtesting of 2s10s steepeners.",
    longDescription:
      "Rates Strategy Lab is an institutional-style quantitative research platform for US interest rates and yield curve relative value strategies. Features automated Treasury yield curve fitting using the Nelson-Siegel-Svensson parametric model and QuantLib zero-coupon bootstrapping, PCA decomposition (level, slope, curvature), bond analytics (DV01, modified duration, convexity), SOFR swap scenario engines, and walk-forward backtesting of a DV01-neutral 2s10s curve steepener with Deflated Sharpe ratio evaluation and an Excel/VBA risk dashboard.",
    tech: [
      "Python",
      "QuantLib",
      "NumPy",
      "pandas",
      "statsmodels",
      "PCA",
      "Yield Curves",
      "Fixed Income Analytics",
      "Excel / VBA",
    ],
    github: "https://github.com/coderv1304/rates-strategy-lab",
    featured: true,
  },
];
