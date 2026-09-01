import { site } from "@/data/site";

export default function AboutPage() {
  return (
    <main className="page">
      <div className="eyebrow">
        ABOUT / PROFILE
      </div>

      <h1 className="heading">
        Engineering with an
        <span className="gradient-text">
          {" "}
          automation mindset.
        </span>
      </h1>

      <p className="subheading">
        I&apos;m {site.name}, an IT graduate and MCA student
        at VESIT Mumbai with a strong interest in
        infrastructure, automation, cloud platforms,
        security and intelligent operations.
      </p>

      <section className="section" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="info-grid">
          <div className="info-card">
            <div className="eyebrow">B.SC IT</div>

            <h2 style={{ marginTop: 15 }}>
              CHM College
            </h2>

            <p className="info-label">
              Ulhasnagar, Mumbai
            </p>
          </div>

          <div className="info-card">
            <div className="eyebrow">MCA</div>

            <h2 style={{ marginTop: 15 }}>
              VESIT Mumbai
            </h2>

            <p className="info-label">
              2025–2027
            </p>
          </div>

          <div className="info-card">
            <div className="eyebrow">CGPA</div>

            <h2 style={{ marginTop: 15 }}>
              8.5
            </h2>

            <p className="info-label">
              Aggregate · Semester 2
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="eyebrow">
          WHAT I&apos;M LOOKING FOR
        </div>

        <div className="skill-items">
          {site.roles.map((role) => (
            <span className="skill-item" key={role}>
              {role}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}