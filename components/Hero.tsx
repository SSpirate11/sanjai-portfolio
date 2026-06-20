"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const GithubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ROLES = [
  "Software Developer",
  "Backend Engineer",
  "AI Developer",
  "System Designer",
];

function useTypewriter(roles: string[]) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const role = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    let charIndex = 0;
    let erasing = false;

    const tick = () => {
      if (!erasing) {
        charIndex++;
        setText(role.slice(0, charIndex));
        if (charIndex === role.length) {
          erasing = true;
          timeout = setTimeout(tick, 2200);
        } else {
          timeout = setTimeout(tick, 80);
        }
      } else {
        charIndex--;
        setText(role.slice(0, charIndex));
        if (charIndex === 0) {
          erasing = false;
          setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
          timeout = setTimeout(tick, 40);
        }
      }
    };

    timeout = setTimeout(tick, 400);
    return () => clearTimeout(timeout);
  }, [roleIndex, roles]);

  return text;
}

export default function Hero() {
  const typedRole = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "6rem 1.5rem 4rem",
      }}
    >
      {/* Content (the 3D neural core glows behind this) */}
      <div className="max-w-4xl mx-auto text-center" style={{ position: "relative", zIndex: 2 }}>
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: "2rem" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 20,
              background: "rgba(157,78,221,0.12)",
              border: "1px solid rgba(157,78,221,0.35)",
              fontSize: "0.8rem",
              color: "#C77DFF",
              letterSpacing: "0.04em",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#00ff88",
                boxShadow: "0 0 8px #00ff88",
                display: "inline-block",
                animation: "pulse-glow 2s ease-in-out infinite alternate",
              }}
            />
            Available for Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            marginBottom: "1.2rem",
            letterSpacing: "-0.02em",
          }}
        >
          <span className="gradient-text">Sanjai</span>
          <br />
          <span style={{ color: "#ffffff" }}>Siddharthan</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            marginBottom: "1.5rem",
            fontFamily: "var(--font-mono, monospace)",
            color: "rgba(255,255,255,0.55)",
            minHeight: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <span style={{ color: "#9D4EDD" }}>{">"}</span>
          <span style={{ color: "#C77DFF" }}>{typedRole}</span>
          <span className="cursor-blink" />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            maxWidth: 580,
            margin: "0 auto 2.5rem",
            color: "rgba(255,255,255,0.55)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          3+ years building distributed systems, scalable microservices, and AI-powered platforms.
          Currently at <span style={{ color: "#C77DFF" }}>N-able</span>, pursuing{" "}
          <span style={{ color: "#C77DFF" }}>M.Tech at BITS Pilani</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}
        >
          <button
            className="glow-btn-primary"
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "0.75rem 1.8rem",
              borderRadius: 50,
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Explore Projects
            <ArrowDown size={16} />
          </button>
          <a
            href="https://github.com/SSpirate11"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn-outline"
            style={{
              padding: "0.75rem 1.8rem",
              borderRadius: 50,
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            <GithubIcon />
            GitHub
          </a>
          <a
            href="mailto:sanjaisiddharth2002@gmail.com"
            className="glow-btn-outline"
            style={{
              padding: "0.75rem 1.8rem",
              borderRadius: 50,
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            <Mail size={17} />
            Contact
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ display: "flex", gap: 20, justifyContent: "center", alignItems: "center" }}
        >
          <a
            href="https://www.linkedin.com/in/sanjai-s-8126091b3/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C77DFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://github.com/SSpirate11"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C77DFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
          >
            <GithubIcon />
          </a>
          <a
            href="mailto:sanjaisiddharth2002@gmail.com"
            style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C77DFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
          >
            <Mail size={20} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{ marginTop: "4rem" }}
        >
          <div
            style={{
              width: 26,
              height: 42,
              borderRadius: 13,
              border: "2px solid rgba(157,78,221,0.4)",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              paddingTop: 6,
            }}
          >
            <div
              style={{
                width: 4,
                height: 8,
                borderRadius: 2,
                background: "#9D4EDD",
                animation: "float 1.8s ease-in-out infinite",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
