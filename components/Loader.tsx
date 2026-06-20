"use client";

import { useEffect, useState } from "react";

const BOOT_LINES = [
  "$ initializing neural core ...",
  "$ spawning graph nodes        [ 46/46 ] OK",
  "$ establishing data pipeline  [ done ] OK",
  "$ loading telemetry streams   [ done ] OK",
  "$ compiling portfolio.v2 ...",
];

export default function Loader() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const lineTimers = BOOT_LINES.map((_, i) =>
      setTimeout(() => setVisibleLines(i + 1), 220 * (i + 1))
    );

    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(100, ((now - start) / duration) * 100);
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else {
        setDone(true);
        setTimeout(() => setHidden(true), 700);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      lineTimers.forEach(clearTimeout);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9000,
        background: "#020012",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: done ? 0 : 1,
        transform: done ? "scale(1.05)" : "scale(1)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        pointerEvents: done ? "none" : "auto",
        fontFamily: "var(--font-mono, monospace)",
        padding: "1.5rem",
      }}
    >
      {/* Pulsing core */}
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          marginBottom: "2rem",
          background: "radial-gradient(circle, #C77DFF, #7B2FBE)",
          boxShadow: "0 0 40px rgba(157,78,221,0.7)",
          animation: "pulse-glow 1s ease-in-out infinite alternate",
        }}
      />

      {/* Boot log */}
      <div style={{ width: "min(420px, 90vw)", marginBottom: "1.5rem", minHeight: 130 }}>
        {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            style={{
              color: line.includes("OK") ? "#00ff88" : "rgba(199,125,255,0.85)",
              fontSize: "0.78rem",
              lineHeight: 1.9,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              animation: "slide-in-left 0.3s ease",
            }}
          >
            {line}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: "min(420px, 90vw)",
          height: 3,
          borderRadius: 3,
          background: "rgba(157,78,221,0.15)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "linear-gradient(to right, #7B2FBE, #C77DFF, #00d9ff)",
            transition: "width 0.1s linear",
          }}
        />
      </div>
      <div
        style={{
          marginTop: "0.8rem",
          fontSize: "0.7rem",
          color: "rgba(255,255,255,0.4)",
          letterSpacing: "0.1em",
        }}
      >
        {Math.floor(progress)}% — SANJAI.SIDDHARTHAN
      </div>
    </div>
  );
}
