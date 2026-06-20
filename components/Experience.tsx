"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Software Developer",
    company: "N-able",
    period: "Aug 2025 – Present",
    color: "#00d9ff",
    bullets: [
      "Built an AI observability platform integrating Splunk and Prometheus for cross-signal reliability intelligence, predictive failure detection, and FinOps cost attribution.",
      "Developed a RAG-based chatbot for context-aware question answering using vector search and LLMs.",
      "Built and optimized a high-throughput events collector for large-scale system and security event processing.",
      "Added OpenTelemetry distributed tracing for end-to-end visibility across the event processing pipeline.",
    ],
    tags: ["Java", "Python", "LLMs", "RAG", "OpenTelemetry", "Splunk", "Prometheus"],
  },
  {
    role: "Software Developer",
    company: "AppViewX",
    period: "Aug 2023 – Jul 2025",
    color: "#9D4EDD",
    bullets: [
      "Improved API throughput by 40% through a custom token bucket rate-limiting algorithm.",
      "Refactored async queue logic to enhance system stability and reduce message lag.",
      "Implemented service account-based service-level communication replacing system user accounts.",
      "Troubleshot production and non-production issues and mentored new team members.",
      "Led Agile ceremonies as Scrum Master, ensuring high team efficiency and collaboration.",
    ],
    tags: ["Java", "Spring", "Microservices", "REST APIs", "Scrum Master", "MongoDB"],
  },
  {
    role: "Software Developer Intern",
    company: "AppViewX",
    period: "Jan 2023 – Jul 2023",
    color: "#C77DFF",
    bullets: [
      "Increased operational efficiency by 25% for developers by building automation tools to streamline time-consuming manual processes.",
    ],
    tags: ["Python", "Automation", "Java"],
  },
  {
    role: "Network Intern",
    company: "Cisco Networking Academy",
    period: "Aug 2022 – Dec 2022",
    color: "#E0AAFF",
    bullets: [
      "Designed and simulated campus networks using star, mesh, and hybrid topologies with Cisco Packet Tracer.",
      "Strengthened practical knowledge of network protocols and device configurations.",
    ],
    tags: ["Cisco Packet Tracer", "Networking", "Network Protocols"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "6rem 1.5rem", position: "relative" }}>
      <div className="section-divider" style={{ marginBottom: "5rem" }} />

      <div className="max-w-4xl mx-auto">
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
            // work experience
          </p>
          <h2 className="purple-gradient-text" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700 }}>
            Career Timeline
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "2.5rem" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 6,
              top: 8,
              bottom: 8,
              width: 2,
              background: "linear-gradient(to bottom, #7B2FBE, #9D4EDD, transparent)",
              borderRadius: 2,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                style={{ position: "relative" }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: -28,
                    top: 6,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: exp.color,
                    border: `2px solid ${exp.color}`,
                    boxShadow: `0 0 12px ${exp.color}80`,
                  }}
                />

                <div
                  className="glass-card"
                  style={{ padding: "1.5rem 1.8rem", borderRadius: 16 }}
                >
                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: 8,
                      marginBottom: "0.8rem",
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: 2 }}>
                        {exp.role}
                      </h3>
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          color: exp.color,
                        }}
                      >
                        {exp.company}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "rgba(255,255,255,0.4)",
                        fontFamily: "var(--font-mono, monospace)",
                        padding: "3px 10px",
                        borderRadius: 20,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul style={{ marginBottom: "1rem", paddingLeft: 0, listStyle: "none" }}>
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        style={{
                          color: "rgba(255,255,255,0.6)",
                          fontSize: "0.875rem",
                          lineHeight: 1.7,
                          display: "flex",
                          gap: 10,
                          marginBottom: 6,
                        }}
                      >
                        <span style={{ color: exp.color, marginTop: 2, flexShrink: 0 }}>▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tech-chip">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
