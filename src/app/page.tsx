"use client";

import { useState, useEffect, useCallback } from "react";
import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiArrowRight,
  FiArrowDown,
  FiMail,
  FiMapPin,
  FiMenu,
  FiX,
  FiCheck,
  FiCode,
  FiCpu,
  FiLayers,
  FiSettings,
  FiGlobe,
  FiDatabase,
  FiTerminal,
  FiZap,
  FiSend,
  FiArrowUp,
  FiDownload,
} from "react-icons/fi";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel,
  SiFastapi,
  SiDjango,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss,
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiNodedotjs,
  SiSocketdotio,
} from "react-icons/si";

/* ═══════════════════════════════════════════
   COLOR PALETTE — 3 SOLID COLORS
   Background: #09090b
   Accent:    #10b981
   Text:      #e4e4e7
   ═══════════════════════════════════════════ */

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const ROLES = [
  "AI Developer",
  "Full-Stack Web Developer",
  "Automation Builder",
];

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: FiTerminal,
    items: [
      { name: "Python", Icon: SiPython },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss },
    ],
  },
  {
    title: "Frontend",
    icon: FiLayers,
    items: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Bootstrap", Icon: SiBootstrap },
    ],
  },
  {
    title: "Backend",
    icon: FiDatabase,
    items: [
      { name: "Django", Icon: SiDjango },
      { name: "FastAPI", Icon: SiFastapi },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "REST APIs", Icon: FiGlobe },
      { name: "Prisma", Icon: SiPrisma },
    ],
  },
  {
    title: "Databases",
    icon: FiDatabase,
    items: [
      { name: "MongoDB", Icon: SiMongodb },
      { name: "MySQL", Icon: SiMysql },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "SQLite", Icon: FiDatabase },
    ],
  },
  {
    title: "AI & ML",
    icon: FiCpu,
    items: [
      { name: "AI Chatbots", Icon: FiCpu },
      { name: "Prompt Engineering", Icon: FiTerminal },
      { name: "RAG Systems", Icon: FiDatabase },
      { name: "Image Generation", Icon: FiZap },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: FiSettings,
    items: [
      { name: "Git & GitHub", Icon: SiGit },
      { name: "Docker", Icon: SiDocker },
      { name: "Vercel", Icon: SiVercel },
      { name: "WebSocket", Icon: SiSocketdotio },
    ],
  },
];

const PROJECTS = [
  {
    num: "01",
    title: "Primrose AI",
    description:
      "A custom AI chatbot featuring personality-driven conversations, memory systems, and a modern user interface built for seamless human-AI interaction.",
    tags: ["Python", "AI", "Chatbot", "FastAPI"],
    link: "https://github.com/zahidSkywalker",
  },
  {
    num: "02",
    title: "Zephyrus AI Art Generator",
    description:
      "An AI image generation platform with modern frontend and backend architecture, supporting multiple model integrations and real-time generation.",
    tags: ["React", "Python", "AI", "API"],
    link: "https://github.com/zahidSkywalker",
  },
  {
    num: "03",
    title: "Pay S",
    description:
      "A merchant-focused payment processor simulation platform with dashboards, API authentication, transaction management, and analytics.",
    tags: ["Full-Stack", "Dashboard", "API", "Auth"],
    link: "https://github.com/zahidSkywalker",
  },
  {
    num: "04",
    title: "Sky Voice",
    description:
      "A browser-based text-to-speech platform powered by modern AI speech technologies with multiple voice options and real-time audio playback.",
    tags: ["AI", "TTS", "Web", "API"],
    link: "https://github.com/zahidSkywalker",
  },
  {
    num: "05",
    title: "Ethereal Ascension",
    description:
      "A spiritual learning platform with courses, user management, payments, and digital content delivery with a polished user experience.",
    tags: ["Full-Stack", "E-Learning", "Payments"],
    link: "https://github.com/zahidSkywalker",
  },
  {
    num: "06",
    title: "Fashion Elegant",
    description:
      "A modern e-commerce platform designed for apparel and fashion businesses with clean product presentation and cart management.",
    tags: ["E-Commerce", "React", "UI/UX"],
    link: "https://github.com/zahidSkywalker",
  },
];

const SERVICES = [
  {
    title: "Full-Stack Web Development",
    desc: "End-to-end web application development using Next.js, React, Python, and modern frameworks with scalable architecture.",
    Icon: FiCode,
  },
  {
    title: "AI Chatbot Development",
    desc: "Custom AI-powered chatbots with personality, memory, context awareness, and multi-platform deployment.",
    Icon: FiCpu,
  },
  {
    title: "Custom Automation Systems",
    desc: "Workflow automation that reduces manual effort, increases efficiency, and integrates with existing tools seamlessly.",
    Icon: FiSettings,
  },
  {
    title: "API Development & Integration",
    desc: "Robust RESTful APIs, third-party service integrations, and real-time communication with WebSocket support.",
    Icon: FiGlobe,
  },
  {
    title: "AI Image Generation Solutions",
    desc: "AI-powered image generation platforms with custom model integration and intuitive user interfaces.",
    Icon: FiZap,
  },
  {
    title: "SaaS Product Development",
    desc: "Scalable software-as-a-service products from concept to deployment, including auth, payments, and analytics.",
    Icon: FiLayers,
  },
  {
    title: "E-Commerce Development",
    desc: "Full-featured online stores with payment processing, inventory management, and responsive design.",
    Icon: FiGlobe,
  },
  {
    title: "Technical Consulting",
    desc: "Strategic technical guidance for architecture decisions, technology selection, and project planning.",
    Icon: FiArrowRight,
  },
];

const STRENGTHS = [
  "Strong problem-solving mindset with analytical thinking",
  "Passion for innovation and emerging technologies",
  "Fast learner with high adaptability to new stacks",
  "Focus on practical, production-ready solutions",
  "Modern development practices and clean code",
  "Clear, timely, and proactive communication",
  "Commitment to quality delivery and testing",
];

const TECH_ICONS = [
  { name: "Python", Icon: SiPython },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Django", Icon: SiDjango },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "MySQL", Icon: SiMysql },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Docker", Icon: SiDocker },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Vercel", Icon: SiVercel },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Prisma", Icon: SiPrisma },
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss },
  { name: "Bootstrap", Icon: SiBootstrap },
];

/* ═══════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════ */

function useTypewriter(
  words: string[],
  typeSpeed = 70,
  deleteSpeed = 35,
  pause = 2200
) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    const id = setTimeout(
      () => {
        if (!deleting) {
          const next = word.substring(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDeleting(true), pause);
        } else {
          const next = word.substring(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setIdx((p) => (p + 1) % words.length);
          }
        }
      },
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(id);
  }, [text, idx, deleting, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  return active;
}

/* ═══════════════════════════════════════════
   ANIMATION HELPERS (no variants/custom — safe for Vercel)
   ═══════════════════════════════════════════ */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" } as const,
  transition: {
    duration: 0.6,
    delay,
    ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
  },
});

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: {
    duration: 0.5,
    delay: i * 0.08,
    ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
  },
});

/* ═══════════════════════════════════════════
   LAYOUT
   ═══════════════════════════════════════════ */

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-24 md:py-32 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      {...fadeUp(0)}
      className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
    >
      <span className="w-8 h-px bg-[#10b981]" />
      <span className="text-[#10b981]">{children}</span>
    </motion.span>
  );
}

function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.h2
      {...fadeUp(0.06)}
      className={`text-3xl md:text-[2.75rem] font-bold tracking-tight mb-4 text-white ${className}`}
    >
      {children}
    </motion.h2>
  );
}

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="h-px bg-white/[0.06]" />
    </div>
  );
}

/* ═══════════════════════════════════════════
   SCROLL PROGRESS (solid color, no gradient)
   ═══════════════════════════════════════════ */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#10b981] origin-left z-[60]"
      style={{ scaleX }}
    />
  );
}

/* ═══════════════════════════════════════════
   SCROLL TO TOP
   ═══════════════════════════════════════════ */

function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-[#10b981] transition-colors duration-200"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════
   NAVIGATION (Glassmorphism navbar)
   ═══════════════════════════════════════════ */

function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = useCallback((href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-lg font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
        >
          ZI<span className="text-[#10b981]">.</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className={`nav-link text-[13px] font-medium transition-colors duration-200 ${
                activeSection === l.href
                  ? "text-[#10b981] active"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {l.label}
            </button>
          ))}
          <a
            href="https://github.com/zahidSkywalker"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <SiGithub size={17} />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-b border-white/[0.06] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className={`text-sm text-left py-2.5 transition-colors ${
                    activeSection === l.href
                      ? "text-[#10b981]"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {l.label}
                </button>
              ))}
              <a
                href="https://github.com/zahidSkywalker"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors py-2.5"
              >
                <SiGithub size={15} />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */

function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: dot grid pattern */}
      <div className="absolute inset-0 pointer-events-none dot-grid" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge — glass panel */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-10"
        >
          <span className="relative inline-flex items-center gap-2.5 text-[11px] font-semibold text-[#10b981] tracking-[0.18em] uppercase glass px-5 py-2.5 rounded-full">
            <span className="relative w-2 h-2 rounded-full bg-[#10b981] inline-block status-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* Name — solid accent color, no gradient */}
        <div className="mb-6 flex flex-wrap justify-center gap-x-3">
          {["Zahidul", "Islam"].map((word, i) => (
            <motion.h1
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4 + i * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-none text-[#e4e4e7]"
            >
              {word}
            </motion.h1>
          ))}
        </div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="h-8 mb-10 flex items-center justify-center"
        >
          <span className="text-lg md:text-xl text-zinc-400 font-light tracking-wide">
            {typed}
            <span className="inline-block w-[2px] h-5 bg-[#10b981] ml-0.5 align-middle animate-blink" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-[15px] md:text-base text-zinc-500 max-w-xl mx-auto leading-relaxed mb-12"
        >
          I build intelligent web applications, AI-powered tools, chatbots,
          automation systems, and digital products that solve real-world
          problems.
        </motion.p>

        {/* CTAs — solid accent button, glass secondary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center gap-2.5 bg-[#10b981] hover:bg-[#0d9668] text-black font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-[#10b981]/20 hover:shadow-[#10b981]/30 hover:-translate-y-0.5"
          >
            View Projects
            <FiArrowRight
              size={15}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center gap-2.5 glass hover:bg-white/[0.08] text-white font-medium text-sm px-7 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact Me
          </button>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors duration-200 text-sm font-medium px-4 py-3.5"
          >
            <FiDownload size={15} />
            Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-600">
            Scroll
          </span>
          <FiArrowDown size={14} className="text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   ABOUT (glass info cards)
   ═══════════════════════════════════════════ */

function About() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-5 gap-14 md:gap-16 items-start">
        <div className="md:col-span-3">
          <SectionLabel>About</SectionLabel>
          <SectionTitle>Who I Am</SectionTitle>
          <motion.p
            {...fadeUp(0.12)}
            className="text-zinc-400 text-sm leading-[1.8] mb-6"
          >
            Hello, I am Zahidul Islam, a passionate developer and AI
            enthusiast from Bangladesh. I specialize in building AI-powered
            applications, automation systems, intelligent chatbots, image
            generation platforms, and full-stack web solutions that combine
            cutting-edge technology with practical functionality.
          </motion.p>
          <motion.p
            {...fadeUp(0.2)}
            className="text-zinc-400 text-sm leading-[1.8] mb-6"
          >
            Over the years, I have explored and mastered modern technologies
            including Python, FastAPI, Django, JavaScript, Next.js, React,
            MongoDB, SQL, cloud deployment, AI integrations, and automation
            workflows. My goal is to combine creativity with technology to
            create products that are useful, scalable, and impactful.
          </motion.p>
          <motion.p
            {...fadeUp(0.28)}
            className="text-zinc-400 text-sm leading-[1.8]"
          >
            I enjoy turning ideas into working products and continuously
            learning new technologies to stay ahead in the rapidly evolving AI
            and web development industry. Every project I take on is an
            opportunity to push boundaries and deliver excellence.
          </motion.p>
        </div>

        <div className="md:col-span-2 space-y-3">
          {[
            {
              label: "Location",
              value: "Bangladesh",
              Icon: FiMapPin,
            },
            {
              label: "GitHub",
              value: "zahidSkywalker",
              Icon: SiGithub,
              href: "https://github.com/zahidSkywalker",
            },
            {
              label: "Email",
              value: "Get in touch",
              Icon: FiMail,
              href: "#contact",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              {...stagger(i + 1)}
              className="group glass glass-hover flex items-center gap-4 p-4 rounded-2xl"
            >
              <div className="w-11 h-11 rounded-xl bg-[#10b981]/10 group-hover:bg-[#10b981]/15 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <item.Icon size={16} className="text-[#10b981]" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-zinc-600 font-medium mb-0.5 uppercase tracking-wider">
                  {item.label}
                </p>
                {"href" in item && item.href ? (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.href!.startsWith("#")) {
                        e.preventDefault();
                        document
                          .querySelector(item.href!)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-sm text-white hover:text-[#10b981] transition-colors truncate block"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-white">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   SKILLS (glass category cards)
   ═══════════════════════════════════════════ */

function Skills() {
  return (
    <Section id="skills">
      <SectionLabel>Skills</SectionLabel>
      <SectionTitle>Technologies I Work With</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
        {SKILL_CATEGORIES.map((cat, i) => {
          const CatIcon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              {...stagger(i)}
              className="glass glass-hover group p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 group-hover:bg-[#10b981]/15 flex items-center justify-center transition-colors duration-300">
                  <CatIcon size={17} className="text-[#10b981]" />
                </div>
                <h3 className="text-[15px] font-semibold text-white tracking-tight">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <span
                    key={s.name}
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/[0.04] hover:border-[#10b981]/20 hover:text-zinc-300 transition-all duration-200"
                  >
                    <s.Icon size={12} className="text-zinc-500" />
                    {s.name}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   PROJECTS (glass cards with hover)
   ═══════════════════════════════════════════ */

function Projects() {
  return (
    <Section id="projects">
      <SectionLabel>Projects</SectionLabel>
      <SectionTitle>Featured Work</SectionTitle>
      <div className="grid md:grid-cols-2 gap-5 mt-14">
        {PROJECTS.map((p, i) => (
          <motion.a
            key={p.num}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            {...stagger(i)}
            className="glass glass-hover group relative block p-8 rounded-2xl overflow-hidden"
          >
            {/* Background number */}
            <span className="absolute top-4 right-6 text-7xl font-black text-white/[0.02] select-none leading-none tracking-tighter">
              {p.num}
            </span>

            <div className="relative z-10">
              <span className="text-[11px] font-mono text-[#10b981]/60 mb-4 block tracking-wider">
                PROJECT {p.num}
              </span>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#10b981] transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium text-zinc-500 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.04]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-600 group-hover:text-[#10b981] transition-colors duration-300">
                <FiGithub size={14} />
                <span className="font-medium">View on GitHub</span>
                <FiArrowRight
                  size={12}
                  className="ml-auto group-hover:translate-x-1 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   SERVICES (glass cards grid)
   ═══════════════════════════════════════════ */

function Services() {
  return (
    <Section id="services">
      <SectionLabel>Services</SectionLabel>
      <SectionTitle>What I Can Do For You</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            {...stagger(i)}
            className="glass glass-hover group p-6 rounded-2xl text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#10b981]/10 group-hover:bg-[#10b981]/15 flex items-center justify-center mb-5 mx-auto transition-colors duration-300">
              <s.Icon size={20} className="text-[#10b981]" />
            </div>
            <h3 className="text-sm font-bold text-white mb-2.5 leading-snug">
              {s.title}
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   WHY WORK WITH ME (glass checklist)
   ═══════════════════════════════════════════ */

function WhyWorkWithMe() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel>Why Me</SectionLabel>
        <SectionTitle className="text-center">Why Work With Me</SectionTitle>
        <div className="grid sm:grid-cols-2 gap-3 mt-14 text-left">
          {STRENGTHS.map((s, i) => (
            <motion.div
              key={s}
              {...stagger(i)}
              className="group glass glass-hover flex items-start gap-3.5 p-4 rounded-xl"
            >
              <div className="w-6 h-6 rounded-lg bg-[#10b981]/10 group-hover:bg-[#10b981]/20 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
                <FiCheck size={12} className="text-[#10b981]" />
              </div>
              <span className="text-sm text-zinc-300 leading-relaxed">
                {s}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   TECH STACK MARQUEE (glass pill badges)
   ═══════════════════════════════════════════ */

function TechStack() {
  return (
    <Section>
      <div className="text-center mb-14">
        <SectionLabel>Tech Stack</SectionLabel>
        <SectionTitle className="text-center">Tools & Technologies</SectionTitle>
      </div>
      <div className="relative overflow-hidden py-4">
        <div className="fade-left" />
        <div className="fade-right" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex gap-4 animate-marquee"
        >
          {[...TECH_ICONS, ...TECH_ICONS].map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="group glass glass-hover flex items-center gap-2.5 px-5 py-3 rounded-xl flex-shrink-0"
            >
              <t.Icon
                size={16}
                className="text-zinc-500 group-hover:text-[#10b981] transition-colors duration-300"
              />
              <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300 whitespace-nowrap">
                {t.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   CONTACT (glass panel)
   ═══════════════════════════════════════════ */

function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <SectionLabel>Contact</SectionLabel>
        <SectionTitle className="text-center">
          Let&apos;s Build Something Together
        </SectionTitle>
        <motion.p
          {...fadeUp(0.1)}
          className="text-zinc-500 text-sm leading-relaxed mt-4 mb-12 max-w-lg mx-auto"
        >
          Available for freelance projects, collaborations, and innovative
          startup ideas. If you have a project in mind or want to discuss
          potential opportunities, feel free to reach out.
        </motion.p>
        <motion.div
          {...fadeUp(0.18)}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://github.com/zahidSkywalker"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 glass hover:bg-white/[0.08] px-6 py-3.5 rounded-xl text-sm text-zinc-300 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            <SiGithub size={17} />
            GitHub
            <FiExternalLink
              size={12}
              className="text-zinc-600 group-hover:text-zinc-400 transition-colors"
            />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="group inline-flex items-center gap-2.5 bg-[#10b981] hover:bg-[#0d9668] text-black font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-[#10b981]/20 hover:shadow-[#10b981]/30 hover:-translate-y-0.5"
          >
            <FiMail size={16} />
            Send Email
            <FiSend size={12} />
          </a>
        </motion.div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-white">
            ZI<span className="text-[#10b981]">.</span>
          </span>
          <span className="text-xs text-zinc-600">
            Built with Next.js & passion
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/zahidSkywalker"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <SiGithub size={15} />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-zinc-600 hover:text-zinc-400 transition-colors duration-200"
            aria-label="Email"
          >
            <FiMail size={14} />
          </a>
          <span className="text-zinc-800">|</span>
          <span className="text-xs text-zinc-700">2025 Zahidul Islam</span>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b]">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Services />
        <Divider />
        <WhyWorkWithMe />
        <Divider />
        <TechStack />
        <Divider />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}