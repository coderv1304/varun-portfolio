import { site } from "@/data/site";

export default function StatusWidget() {
  const status = [
    ["OPPORTUNITY", "OPEN TO INTERNSHIPS"],
    ["EDUCATION", "MCA @ VESIT"],
    ["CURRENT CGPA", site.education.cgpa],
    ["ENGINEERING", "SECURITY / INFRA"],
  ];

  return (
    <div className="widget">
      <div className="status-body">
        <div className="status-top">
          <span className="status-label">
            ENGINEER PROFILE
          </span>

          <span className="online">
            <span className="pulse" />
            AVAILABLE
          </span>
        </div>

        <div className="status-list">
          {status.map(([key, value]) => (
            <div className="status-row" key={key}>
              <span>{key}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}