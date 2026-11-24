import { ImageResponse } from "next/og";
import { projects } from "@/lib/content";

export const runtime = "edge";
export const alt = "Varun Nair case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function titleSize(title: string) {
  if (title.length >= 20) return 68;
  if (title.length >= 14) return 78;
  return 92;
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  const title = project?.title ?? "Case study";
  const index = project?.index ?? "00";
  const category = project?.category ?? "ENGINEERING";
  const repo = project?.repo.replace("https://", "") ?? "github.com/coderv1304";
  const result = project?.evidence.result;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#030303",
          color: "#f1eee8",
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
              "linear-gradient(to right, rgba(142, 121, 99, 0.16) 1px, transparent 1px)",
            backgroundSize: "25% 100%",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "60px",
            bottom: "86px",
            fontSize: "420px",
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-12px",
            color: "rgba(255, 140, 89, 0.06)",
          }}
        >
          {index}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "15px",
            letterSpacing: "3px",
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ width: "44px", height: "3px", backgroundColor: "#ff8c59" }} />
            <span style={{ color: "#ff8c59" }}>CASE STUDY // {index}</span>
          </div>
          <span style={{ color: "#aaa9a4" }}>{category}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              fontSize: `${titleSize(title)}px`,
              fontWeight: 500,
              letterSpacing: "-2px",
              lineHeight: 1.02,
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>

          {result && (
            <div style={{ display: "flex", alignItems: "flex-end", gap: "18px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  fontSize: "64px",
                  fontWeight: 600,
                  lineHeight: 1,
                  color: "#ff8c59",
                  letterSpacing: "-2px",
                }}
              >
                <span>{result.value}</span>
                {result.unit ? (
                  <span style={{ fontSize: "40px", marginBottom: "6px" }}>{result.unit}</span>
                ) : null}
              </div>
              <div
                style={{
                  fontSize: "20px",
                  color: "#aaa9a4",
                  maxWidth: "620px",
                  lineHeight: 1.35,
                  paddingBottom: "6px",
                }}
              >
                {result.label}
              </div>
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(142, 121, 99, 0.5)",
            paddingTop: "22px",
            fontSize: "15px",
            letterSpacing: "2px",
            fontFamily: "monospace",
            color: "#aaa9a4",
          }}
        >
          <div>VARUN NAIR</div>
          <div>{repo}</div>
          <div style={{ color: "#ff8c59" }}>MUMBAI, IN</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
