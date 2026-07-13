import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Cable,
  Camera,
  CheckCircle2,
  Code2,
  Database,
  Github,
  HardDrive,
  Mail,
  MonitorPlay,
  Moon,
  Network,
  ScanSearch,
  ServerCog,
  ShieldCheck,
  Sun,
  TerminalSquare,
  Twitter,
  Waypoints,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const profile = {
  name: "Abu Talha",
  title: "Systems, Automation & Self-Hosted Infrastructure Builder",
  shortTitle: "Infrastructure • Automation • AI Workflows",
  location: "United Kingdom",
  email: "mailto:abutalha.gb@proton.me",
  github: "https://github.com/talhamehar007",
  twitter: "https://twitter.com/talhamehar007",
  summary:
    "I build practical systems across self-hosted infrastructure, automation, media services, backup workflows, and AI-assisted tooling.",
  intro:
    "This is a personal portfolio for the technical things I enjoy building: reliable services, useful automation, homelab workflows, media systems, computer vision experiments, and small tools that solve real operational problems.",
  about: [
    "I’m Abu Talha, a hands-on technical builder focused on self-hosted infrastructure, automation, storage reliability, media systems, and AI-assisted workflows. I enjoy systems that are not only interesting technically, but useful, maintainable, and reliable in everyday use.",
    "My work includes Docker-based service deployments, Linux and macOS workflows, local networking, backup and restore planning, media automation, video processing, and Python tooling. I often work close to the system level: logs, storage paths, configuration, scheduled jobs, diagnostics, and performance.",
    "I also bring experience from business project management, civil engineering, and hospitality operations. That mix shapes how I approach technical work: structure, practical constraints, communication, risk awareness, and systems that can be understood when something goes wrong.",
  ],
  tags: [
    "Self-Hosting",
    "Docker & Linux",
    "Python Automation",
    "Backup Workflows",
    "Media Systems",
    "Computer Vision",
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Background", href: "#background" },
    { label: "Contact", href: "#contact" },
  ],
};

type SkillGroup = {
  title: string;
  level: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

const skills: SkillGroup[] = [
  {
    title: "Infrastructure & Self-Hosting",
    level: "Confident",
    description:
      "Containerised services, local networks, service configuration, diagnostics, and small-scale operational environments.",
    icon: ServerCog,
    items: ["Docker", "Docker Compose", "Linux", "macOS workflows", "Local DNS", "Reverse proxy concepts"],
  },
  {
    title: "Backup, Storage & Reliability",
    level: "Strong focus",
    description:
      "Backup planning, restore confidence, encrypted repositories, storage troubleshooting, and repeatable recovery workflows.",
    icon: HardDrive,
    items: ["Restic", "Borg", "Rclone", "Rsync", "Restore testing", "Retention planning"],
  },
  {
    title: "Media Systems & Automation",
    level: "Practical builder",
    description:
      "Self-hosted media services, download workflows, metadata handling, and repeatable media processing pipelines.",
    icon: MonitorPlay,
    items: ["Jellyfin", "Immich", "FFmpeg", "qBittorrent", "Radarr", "Sonarr", "Prowlarr"],
  },
  {
    title: "AI, Vision & Python Tooling",
    level: "Actively building",
    description:
      "Computer-vision experiments and automation tools using video streams, image processing, local inference, and structured logs.",
    icon: Camera,
    items: ["Python", "OpenCV", "YOLO", "RTSP", "Face detection", "CLI tools", "Processing pipelines"],
  },
  {
    title: "Web, Scripting & Developer Tools",
    level: "Useful working level",
    description:
      "Small interfaces, dashboards, scripts, APIs, and developer-facing tools that make systems easier to operate.",
    icon: Code2,
    items: ["React", "TypeScript", "Tailwind CSS", "Flask", "Shell scripting", "Git", "SQLite"],
  },
  {
    title: "Operational & Professional Skills",
    level: "Experienced",
    description:
      "Communication, planning, structured troubleshooting, and pressure-tested problem-solving from technical and service environments.",
    icon: BriefcaseBusiness,
    items: ["Project planning", "Documentation", "Team coordination", "Risk awareness", "Customer-facing work"],
  },
];

type Project = {
  title: string;
  category: string;
  description: string;
  detail: string;
  highlights: string[];
  tech: string[];
  status: string;
  icon: LucideIcon;
};

const projects: Project[] = [
  {
    title: "Smart CCTV & Computer Vision System",
    category: "Computer Vision / Video Infrastructure",
    description:
      "A custom CCTV-style system around live streams, motion detection, event recording, and computer-vision processing.",
    detail:
      "The project explores practical video workflows using RTSP, Python, OpenCV, and model integration, with attention to reconnect behaviour, logs, retention, and modular design.",
    highlights: ["RTSP stream handling", "Python and OpenCV processing", "Event metadata and retention planning"],
    tech: ["Python", "OpenCV", "RTSP", "MediaMTX", "YOLO", "Docker"],
    status: "Active development",
    icon: Camera,
  },
  {
    title: "Self-Hosted Media Infrastructure",
    category: "Homelab / Media Automation",
    description:
      "A containerised media environment built around organised storage, automated media workflows, and reliable service operation.",
    detail:
      "The focus is the full operating model: storage layout, permissions, service networking, logs, restart behaviour, and recovery planning.",
    highlights: ["Containerised media stack", "Library organisation", "Service diagnostics and configuration"],
    tech: ["Docker", "Docker Compose", "Jellyfin", "Radarr", "Sonarr", "Prowlarr"],
    status: "Production-style homelab",
    icon: MonitorPlay,
  },
  {
    title: "Photo Management & Backup Workflow",
    category: "Self-Hosting / Reliability",
    description:
      "A self-hosted photo workflow focused on service deployment, data protection, and dependable backup and restore procedures.",
    detail:
      "This treats stored data as critical, covering service setup, database awareness, storage layout, backup scheduling, restore testing, and diagnostics.",
    highlights: ["Database-backed app management", "Recovery-focused backups", "Service logs and storage diagnostics"],
    tech: ["Docker", "PostgreSQL", "Redis", "Restic", "Rclone"],
    status: "Operational",
    icon: Database,
  },
  {
    title: "Automated Backup & Recovery Systems",
    category: "Reliability / Automation",
    description:
      "Backup workflows designed around repeatability, visibility, encryption-aware handling, and restore confidence.",
    detail:
      "The goal is to make backups observable and genuinely recoverable, with attention to retention, remote targets, credentials, and restore checks.",
    highlights: ["Local and remote backup targets", "Restore verification", "Log-driven troubleshooting"],
    tech: ["Restic", "Borg", "Rclone", "Rsync", "Bash", "Scheduling"],
    status: "Ongoing reliability work",
    icon: ShieldCheck,
  },
  {
    title: "Media Download & Archive Automation",
    category: "CLI Automation / Media Tooling",
    description:
      "Repeatable workflows for downloading, organising, and archiving online media with command-line tooling and metadata.",
    detail:
      "The work makes long-running jobs more traceable through archive tracking, logs, metadata output, authentication workflows, and safer pacing.",
    highlights: ["Metadata and archive tracking", "Error logging and batch processing", "Rate-limit aware workflows"],
    tech: ["yt-dlp", "gallery-dl", "Python", "Bash", "uv"],
    status: "Advanced personal tooling",
    icon: Waypoints,
  },
  {
    title: "Local Dataset Search & CLI Tools",
    category: "Data Tooling / CLI Development",
    description:
      "A local data-processing workflow for importing structured datasets into SQLite and building practical search tools.",
    detail:
      "The focus is turning raw data into something locally searchable and useful through repeatable imports, sensible schema design, and clear terminal output.",
    highlights: ["SQLite-backed search", "Repeatable data imports", "Terminal-first presentation"],
    tech: ["Python", "SQLite", "CLI tooling", "Structured datasets"],
    status: "Data tooling project",
    icon: ScanSearch,
  },
  {
    title: "Service Monitoring & Diagnostics Workflows",
    category: "Operations / Troubleshooting",
    description:
      "Practical workflows for understanding service health through logs, container state, network checks, and storage usage.",
    detail:
      "This work focuses on making service behaviour easier to inspect through clear commands, logs, container checks, storage review, and network diagnostics.",
    highlights: ["Docker service diagnostics", "Log collection workflows", "Storage and network checks"],
    tech: ["Docker", "Shell", "Linux", "macOS", "Logs", "Networking"],
    status: "Ongoing practice",
    icon: TerminalSquare,
  },
];

type ExperienceEntry = {
  title: string;
  period: string;
  description: string;
  points: string[];
};

const experience: ExperienceEntry[] = [
  {
    title: "Systems & Homelab Builder",
    period: "Ongoing",
    description:
      "Designing, deploying, and maintaining self-hosted services and automation workflows across containers, storage, media infrastructure, backup tools, and local networks.",
    points: ["Docker service stacks", "Media, photo, backup, and monitoring services", "Storage and restore workflows"],
  },
  {
    title: "Automation & Python Tooling",
    period: "Ongoing",
    description:
      "Building scripts and small tools for file processing, media workflows, video analysis, backups, logs, and command-line automation.",
    points: ["Python automation", "Configuration-driven scripts", "Clear terminal output and logs"],
  },
  {
    title: "Hospitality & Bar Operations",
    period: "8+ years",
    description:
      "Customer-facing and operations experience in fast-paced environments, with team coordination and practical problem-solving under pressure.",
    points: ["Communication", "Service flow and coordination", "Fast practical decisions"],
  },
  {
    title: "Business Project Management",
    period: "Postgraduate background",
    description:
      "Academic grounding in project planning, stakeholder thinking, dependency awareness, risk, and structured execution.",
    points: ["Project planning", "Risk and dependency awareness", "Structured communication"],
  },
  {
    title: "Civil Engineering",
    period: "Bachelor’s background",
    description:
      "Technical academic foundation in engineering principles, analytical thinking, measurement, planning, and practical systems awareness.",
    points: ["Engineering problem-solving", "Analytical thinking", "Systems and constraints"],
  },
];

type Principle = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const approach: Principle[] = [
  {
    title: "Reliable before clever",
    description:
      "A useful system should keep running, be restorable, and remain understandable when something breaks.",
    icon: ShieldCheck,
  },
  {
    title: "Automation with visibility",
    description:
      "Automation should reduce repetitive work while still showing progress, logs, and enough state to debug it.",
    icon: Wrench,
  },
  {
    title: "Practical documentation",
    description:
      "Documentation should explain what runs, why it exists, how to recover it, and where to look when it fails.",
    icon: Code2,
  },
  {
    title: "Modular improvement",
    description:
      "I prefer systems that can be improved piece by piece without destabilising the whole setup.",
    icon: Cable,
  },
];

const stats = [
  { label: "Primary focus", value: "Infrastructure" },
  { label: "Build style", value: "Hands-on" },
  { label: "Project type", value: "Personal / homelab" },
  { label: "Location", value: profile.location },
];

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

type Theme = "light" | "dark";
const themeStorageKey = "theme-preference";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(themeStorageKey);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  muted = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <section id={id} className={muted ? "section-band" : "section-wrap"}>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div {...fadeInUp} className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-300">{description}</p>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

  const isDark = theme === "dark";
  const ThemeIcon = isDark ? Sun : Moon;

  return (
    <div className="min-h-screen text-zinc-900 transition-colors duration-300 dark:text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-[#f7f4ee]/[0.86] backdrop-blur-xl dark:border-white/10 dark:bg-[#111111]/[0.86]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3 text-sm font-semibold text-zinc-950 dark:text-white">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-zinc-950 text-sm text-white dark:bg-white dark:text-zinc-950">
              AT
            </span>
            <span>{profile.name}</span>
          </a>

          <div className="hidden items-center gap-1 rounded-lg border border-zinc-200 bg-white/70 p-1 shadow-sm dark:border-white/10 dark:bg-white/5 lg:flex">
            {profile.nav.map((item) => (
              <a key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="icon-button"
            >
              <ThemeIcon className="h-4 w-4" />
            </button>
            <a href={profile.email} className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Contact</span>
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-24 lg:pt-18">
          <motion.div {...fadeInUp} className="flex flex-col justify-center">
            <p className="eyebrow">{profile.shortTitle}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.03] tracking-tight text-zinc-950 dark:text-white sm:text-6xl">
              A practical portfolio of systems, automation, and technical hobbies.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">{profile.summary}</p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400">{profile.intro}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="primary-button">
                View projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#skills" className="secondary-button">
                See skills
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="stat-tile">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-500">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold text-zinc-950 dark:text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="hero-visual">
            <img src="/images/homelab-workspace.png" alt="A tidy homelab and automation workspace with laptop, compact server, camera module, and storage equipment" className="h-full min-h-[360px] w-full object-cover" />
            <div className="absolute inset-x-4 bottom-4 grid gap-3 rounded-lg border border-white/20 bg-zinc-950/[0.82] p-4 text-white shadow-2xl backdrop-blur md:grid-cols-3">
              {profile.tags.slice(0, 3).map((tag) => (
                <div key={tag} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-teal-300" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <Section
          id="about"
          eyebrow="About"
          title="A technical personal portfolio, not a corporate resume."
          description="Visitors should quickly understand what I enjoy building, how I think about systems, and where my interests sit across infrastructure, automation, media, and reliability."
        >
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {profile.about.map((paragraph) => (
              <motion.article key={paragraph} {...fadeInUp} className="content-panel">
                <p className="text-base leading-8 text-zinc-700 dark:text-zinc-300">{paragraph}</p>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Skills"
          title="Skills and interests by working level."
          description="The focus is honest and practical: tools I use, areas I’m actively building in, and operational skills that support the technical work."
          muted
        >
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skills.map(({ title, level, description, icon: Icon, items }, index) => (
              <motion.article key={title} {...fadeInUp} transition={{ duration: 0.45, delay: index * 0.025, ease: "easeOut" }} className="content-panel">
                <div className="flex items-start justify-between gap-4">
                  <span className="icon-box">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-md bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-800 dark:bg-teal-400/10 dark:text-teal-200">{level}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-zinc-950 dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Projects"
          title="Selected projects and build areas."
          description="These projects show the sort of work behind the portfolio: small systems with real constraints, not polished commercial claims."
        >
          <div className="mt-10 grid gap-4">
            {projects.map(({ title, category, description, detail, highlights, tech, status, icon: Icon }, index) => (
              <motion.article key={title} {...fadeInUp} transition={{ duration: 0.45, delay: index * 0.025, ease: "easeOut" }} className="project-row">
                <div className="flex gap-4">
                  <span className="icon-box shrink-0">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">{category}</p>
                    <h3 className="mt-2 text-xl font-semibold text-zinc-950 dark:text-white">{title}</h3>
                    <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">{description}</p>
                    <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{detail}</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.8fr_0.42fr]">
                  <div>
                    <p className="mini-label">Highlights</p>
                    <div className="mt-3 grid gap-2">
                      {highlights.map((item) => (
                        <p key={item} className="flex gap-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-300" />
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mini-label">Tools</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {tech.map((item) => (
                        <span key={item} className="chip">{item}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mini-label">Status</p>
                    <p className="mt-3 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">{status}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section
          id="background"
          eyebrow="Background"
          title="Technical work shaped by real operational experience."
          description="The site should show the practical side too: planning, communication, troubleshooting, and pressure-tested problem-solving all feed into how I build."
          muted
        >
          <div className="mt-10 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div {...fadeInUp} className="content-panel">
              <div className="flex items-center gap-3">
                <span className="icon-box"><Network className="h-5 w-5" /></span>
                <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">How I work</h3>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {approach.map(({ title, description, icon: Icon }) => (
                  <div key={title} className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-white/10 dark:bg-white/5">
                    <Icon className="h-5 w-5 text-teal-700 dark:text-teal-300" />
                    <h4 className="mt-3 text-sm font-semibold text-zinc-950 dark:text-white">{title}</h4>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-4">
              {experience.map((entry, index) => (
                <motion.article key={entry.title} {...fadeInUp} transition={{ duration: 0.45, delay: index * 0.025, ease: "easeOut" }} className="content-panel">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{entry.title}</h3>
                    <span className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-600 dark:bg-white/10 dark:text-zinc-300">{entry.period}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{entry.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.points.map((point) => (
                      <span key={point} className="chip">{point}</span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </Section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <motion.div {...fadeInUp} className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-950 text-white shadow-xl dark:border-white/10">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
              <div className="max-w-2xl">
                <p className="eyebrow text-teal-300">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">For projects, collaborations, or technical conversations.</h2>
                <p className="mt-4 text-base leading-8 text-zinc-300">
                  I’m interested in practical technical work involving self-hosted systems, automation, media infrastructure, backup workflows, Python tooling, and AI-assisted systems.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <a href={profile.email} className="contact-button"><Mail className="h-4 w-4" />Email</a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="contact-button"><Github className="h-4 w-4" />GitHub</a>
                <a href={profile.twitter} target="_blank" rel="noreferrer" className="contact-button"><Twitter className="h-4 w-4" />Twitter</a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 px-5 py-8 text-center text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-500">
        © 2026 Abu Talha. Built with React, TypeScript and Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
