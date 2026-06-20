"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Brain, Server, Wrench, BadgeCheck } from "lucide-react";

const SKILL_GROUPS = [
  {
    category: "Languages",
    icon: <Code2 size={18} />,
    color: "#00d9ff",
    skills: ["Java", "Python"],
  },
  {
    category: "Frameworks",
    icon: <Layers size={18} />,
    color: "#9D4EDD",
    skills: ["Spring Boot", "Flask", "Django"],
  },
  {
    category: "AI & ML",
    icon: <Brain size={18} />,
    color: "#C77DFF",
    skills: ["RAG", "LLMs", "Vector Search", "Prompt Engineering", "LangGraph", "OpenTelemetry"],
  },
  {
    category: "Architecture",
    icon: <Server size={18} />,
    color: "#E0AAFF",
    skills: ["System Design", "Microservices", "REST APIs", "Distributed Systems", "Event-Driven"],
  },
  {
    category: "Tools & Infra",
    icon: <Wrench size={18} />,
    color: "#7B2FBE",
    skills: ["Kubernetes", "MongoDB", "Maven", "Git", "Splunk", "Prometheus"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 1.5rem", position: "relative" }}>
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
            // tech stack
          </p>
          <h2 className="purple-gradient-text" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700 }}>
            Skills & Technologies
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.4rem",
          }}
        >
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div
                className="glass-card"
                style={{ padding: "1.4rem", borderRadius: 16 }}
              >
                {/* Category header */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: `${group.color}18`,
                      border: `1px solid ${group.color}35`,
                      color: group.color,
                      flexShrink: 0,
                    }}
                  >
                    {group.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: group.color,
                    }}
                  >
                    {group.category}
                  </span>
                </div>

                {/* Skills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: "0.78rem",
                        padding: "4px 12px",
                        borderRadius: 20,
                        background: `${group.color}10`,
                        border: `1px solid ${group.color}28`,
                        color: "rgba(255,255,255,0.75)",
                        fontFamily: "var(--font-mono, monospace)",
                        letterSpacing: "0.02em",
                        transition: "all 0.2s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = `${group.color}22`;
                        (e.currentTarget as HTMLElement).style.color = group.color;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = `${group.color}10`;
                        (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)";
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginTop: "2rem", textAlign: "center" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 20px",
              borderRadius: 12,
              background: "rgba(0, 217, 255, 0.08)",
              border: "1px solid rgba(0, 217, 255, 0.25)",
            }}
          >
            <BadgeCheck size={18} style={{ color: "#00d9ff", flexShrink: 0 }} />
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem" }}>
              Certified:{" "}
              <span style={{ color: "#00d9ff", fontWeight: 600 }}>MongoDB Java Developer Path</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
