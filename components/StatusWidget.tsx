export default function StatusWidget() {
  const status = [
    ["AVAILABILITY", "OPEN"],
    ["EDUCATION", "MCA @ VESIT"],
    ["CGPA", "8.5"],
    ["FOCUS", "DEVOPS / CLOUD"],
  ];

  return (
    <div className="widget">
      <div className="status-body">
        <div className="status-top">
          <span className="status-label">
            SYSTEM STATUS
          </span>

          <span className="online">
            <span className="pulse" />
            ONLINE
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