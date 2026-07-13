import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Camera,
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
  role: "Self-hosting, automation and practical technical systems",
  location: "United Kingdom",
  email: "mailto:abutalha.gb@proton.me",
  github: "https://github.com/talhamehar007",
  twitter: "https://twitter.com/talhamehar007",
  intro:
    "I build and maintain practical systems for my own use: self-hosted services, media workflows, backups, small automation tools, and computer-vision experiments.",
  summary:
    "This site gives visitors a clear sense of my technical interests, my current working level, and the kind of practical problems I enjoy solving.",
  nav: [
    { label: "Overview", href: "#overview" },
    { label: "Focus", href: "#focus" },
    { label: "Projects", href: "#projects" },
    { label: "Background", href: "#background" },
    { label: "Contact", href: "#contact" },
  ],
};

type FocusArea = {
  title: string;
  level: string;
  description: string;
  icon: LucideIcon;
  tools: string[];
};

const focusAreas: FocusArea[] = [
  {
    title: "Self-hosted infrastructure",
    level: "Comfortable",
    description:
      "Running Docker-based services, thinking through storage, networking, service configuration, logs and day-to-day maintenance.",
    icon: ServerCog,
    tools: ["Docker", "Docker Compose", "Linux", "macOS", "local networking", "reverse proxy concepts"],
  },
  {
    title: "Backup and recovery",
    level: "Strong interest",
    description:
      "Designing backup routines that are understandable, repeatable and tested enough to be trusted when something goes wrong.",
    icon: HardDrive,
    tools: ["Restic", "Borg", "Rclone", "Rsync", "restore testing", "retention planning"],
  },
  {
    title: "Media and photo systems",
    level: "Practical experience",
    description:
      "Building personal media workflows around storage, metadata, downloads, photo libraries and reliable service operation.",
    icon: MonitorPlay,
    tools: ["Jellyfin", "Immich", "FFmpeg", "qBittorrent", "Radarr", "Sonarr", "Prowlarr"],
  },
  {
    title: "Python automation and vision",
    level: "Actively learning",
    description:
      "Using Python to automate repetitive tasks and explore video processing, camera streams and computer-vision ideas.",
    icon: Camera,
    tools: ["Python", "OpenCV", "YOLO", "RTSP", "CLI tools", "structured logs"],
  },
  {
    title: "Small web and data tools",
    level: "Working level",
    description:
      "Creating small dashboards, scripts and local tools that make systems easier to inspect, search or operate.",
    icon: Code2,
    tools: ["React", "TypeScript", "Tailwind CSS", "Flask", "SQLite", "Git", "shell scripting"],
  },
  {
    title: "Operational thinking",
    level: "Experienced",
    description:
      "Bringing planning, communication and practical problem-solving from hospitality, project management and engineering study.",
    icon: BriefcaseBusiness,
    tools: ["documentation", "planning", "risk awareness", "team coordination", "troubleshooting"],
  },
];

type Project = {
  title: string;
  area: string;
  description: string;
  outcome: string;
  tools: string[];
  status: string;
  icon: LucideIcon;
};

const projects: Project[] = [
  {
    title: "Smart CCTV and video analysis",
    area: "Computer vision",
    description:
      "A personal CCTV-style project exploring live streams, motion detection, event clips and computer-vision processing.",
    outcome:
      "The aim is a video workflow that is understandable and modular: stream handling, recording, useful logs, retention and future dashboard options.",
    tools: ["Python", "OpenCV", "RTSP", "MediaMTX", "YOLO", "Docker"],
    status: "Active build",
    icon: Camera,
  },
  {
    title: "Self-hosted media stack",
    area: "Homelab",
    description:
      "A Docker-based media environment for serving, organising and managing a personal library.",
    outcome:
      "The work is less about running apps for their own sake and more about making the full workflow maintainable: storage layout, permissions, logs and recovery.",
    tools: ["Docker", "Jellyfin", "Radarr", "Sonarr", "Prowlarr", "qBittorrent"],
    status: "In regular use",
    icon: MonitorPlay,
  },
  {
    title: "Photo library and backup routine",
    area: "Data protection",
    description:
      "A self-hosted photo workflow with attention to stored data, database-backed services and restore planning.",
    outcome:
      "The priority is confidence: knowing where data lives, what is backed up, how services depend on each other and how recovery would work.",
    tools: ["Immich", "Docker", "PostgreSQL", "Redis", "Restic", "Rclone"],
    status: "Operational",
    icon: Database,
  },
  {
    title: "Backup automation",
    area: "Reliability",
    description:
      "A set of local and remote backup workflows using tools that support encryption, retention and repeatable restores.",
    outcome:
      "I focus on keeping backups visible and testable rather than treating them as a background task that only gets checked after a failure.",
    tools: ["Restic", "Borg", "Rclone", "Rsync", "Bash", "scheduling"],
    status: "Ongoing",
    icon: ShieldCheck,
  },
  {
    title: "Download and archive workflows",
    area: "Automation",
    description:
      "Command-line workflows for downloading, organising and archiving media with metadata and repeatable configuration.",
    outcome:
      "The goal is traceability: clear logs, archive files, safer pacing and commands that can be rerun without creating a mess.",
    tools: ["yt-dlp", "gallery-dl", "Python", "Bash", "uv"],
    status: "Personal tooling",
    icon: Waypoints,
  },
  {
    title: "Local search and diagnostics tools",
    area: "CLI and operations",
    description:
      "Small scripts and local databases for searching structured data and inspecting service behaviour.",
    outcome:
      "These projects help turn raw files, logs and service state into something easier to understand from the terminal.",
    tools: ["Python", "SQLite", "Docker", "shell", "logs", "networking"],
    status: "Ongoing practice",
    icon: ScanSearch,
  },
];

type BackgroundItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const background: BackgroundItem[] = [
  {
    title: "Hands-on technical learning",
    description:
      "Most of my technical progress comes from building systems I actually use, then improving them when real constraints show up.",
    icon: Wrench,
  },
  {
    title: "Hospitality operations",
    description:
      "Years in customer-facing environments shaped how I communicate, stay organised and solve practical problems under pressure.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Project management",
    description:
      "My postgraduate background helps me think about scope, risk, dependencies and clear delivery rather than only the technical details.",
    icon: Network,
  },
  {
    title: "Engineering foundation",
    description:
      "Civil engineering study gave me a structured way to think about systems, constraints, measurement and trade-offs.",
    icon: TerminalSquare,
  },
];

const principles = [
  "Prefer simple systems that can be understood later.",
  "Automate repetitive work, but keep logs and visibility.",
  "Treat backup and recovery as part of the design, not an afterthought.",
  "Use tools because they solve the problem, not because they look impressive.",
];

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.42, ease: "easeOut" as const },
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
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div {...fadeInUp} className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          <p className="section-copy">{description}</p>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

  const isDark = theme === "dark";
  const ThemeIcon = isDark ? Sun : Moon;

  return (
    <div className="min-h-screen text-stone-950 transition-colors duration-300 dark:text-stone-100">
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#11100e]/88">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3 text-sm font-semibold text-stone-950 dark:text-white">
            <span className="brand-mark">AT</span>
            <span>{profile.name}</span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {profile.nav.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
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
            <a href={profile.email} className="header-contact">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Contact</span>
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:pb-20 lg:pt-16">
          <motion.div {...fadeInUp} className="self-center">
            <p className="eyebrow">{profile.role}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-stone-950 dark:text-white sm:text-6xl">
              Building useful systems, one practical problem at a time.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 dark:text-stone-300">{profile.intro}</p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-stone-600 dark:text-stone-400">{profile.summary}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="primary-button">
                View projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#focus" className="secondary-button">
                See focus areas
              </a>
            </div>
          </motion.div>

          <motion.aside {...fadeInUp} className="hero-panel">
            <img
              src="/images/homelab-workspace.png"
              alt="A tidy personal technical workspace with a laptop, storage hardware and camera module"
              className="h-72 w-full object-cover sm:h-80 lg:h-96"
            />
            <div className="border-t border-stone-200 bg-white p-5 dark:border-white/10 dark:bg-[#171614]">
              <p className="text-sm font-semibold text-stone-950 dark:text-white">What this site is about</p>
              <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">
                A friendly snapshot of my technical interests, personal projects and current working level.
              </p>
            </div>
          </motion.aside>
        </section>

        <Section
          id="overview"
          eyebrow="Overview"
          title="A personal technical profile with a practical focus."
          description="This is a personal technical profile rather than a formal CV. It gives a clear record of the systems I like building, the tools I use, and the way I approach technical learning."
        >
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {principles.map((item, index) => (
              <motion.div key={item} {...fadeInUp} transition={{ duration: 0.42, delay: index * 0.03, ease: "easeOut" }} className="statement-card">
                <span className="statement-number">{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="focus"
          eyebrow="Focus areas"
          title="What I spend time learning and building."
          description="These are the areas I return to most often. Some are stronger than others, but all of them are grounded in hands-on projects rather than abstract interest."
        >
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {focusAreas.map(({ title, level, description, icon: Icon, tools }, index) => (
              <motion.article key={title} {...fadeInUp} transition={{ duration: 0.42, delay: index * 0.025, ease: "easeOut" }} className="focus-card">
                <div className="flex items-start gap-4">
                  <span className="icon-box">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-stone-950 dark:text-white">{title}</h3>
                      <span className="level-label">{level}</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-400">{description}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span key={tool} className="tool-pill">{tool}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Projects"
          title="Selected personal projects."
          description="The projects below are examples of the kind of work I enjoy: services that need to keep running, workflows that should be repeatable, and tools that make everyday technical tasks easier."
        >
          <div className="mt-10 grid gap-5">
            {projects.map(({ title, area, description, outcome, tools, status, icon: Icon }, index) => (
              <motion.article key={title} {...fadeInUp} transition={{ duration: 0.42, delay: index * 0.025, ease: "easeOut" }} className="project-card">
                <div className="grid gap-5 lg:grid-cols-[1fr_1.35fr] lg:items-start">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="icon-box">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="project-area">{area}</p>
                        <h3 className="mt-1 text-xl font-semibold text-stone-950 dark:text-white">{title}</h3>
                      </div>
                    </div>
                    <p className="mt-5 inline-flex rounded-md border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-semibold text-stone-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-stone-300">
                      {status}
                    </p>
                  </div>

                  <div>
                    <p className="text-base leading-7 text-stone-700 dark:text-stone-300">{description}</p>
                    <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-400">{outcome}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {tools.map((tool) => (
                        <span key={tool} className="tool-pill">{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section
          id="background"
          eyebrow="Background"
          title="The practical side matters too."
          description="My technical work is shaped by more than tools. Planning, service work, communication and structured problem-solving all influence how I approach projects."
        >
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {background.map(({ title, description, icon: Icon }, index) => (
              <motion.article key={title} {...fadeInUp} transition={{ duration: 0.42, delay: index * 0.03, ease: "easeOut" }} className="background-card">
                <Icon className="h-5 w-5 text-emerald-700 dark:text-emerald-300" />
                <h3 className="mt-4 text-lg font-semibold text-stone-950 dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-400">{description}</p>
              </motion.article>
            ))}
          </div>
        </Section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <motion.div {...fadeInUp} className="contact-panel">
            <div className="max-w-2xl">
              <p className="eyebrow text-emerald-200">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Feel free to reach out.
              </h2>
              <p className="mt-4 text-base leading-8 text-stone-300">
                I’m always interested in practical conversations around self-hosting, automation, backups, media workflows and small technical tools.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a href={profile.email} className="contact-button"><Mail className="h-4 w-4" />Email</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="contact-button"><Github className="h-4 w-4" />GitHub</a>
              <a href={profile.twitter} target="_blank" rel="noreferrer" className="contact-button"><Twitter className="h-4 w-4" />Twitter</a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-stone-200 px-5 py-8 text-center text-sm text-stone-500 dark:border-white/10 dark:text-stone-500">
        © 2026 Abu Talha. Built with React, TypeScript and Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
