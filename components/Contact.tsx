"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Copy, Check, Rocket } from "lucide-react";

const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
import { useState } from "react";

const CONTACT_ITEMS = [
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "sanjaisiddharth2002@gmail.com",
    href: "mailto:sanjaisiddharth2002@gmail.com",
    color: "#00d9ff",
    copyable: true,
  },
  {
    icon: <LinkedinIcon />,
    label: "LinkedIn",
    value: "sanjai-s-8126091b3",
    href: "https://www.linkedin.com/in/sanjai-s-8126091b3/",
    color: "#9D4EDD",
    copyable: false,
  },
  {
    icon: <GithubIcon />,
    label: "GitHub",
    value: "SSpirate11",
    href: "https://github.com/SSpirate11",
    color: "#C77DFF",
    copyable: false,
  },
  {
    icon: <Phone size={22} />,
    label: "Phone",
    value: "+91 8778332599",
    href: "tel:+918778332599",
    color: "#E0AAFF",
    copyable: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" style={{ padding: "6rem 1.5rem 4rem", position: "relative" }}>
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
            // get in touch
          </p>
          <h2 className="purple-gradient-text" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem" }}>
            Let&apos;s Connect
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7, fontSize: "1rem" }}>
            Open to new opportunities, collaborations, and interesting conversations.
            Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1.2rem",
            marginBottom: "3rem",
          }}
        >
          {CONTACT_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div
                className="glass-card"
                style={{
                  padding: "1.3rem",
                  borderRadius: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  position: "relative",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${item.color}14`,
                    border: `1px solid ${item.color}30`,
                    color: item.color,
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>
                    {item.label}
                  </div>
                  <a
                    href={item.href}
                    target={item.label !== "Email" && item.label !== "Phone" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{
                      color: item.color,
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      display: "block",
                    }}
                  >
                    {item.value}
                  </a>
                </div>

                {item.copyable && (
                  <button
                    onClick={() => handleCopy(item.value)}
                    style={{
                      background: "none",
                      border: "none",
                      color: copied === item.value ? "#00ff88" : "rgba(255,255,255,0.3)",
                      cursor: "pointer",
                      padding: 4,
                      transition: "color 0.2s",
                      flexShrink: 0,
                    }}
                    title="Copy to clipboard"
                  >
                    {copied === item.value ? <Check size={15} /> : <Copy size={15} />}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ textAlign: "center" }}
        >
          <div
            className="glass-card"
            style={{
              padding: "2.5rem",
              borderRadius: 24,
              maxWidth: 540,
              margin: "0 auto",
              background: "rgba(157,78,221,0.06)",
              borderColor: "rgba(157,78,221,0.3)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.2rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 60,
                  height: 60,
                  borderRadius: 18,
                  background: "rgba(157,78,221,0.14)",
                  border: "1px solid rgba(157,78,221,0.4)",
                  color: "#C77DFF",
                  boxShadow: "0 0 24px rgba(157,78,221,0.25)",
                }}
              >
                <Rocket size={28} />
              </div>
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.6rem" }}>
              Ready to build something great?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              Whether it&apos;s a full-time role, freelance project, or just a conversation about tech —
              I&apos;m all ears.
            </p>
            <a
              href="mailto:sanjaisiddharth2002@gmail.com"
              className="glow-btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "0.75rem 2rem",
                borderRadius: 50,
                textDecoration: "none",
                color: "#ffffff",
                fontSize: "0.95rem",
                fontWeight: 600,
              }}
            >
              <Mail size={17} />
              Send me an email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
