import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zahidul Islam — Developer Portfolio",
  description:
    "AI Developer, Full-Stack Web Developer, and Automation Builder. Building intelligent web applications and AI-powered tools with Next.js, React, Python, and more.",
  keywords: [
    "Zahidul Islam",
    "Developer",
    "AI Developer",
    "Full-Stack",
    "Portfolio",
    "Python",
    "React",
    "Next.js",
    "Tailwind CSS",
    "MongoDB",
  ],
  openGraph: {
    title: "Zahidul Islam — Developer Portfolio",
    description:
      "AI Developer, Full-Stack Web Developer, and Automation Builder.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#09090b] text-zinc-200 antialiased">
        {children}
      </body>
    </html>
  );
}