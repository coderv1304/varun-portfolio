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
    slug: "devops-project",
    title: "Your DevOps Project",
    category: "DEVOPS / CI-CD",
    description:
      "Replace this with your strongest DevOps project: explain the problem, automation, deployment flow and result.",
    longDescription:
      "Use this project page as a technical case study. Describe the problem you solved, architecture, implementation, security considerations, deployment process and measurable outcome.",
    tech: ["Git", "Docker", "CI/CD", "Linux"],
    github: "https://github.com/coderv1304",
    featured: true,
  },
  {
    slug: "cloud-project",
    title: "Your Cloud Project",
    category: "CLOUD / INFRASTRUCTURE",
    description:
      "Showcase a cloud project with architecture, infrastructure, automation and observability.",
    longDescription:
      "Replace this text with the actual story of your cloud project. Explain why you chose the architecture and how you deployed and monitored it.",
    tech: ["Cloud", "Python", "Linux"],
    github: "https://github.com/coderv1304",
  },
  {
    slug: "mlops-project",
    title: "Your MLOps Project",
    category: "MLOPS / AI",
    description:
      "Showcase an ML workflow, model deployment pipeline, automation or intelligent operations project.",
    longDescription:
      "Replace this text with your actual MLOps or AI project details. Include model lifecycle, CI/CD, deployment and monitoring if applicable.",
    tech: ["Python", "MLOps", "Automation"],
    github: "https://github.com/coderv1304",
  },
];
