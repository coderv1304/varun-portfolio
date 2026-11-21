import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Varun Nair | Infrastructure, Security & Cloud";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#030303",
          border: "1px solid #ccdcf524",
          color: "#f1eee8",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(204, 220, 245, 0.08) 1px, transparent 1px)",
            backgroundSize: "25% 100%",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "14px",
            letterSpacing: "2px",
            color: "#aaa9a4",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#ff8c59",
            }}
          />
          <span>ENGINEER. BUILDER. AUTOMATOR.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "96px",
              fontWeight: 400,
              letterSpacing: "-4px",
              lineHeight: 1,
            }}
          >
            Varun <span style={{ fontStyle: "italic", color: "#ff8c59" }}>Nair</span>
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#aaa9a4",
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            I build secure, observable infrastructure — and the automation that keeps it running.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(204, 220, 245, 0.14)",
            paddingTop: "24px",
            fontSize: "12px",
            letterSpacing: "1.5px",
            color: "#aaa9a4",
            fontFamily: "monospace",
          }}
        >
          <div>INFRASTRUCTURE / SECURITY / AUTOMATION</div>
          <div style={{ color: "#ff8c59" }}>MUMBAI, IN ↗ THE WORLD</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
