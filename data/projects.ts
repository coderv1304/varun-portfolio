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
};

export const projects: Project[] = [
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
    title: "Network Anomaly Detection",
    category: "MLOPS / SECURITY",
    description:
      "ML-based intrusion detection engine using Random Forest trained on CIC-IDS-2017 with sub-millisecond inference and Docker CI/CD pipelines.",
    longDescription:
      "A project centered around detecting unusual network behavior and supporting observability in distributed systems. Features ML-based intrusion detection using Random Forest trained on CIC-IDS-2017 with sub-millisecond inference, containerized with Docker, and protected by a GitHub Actions pipeline with automated security scanning (Bandit, pip-audit).",
    tech: ["Python", "scikit-learn", "Docker", "Security", "CI/CD"],
    github: "https://github.com/coderv1304/network-anomaly-detection",
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
    featured: true,
  },
  {
    slug: "dsa",
    title: "Data Structures & Algorithms",
    category: "CORE / ALGORITHMS",
    description:
      "Repository for data structures and algorithm practice, covering problem solving, graph algorithms, and system performance optimization.",
    longDescription:
      "Core computer science repository covering algorithm design, data structures, space-time complexity analysis, graph algorithms, dynamic programming, and competitive programming solutions implemented with high efficiency.",
    tech: ["C++", "Python", "Algorithms", "Data Structures"],
    github: "https://github.com/coderv1304/DSA",
    featured: false,
  },
];
