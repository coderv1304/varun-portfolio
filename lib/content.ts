export interface SocialLink {
  label: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  email: string;
  availability: string;
  availabilityWindow: string;
  startYear: string;
  url: string;
  proof: {
    value: string;
    label: string;
    source: string;
  };
  socials: SocialLink[];
  bio: {
    kicker: string;
    description: string;
    aboutHeadline: string;
    aboutLead: string;
    aboutBody: string;
  };
  education: {
    degree: string;
    institution: string;
    period: string;
  };
}

export interface StatItem {
  value: string;
  suffix?: string;
  label: string;
  sublabel?: string;
}

export interface ProjectEvidence {
  problem: string;
  approach: string;
  result: {
    value: string;
    unit?: string;
    label: string;
    note?: string;
  };
}

export interface ProjectItem {
  slug: string;
  index: string;
  category: string;
  title: string;
  blurb: string;
  description?: string;
  stack: string[];
  repo: string;
  demo?: string;
  caseStudy: string;
  image: string;
  featured?: boolean;
  evidence: ProjectEvidence;
  details?: {
    overview: string;
    architecture?: string[];
    challenges?: string[];
    outcomes?: string[];
  };
}

export interface DisciplineStep {
  step: string;
  title: string;
}

export interface DisciplineItem {
  id: string;
  index: string;
  label: string;
  headline: string;
  body: string;
  strengths: string[];
  steps: DisciplineStep[];
  link: string;
}

export interface NoteItem {
  title: string;
  excerpt: string;
  type: "BUILD LOG" | "DEEP DIVE";
  cover: string;
  href?: string;
  source: string;
  date?: string;
  draft?: boolean;
}

export interface TimelineItem {
  year: string;
  title: string;
  body: string;
}

export const site: SiteConfig = {
  name: "Varun Nair",
  role: "Platform Engineering · DevOps · SRE Intern",
  location: "Mumbai, India",
  email: "coderv1304@gmail.com",
  availability: "Available for internships · Dec 2026 – Jun 2027",
  availabilityWindow: "DEC 2026 – JUN 2027",
  startYear: "2025",
  url: "https://varun-portfolio-rouge.vercel.app",
  proof: {
    value: "38×",
    label: "fewer alerts after 300 s host/window grouping",
    source: "NetShield · CIC-IDS-2017",
  },
  socials: [
    { label: "GitHub", url: "https://github.com/coderv1304" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/connectvarun13" },
    { label: "Hashnode", url: "https://varun-nair-13.hashnode.dev/" },
    { label: "Email", url: "mailto:coderv1304@gmail.com" },
  ],
  bio: {
    kicker: "PLATFORM, DEVOPS & SRE INTERN",
    description: "I build secure, observable infrastructure — and the automation that keeps it running.",
    aboutHeadline: "Infrastructure is the starting point. Reliability is the point.",
    aboutLead: "I connect engineering depth, operational discipline, and clear communication.",
    aboutBody: "Since 2025 I've been turning concepts into working systems — from Linux automation and encrypted backups to AI-assisted Kubernetes incident response.",
  },
  education: {
    degree: "Master of Computer Applications",
    institution: "VESIT Mumbai",
    period: "2025–2027",
  },
};

export const stats: StatItem[] = [
  {
    value: "38",
    suffix: "×",
    label: "alert reduction after 300 s grouping",
    sublabel: "NetShield",
  },
  {
    value: "13.5",
    suffix: "M",
    label: "flows scored in cross-dataset validation",
    sublabel: "NetShield · CIC-IDS-2018",
  },
  {
    value: "11",
    suffix: "",
    label: "public repositories on GitHub",
    sublabel: "verified Nov 2026",
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "prometheus-ai",
    index: "01",
    category: "AI & KUBERNETES INCIDENT RESPONSE",
    title: "PrometheusAI",
    blurb:
      "An approval-gated incident response agent for Kubernetes: investigate alerts, gather evidence, propose bounded remediations, require human approval.",
    stack: [
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
    repo: "https://github.com/coderv1304/PrometheusAI",
    caseStudy: "/work/prometheus-ai",
    image: "/images/projects/prometheus-ai.svg",
    featured: true,
    evidence: {
      problem:
        "Kubernetes alerts arrive faster than an on-call engineer can triage them, and an autonomous fix is unsafe without a hard boundary.",
      approach:
        "Read-only investigation agent, allowlisted remediations, server-side dry run, and human approval bound to the action hash.",
      result: {
        value: "3",
        label: "remediation verbs allowlisted",
        note: "restart · undo · scale — everything else fails closed",
      },
    },
    details: {
      overview:
        "PrometheusAI investigates alerts using Prometheus, Loki, runbooks, and read-only Kubernetes tools. It proposes an allowlisted remediation, validates it with a server-side dry run, and requires human approval cryptographically bound to the action hash before execution.",
      architecture: [
        "Stateful LangGraph agent orchestrating read-only discovery tools",
        "Deterministic policy service holding separate Kubernetes write identity",
        "Server-side dry runs with rollback hooks and audit trail in PostgreSQL + pgvector",
      ],
      outcomes: [
        "Zero unapproved mutations in local Kind cluster benchmark",
        "Bounded remediation scope: restart, undo, scale allowlisted only",
        "Full evidentiary trail collected for every incident cycle",
      ],
    },
  },
  {
    slug: "netshield",
    index: "02",
    category: "MACHINE LEARNING & NETWORK SECURITY",
    title: "NetShield",
    blurb:
      "Flow-based anomaly detection with a Random Forest classifier, PCAP/CSV analysis and a live monitoring dashboard.",
    stack: [
      "Python",
      "Flask",
      "scikit-learn",
      "Flask-SocketIO",
      "SQLite",
      "PyFlowMeter",
      "Go",
      "pytest",
    ],
    repo: "https://github.com/coderv1304/network-anomaly-detection",
    caseStudy: "/work/netshield",
    image: "/images/projects/netshield.svg",
    featured: true,
    evidence: {
      problem:
        "A strong benchmark score hides the fact that real-traffic prevalence collapses precision.",
      approach:
        "Random Forest on CIC-IDS-2017, prevalence analysis, and 300 s host/window alert grouping.",
      result: {
        value: "38",
        unit: "×",
        label: "fewer alerts after grouping",
        note: "96.39% precision at 25.05% prevalence; 7.40% at 0.1%",
      },
    },
    details: {
      overview:
        "NetShield is an end-to-end network flow anomaly detection engine trained on CIC-IDS-2017. It combines real-time PCAP/PCAPNG ingestion, Random Forest inference, feature normalization, and an interactive Flask-SocketIO monitoring console.",
      architecture: [
        "High-throughput packet parsing pipeline with PyFlowMeter and an experimental Go capture daemon",
        "Feature vector extraction, normalization, and scikit-learn Random Forest classification",
        "Live WebSocket dashboard streaming anomaly scores and alert telemetry",
      ],
      outcomes: [
        "Comprehensive dataset audit revealing baseline limits and real-world transfer caveats",
        "Interactive flow inspector with live packet statistics and historical SQLite archive",
      ],
    },
  },
  {
    slug: "cipher-watch",
    index: "03",
    category: "LINUX & DEVSECOPS",
    title: "Cipher-Watch",
    blurb:
      "Bash automation, systemd timers, PBKDF2/AES-256 encrypted backups and hardened containers.",
    stack: ["Bash", "Linux", "systemd", "AES-256", "PBKDF2", "Docker", "Security"],
    repo: "https://github.com/coderv1304/Cipher-Watch",
    caseStudy: "/work/cipher-watch",
    image: "/images/projects/cipher-watch.svg",
    featured: true,
    evidence: {
      problem:
        "A backup that has never been restored is a hope, not a recovery plan.",
      approach:
        "Bash and systemd automation, AES-256 encryption, SHA-256 checksums, and an automated decrypt-and-compare restore drill.",
      result: {
        value: "100k",
        label: "PBKDF2 iterations",
        note: "AES-256 backups, verified by a 24 h restore drill",
      },
    },
    details: {
      overview:
        "Cipher-Watch provides production-hardened Linux administration workflows: automated AES-256 encrypted backups using PBKDF2 key derivation, verified automated restore-drills, log rotation, and statistical anomaly detection via systemd background timers.",
      architecture: [
        "Modular POSIX Bash automation with strict error boundaries and trap handlers",
        "OpenSSL PBKDF2 iteration hardening with AES-256-CBC encryption layer",
        "Systemd unit files and monotonic timers ensuring deterministic background schedules",
      ],
      outcomes: [
        "Automated backup-and-restore verification drill running every 24 hours",
        "Zero-dependency operational monitoring and alerting with minimal CPU footprint",
      ],
    },
  },
  {
    slug: "incident-command-center",
    index: "04",
    category: "CLOUD & AI INCIDENT RESPONSE",
    title: "Incident Command Center",
    blurb:
      "Event-driven AWS pipeline: a failed GitHub Actions run becomes an EventBridge event, a Lambda calls Bedrock for root cause, and a live dashboard shows the result.",
    stack: ["AWS Lambda", "EventBridge", "Amazon Bedrock", "Spring Boot", "React", "IAM"],
    repo: "https://github.com/coderv1304/incident-command-center",
    caseStudy: "/work/incident-command-center",
    image: "/images/projects/incident-command-center.svg",
    featured: false,
    evidence: {
      problem:
        "A failed CI/CD run costs 20–40 minutes of manual log reading, with no memory of past diagnoses.",
      approach:
        "GitHub Actions emits a failure event to EventBridge; Lambda invokes Bedrock; the explanation is stored and rendered on a live dashboard.",
      result: {
        value: "0",
        label: "manual steps from detection to dashboard",
        note: "team project · First Commit, Sept 2026",
      },
    },
    details: {
      overview:
        "Incident Command Center is an event-driven AWS pipeline built for the First Commit hackathon. A failing GitHub Actions workflow publishes a custom event to EventBridge; a Lambda invokes Amazon Bedrock to generate a plain-English root cause; the record is stored and shown on a live dashboard.",
      architecture: [
        "GitHub Actions failure step assumes a narrowly scoped IAM identity with events:PutEvents only",
        "EventBridge rule matches source dummy.pipeline / BuildFailed and invokes Lambda",
        "Bedrock generates the root-cause explanation; the dashboard renders it with zero manual steps",
      ],
      outcomes: [
        "Detection-to-display path runs without a human in the loop",
        "Team project: Varun Nair led AWS / DevOps / infrastructure",
      ],
    },
  },
  {
    slug: "rates-strategy-lab",
    index: "05",
    category: "QUANTITATIVE RESEARCH",
    title: "Rates Strategy Lab",
    blurb:
      "US Treasury yield curve construction (Nelson-Siegel-Svensson & QuantLib), PCA factor modeling, DV01 bond analytics, and 2s10s walk-forward backtesting.",
    stack: ["Python", "QuantLib", "NumPy", "pandas", "statsmodels", "PCA", "VBA"],
    repo: "https://github.com/coderv1304/rates-strategy-lab",
    caseStudy: "/work/rates-strategy-lab",
    image: "/images/projects/rates-strategy-lab.svg",
    featured: false,
    evidence: {
      problem:
        "Curve strategies are easy to overfit; most research stops before out-of-sample honesty.",
      approach:
        "NSS and QuantLib curve construction, PCA factors, a DV01-neutral 2s10s steepener, and a walk-forward backtest with deflated Sharpe.",
      result: {
        value: "5y / 6m",
        label: "walk-forward train / test windows",
        note: "headline results intentionally unpublished until a real FRED run",
      },
    },
    details: {
      overview:
        "Institutional-style quantitative fixed-income research platform. Yield curve calibration using NSS parametric models, PCA decomposition of curve dynamics, and walk-forward backtesting of DV01-neutral curve steepener strategies.",
      architecture: [
        "Nelson-Siegel-Svensson optimizer and QuantLib bootstrapping pipeline",
        "Principal Component Analysis identifying level, slope, and curvature drivers",
        "Deflated Sharpe ratio evaluation with transaction cost modelling",
      ],
      outcomes: [
        "Algorithmic trade execution simulation with zero curve-drift assumption",
        "Interactive Excel/VBA risk dashboard with live bond analytics",
      ],
    },
  },
  {
    slug: "varun-portfolio",
    index: "06",
    category: "CLOUD & WEB SYSTEMS",
    title: "Varun Portfolio",
    blurb:
      "Editorial, technical archive portfolio built with Next.js 15, server-rendered content, and a case-study template that publishes limitations with the results.",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "GSAP", "Lenis"],
    repo: "https://github.com/coderv1304/varun-portfolio",
    caseStudy: "/work/varun-portfolio",
    image: "/images/projects/varun-portfolio.svg",
    featured: false,
    evidence: {
      problem:
        "A portfolio that lists tools is not evidence; a recruiter needs claims they can verify in one click.",
      approach:
        "Next.js App Router, server-rendered content, per-route metadata, and case studies with methodology and limitations.",
      result: {
        value: "170",
        unit: "KB",
        label: "JavaScript budget, gzip",
        note: "enforced in REVIEW.md — a budget, not a vanity metric",
      },
    },
  },
];

export const disciplines: DisciplineItem[] = [
  {
    id: "infrastructure",
    index: "01",
    label: "INFRASTRUCTURE & CLOUD",
    headline: "Build systems that hold.",
    body: "Linux, Docker, Kubernetes, Terraform and AWS — designed for repeatability, not heroics.",
    strengths: [
      "Linux",
      "Docker",
      "Kubernetes",
      "Terraform",
      "AWS",
      "systemd",
    ],
    steps: [
      { step: "01", title: "Understand the failure mode" },
      { step: "02", title: "Design the boundary" },
      { step: "03", title: "Automate the recovery" },
    ],
    link: "/work",
  },
  {
    id: "security",
    index: "02",
    label: "SECURITY & AUTOMATION",
    headline: "Make the safe path the easy path.",
    body: "Encryption, hardened containers, CI checks and Bash automation that removes the manual step.",
    strengths: [
      "DevSecOps",
      "Bash",
      "AES-256",
      "PBKDF2",
      "GitHub Actions",
      "Bandit",
    ],
    steps: [
      { step: "01", title: "Isolate the secret surface" },
      { step: "02", title: "Enforce cryptographic proofs" },
      { step: "03", title: "Verify with dry-runs" },
    ],
    link: "/work",
  },
  {
    id: "aiops",
    index: "03",
    label: "AIOPS & OBSERVABILITY",
    headline: "Give operations a brain.",
    body: "Prometheus, Loki, LangGraph and evaluation loops that turn alerts into evidence.",
    strengths: [
      "Prometheus",
      "Grafana",
      "Loki",
      "LangGraph",
      "pgvector",
      "pytest",
    ],
    steps: [
      { step: "01", title: "Aggregate the telemetry stream" },
      { step: "02", title: "Synthesize cause from logs" },
      { step: "03", title: "Require human gatekeeper approval" },
    ],
    link: "/work",
  },
];

export const notes: NoteItem[] = [
  {
    title: "Building production-style Linux admin scripts: from cron to systemd timers",
    excerpt:
      "Five Bash scripts, a systemd service, and the failure modes that only show up on a real machine.",
    type: "BUILD LOG",
    cover: "/images/notes/note-1.svg",
    href: "https://varun-nair-13.hashnode.dev/building-production-style-linux-admin-scripts-from-cron-to-systemd-timers",
    source: "Hashnode",
    date: "AUG 2026",
  },
  {
    title: "A backup you haven't tested restoring from isn't a backup",
    excerpt:
      "Encryption, checksum verification, and automated restore testing — the discipline of verify, don't assume.",
    type: "DEEP DIVE",
    cover: "/images/notes/note-2.svg",
    href: "https://varun-nair-13.hashnode.dev/a-backup-you-haven-t-tested-restoring-from-isn-t-a-backup-hardening-my-linux-admin-toolkit",
    source: "Hashnode",
    date: "AUG 2026",
  },
  {
    title: "From Bash scripts to production containers",
    excerpt:
      "Containerising the backup and monitoring services: build context, naming rules, and the bugs in between.",
    type: "BUILD LOG",
    cover: "/images/notes/note-3.svg",
    href: "https://varun-nair-13.hashnode.dev/from-bash-scripts-to-production-containers",
    source: "Hashnode",
    date: "AUG 2026",
  },
  {
    title: "Why approval gates matter in AIOps",
    excerpt:
      "Autonomous remediation sounds neat until an LLM drops your primary database. Why human-in-the-loop is the only sane boundary.",
    type: "DEEP DIVE",
    cover: "/images/notes/note-4.svg",
    source: "Draft",
    draft: true,
  },
  {
    title: "Reading Kubernetes events like a human",
    excerpt:
      "Parsing the noise in Kubernetes events to isolate crash-loop root causes before Prometheus even alerts.",
    type: "DEEP DIVE",
    cover: "/images/notes/note-5.svg",
    source: "Draft",
    draft: true,
  },
  {
    title: "Random Forest vs. real traffic",
    excerpt:
      "Why synthetic datasets like CIC-IDS-2017 mislead you on network anomaly detection accuracy in real environments.",
    type: "DEEP DIVE",
    cover: "/images/notes/note-6.svg",
    source: "Draft",
    draft: true,
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2025",
    title: "A degree path and a head start",
    body: "Started Master of Computer Applications (MCA) at VESIT Mumbai while building cloud infrastructure and CI/CD security pipelines.",
  },
  {
    year: "TODAY",
    title: "Connecting the whole picture",
    body: "Merging infrastructure automation with AI agent workflows — building PrometheusAI, investigating failure modes, and documenting technical architectures in public.",
  },
  {
    year: "NEXT",
    title: "Reliability at scale",
    body: "Targeting platform engineering, DevOps and SRE internships to run high-throughput, fault-tolerant infrastructure under real production load.",
  },
];

export const signalTabs = [
  {
    id: "build",
    label: "Build",
    subheading: "STRUCTURE",
    headline: "Give an idea structure.",
    body: "Reproducible compute, declarative manifests, and infrastructure that boots identically every single time.",
    linkText: "Explore the systems ↗",
    linkUrl: "/work",
  },
  {
    id: "secure",
    label: "Secure",
    subheading: "BOUNDARIES",
    headline: "Make the safe path the default.",
    body: "Cryptographic verification, least-privilege RBAC, and approval gates between anomaly detection and cluster mutations.",
    linkText: "Explore the security ↗",
    linkUrl: "/work",
  },
  {
    id: "automate",
    label: "Automate",
    subheading: "RECOVERY",
    headline: "Turn incident response into deterministic loops.",
    body: "From systemd timer drills to LangGraph agent evaluation loops — automating recovery while preserving human oversight.",
    linkText: "Explore automation ↗",
    linkUrl: "/work",
  },
];
