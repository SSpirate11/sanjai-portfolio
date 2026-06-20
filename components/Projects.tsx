"use client";

import { motion } from "framer-motion";
import { ExternalLink, Workflow, Globe, ScanEye, MessagesSquare, SquareTerminal } from "lucide-react";
import type { ReactNode } from "react";

const GithubIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const DevpostIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853H10.112z" />
  </svg>
);

type Project = {
  title: string;
  icon: ReactNode;
  description: string;
  tags: string[];
  color: string;
  github: string;
  devpost?: string;
};

const PROJECTS: Project[] = [
  {
    title: "AI-Dev-Kit",
    icon: <Workflow size={22} />,
    description:
      "End-to-end AI developer pipeline using LangGraph, MCP (GitHub, Jira, Confluence), and A2A protocol to autonomously orchestrate multi-agent workflows — from Jira ticket through spec drafting, code generation, and reviewed GitHub PR creation.",
    tags: ["LangGraph", "MCP", "A2A Protocol", "Multi-agent", "GitHub API", "Jira"],
    color: "#00d9ff",
    github: "https://github.com/SSpirate11",
  },
  {
    title: "RefugeeConnect AI",
    icon: <Globe size={22} />,
    description:
      "Multimodal AI platform using Google Gemini 3 that empowers displaced people through credential reconstruction, real-time bureaucratic advocacy, and intelligent form navigation.",
    tags: ["Google Gemini", "Multimodal AI", "Python", "RAG", "LLMs"],
    color: "#9D4EDD",
    github: "https://github.com/SSpirate11",
    devpost: "https://devpost.com/sanjaisiddharth2002",
  },
  {
    title: "Pothole & Speed-Bump Detection",
    icon: <ScanEye size={22} />,
    description:
      "Deep learning system for real-time road hazard detection using Python and YOLO models, achieving 94% accuracy. Published research in Springer Nature.",
    tags: ["Python", "YOLO", "Deep Learning", "Computer Vision", "OpenCV"],
    color: "#C77DFF",
    github: "https://github.com/SSpirate11",
  },
  {
    title: "Adaptive Prompt Engineering",
    icon: <MessagesSquare size={22} />,
    description:
      "Intelligent chatbot integrating sentiment analysis with GPT technology, resulting in 20% improvement in user engagement through dynamic prompt adaptation based on emotional context.",
    tags: ["GPT", "Sentiment Analysis", "Prompt Engineering", "Python", "NLP"],
    color: "#E0AAFF",
    github: "https://github.com/SSpirate11",
  },
  {
    title: "DevPilot — Developer Assistant",
    icon: <SquareTerminal size={22} />,
    description:
      "Developer-friendly tool to test production-like changes and simplify debugging workflows, reducing developer overhead and enabling faster iteration cycles.",
    tags: ["Developer Tools", "Python", "Java", "Automation", "Debugging"],
    color: "#7B2FBE",
    github: "https://github.com/SSpirate11",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem 1.5rem", position: "relative" }}>
      <div className="section-divider" style={{ marginBottom: "5rem" }} />

      <div className="max-w-6xl mx-auto">
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
            // projects
          </p>
          <h2 className="purple-gradient-text" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700 }}>
            Things I&apos;ve Built
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <div
                className="glass-card"
                style={{
                  padding: "1.6rem",
                  borderRadius: 18,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Glow accent */}
                <div
                  style={{
                    position: "absolute",
                    top: -30,
                    right: -30,
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${project.color}22, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        background: `${project.color}16`,
                        border: `1px solid ${project.color}38`,
                        color: project.color,
                        flexShrink: 0,
                      }}
                    >
                      {project.icon}
                    </div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.3 }}>
                      {project.title}
                    </h3>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                    {project.devpost && (
                      <a
                        href={project.devpost}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View on Devpost"
                        style={{ color: "rgba(255,255,255,0.3)", transition: "color 0.2s", display: "flex" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = project.color)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
                      >
                        <DevpostIcon size={17} />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View on GitHub"
                      style={{ color: "rgba(255,255,255,0.3)", transition: "color 0.2s", display: "flex" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = project.color)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
                    >
                      <GithubIcon size={17} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: "1.2rem",
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.68rem",
                        padding: "2px 9px",
                        borderRadius: 20,
                        background: `${project.color}18`,
                        border: `1px solid ${project.color}35`,
                        color: project.color,
                        fontFamily: "var(--font-mono, monospace)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginTop: "2.5rem" }}
        >
          <a
            href="https://github.com/SSpirate11"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn-outline"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "0.65rem 1.6rem",
              borderRadius: 50,
              textDecoration: "none",
              color: "#C77DFF",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            <GithubIcon size={16} />
            All projects on GitHub
            <ExternalLink size={14} />
          </a>
          <a
            href="https://devpost.com/sanjaisiddharth2002"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn-outline"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "0.65rem 1.6rem",
              borderRadius: 50,
              textDecoration: "none",
              color: "#C77DFF",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            <DevpostIcon size={16} />
            Hackathons on Devpost
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
