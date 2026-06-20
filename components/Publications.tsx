"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, BookMarked, FileText } from "lucide-react";

const PUBLICATIONS = [
  {
    title: "Real-Time Road Hazard Classification Using Object Detection with Deep Learning",
    journal: "Springer Nature",
    journalColor: "#00d9ff",
    journalIcon: <BookMarked size={16} />,
    description:
      "A novel method for detecting road hazards using deep learning-based object detection models. The system achieves 94% accuracy in real-time classification of potholes and speed bumps using YOLO architectures.",
    tags: ["Deep Learning", "YOLO", "Computer Vision", "Road Safety", "Python"],
    link: "#",
  },
  {
    title: "Crop Recommendation and Yield Prediction Using Ensemble Machine Learning Technique",
    journal: "IEEE DELCON 2025",
    journalColor: "#C77DFF",
    journalIcon: <FileText size={16} />,
    description:
      "An intelligent agriculture framework for crop recommendation and yield prediction using ensemble machine learning techniques such as bagging, boosting, stacking, and voting models for improved agricultural decision-making.",
    tags: ["Machine Learning", "Ensemble Methods", "Agriculture", "Prediction", "Python"],
    link: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Publications() {
  return (
    <section id="publications" style={{ padding: "6rem 1.5rem", position: "relative" }}>
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
            // research
          </p>
          <h2 className="purple-gradient-text" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700 }}>
            Publications
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
          {PUBLICATIONS.map((pub, i) => (
            <motion.div
              key={pub.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <div
                className="glass-card"
                style={{ padding: "1.8rem", borderRadius: 18, position: "relative", overflow: "hidden" }}
              >
                {/* Background accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 4,
                    height: "100%",
                    background: `linear-gradient(to bottom, ${pub.journalColor}, transparent)`,
                    borderRadius: "18px 0 0 18px",
                  }}
                />

                <div style={{ paddingLeft: "0.8rem" }}>
                  {/* Journal badge */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.8rem" }}>
                    <span style={{ color: pub.journalColor, display: "flex" }}>{pub.journalIcon}</span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        padding: "3px 12px",
                        borderRadius: 20,
                        background: `${pub.journalColor}18`,
                        border: `1px solid ${pub.journalColor}35`,
                        color: pub.journalColor,
                        fontWeight: 600,
                        fontFamily: "var(--font-mono, monospace)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {pub.journal}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      lineHeight: 1.4,
                      marginBottom: "0.8rem",
                    }}
                  >
                    {pub.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      marginBottom: "1.2rem",
                    }}
                  >
                    {pub.description}
                  </p>

                  {/* Tags + link row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {pub.tags.map((tag) => (
                        <span key={tag} className="tech-chip">{tag}</span>
                      ))}
                    </div>

                    <a
                      href={pub.link}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: pub.journalColor,
                        fontSize: "0.8rem",
                        fontWeight: 500,
                        textDecoration: "none",
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      <BookOpen size={14} />
                      Read Paper
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
