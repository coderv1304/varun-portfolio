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
    cgpa: string;
    period: string;
  };
}

export interface StatItem {
  value: string;
  suffix?: string;
  label: string;
  sublabel?: string;
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
  href: string;
  source: string;
  date?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  body: string;
}

export const site: SiteConfig = {
  name: "Varun Nair",
  role: "Infrastructure, Security & Cloud Engineer",
  location: "Mumbai, India",
  email: "coderv1304@gmail.com",
  availability: "OPEN TO INTERNSHIPS — DEVOPS / CLOUD / SECURITY",
  socials: [
    { label: "GitHub", url: "https://github.com/coderv1304" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/connectvarun13" },
    { label: "Hashnode", url: "https://varun-nair-13.hashnode.dev/" },
    { label: "Email", url: "mailto:coderv1304@gmail.com" },
  ],
  bio: {
    kicker: "A SYSTEMS PERSPECTIVE ON INFRASTRUCTURE",
    description: "I build secure, observable infrastructure — and the automation that keeps it running.",
    aboutHeadline: "Infrastructure is the starting point. Reliability is the point.",
    aboutLead: "I connect engineering depth, operational discipline, and clear communication.",
    aboutBody: "Since 2025 I've been turning concepts into working systems — from Linux automation and encrypted backups to AI-assisted Kubernetes incident response.",
  },
  education: {
    degree: "Master of Computer Applications",
    institution: "VESIT Mumbai",
    cgpa: "8.49",
    period: "2025–2027",
  },
};

export const stats: StatItem[] = [
  {
    value: "8.49",
    suffix: "",
    label: "aggregate CGPA · MCA @ VESIT",
  },
  {
    value: "07",
    suffix: "",
    label: "engineering projects shipped end-to-end",
  },
  {
    value: "11",
    suffix: "",
    label: "public repositories on GitHub",
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
    details: {
      overview:
        "NetShield is an end-to-end network flow anomaly detection engine trained on CIC-IDS-2017. Features real-time PCAP/PCAPNG ingestion, Random Forest inference, feature normalization, and an interactive Flask-SocketIO monitoring console.",
      architecture: [
        "High-throughput packet parsing pipeline with PyFlowMeter and experimental Go capture daemon",
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
    category: "DEVOPS & INCIDENT MANAGEMENT",
    title: "Incident Command Center",
    blurb:
      "Full-stack incident management platform with real-time alerting, runbook automation, and multi-cloud Terraform provisioning.",
    stack: ["JavaScript", "Java", "Terraform", "HCL", "Python", "Docker"],
    repo: "https://github.com/coderv1304/incident-command-center",
    caseStudy: "/work/incident-command-center",
    image: "/images/projects/incident-command-center.svg",
    featured: false,
    details: {
      overview:
        "Production-style incident coordination platform featuring on-call paging, real-time alert aggregation, automated runbook dispatch, and multi-cloud IaC provisioning via Terraform.",
      architecture: [
        "Java microservices backend managing state machines and incident escalations",
        "Terraform modules provisioning resilient cloud topologies across environments",
      ],
      outcomes: [
        "Automated on-call rotation schedules and synthetic alert dispatch",
        "Tested multi-region disaster recovery runbooks in Terraform",
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
    slug: "my-learnings",
    index: "06",
    category: "KNOWLEDGE BASE",
    title: "MY LEARNINGS",
    blurb:
      "Continuous engineering knowledge repository cataloging technical notes, architecture patterns, and implementations across DevOps, Cloud, Security, and C++ DSA.",
    stack: ["C++", "DSA", "DevOps", "AWS Cloud", "Linux", "DevSecOps", "Docker", "AIOps"],
    repo: "https://github.com/coderv1304/MY-LEARNINGS",
    caseStudy: "/work/my-learnings",
    image: "/images/projects/my-learnings.svg",
    featured: false,
    details: {
      overview:
        "A rigorous, public engineering knowledge repository containing hundreds of documented commands, architectural diagrams, security guidelines, and C++ algorithms.",
      architecture: [
        "Structured modular markdown library with clear conceptual boundaries",
        "Verified command snippets, system configurations, and algorithmic proofs",
      ],
      outcomes: [
        "Public reference base actively updated alongside university and project work",
        "Comprehensive coverage from Linux internals to distributed cloud architecture",
      ],
    },
  },
  {
    slug: "varun-portfolio",
    index: "07",
    category: "CLOUD & WEB SYSTEMS",
    title: "Varun Portfolio",
    blurb:
      "Editorial, technical archive portfolio built with Next.js 15, GSAP scroll choreography, and Lenis smooth scrolling.",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "GSAP", "Three.js", "Lenis"],
    repo: "https://github.com/coderv1304/varun-portfolio",
    caseStudy: "/work/varun-portfolio",
    image: "/images/projects/varun-portfolio.svg",
    featured: false,
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
    title: "Why approval gates matter in AIOps",
    excerpt: "Autonomous remediation sounds neat until an LLM drops your primary database. Why human-in-the-loop is the only sane boundary.",
    type: "DEEP DIVE",
    cover: "/images/notes/note-1.svg",
    href: "https://varun-nair-13.hashnode.dev/",
    source: "Hashnode",
    date: "OCT 2026",
  },
  {
    title: "Encrypting backups without a vault",
    excerpt: "Building resilient off-site encrypted backup pipelines with Bash, OpenSSL PBKDF2, and systemd timers.",
    type: "BUILD LOG",
    cover: "/images/notes/note-2.svg",
    href: "https://varun-nair-13.hashnode.dev/",
    source: "Hashnode",
    date: "SEP 2026",
  },
  {
    title: "Reading Kubernetes events like a human",
    excerpt: "Parsing the noise in k8s events to isolate crash-loop root causes before Prometheus even alerts.",
    type: "DEEP DIVE",
    cover: "/images/notes/note-3.svg",
    href: "https://varun-nair-13.hashnode.dev/",
    source: "Hashnode",
    date: "AUG 2026",
  },
  {
    title: "A homelab that survives reboots",
    excerpt: "Designing declarative state recovery for local Kind clusters, persistent storage, and DNS fallbacks.",
    type: "BUILD LOG",
    cover: "/images/notes/note-4.svg",
    href: "https://varun-nair-13.hashnode.dev/",
    source: "Hashnode",
    date: "JUL 2026",
  },
  {
    title: "Random Forest vs. real traffic",
    excerpt: "Why synthetic datasets like CIC-IDS-2017 mislead you on network anomaly detection accuracy in real environments.",
    type: "DEEP DIVE",
    cover: "/images/notes/note-5.svg",
    href: "https://varun-nair-13.hashnode.dev/",
    source: "Hashnode",
    date: "JUN 2026",
  },
  {
    title: "Terraform state, demystified",
    excerpt: "Locking, remote backends, and how to safely recover when state locks get abandoned mid-apply.",
    type: "BUILD LOG",
    cover: "/images/notes/note-6.svg",
    href: "https://varun-nair-13.hashnode.dev/",
    source: "Hashnode",
    date: "MAY 2026",
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Learning by breaking",
    body: "Linux tinkering, shell automation, homelabs, and building foundational mental models around operating systems and networking.",
  },
  {
    year: "2025",
    title: "A degree path and a head start",
    body: "Started Master of Computer Applications (MCA) at VESIT Mumbai, maintaining an 8.49 CGPA while building cloud infrastructure and CI/CD security pipelines.",
  },
  {
    year: "TODAY",
    title: "Connecting the whole picture",
    body: "Merging infrastructure automation with AI agent workflows — building PrometheusAI, investigating failure modes, and documenting technical architectures in public.",
  },
  {
    year: "NEXT",
    title: "Reliability at scale",
    body: "Targeting DevOps, Cloud, and SRE internships to engineer high-throughput, fault-tolerant infrastructure systems under real production load.",
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
