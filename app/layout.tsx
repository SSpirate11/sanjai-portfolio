import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanjai Siddharthan | Software Developer",
  description:
    "Software Developer with 3+ years in backend engineering, AI systems, and distributed architecture. Currently at N-able, pursuing M.Tech at BITS Pilani.",
  keywords: [
    "Sanjai Siddharthan",
    "Software Developer",
    "Backend Engineer",
    "AI Developer",
    "Java",
    "Python",
    "Microservices",
    "BITS Pilani",
  ],
  openGraph: {
    title: "Sanjai Siddharthan | Software Developer",
    description: "Backend Engineer · AI Developer · BITS Pilani M.Tech",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
