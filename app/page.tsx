import Scene3DWrapper from "@/components/Scene3DWrapper";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";

// Alternating semi-opaque panels keep each section distinct AND readable over
// the (now dimmed) 3D backdrop. Hero stays transparent so the core shows.
const BAND_A = "rgba(3,1,12,0.66)";
const BAND_B = "rgba(10,5,24,0.58)";
const bandBorder = "1px solid rgba(157,78,221,0.08)";

function Band({ bg, children }: { bg: string; children: React.ReactNode }) {
  return <div style={{ background: bg, borderTop: bandBorder }}>{children}</div>;
}

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: "#020012" }}>
      <Loader />
      <Cursor />
      <Scene3DWrapper />

      {/* Soft scrim to calm the 3D scene behind all content */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background:
            "linear-gradient(rgba(2,0,18,0.28), rgba(2,0,18,0.28)), radial-gradient(ellipse at 50% 28%, transparent 32%, rgba(2,0,18,0.62) 100%)",
        }}
      />

      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />
        <Hero />
        <Band bg={BAND_A}><About /></Band>
        <Band bg={BAND_B}><Education /></Band>
        <Band bg={BAND_A}><Experience /></Band>
        <Band bg={BAND_B}><Projects /></Band>
        <Band bg={BAND_A}><Skills /></Band>
        <Band bg={BAND_B}><Achievements /></Band>
        <Band bg={BAND_A}><Publications /></Band>
        <Band bg={BAND_B}><Contact /></Band>
        <footer
          className="text-center py-8 text-sm"
          style={{
            color: "rgba(255,255,255,0.25)",
            borderTop: "1px solid rgba(157,78,221,0.1)",
            background: "rgba(2,0,16,0.7)",
          }}
        >
          <p>Crafted with Next.js · Three.js · Framer Motion — Sanjai Siddharthan · 2025</p>
        </footer>
      </div>
    </main>
  );
}
