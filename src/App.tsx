import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Camera,
  Check,
  ChevronDown,
  Code2,
  Copy,
  Database,
  Github,
  HardDrive,
  Mail,
  MapPin,
  Menu,
  Moon,
  Search,
  Server,
  Sun,
  Terminal,
  X,
} from "lucide-react";

const profile = {
  email: "abutalha.gb@proton.me",
  github: "https://github.com/talhamehar007",
  twitter: "https://twitter.com/talhamehar007",
};
const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Now", href: "#now" },
];
type Category = "All" | "Homelab" | "Automation" | "Computer vision";
const categories: Category[] = [
  "All",
  "Homelab",
  "Automation",
  "Computer vision",
];
const projects = [
  {
    title: "A little home on my own server",
    category: "Homelab" as Category,
    status: "IN EVERYDAY USE",
    description:
      "My self-hosted media corner. Movies, shows, and the surprisingly interesting problem of getting everything to play nicely together.",
    tools: ["Docker", "Jellyfin", "Linux"],
    icon: Server,
    visual: "homelab",
    detail:
      "Built around Jellyfin, Radarr, Sonarr, Prowlarr, and qBittorrent. Most of the learning happens between the apps: storage layouts, permissions, networking, and working out what a log is trying to tell me.",
  },
  {
    title: "Teaching a camera to notice things",
    category: "Computer vision" as Category,
    status: "WORK IN PROGRESS",
    description:
      "An experiment in turning camera streams into useful events. Exploring motion detection, recordings, and how computers make sense of video.",
    tools: ["Python", "OpenCV", "YOLO"],
    icon: Camera,
    visual: "vision",
    detail:
      "An active personal build using RTSP streams and MediaMTX, with OpenCV and YOLO experiments. I’m figuring out the pieces one at a time: stream handling, event clips, retention, and logs that help when something breaks.",
  },
  {
    title: "Backups I can actually trust",
    category: "Automation" as Category,
    status: "ALWAYS IMPROVING",
    description:
      "Small scripts with an important job: keeping my data safe, making backups repeatable, and remembering to test the restore.",
    tools: ["Restic", "Rclone", "Bash"],
    icon: HardDrive,
    visual: "backup",
    detail:
      "Local and remote backup workflows with Restic, Borg, Rclone, and Rsync. I’m interested in encryption, sensible retention, and making it obvious what ran and what didn’t. A backup is much more reassuring after a restore test.",
  },
  {
    title: "A home for my photo library",
    category: "Homelab" as Category,
    status: "IN EVERYDAY USE",
    description:
      "Organising a personal photo collection with Immich, and learning how the photos, database, and backups fit together.",
    tools: ["Immich", "PostgreSQL", "Docker"],
    icon: Database,
    visual: "photos",
    detail:
      "Running Immich with PostgreSQL and Redis, with Restic and Rclone in the backup workflow. The part I care about most is understanding where the data lives and how I would recover the whole service.",
  },
  {
    title: "Scripts for the repetitive stuff",
    category: "Automation" as Category,
    status: "PERSONAL TOOLING",
    description:
      "Command-line helpers for downloading, organising, and archiving media. A few less manual steps, a few more useful logs.",
    tools: ["Python", "yt-dlp", "Bash"],
    icon: Terminal,
    visual: "scripts",
    detail:
      "Personal workflows built with yt-dlp, gallery-dl, Python, Bash, and uv. I’m working towards commands that can be run again without duplicating everything, with archive files, metadata, and clear output.",
  },
  {
    title: "Making sense of the messy bits",
    category: "Automation" as Category,
    status: "ONGOING EXPERIMENTS",
    description:
      "Little search tools and local databases that turn a pile of files, logs, or service information into something I can actually use.",
    tools: ["Python", "SQLite", "Shell"],
    icon: Search,
    visual: "search",
    detail:
      "Small local experiments in searching structured data and inspecting how services behave. Mostly Python, SQLite, shell commands, and a reason to understand a little more about Docker and networking.",
  },
];

function ProjectArt({ kind }: { kind: string }) {
  if (kind === "homelab")
    return (
      <div className="project-art lab-art" aria-hidden="true">
        <div className="lab-node">
          <Server size={22} />
          <span>my homelab</span>
        </div>
        <div className="lab-connections" />
        <div className="lab-services">
          <span>media</span>
          <span>photos</span>
          <span>backups</span>
        </div>
        <span className="art-small-label">A LITTLE SELF-HOSTED WORLD</span>
      </div>
    );
  if (kind === "vision")
    return (
      <div className="project-art vision-art" aria-hidden="true">
        <div className="vision-cross cross-one" />
        <div className="vision-cross cross-two" />
        <div className="detect-box">
          <span>curiosity detected</span>
          <Camera size={36} strokeWidth={1} />
          <i />
        </div>
        <span className="art-small-label">
          COMPUTER VISION / CONCEPT SKETCH
        </span>
      </div>
    );
  if (kind === "backup")
    return (
      <div className="project-art backup-art" aria-hidden="true">
        <div className="backup-terminal">
          <span>
            <i>~</i> $ backup --and-verify
          </span>
          <span>
            <Check size={12} /> save the important stuff
          </span>
          <span>
            <Check size={12} /> check it’s really there
          </span>
          <span>
            <Check size={12} /> breathe a little easier
          </span>
        </div>
        <span className="art-small-label">A SIMPLE IDEA. A USEFUL HABIT.</span>
      </div>
    );
  const Icon =
    kind === "photos" ? Database : kind === "scripts" ? Terminal : Search;
  return (
    <div
      className={`project-art small-project-art ${kind}-art`}
      aria-hidden="true"
    >
      <Icon size={36} strokeWidth={1.2} />
      <span>
        {kind === "photos"
          ? "memories, with a backup plan"
          : kind === "scripts"
            ? "less repetition. more automation."
            : "a little order in the noise"}
      </span>
    </div>
  );
}

type Theme = "light" | "dark";
function initialTheme(): Theme {
  try {
    return localStorage.getItem("theme-preference") === "dark"
      ? "dark"
      : "light";
  } catch {
    return "light";
  }
}

function App() {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState<Category>("All");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const visibleProjects = projects.filter(
    (project) => category === "All" || project.category === category,
  );
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
  }
  useEffect(() => {
    if (copyStatus === "idle") return;
    const timeout = window.setTimeout(() => setCopyStatus("idle"), 4000);
    return () => window.clearTimeout(timeout);
  }, [copyStatus]);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme-preference", theme);
    } catch {
      /* Theme still works without storage. */
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#191c18" : "#f8f7f2");
  }, [theme]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="wordmark" href="#top" aria-label="Abu Talha, home">
            abu<span className="wordmark-dot">.</span>
            <span className="wordmark-slash">/</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a href="#contact" className="header-hello">
              Say hello <ArrowUpRight size={16} />
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="mobile-nav shell"
            aria-label="Mobile navigation"
          >
            {[...navigation, { label: "Say hello", href: "#contact" }].map(
              (item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                  <ArrowUpRight size={16} />
                </a>
              ),
            )}
          </nav>
        )}
      </header>
      <main id="main">
        <div id="top" />
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> HOBBYIST CODER. LIFELONG TINKERER.
            </p>
            <h1 id="hero-title">
              Hey, I’m Abu.
              <br />I build things
              <br />
              <em>out of curiosity.</em>
            </h1>
            <p className="hero-description">
              A computer science enthusiast based in London, following
              interesting ideas down the rabbit hole. Usually writing Python,
              tinkering with my homelab, or figuring out how something works.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button button-dark">
                Explore my projects <ArrowUpRight size={18} />
              </a>
              <a
                href={profile.github}
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} /> GitHub <ArrowUpRight size={14} />
              </a>
            </div>
            <p className="hero-footnote">
              <span className="tiny-plus">+</span> Built for the fun of figuring
              it out.
            </p>
          </div>
          <div className="hero-art">
            <div className="orbit-label">
              <span /> a work in progress, like me
            </div>
            <div className="code-window">
              <div className="window-bar">
                <span className="window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>about_me.py</span>
                <Code2 size={15} />
              </div>
              <div className="code-body">
                <p className="code-comment"># a little bit about me</p>
                <pre>
                  <code>
                    <span className="code-purple">class</span>{" "}
                    <span className="code-yellow">Abu</span>:{"\n"}
                    {"    "}location ={" "}
                    <span className="code-green">"London"</span>
                    {"\n"}
                    {"    "}approach ={" "}
                    <span className="code-green">"learn by building"</span>
                    {"\n\n"}
                    {"    "}interests = [{"\n"}
                    {"        "}
                    <span className="code-green">
                      "code & little automations"
                    </span>
                    ,{"\n"}
                    {"        "}
                    <span className="code-green">"self-hosted everything"</span>
                    ,{"\n"}
                    {"        "}
                    <span className="code-green">"how computers see"</span>
                    {"\n"}
                    {"    "}]{"\n\n"}
                    {"    "}
                    <span className="code-purple">def</span>{" "}
                    <span className="code-yellow">keep_learning</span>(self):
                    {"\n"}
                    {"        "}
                    <span className="code-purple">return</span>{" "}
                    <span className="code-green">
                      "try, break, fix, repeat"
                    </span>
                  </code>
                </pre>
              </div>
              <div className="terminal-line">
                <span>❯</span> python about_me.py{" "}
                <span className="terminal-cursor" aria-hidden="true" />
              </div>
            </div>
            <div className="curiosity-sticker">
              <span aria-hidden="true">✳</span>
              <span>
                Powered by
                <br />
                <strong>curiosity.</strong>
              </span>
            </div>
            <p className="art-caption">
              LESS THEORY. MORE “LET’S TRY IT.” <ArrowDown size={13} />
            </p>
          </div>
        </section>
        <div className="interest-strip">
          <div className="shell interest-strip-inner">
            <span className="strip-label">MY KIND OF RABBIT HOLES</span>
            <div>
              <span>Python</span>
              <i>✳</i>
              <span>Linux</span>
              <i>✳</i>
              <span>Self-hosting</span>
              <i>✳</i>
              <span>Computer vision</span>
              <i>✳</i>
              <span>Small web things</span>
            </div>
          </div>
        </div>

        <section
          id="about"
          className="section-space shell about-section"
          aria-labelledby="about-title"
        >
          <div className="about-heading">
            <p className="section-kicker">
              <span>01 /</span> THE PERSON BEHIND THE TERMINAL
            </p>
            <h2 id="about-title">
              Just a person <br />
              who likes <em>computers.</em>
            </h2>
            <div className="about-note">
              <Code2 size={20} strokeWidth={1.5} />
              <span>Always a beginner at something.</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="lead-copy">
              I’m Abu Talha. Coding is what I do when an idea won’t leave me
              alone.
            </p>
            <p>
              I like making things for my own little corner of the world: a
              service running at home, a script that saves a bit of time, or an
              experiment that helps me understand something new. The process is
              half the fun.
            </p>
            <p>
              My background includes civil engineering, project management, and
              hospitality. These days, a lot of my learning happens at a
              terminal—building things I use, getting stuck, and working out the
              next step.
            </p>
            <div className="about-values">
              <span>
                <i>01</i> Follow the curiosity
              </span>
              <span>
                <i>02</i> Learn by doing
              </span>
              <span>
                <i>03</i> Keep it useful
              </span>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="projects-section section-space"
          aria-labelledby="projects-title"
        >
          <div className="shell">
            <div className="section-heading-row">
              <div>
                <p className="section-kicker">
                  <span>02 /</span> THINGS I’VE BEEN TINKERING WITH
                </p>
                <h2 id="projects-title">
                  From my <em>workbench.</em>
                </h2>
              </div>
              <a
                className="text-link section-github"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Find me on GitHub <ArrowUpRight size={16} />
              </a>
            </div>
            <p className="section-intro">
              Personal projects, useful little tools, and a few ongoing rabbit
              holes.
            </p>
            <div className="filter-row">
              <div
                className="project-filters"
                role="group"
                aria-label="Filter projects by interest"
              >
                {categories.map((item) => (
                  <button
                    type="button"
                    key={item}
                    aria-pressed={category === item}
                    className={category === item ? "filter active" : "filter"}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <span className="project-count" role="status" aria-live="polite">
                {visibleProjects.length}{" "}
                {visibleProjects.length === 1 ? "project" : "projects"}
              </span>
            </div>
            <div className="project-grid">
              {visibleProjects.map(
                ({
                  title,
                  description,
                  tools,
                  status,
                  detail,
                  visual,
                  icon: Icon,
                }) => (
                  <article className="project-card" key={title}>
                    <ProjectArt kind={visual} />
                    <div className="project-content">
                      <p className="project-status">
                        <span className="status-dot" />
                        {status}
                      </p>
                      <h3>{title}</h3>
                      <p className="project-description">{description}</p>
                      <div className="tool-tags">
                        {tools.map((tool) => (
                          <span key={tool}>{tool}</span>
                        ))}
                      </div>
                      <details className="project-details">
                        <summary>
                          <span>
                            <Icon size={14} /> A few project notes
                          </span>
                          <ChevronDown size={15} />
                        </summary>
                        <p>{detail}</p>
                      </details>
                    </div>
                  </article>
                ),
              )}
            </div>
            <p className="workbench-footnote">
              <Terminal size={14} /> Some things are finished. Most things are
              an excuse to learn something.
            </p>
          </div>
        </section>

        <section
          id="now"
          className="section-space shell now-section"
          aria-labelledby="now-title"
        >
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">
                <span>03 /</span> A SMALL SNAPSHOT
              </p>
              <h2 id="now-title">
                On my mind <em>lately.</em>
              </h2>
            </div>
            <span className="now-tag">
              <span className="status-dot" /> STILL FIGURING THINGS OUT
            </span>
          </div>
          <div className="now-grid">
            <article className="now-card now-learning">
              <span className="now-label">
                <Code2 size={16} /> LEARNING
              </span>
              <h3>
                Going a little deeper <br />
                with Python.
              </h3>
              <p>
                Better scripts, clearer logs, and understanding the code behind
                the thing that finally works.
              </p>
              <span className="note-footer">
                one small experiment at a time <ArrowUpRight size={15} />
              </span>
            </article>
            <article className="now-card now-building">
              <span className="now-label">
                <Camera size={16} /> EXPLORING
              </span>
              <h3>
                Seeing the world <br />
                through code.
              </h3>
              <p>
                Camera streams, OpenCV, and the interesting gap between a frame
                of video and a useful event.
              </p>
              <a
                className="note-footer"
                href="#projects"
                onClick={() => setCategory("Computer vision")}
              >
                visit the workbench <ArrowUpRight size={15} />
              </a>
            </article>
            <article className="now-card now-tinkering">
              <span className="now-label">
                <Server size={16} /> TINKERING
              </span>
              <h3>
                There’s always <br />
                one more container.
              </h3>
              <p>
                Keeping the homelab useful, the backups understandable, and the
                temptation to overcomplicate it in check.
              </p>
              <a
                className="note-footer"
                href="#projects"
                onClick={() => setCategory("Homelab")}
              >
                visit the homelab projects <ArrowUpRight size={15} />
              </a>
            </article>
          </div>
        </section>

        <section
          id="contact"
          className="shell contact-section"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="section-kicker">
              <span>04 /</span> GOOD CONVERSATIONS START SOMEWHERE
            </p>
            <h2 id="contact-title">
              Got an interesting
              <br />
              <em>rabbit hole?</em>
            </h2>
            <p>
              A project, a question, or something cool you found.
              <br className="desktop-break" /> I’m always up for a good nerdy
              conversation.
            </p>
          </div>
          <div className="contact-actions">
            <a
              className="button contact-button"
              href={`mailto:${profile.email}`}
            >
              Say hello <ArrowUpRight size={19} />
            </a>
            <div className="email-row">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                title="Copy email address"
              >
                {copyStatus === "copied" ? (
                  <Check size={15} />
                ) : (
                  <Copy size={15} />
                )}
              </button>
            </div>
            <span className="copy-status" role="status" aria-live="polite">
              {copyStatus === "copied"
                ? "Email address copied."
                : copyStatus === "failed"
                  ? "Please select the email address to copy it."
                  : ""}
            </span>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <div className="footer-top">
          <a className="wordmark" href="#top" aria-label="Back to top">
            abu<span className="wordmark-dot">.</span>
            <span className="wordmark-slash">/</span>
          </a>
          <p>A little code. A lot of curiosity.</p>
          <div className="footer-links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub <ArrowUpRight size={13} />
            </a>
            <a href={profile.twitter} target="_blank" rel="noopener noreferrer">
              X / Twitter <ArrowUpRight size={13} />
            </a>
            <a href={`mailto:${profile.email}`}>
              <Mail size={14} /> Email
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Abu Talha. Made with curiosity.
          </span>
          <span>
            <MapPin size={12} /> Based in London
          </span>
          <a href="#top">
            Back to top <ArrowRight className="back-arrow" size={13} />
          </a>
        </div>
      </footer>
    </>
  );
}
export default App;
