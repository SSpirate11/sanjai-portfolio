"use client";

import { motion } from "framer-motion";
import { Code2, Award, Boxes, BookMarked } from "lucide-react";

const STATS = [
  { icon: <Code2 size={22} />, value: "3+", label: "Years Experience" },
  { icon: <Award size={22} />, value: "5+", label: "Awards & Recognition" },
  { icon: <Boxes size={22} />, value: "5+", label: "Projects" },
  { icon: <BookMarked size={22} />, value: "2", label: "Publications" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 1.5rem", position: "relative" }}>
      <div className="section-divider" style={{ marginBottom: "5rem" }} />

      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <p
            style={{
              color: "#9D4EDD",
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "0.8rem",
              fontFamily: "var(--font-mono, monospace)",
            }}
          >
            // about me
          </p>
          <h2 className="purple-gradient-text" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700 }}>
            Who I Am
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.85, fontSize: "1rem", marginBottom: "1.2rem" }}>
              I&apos;m a Software Developer passionate about building systems that scale. My work spans backend
              engineering, AI development, and distributed systems design — solving real-world problems with
              clean, efficient code.
            </p>
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.85, fontSize: "1rem", marginBottom: "1.8rem" }}>
              Currently working at <span style={{ color: "#C77DFF" }}>N-able</span> on AI observability
              platforms, while pursuing my{" "}
              <span style={{ color: "#C77DFF" }}>M.Tech at BITS Pilani</span>. I care about clean
              architecture, measurable performance gains, and systems that hold up under real-world load.
            </p>

            {/* Quick facts */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Location", "India"],
                ["Currently", "Software Developer @ N-able"],
                ["Focus", "Backend · AI Systems · Distributed Systems"],
                ["Interests", "System Design · LLMs · Open Source"],
              ].map(([key, val]) => (
                <div key={key} style={{ display: "flex", gap: 10, fontSize: "0.875rem" }}>
                  <span style={{ color: "#9D4EDD", fontFamily: "var(--font-mono)", minWidth: 110 }}>{key}</span>
                  <span style={{ color: "rgba(255,255,255,0.6)" }}>{val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card"
                  style={{
                    padding: "1.4rem 1rem",
                    borderRadius: 16,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 130,
                  }}
                >
                  <div style={{ color: "#9D4EDD", marginBottom: 10, display: "flex", justifyContent: "center" }}>
                    {stat.icon}
                  </div>
                  <div
                    className="gradient-text"
                    style={{ fontSize: "2rem", fontWeight: 800, lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.78rem",
                      marginTop: 8,
                      letterSpacing: "0.02em",
                      lineHeight: 1.35,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
