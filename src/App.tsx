import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Cable,
  Camera,
  Code2,
  Database,
  Github,
  HardDrive,
  Linkedin,
  Mail,
  MonitorPlay,
  Moon,
  ScanSearch,
  ServerCog,
  ShieldCheck,
  Sun,
  Waypoints,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const profile = {
  name: "Abu Talha",
  title: "Systems, Automation & Infrastructure Builder",
  shortTitle: "Infrastructure • Automation • Technical Tooling",
  location: "United Kingdom",
  email: "mailto:abutalha.gb@proton.me",
  github: "https://github.com/Talhamehar007",
  linkedin: "https://www.linkedin.com/in/Talhamehar007/",
  summary:
    "I build practical technical systems across infrastructure, automation, backup workflows, media services, and Python-based tooling, with a focus on reliability, maintainability, and real-world use.",
  intro:
    "I work at the intersection of infrastructure, automation, and practical software tooling. Most of my projects begin with an operational problem: making services easier to run, data safer to manage, workflows more reliable, or systems simpler to understand.",
  about: [
    "I’m Abu Talha, a hands-on technical builder focused on infrastructure, automation, storage reliability, media systems, and AI-assisted workflows. I’m most interested in systems that are not only technically interesting, but useful, maintainable, and dependable in day-to-day use.",
    "My work includes containerised service deployments, Linux and macOS workflows, backup and restore planning, media automation, video processing, and Python-based tooling. I tend to work close to the operational layer: logs, configuration, storage, recovery, scheduling, diagnostics, and performance.",
    "I also bring experience from business project management, civil engineering, and hospitality operations. That combination shapes how I approach technical work: with structure, practical constraints, documentation, risk awareness, and a strong preference for systems that can be understood and recovered when needed.",
  ],
  tags: [
    "Infrastructure",
    "Automation",
    "Docker & Linux",
    "Backup Workflows",
    "Media Systems",
    "Python Tooling",
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ],
};

type SkillGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

const skills: SkillGroup[] = [
  {
    title: "Infrastructure & Self-Hosting",
    description:
      "Designing and maintaining self-hosted services, containerised applications, networking workflows, and small-scale service environments.",
    icon: ServerCog,
    items: [
      "Docker",
      "Docker Compose",
      "Linux administration",
      "macOS workflows",
      "Reverse proxy concepts",
      "Local DNS and networking",
      "Service configuration",
      "Logs and diagnostics",
      "System monitoring",
      "Remote access workflows",
    ],
  },
  {
    title: "Backup, Storage & Reliability",
    description:
      "Building backup and storage workflows with a strong focus on recovery, verification, and long-term operational reliability.",
    icon: HardDrive,
    items: [
      "Restic",
      "Borg",
      "Rclone",
      "Rsync",
      "Backup automation",
      "Restore testing",
      "Snapshot workflows",
      "Encrypted backups",
      "Recovery planning",
      "Storage troubleshooting",
    ],
  },
  {
    title: "Media Systems & Automation",
    description:
      "Working with self-hosted media services, download workflows, metadata handling, and repeatable processing pipelines.",
    icon: MonitorPlay,
    items: [
      "Jellyfin",
      "Immich",
      "FFmpeg",
      "MediaMTX",
      "qBittorrent",
      "Radarr",
      "Sonarr",
      "Prowlarr",
      "yt-dlp",
      "gallery-dl",
    ],
  },
  {
    title: "AI, Vision & Python Tooling",
    description:
      "Building practical computer-vision and automation tools using Python, video streams, image processing, and local model workflows.",
    icon: Camera,
    items: [
      "Python",
      "OpenCV",
      "YOLO-based detection",
      "Face detection workflows",
      "Video processing",
      "Image processing",
      "Local AI inference",
      "Structured logging",
      "CLI tools",
      "Processing pipelines",
    ],
  },
  {
    title: "Web, Scripting & Developer Tooling",
    description:
      "Creating dashboards, scripts, and interfaces that make systems easier to operate, inspect, and improve.",
    icon: Code2,
    items: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Flask",
      "Shell scripting",
      "Git",
      "SQLite",
      "REST-style APIs",
      "Configuration design",
      "Developer documentation",
    ],
  },
  {
    title: "Professional & Operational Skills",
    description:
      "Experience that supports clear communication, structured work, practical troubleshooting, and grounded decision-making.",
    icon: BriefcaseBusiness,
    items: [
      "Operational problem-solving",
      "Team coordination",
      "Customer-facing communication",
      "Project planning",
      "Risk awareness",
      "Documentation",
      "Structured troubleshooting",
      "Practical decision-making",
    ],
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
      "A custom video system built around live streams, motion detection, event recording, and computer-vision processing.",
    detail:
      "The work focuses on building a flexible video workflow that can ingest streams, detect activity, capture relevant footage, and expose useful event data through structured logs and future interface layers.",
    highlights: [
      "RTSP stream handling and recording workflows",
      "Python and OpenCV processing with model integration",
      "Retention, metadata, and modular system design",
    ],
    tech: ["Python", "OpenCV", "RTSP", "MediaMTX", "YOLO", "Docker"],
    status: "Active development",
    icon: Camera,
  },
  {
    title: "Self-Hosted Media Infrastructure",
    category: "Media Automation",
    description:
      "A containerised media environment built around organised storage, automated acquisition workflows, and service reliability.",
    detail:
      "The emphasis is on the full operating model rather than just running applications: storage layout, permissions, service networking, logs, restart behaviour, and recovery planning.",
    highlights: [
      "Containerised media service stack",
      "Library organisation and automation workflows",
      "Configuration management and service diagnostics",
    ],
    tech: ["Docker", "Docker Compose", "Jellyfin", "Radarr", "Sonarr", "Prowlarr"],
    status: "Production-style project",
    icon: MonitorPlay,
  },
  {
    title: "Photo Management & Backup Workflow",
    category: "Self-Hosting / Reliability",
    description:
      "A self-hosted photo workflow focused on service deployment, data protection, and dependable backup and restore procedures.",
    detail:
      "This project treats stored data as critical. It includes service setup, database awareness, storage layout, backup scheduling, restore testing, and practical diagnostics around supporting components.",
    highlights: [
      "Database-backed application management",
      "Recovery-focused backup and restore planning",
      "Service logs, storage workflows, and diagnostics",
    ],
    tech: ["Docker", "PostgreSQL", "Redis", "Restic", "Rclone"],
    status: "Operational and continuously improved",
    icon: Database,
  },
  {
    title: "Automated Backup & Recovery Systems",
    category: "Reliability / Automation",
    description:
      "A set of backup workflows designed around repeatability, visibility, encryption-aware handling, and restore confidence.",
    detail:
      "The goal is to make backups observable and genuinely recoverable, with attention to retention, remote targets, credentials, restore checks, and scheduled execution.",
    highlights: [
      "Automated local and remote backup targets",
      "Restore verification and retention awareness",
      "Log-driven troubleshooting and recovery planning",
    ],
    tech: ["Restic", "Borg", "Rclone", "Rsync", "Bash", "Scheduling"],
    status: "Ongoing reliability work",
    icon: ShieldCheck,
  },
  {
    title: "Media Download & Archive Automation",
    category: "CLI Automation / Media Tooling",
    description:
      "Repeatable workflows for downloading, organising, and archiving online media through command-line tooling and structured metadata.",
    detail:
      "This work is about making long-running download jobs more traceable and less fragile through archive tracking, logs, metadata output, and safer configuration choices.",
    highlights: [
      "Metadata and archive tracking",
      "Error logging and batch processing",
      "Authentication and rate-limit aware workflows",
    ],
    tech: ["yt-dlp", "gallery-dl", "Python", "Bash", "uv"],
    status: "Advanced personal tooling",
    icon: Waypoints,
  },
  {
    title: "Local Dataset Search & CLI Tools",
    category: "Data Tooling / CLI Development",
    description:
      "A local data-processing workflow for importing structured datasets into SQLite and building practical command-line search tools.",
    detail:
      "The focus is on turning raw data into something locally searchable and useful through repeatable imports, sensible schema design, and clear terminal output.",
    highlights: [
      "SQLite-backed local search workflows",
      "Repeatable data import and processing",
      "Practical terminal-first tooling",
    ],
    tech: ["Python", "SQLite", "CLI tooling", "Structured datasets"],
    status: "Data tooling project",
    icon: ScanSearch,
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
    title: "Systems & Infrastructure Builder",
    period: "Ongoing",
    description:
      "Designing, deploying, and maintaining service workflows across containerised applications, storage systems, media infrastructure, backup tooling, and local operational environments.",
    points: [
      "Built and maintained Docker-based service stacks",
      "Designed practical backup and restore workflows",
      "Troubleshot service, network, and data issues",
    ],
  },
  {
    title: "Automation & Python Tooling",
    period: "Ongoing",
    description:
      "Building scripts and small tools for file processing, media workflows, diagnostics, backups, logs, and command-line automation.",
    points: [
      "Created Python-based automation workflows",
      "Worked with structured logs and configuration-driven scripts",
      "Focused on maintainability and clear terminal output",
    ],
  },
  {
    title: "Hospitality & Bar Operations",
    period: "8+ years industry experience",
    description:
      "Practical experience in hospitality operations, customer-facing work, team coordination, and fast-paced day-to-day problem-solving.",
    points: [
      "Developed strong communication and operational awareness",
      "Worked effectively in pressure-driven environments",
      "Built practical decision-making and coordination skills",
    ],
  },
  {
    title: "Business Project Management",
    period: "Postgraduate background",
    description:
      "Academic grounding in project planning, risk awareness, stakeholder thinking, and structured execution.",
    points: [
      "Project planning and organisation",
      "Risk and dependency awareness",
      "Structured communication and delivery thinking",
    ],
  },
  {
    title: "Civil Engineering",
    period: "Bachelor’s background",
    description:
      "Technical academic foundation in engineering principles, analytical thinking, planning, and practical systems awareness.",
    points: [
      "Engineering-based problem solving",
      "Analytical and structured thinking",
      "Planning discipline and systems awareness",
    ],
  },
];

type Principle = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const approach: Principle[] = [
  {
    title: "Reliability First",
    description:
      "I care about whether a system can keep running, be restored, and be understood when something goes wrong.",
    icon: ShieldCheck,
  },
  {
    title: "Automation With Visibility",
    description:
      "Automation should reduce repetitive work without becoming a black box. Good logs and inspectable workflows matter.",
    icon: Wrench,
  },
  {
    title: "Performance With Purpose",
    description:
      "Performance matters when it improves the real workflow. I focus on removing bottlenecks where it actually changes outcomes.",
    icon: ArrowRight,
  },
  {
    title: "Practical Documentation",
    description:
      "Documentation does not need to be long. It needs to explain what the system does, how it runs, and how it can be recovered.",
    icon: Code2,
  },
  {
    title: "Modular Improvement",
    description:
      "I prefer systems that can be improved piece by piece without destabilising everything around them.",
    icon: Cable,
  },
  {
    title: "Real-World Constraints",
    description:
      "Every system has limits. Good decisions account for time, storage, cost, complexity, and maintenance from the beginning.",
    icon: BriefcaseBusiness,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
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

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div {...fadeInUp} className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </motion.div>
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
  const themeLabel = isDark ? "Light mode" : "Dark mode";

  return (
    <div className="min-h-screen bg-transparent text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-950/75">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#top"
            className="text-sm font-bold tracking-[0.18em] text-slate-950 dark:text-white"
          >
            ABU TALHA
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {profile.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label={`Switch to ${themeLabel.toLowerCase()}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800"
            >
              <ThemeIcon className="h-4 w-4" />
              <span className="hidden sm:inline">{themeLabel}</span>
            </button>

            <a
              href={profile.email}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800"
            >
              Contact
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-24">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-300">
              {profile.shortTitle}
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-6xl">
              {profile.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {profile.summary}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {profile.intro}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {profile.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.aside
            {...fadeInUp}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_20px_60px_rgba(2,6,23,0.45)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Profile
            </p>

            <div className="mt-6 space-y-6">
              <div className="border-b border-slate-200 pb-5 dark:border-slate-800">
                <p className="text-sm text-slate-500 dark:text-slate-400">Name</p>
                <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
                  {profile.name}
                </p>
              </div>
              <div className="border-b border-slate-200 pb-5 dark:border-slate-800">
                <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
                  {profile.location}
                </p>
              </div>
              <div className="border-b border-slate-200 pb-5 dark:border-slate-800">
                <p className="text-sm text-slate-500 dark:text-slate-400">Focus</p>
                <p className="mt-2 text-base leading-7 text-slate-700 dark:text-slate-300">
                  Infrastructure, automation, reliable service operations, media workflows, and practical technical tooling.
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Working Style</p>
                <p className="mt-2 text-base leading-7 text-slate-700 dark:text-slate-300">
                  Structured, practical, documentation-minded, and focused on systems that remain understandable under real conditions.
                </p>
              </div>
            </div>
          </motion.aside>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <SectionHeading
              eyebrow="About"
              title="Technical work grounded in reliability and practical delivery"
              description="I prefer systems that are useful beyond the prototype stage: understandable to operate, recoverable when needed, and strong enough to support real workflows over time."
            />

            <motion.div {...fadeInUp} className="grid gap-5">
              {profile.about.map((paragraph) => (
                <div
                  key={paragraph}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-6 text-base leading-8 text-slate-700 shadow-[0_20px_50px_rgba(15,23,42,0.04)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:shadow-[0_20px_50px_rgba(2,6,23,0.35)]"
                >
                  {paragraph}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Skills"
            title="Skills & technical focus"
            description="My work is centred around building, running, troubleshooting, and improving real systems. The emphasis is usually on maintainability, transparent automation, and tools that solve specific operational problems."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {skills.map(({ title, description, icon: Icon, items }, index) => (
              <motion.article
                key={title}
                {...fadeInUp}
                transition={{ duration: 0.45, delay: index * 0.03, ease: "easeOut" }}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.04)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_20px_50px_rgba(2,6,23,0.35)]"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-sky-300 dark:text-slate-950">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-300">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Projects"
            title="Selected projects"
            description="These projects reflect the kind of work I enjoy most: practical systems that combine infrastructure, automation, data handling, media workflows, and reliable day-to-day operations."
          />

          <div className="mt-10 grid gap-6">
            {projects.map(
              ({ title, category, description, detail, highlights, tech, status, icon: Icon }, index) => (
                <motion.article
                  key={title}
                  {...fadeInUp}
                  transition={{ duration: 0.45, delay: index * 0.03, ease: "easeOut" }}
                  className="rounded-[1.65rem] border border-slate-200 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.04)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_20px_50px_rgba(2,6,23,0.35)]"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-sky-300 dark:text-slate-950">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">
                            {category}
                          </p>
                          <h3 className="mt-1 text-2xl font-semibold text-slate-950 dark:text-white">
                            {title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-5 text-base leading-7 text-slate-700 dark:text-slate-200">
                        {description}
                      </p>
                      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                        {detail}
                      </p>
                    </div>

                    <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {status}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                        Highlights
                      </p>
                      <div className="mt-3 space-y-3">
                        {highlights.map((item) => (
                          <div key={item} className="flex gap-3 text-slate-700 dark:text-slate-200">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600 dark:bg-sky-300" />
                            <p className="text-base leading-7">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                        Technology
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {tech.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            )}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="Experience & background"
            description="My background combines technical project work with operational environments, structured planning, and practical problem-solving under real constraints."
          />

          <div className="mt-10 space-y-5">
            {experience.map((entry, index) => (
              <motion.article
                key={entry.title}
                {...fadeInUp}
                transition={{ duration: 0.45, delay: index * 0.03, ease: "easeOut" }}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.04)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_20px_50px_rgba(2,6,23,0.35)]"
              >
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                      {entry.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                      {entry.description}
                    </p>
                  </div>
                  <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {entry.period}
                  </div>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {entry.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="approach" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Approach"
            title="How I work"
            description="I prefer practical systems over theoretical perfection. Good technical work should be understandable, recoverable, and useful under real operating conditions."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {approach.map(({ title, description, icon: Icon }, index) => (
              <motion.article
                key={title}
                {...fadeInUp}
                transition={{ duration: 0.45, delay: index * 0.03, ease: "easeOut" }}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.04)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_20px_50px_rgba(2,6,23,0.35)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-sky-300 dark:text-slate-950">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_28px_70px_rgba(15,23,42,0.12)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_28px_70px_rgba(2,6,23,0.45)] lg:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                  Contact
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Let’s Build Something Reliable
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  I’m interested in practical technical work involving infrastructure, automation, media workflows, Python tooling, and AI-assisted systems. For projects, collaborations, or opportunities, feel free to get in touch.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={profile.email}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100"
                >
                  Email Me
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  GitHub
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  LinkedIn
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500 transition-colors duration-300 dark:border-slate-800 dark:text-slate-400 lg:px-8">
        © 2026 Abu Talha. Built with React, TypeScript and Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
