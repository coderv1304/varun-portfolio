import { skillGroups } from "@/data/skills";

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
        A comprehensive technology stack spanning AWS cloud infrastructure,
        Linux systems engineering, container orchestration, DevSecOps supply chain hardening,
        and agentic AI / MLOps workflows.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <section className="skill-panel" key={group.title}>
            <h3>{group.title}</h3>
            {group.description && (
              <p style={{ margin: "8px 0 0", fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>
                {group.description}
              </p>
            )}

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