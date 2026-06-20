"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Zap, Flag, Medal } from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: <Trophy size={24} />,
    title: "Most Valuable Player of the Quarter",
    org: "N-able",
    orgColor: "#00d9ff",
    description: "Awarded for outstanding contributions to the AI Observability Platform, delivering high-impact features.",
  },
  {
    icon: <Star size={24} />,
    title: "Rising Star of the Quarter",
    org: "N-able",
    orgColor: "#00d9ff",
    description: "Recognized for ownership and key contributions to the event-collector and OpenTelemetry instrumentation.",
  },
  {
    icon: <Zap size={24} />,
    title: "SPOT Award × 2",
    org: "AppViewX",
    orgColor: "#9D4EDD",
    description: "Special Performance and Outstanding Talent award for optimizing the API Token Bucket Algorithm, queue management, and exceptional Scrum Master responsibilities.",
  },
  {
    icon: <Flag size={24} />,
    title: "1st Place — Auth0 CTF",
    org: "Capture the Flag",
    orgColor: "#C77DFF",
    description: "Secured first place in the Auth0 Capture the Flag competition, demonstrating exceptional expertise in cybersecurity.",
  },
  {
    icon: <Medal size={24} />,
    title: "Merit-Based Scholarship",
    org: "Amrita University",
    orgColor: "#E0AAFF",
    description: "Received the merit scholarship for maintaining consistent academic excellence throughout all semesters. CGPA: 9.23.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: "6rem 1.5rem", position: "relative" }}>
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
            // recognition
          </p>
          <h2 className="purple-gradient-text" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700 }}>
            Awards & Achievements
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.2rem",
          }}
        >
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div
                className="glass-card"
                style={{ padding: "1.4rem", borderRadius: 16, height: "100%" }}
              >
                {/* Icon */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    marginBottom: "1rem",
                    background: `${item.orgColor}16`,
                    border: `1px solid ${item.orgColor}38`,
                    color: item.orgColor,
                  }}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 style={{ fontSize: "0.975rem", fontWeight: 700, color: "#ffffff", marginBottom: 6, lineHeight: 1.35 }}>
                  {item.title}
                </h3>

                {/* Org badge */}
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.72rem",
                    padding: "2px 10px",
                    borderRadius: 20,
                    background: `${item.orgColor}18`,
                    border: `1px solid ${item.orgColor}35`,
                    color: item.orgColor,
                    marginBottom: "0.8rem",
                    fontWeight: 600,
                    fontFamily: "var(--font-mono, monospace)",
                  }}
                >
                  {item.org}
                </span>

                {/* Description */}
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.83rem", lineHeight: 1.65 }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
