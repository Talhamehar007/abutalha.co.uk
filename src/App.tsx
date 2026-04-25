import { motion } from "framer-motion";
import {
  ArrowRight,
  Blocks,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  MonitorSmartphone,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const profile = {
  name: "Abu Talha",
  headline: "Software Engineer & Systems-Focused Builder",
  subheadline:
    "I build reliable software, internal tools, automation workflows, and web experiences with a focus on clarity, maintainability, and practical delivery.",
  about: [
    "I am a software-focused builder with a strong interest in practical engineering, thoughtful systems design, and clean implementation. I enjoy turning ideas into usable products and improving the structure, reliability, and maintainability of the software behind them.",
    "My interests sit at the intersection of software engineering, automation, web development, and technical problem-solving. I care about building work that is well-organised, easy to reason about, and genuinely useful once it moves beyond the prototype stage.",
  ],
  highlights: [
    "Software engineering",
    "Web applications",
    "Automation workflows",
    "Systems design",
  ],
  contacts: {
    email: "mailto:abutalha.gb@proton.me",
    github: "https://github.com/Talhamehar007",
    linkedin: "https://www.linkedin.com/in/Talhamehar007/",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ],
};

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

const skills: SkillGroup[] = [
  {
    title: "Software Engineering",
    icon: Code2,
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "API design",
      "Debugging",
      "Refactoring",
      "Testing awareness",
      "Maintainable architecture",
    ],
  },
  {
    title: "Frontend Development",
    icon: MonitorSmartphone,
    items: [
      "React",
      "Tailwind CSS",
      "Responsive UI",
      "Accessible interfaces",
      "Component-driven design",
      "State management",
      "Design implementation",
      "Performance-minded UI work",
    ],
  },
  {
    title: "Backend & Data",
    icon: Database,
    items: [
      "Flask",
      "REST-style services",
      "SQLite",
      "PostgreSQL familiarity",
      "Data processing",
      "Structured logging",
      "Search tooling",
      "Workflow integration",
    ],
  },
  {
    title: "Platform & Delivery",
    icon: ServerCog,
    items: [
      "Docker",
      "Linux environments",
      "Git",
      "CLI tooling",
      "Environment configuration",
      "Deployment workflows",
      "Automation scripting",
      "Operational reliability",
    ],
  },
  {
    title: "Working Style",
    icon: BriefcaseBusiness,
    items: [
      "Clear communication",
      "Structured thinking",
      "Documentation-minded delivery",
      "Practical decision-making",
      "Ownership mentality",
      "Attention to detail",
      "Continuous improvement",
      "Product awareness",
    ],
  },
  {
    title: "Areas of Interest",
    icon: Sparkles,
    items: [
      "Automation",
      "Internal tools",
      "Developer experience",
      "System design",
      "Applied AI features",
      "Workflow optimisation",
      "Reliable software delivery",
      "Thoughtful technical products",
    ],
  },
];

type Project = {
  title: string;
  description: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: "Operations Dashboard Platform",
    description:
      "Built a dashboard-style application focused on surfacing key information clearly, organising workflows, and making operational tasks easier to manage through a structured interface.",
    tech: ["React", "TypeScript", "UI architecture", "Data presentation"],
  },
  {
    title: "Automation & Workflow Tooling",
    description:
      "Created automation-focused tools to reduce repetitive work, improve consistency, and support repeatable processes across day-to-day technical tasks.",
    tech: ["Python", "Scripting", "CLI tooling", "Process automation"],
  },
  {
    title: "Web Application Builds",
    description:
      "Designed and implemented responsive web interfaces with a focus on usability, clean structure, and a polished presentation suitable for real users and real tasks.",
    tech: ["React", "Tailwind CSS", "Responsive design", "UX implementation"],
  },
  {
    title: "Data Processing & Search Utilities",
    description:
      "Built tools for importing, transforming, organising, and querying structured data so that information could be searched, reviewed, and used more effectively.",
    tech: ["Python", "SQLite", "Data processing", "Search workflows"],
  },
];

const approach = [
  {
    title: "Clarity Over Noise",
    description:
      "I prefer software that is understandable, well-structured, and easy for others to work with.",
    icon: Blocks,
  },
  {
    title: "Reliable by Design",
    description:
      "Good systems should behave consistently, handle change well, and remain maintainable over time.",
    icon: ShieldCheck,
  },
  {
    title: "Automation With Intent",
    description:
      "Automation should remove friction and repetition without making a system harder to understand.",
    icon: Workflow,
  },
  {
    title: "Practical Problem-Solving",
    description:
      "I value solutions that fit the real context of the work rather than overcomplicating the implementation.",
    icon: Wrench,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

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
    <motion.div {...fadeInUp} className="max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-300/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
    </motion.div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-sm font-semibold tracking-[0.16em] text-white">
            ABU TALHA
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {profile.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={profile.contacts.email}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:border-white/20 hover:bg-white/8"
          >
            Contact
            <Mail className="h-4 w-4" />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-28 lg:pt-28">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300/80">
              About Me
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-2xl font-medium leading-tight text-slate-200 sm:text-3xl">
              {profile.headline}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {profile.subheadline}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-300 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-200"
              >
                View Work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#skills"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-white/20 hover:bg-white/8"
              >
                Explore Skills
              </a>
            </div>
          </motion.div>

          <motion.aside
            {...fadeInUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 shadow-glow"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Profile Snapshot
            </p>
            <div className="mt-6 space-y-5">
              <div className="border-b border-white/8 pb-5">
                <p className="text-sm text-slate-400">Focus</p>
                <p className="mt-2 text-lg font-medium text-white">
                  Software, systems, automation, and thoughtful digital products.
                </p>
              </div>
              <div className="border-b border-white/8 pb-5">
                <p className="text-sm text-slate-400">Strengths</p>
                <p className="mt-2 text-lg font-medium text-white">
                  Clean implementation, structured thinking, and practical delivery.
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Interests</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="About"
              title="A professional profile built around practical software work"
              description="This site is intended as a concise introduction: who I am, what I focus on, the skills I bring, and the kind of software work I enjoy building."
            />

            <motion.div {...fadeInUp} className="grid gap-5">
              {profile.about.map((paragraph) => (
                <div
                  key={paragraph}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 text-base leading-8 text-slate-300 shadow-glow"
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
            title="A broad but practical software skill set"
            description="My strongest work tends to sit across application development, automation, structured tooling, and the systems thinking needed to keep software dependable."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {skills.map(({ title, icon: Icon, items }, index) => (
              <motion.article
                key={title}
                {...fadeInUp}
                transition={{ duration: 0.45, delay: index * 0.03, ease: "easeOut" }}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-glow"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Icon className="h-5 w-5 text-sky-200" />
                  </span>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Selected Work"
            title="Examples of the kind of software work I build"
            description="These examples are intentionally broad. The goal is to show the kind of problems I enjoy solving without overloading the site with niche implementation detail."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                {...fadeInUp}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6 shadow-glow"
              >
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-sky-300/15 bg-sky-400/10 px-3 py-2 text-sm text-sky-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="approach" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Approach"
            title="How I think about building software"
            description="I prefer work that is deliberate, well-structured, and professionally presented. The best outcomes usually come from balancing technical quality with practical execution."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {approach.map(({ title, description, icon: Icon }, index) => (
              <motion.article
                key={title}
                {...fadeInUp}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-glow"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon className="h-5 w-5 text-sky-200" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 shadow-glow lg:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300/80">
                  Contact
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let&apos;s Connect
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  If you would like to discuss software projects, technical work, or collaboration opportunities, feel free to get in touch.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={profile.contacts.email}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-300 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-200"
                >
                  Email Me
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href={profile.contacts.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:border-white/20 hover:bg-white/8"
                >
                  GitHub
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={profile.contacts.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:border-white/20 hover:bg-white/8"
                >
                  LinkedIn
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/8 px-6 py-8 text-center text-sm text-slate-400 lg:px-8">
        © 2026 Abu Talha. Built with React, TypeScript and Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
