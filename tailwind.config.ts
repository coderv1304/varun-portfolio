import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A101C",
        panel: "#101B2D",
        panel2: "#0D1622",
        grid: "rgba(140,170,210,0.07)",
        ink: "#E7ECF3",
        muted: "#8A97AC",
        faint: "#5B6478",
        blueprint: "#4C9FFF",
        blueprintDim: "#2B5A99",
        signal: "#F5A623",
        online: "#34D399",
        alert: "#F04438",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        blueprintGrid:
          "linear-gradient(rgba(140,170,210,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(140,170,210,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        gridSize: "40px 40px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
