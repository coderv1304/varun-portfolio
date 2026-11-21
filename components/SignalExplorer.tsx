"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { signalTabs } from "@/lib/content";

interface SignalExplorerProps {
  defaultTab?: "build" | "secure" | "automate";
  customStory?: {
    headline: string;
    body: string;
    linkText: string;
    linkUrl: string;
  };
}

export default function SignalExplorer({
  defaultTab = "build",
  customStory,
}: SignalExplorerProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);
  const [isChanging, setIsChanging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const currentTab = signalTabs.find((t) => t.id === activeTab) || signalTabs[0];
  const currentIndex = signalTabs.findIndex((t) => t.id === activeTab) + 1;

  const handleTabChange = (id: string) => {
    if (id === activeTab) return;
    setIsChanging(true);
    setTimeout(() => {
      setActiveTab(id);
      setIsChanging(false);
    }, 240);
  };

  // Three.js wireframe renderer inside canvas
  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMotionOff = document.documentElement.getAttribute("data-motion") === "off";
    if (isReduced || isMotionOff || !canvasRef.current) return;

    let animId: number;
    let renderer: any = null;
    let scene: any = null;
    let camera: any = null;
    let mesh: any = null;

    const initCanvas = async () => {
      try {
        const THREE = await import("three");
        const canvas = canvasRef.current;
        if (!canvas) return;

        const width = canvas.clientWidth || 300;
        const height = canvas.clientHeight || 260;

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
        camera.position.z = 4.2;

        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: true,
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const material = new THREE.MeshBasicMaterial({
          color: 0x8e7963,
          wireframe: true,
          transparent: true,
          opacity: 0.75,
        });

        // Shape based on activeTab
        if (activeTab === "build") {
          // Stacked wireframe cube / structure
          const group = new THREE.Group();
          const box1 = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.6, 1.6), material);
          const box2 = new THREE.Mesh(
            new THREE.BoxGeometry(1.0, 1.0, 1.0),
            new THREE.MeshBasicMaterial({ color: 0xff8c59, wireframe: true, transparent: true, opacity: 0.6 })
          );
          group.add(box1);
          group.add(box2);
          mesh = group;
        } else if (activeTab === "secure") {
          // Concentric ripples / rings
          const group = new THREE.Group();
          for (let i = 1; i <= 3; i++) {
            const ring = new THREE.Mesh(
              new THREE.RingGeometry(i * 0.45, i * 0.45 + 0.05, 32),
              new THREE.MeshBasicMaterial({
                color: i === 2 ? 0xff8c59 : 0x8e7963,
                wireframe: true,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.7,
              })
            );
            group.add(ring);
          }
          mesh = group;
        } else {
          // Automate: Torus knot
          mesh = new THREE.Mesh(
            new THREE.TorusKnotGeometry(0.85, 0.2, 64, 16),
            new THREE.MeshBasicMaterial({ color: 0xff8c59, wireframe: true, transparent: true, opacity: 0.75 })
          );
        }

        scene.add(mesh);

        const animate = () => {
          animId = requestAnimationFrame(animate);
          if (mesh) {
            mesh.rotation.x += 0.008;
            mesh.rotation.y += 0.012;
          }
          renderer.render(scene, camera);
        };
        animate();
      } catch (e) {
        console.warn("SignalExplorer WebGL fallback used", e);
      }
    };

    initCanvas();

    return () => {
      if (animId) cancelAnimationFrame(animId);
      if (renderer) renderer.dispose();
    };
  }, [activeTab]);

  return (
    <div
      ref={containerRef}
      className="signal-explorer"
      style={{
        border: "1px solid var(--line)",
        background: "var(--surface)",
        padding: "24px",
        position: "relative",
      }}
    >
      {/* Topline */}
      <div
        className="signal-topline"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          letterSpacing: "1.2px",
          color: "var(--muted)",
          textTransform: "uppercase",
          borderBottom: "1px solid var(--line)",
          paddingBottom: "12px",
        }}
      >
        <span className="eyebrow">THREE DISCIPLINES. ONE PERSPECTIVE.</span>
        <span style={{ color: "var(--accent)" }}>0{currentIndex} / 03</span>
      </div>

      {/* Visual Canvas (240–370px tall, radial warm glow) */}
      <div
        className="signal-visual"
        style={{
          position: "relative",
          height: "260px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 140, 89, 0.05) 0%, transparent 70%)",
          overflow: "hidden",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />

        {/* Center mono label with letter-spacing 4px */}
        <span
          className="signal-center-label"
          style={{
            position: "absolute",
            bottom: "16px",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "var(--font-mono)",
            fontSize: "8px",
            letterSpacing: "4px",
            color: "var(--muted)",
            textTransform: "uppercase",
            textShadow: isChanging ? "1px 0 #ff8c59, -1px 0 #00ffff" : "none",
            transition: "all 0.32s ease",
          }}
        >
          {currentTab.subheading}
        </span>
      </div>

      {/* Options Buttons group */}
      <div
        className="signal-options"
        role="group"
        aria-label="Discipline perspectives"
        style={{
          display: "flex",
          gap: "8px",
          margin: "18px 0",
        }}
      >
        {signalTabs.map((tab) => {
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              aria-pressed={isSelected}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                padding: "9px 14px",
                border: "1px solid var(--line)",
                background: isSelected ? "#b99b7312" : "transparent",
                color: isSelected ? "var(--accent)" : "var(--muted)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                flex: 1,
                minHeight: "44px",
              }}
              className="hover:border-[#ff8c59] hover:text-[#f1eee8]"
            >
              {tab.label} ↗
            </button>
          );
        })}
      </div>

      {/* Story panel with aria-live */}
      <div
        className="signal-story"
        aria-live="polite"
        style={{
          opacity: isChanging ? 0 : 1,
          transition: "opacity 0.24s ease",
          minHeight: "110px",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "17px",
            fontWeight: 500,
            color: "var(--ink)",
            marginBottom: "8px",
            letterSpacing: "-0.5px",
          }}
        >
          {customStory?.headline || currentTab.headline}
        </h3>
        <p
          style={{
            fontSize: "13px",
            lineHeight: 1.7,
            color: "var(--muted-2)",
            marginBottom: "14px",
          }}
        >
          {customStory?.body || currentTab.body}
        </p>
        <Link
          href={customStory?.linkUrl || currentTab.linkUrl}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "1px",
            color: "var(--accent)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
          className="hover:underline"
        >
          {customStory?.linkText || currentTab.linkText}
        </Link>
      </div>

      <p
        className="signal-hint"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "8px",
          letterSpacing: "1.2px",
          color: "var(--muted)",
          textTransform: "uppercase",
          marginTop: "16px",
          borderTop: "1px solid var(--line)",
          paddingTop: "10px",
        }}
      >
        Choose a perspective.
      </p>
    </div>
  );
}
