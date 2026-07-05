"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

type Edu = {
  degree: string;
  institution: string;
  short: string;
  period: string;
  cgpa: string;
  color: string;
  focus: string;
  mode?: string;
  status?: string;
  cgpaLabel?: string;
};

const EDUCATION: Edu[] = [
  {
    degree: "M.Tech in Software Engineering",
    institution: "Birla Institute of Technology and Science, Pilani",
    short: "BITS Pilani",
    period: "2025 – 2027",
    cgpa: "9.00",
    cgpaLabel: "Current CGPA",
    color: "#00d9ff",
    mode: "Work Integrated Learning Programme",
    status: "In Progress",
    focus: "Pursued through BITS Pilani's Work Integrated Learning Programme (WILP) alongside full-time work at N-able — focused on distributed systems, software architecture, and scalable system design.",
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Amrita School of Engineering, Chennai",
    short: "Amrita",
    period: "2019 – 2023",
    cgpa: "9.23",
    color: "#9D4EDD",
    focus: "Strong foundation in CS fundamentals — data structures, algorithms, networks, and machine learning. Merit-based scholarship recipient across all semesters.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Education() {
  return (
    <section id="education" style={{ padding: "6rem 1.5rem", position: "relative" }}>
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
            // education
          </p>
          <h2 className="purple-gradient-text" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700 }}>
            Academic Background
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.degree}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <div
                className="glass-card"
                style={{ padding: "1.8rem", borderRadius: 18, height: "100%", position: "relative", overflow: "hidden" }}
              >
                {/* Accent glow */}
                <div
                  style={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 140,
                    height: 140,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${edu.color}20, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Top row: icon + CGPA */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: `${edu.color}16`,
                      border: `1px solid ${edu.color}38`,
                      color: edu.color,
                    }}
                  >
                    <GraduationCap size={24} />
                  </div>

                  {/* CGPA badge */}
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontSize: "1.9rem",
                        fontWeight: 800,
                        lineHeight: 1,
                        color: edu.color,
                        fontFamily: "var(--font-mono, monospace)",
                      }}
                    >
                      {edu.cgpa}
                    </div>
                    <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {edu.cgpaLabel || "CGPA"}
                    </div>
                  </div>
                </div>

                {/* Degree */}
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", marginBottom: 6, lineHeight: 1.35 }}>
                  {edu.degree}
                </h3>

                {/* Programme mode + status */}
                {(edu.mode || edu.status) && (
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "0.7rem" }}>
                    {edu.mode && (
                      <span
                        style={{
                          fontSize: "0.68rem",
                          padding: "3px 10px",
                          borderRadius: 20,
                          background: `${edu.color}14`,
                          border: `1px solid ${edu.color}33`,
                          color: edu.color,
                          fontFamily: "var(--font-mono, monospace)",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {edu.mode}
                      </span>
                    )}
                    {edu.status && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: "0.68rem",
                          padding: "3px 10px",
                          borderRadius: 20,
                          background: "rgba(0,255,136,0.1)",
                          border: "1px solid rgba(0,255,136,0.3)",
                          color: "#00ff88",
                          fontFamily: "var(--font-mono, monospace)",
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#00ff88",
                            boxShadow: "0 0 8px #00ff88",
                            animation: "pulse-glow 2s ease-in-out infinite alternate",
                          }}
                        />
                        {edu.status}
                      </span>
                    )}
                  </div>
                )}

                {/* Institution + period */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "0.875rem", fontWeight: 600, color: edu.color }}>{edu.short}</span>
                  <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.45)",
                      fontFamily: "var(--font-mono, monospace)",
                    }}
                  >
                    {edu.period}
                  </span>
                </div>

                {/* Full institution name */}
                <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.9rem" }}>
                  {edu.institution}
                </p>

                {/* Focus */}
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", lineHeight: 1.7 }}>
                  {edu.focus}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{ marginTop: "1.5rem" }}
        >
          <div
            className="glass-card"
            style={{
              padding: "1rem 1.5rem",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 38, height: 38, borderRadius: 10, background: "rgba(0,217,255,0.12)", border: "1px solid rgba(0,217,255,0.3)", color: "#00d9ff", flexShrink: 0 }}>
              <Award size={18} />
            </div>
            <div>
              <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>
                Certification
              </div>
              <div style={{ fontSize: "0.9rem", color: "#ffffff", fontWeight: 600 }}>
                MongoDB Java Developer Path
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
