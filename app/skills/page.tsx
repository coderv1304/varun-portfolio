const skillGroups = [
  {
    title: "DEVOPS",
    skills: [
      "Git",
      "GitHub",
      "CI/CD",
      "Docker",
      "Linux",
      "Automation",
    ],
  },
  {
    title: "CLOUD",
    skills: [
      "Cloud Computing",
      "Infrastructure",
      "Deployment",
      "Networking",
      "Monitoring",
    ],
  },
  {
    title: "DEVSECOPS",
    skills: [
      "Security",
      "SAST",
      "Secure CI/CD",
      "Vulnerability Management",
    ],
  },
  {
    title: "MLOPS / AIOPS",
    skills: [
      "Python",
      "Machine Learning Operations",
      "Automation",
      "Monitoring",
      "Intelligent Operations",
    ],
  },
  {
    title: "PROGRAMMING",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
    ],
  },
  {
    title: "FUNDAMENTALS",
    skills: [
      "Linux",
      "Networking",
      "Operating Systems",
      "Databases",
      "Computer Networks",
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className="page">
      <div className="eyebrow">
        03 / TECHNOLOGY STACK
      </div>

      <h1 className="heading">
        Skills<span className="gradient-text">.</span>
      </h1>

      <p className="subheading">
        A continuously expanding technology stack focused
        on infrastructure, automation, security and
        intelligent systems.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <section className="skill-panel" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-items">
              {group.skills.map((skill) => (
                <span className="skill-item" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}