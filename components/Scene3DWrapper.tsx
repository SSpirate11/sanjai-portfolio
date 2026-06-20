"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { scrollState } from "@/lib/scroll";

// WebGL canvas must be client-only — never server-rendered.
const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function Scene3DWrapper() {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(hasWebGL());

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        scrollState.raw = window.scrollY;
        scrollState.progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        frame = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Graceful fallback for devices without WebGL: a static cosmic gradient.
  if (!supported) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(circle at 50% 35%, rgba(157,78,221,0.25), transparent 55%), radial-gradient(circle at 70% 70%, rgba(0,217,255,0.12), transparent 50%), #020012",
        }}
      />
    );
  }

  return <Scene3D />;
}
