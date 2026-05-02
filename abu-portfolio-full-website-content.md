# Abu Talha Portfolio Website Rewrite

Use this to rewrite the full portfolio website content. Keep the tone professional, practical, technical, and credible. Avoid gimmicky wording, exaggerated claims, private infrastructure details, exact hardware specs, IP addresses, personal domains, or sensitive operational information.

## Global Profile Content

```ts
const profile = {
  name: "Abu Talha",
  title: "Systems, Automation & Self-Hosted Infrastructure Builder",
  shortTitle: "Infrastructure • Automation • AI Workflows",
  location: "United Kingdom",
  email: "hello@example.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  summary:
    "I build practical systems across self-hosted infrastructure, automation, media services, backup workflows, and AI-assisted tooling. My work focuses on reliability, maintainability, and solving real-world technical problems.",
};
```

Replace the contact links later with real public links.

---

# Navigation

- About
- Skills
- Projects
- Experience
- Approach
- Contact

---

# Hero Section

## Headline

Systems, Automation & Self-Hosted Infrastructure Builder

## Subheadline

I design and build practical technical systems across Docker, Linux, macOS, backup automation, media infrastructure, computer vision, and self-hosted services — with a focus on reliability, performance, and real-world usability.

## Short Intro

I work at the intersection of infrastructure, automation, and practical software tooling. My projects usually start from a real operational problem: storing data safely, making services reliable, processing media efficiently, automating repetitive workflows, or building tools that make systems easier to manage.

## Buttons

Primary:
View Projects

Secondary:
Contact Me

## Hero Tags

- Self-Hosted Systems
- Docker & Linux
- Automation
- Backup Workflows
- Media Infrastructure
- Computer Vision

---

# About Section

## Heading

About Me

## Main Copy

I’m Abu Talha, a hands-on technical builder focused on self-hosted infrastructure, automation, storage reliability, media systems, and AI-assisted workflows. I enjoy building systems that are not just interesting technically, but useful, maintainable, and reliable in everyday use.

My work includes Docker-based service deployments, Linux and macOS server workflows, local networking, backup and restore planning, media automation, video processing, and Python-based tooling. I often work close to the system level: logs, storage paths, service configuration, database recovery, scheduled jobs, and performance tuning.

I also have a background in business project management, civil engineering, and hospitality operations. That combination shapes how I approach technical work. I care about structure, documentation, risk, practical constraints, and making sure a system can be understood and recovered when something goes wrong.

## Short About Version

I build practical infrastructure and automation systems, with a focus on self-hosting, backups, media workflows, computer vision, and reliable service operations. My background combines technical project work with business project management, civil engineering, and hospitality operations, giving me a grounded and operational approach to problem-solving.

---

# Skills Section

## Heading

Skills & Technical Focus

## Intro

My skills are centred around building, running, troubleshooting, and improving real systems. I focus on infrastructure that can be maintained, automation that is transparent, and tools that solve specific problems.

## Skill Group 1: Infrastructure & Self-Hosting

Description:
Designing and maintaining self-hosted services, containerised applications, local networks, and small-scale server environments.

Skills:
- Docker
- Docker Compose
- Linux server administration
- macOS service workflows
- Raspberry Pi deployments
- Homelab infrastructure
- Reverse proxy concepts
- Local DNS and networking
- Service configuration
- Logs and diagnostics
- System monitoring
- Remote access workflows

## Skill Group 2: Backup, Storage & Reliability

Description:
Building backup workflows and storage processes with a strong focus on recovery, verification, and long-term reliability.

Skills:
- Restic
- Borg
- Rclone
- Rsync
- Backup automation
- Restore testing
- Snapshot workflows
- External storage management
- Encrypted backups
- Scheduled jobs
- Data migration
- Recovery planning
- Storage troubleshooting

## Skill Group 3: Media Systems & Automation

Description:
Working with self-hosted media services, download automation, metadata workflows, and video processing pipelines.

Skills:
- Jellyfin
- Immich
- FFmpeg
- Frigate
- MediaMTX
- RTSP workflows
- qBittorrent
- Radarr
- Sonarr
- Prowlarr
- yt-dlp
- gallery-dl
- Metadata handling
- Media library organisation

## Skill Group 4: AI, Computer Vision & Python Tooling

Description:
Building practical computer-vision and automation tools using Python, model inference, video streams, and image processing workflows.

Skills:
- Python
- OpenCV
- YOLO-based detection
- Face detection workflows
- Video processing
- Motion detection concepts
- Image processing
- Local AI inference
- ONNX awareness
- Apple Silicon acceleration awareness
- CLI tools
- Structured logging
- Multithreaded processing concepts

## Skill Group 5: Web, Scripting & Developer Tooling

Description:
Creating small tools, dashboards, scripts, and interfaces that make systems easier to operate and understand.

Skills:
- React
- TypeScript
- Tailwind CSS
- Flask
- Shell scripting
- Git
- SQLite
- REST-style APIs
- CLI design
- Configuration files
- Automation scripts
- Developer documentation

## Skill Group 6: Professional & Operational Skills

Description:
Experience from hospitality, business project management, and engineering that supports clear communication, structured work, and practical decision-making.

Skills:
- Operational problem-solving
- Team coordination
- Customer-facing experience
- Bar and hospitality operations
- Stock and process awareness
- Project planning
- Risk thinking
- Documentation
- Communication
- Structured troubleshooting
- Practical decision-making

---

# Projects Section

## Heading

Selected Projects

## Intro

These projects reflect the type of work I enjoy: practical systems that combine infrastructure, automation, storage, media processing, and reliable operations.

---

## Project 1

Title:
Smart CCTV & Computer Vision System

Category:
Computer Vision / Video Infrastructure

Description:
A custom CCTV-style system designed around live video streams, motion detection, event recording, and computer-vision processing. The project explores practical video workflows using camera streams, RTSP, Python, OpenCV, and object or face detection models.

Detailed Copy:
The goal is to build a flexible video system that can capture streams, detect activity, record relevant clips, keep continuous footage where needed, and expose useful event information through logs or a future dashboard. The project prioritises reliability, reconnect behaviour, clear metadata, and modular design so each part can be improved without breaking the whole system.

Highlights:
- RTSP-based camera stream handling
- Motion-triggered and continuous recording concepts
- Python and OpenCV video processing
- Computer-vision model integration
- Event metadata and logging
- Retention and storage planning
- Future web dashboard direction

Tech:
Python, OpenCV, RTSP, MediaMTX, YOLO, Linux, Docker

Status:
Active development

---

## Project 2

Title:
Self-Hosted Media Infrastructure

Category:
Homelab / Media Automation

Description:
A self-hosted media environment built around containerised services, organised storage, automated media workflows, and remote-friendly access patterns.

Detailed Copy:
This project brings together media serving, download management, library organisation, and supporting services into a maintainable Docker-based stack. The focus is not just running applications, but making the full workflow reliable: storage layout, permissions, service networking, logs, restart behaviour, and recovery planning.

Highlights:
- Containerised media services
- Organised media library structure
- Download and indexing workflows
- Service-to-service networking
- External storage planning
- Configuration management
- Troubleshooting through logs and service state

Tech:
Docker, Docker Compose, Jellyfin, qBittorrent, Radarr, Sonarr, Prowlarr

Status:
Production-style homelab project

---

## Project 3

Title:
Photo Management & Backup Workflow

Category:
Self-Hosting / Backup Systems

Description:
A self-hosted photo management workflow focused on photo storage, database-backed services, machine-learning features, and reliable backup and restore procedures.

Detailed Copy:
This project focuses on running a modern photo management service while treating the data as critical. It includes service deployment, database awareness, storage layout, backup scheduling, restore testing, and troubleshooting around application services and supporting components.

Highlights:
- Self-hosted photo library service
- Database-backed application management
- Backup and restore planning
- External storage workflows
- Service logs and diagnostics
- Recovery-focused thinking
- Long-term data protection

Tech:
Docker, PostgreSQL, Redis, Restic, Rclone, Linux/macOS workflows

Status:
Operational and continuously improved

---

## Project 4

Title:
Automated Backup & Recovery Systems

Category:
Reliability / Automation

Description:
A set of backup workflows using modern backup tools, cloud remotes, local repositories, encryption-aware password handling, and scheduled automation.

Detailed Copy:
The aim is to make backups repeatable, observable, and recoverable. This includes choosing the right tool for each situation, designing retention policies, handling remote storage, managing credentials safely, and verifying that data can actually be restored when needed.

Highlights:
- Automated scheduled backups
- Local and remote backup targets
- Restore verification
- Encrypted backup workflows
- Log-driven troubleshooting
- Retention and pruning awareness
- Disaster recovery thinking

Tech:
Restic, Borg, Rclone, Rsync, Bash, launchd, system scheduling

Status:
Reliability-focused ongoing work

---

## Project 5

Title:
Media Download & Archive Automation

Category:
CLI Automation / Media Tooling

Description:
Automation workflows for downloading, organising, and archiving online media using command-line tools, metadata capture, logs, archives, and rate-limit aware settings.

Detailed Copy:
This project focuses on building repeatable download workflows that are structured, traceable, and less fragile. It includes metadata files, archive tracking, browser-cookie integration, error logs, and safer pacing options for long-running download jobs.

Highlights:
- Repeatable CLI workflows
- Metadata and archive tracking
- Error log handling
- Browser-cookie based authentication workflows
- Rate-limit aware configuration
- Batch processing
- Clear command structure

Tech:
yt-dlp, gallery-dl, Python, Bash, uv

Status:
Advanced personal tooling

---

## Project 6

Title:
Local Dataset Search & CLI Tools

Category:
Data Tooling / CLI Development

Description:
A local data-processing workflow for importing large public datasets into SQLite and creating fast command-line search tools.

Detailed Copy:
This project is about turning large raw datasets into something searchable and useful locally. It includes parsing structured files, loading data into SQLite, designing useful search commands, and presenting results clearly in the terminal.

Highlights:
- Local dataset processing
- SQLite database design
- CLI search interface
- Structured terminal output
- Repeatable import process
- Practical data exploration

Tech:
Python, SQLite, CLI tooling, structured datasets

Status:
Data tooling project

---

## Project 7

Title:
Service Monitoring & Diagnostics Workflows

Category:
Operations / Troubleshooting

Description:
Practical workflows for understanding service health through logs, system state, network checks, storage usage, and container diagnostics.

Detailed Copy:
Many systems fail because the problem is hidden. This work focuses on making service behaviour easier to inspect: collecting logs, checking container state, understanding storage usage, reviewing network behaviour, and building commands that make troubleshooting faster.

Highlights:
- Docker service diagnostics
- Log collection workflows
- Storage usage analysis
- Network troubleshooting
- Process and service inspection
- Clear operational commands

Tech:
Docker, shell scripting, Linux, macOS, logs, networking tools

Status:
Ongoing operational practice

---

# Experience Section

## Heading

Experience & Background

## Entry 1

Title:
Systems & Homelab Builder

Period:
Ongoing

Description:
Designing, deploying, and maintaining self-hosted services and automation workflows across containerised applications, storage systems, media infrastructure, backup tools, and local network environments.

Key Points:
- Built and maintained Docker-based service stacks
- Worked with media, photo, backup, and monitoring services
- Designed practical storage and restore workflows
- Troubleshot service, network, and data issues
- Created scripts and tools to automate repetitive tasks

## Entry 2

Title:
Automation & Python Tooling

Period:
Ongoing

Description:
Building scripts and small tools for file processing, media workflows, video analysis, backups, logs, and command-line automation.

Key Points:
- Created Python-based automation workflows
- Worked with video and image processing concepts
- Used structured logs and configuration-driven scripts
- Focused on maintainability and clear terminal output
- Explored local AI and computer-vision workflows

## Entry 3

Title:
Hospitality & Bar Operations

Period:
8+ years industry experience

Description:
Practical experience in hospitality operations, bartending, cocktail work, customer service, team coordination, and day-to-day operational problem-solving.

Key Points:
- Worked in fast-paced customer-facing environments
- Developed strong communication and operational awareness
- Built experience with stock, service flow, and team coordination
- Learned to solve problems quickly under pressure

## Entry 4

Title:
Business Project Management

Period:
Postgraduate background

Description:
Academic background in project planning, delivery thinking, stakeholder awareness, risk, and structured execution.

Key Points:
- Project planning and organisation
- Risk and dependency awareness
- Communication and stakeholder thinking
- Structured decision-making

## Entry 5

Title:
Civil Engineering

Period:
Bachelor’s background

Description:
Technical academic foundation in engineering principles, structured problem-solving, measurement, planning, and practical systems thinking.

Key Points:
- Engineering-based problem solving
- Analytical thinking
- Planning and technical discipline
- Practical understanding of systems and constraints

---

# Approach Section

## Heading

How I Work

## Intro

I prefer practical systems over theoretical perfection. A good system should be understandable, recoverable, and useful under real conditions.

## Card 1

Title:
Reliability First

Copy:
I care about whether a system can keep running, be restored, and be understood when something goes wrong. Backups, logs, clear configuration, and recovery plans matter.

## Card 2

Title:
Automation With Visibility

Copy:
Automation should reduce repetitive work without becoming a black box. I prefer workflows that show progress, produce useful logs, and can be inspected when needed.

## Card 3

Title:
Performance With Purpose

Copy:
Performance matters when it improves the actual workflow. I focus on using the right tools, reducing bottlenecks, and taking advantage of available hardware where it makes sense.

## Card 4

Title:
Practical Documentation

Copy:
Good documentation does not need to be long. It needs to explain what the system does, how to run it, how to recover it, and where to look when it fails.

## Card 5

Title:
Modular Improvement

Copy:
I prefer building systems in parts so that one component can be improved without breaking everything else. This makes projects easier to maintain and extend.

## Card 6

Title:
Real-World Constraints

Copy:
Every system has limits: storage, network, time, complexity, cost, and maintenance. I try to design around those constraints instead of ignoring them.

---

# Contact Section

## Heading

Let’s Build Something Reliable

## Copy

I’m interested in practical technical work involving self-hosted systems, automation, media infrastructure, backup workflows, Python tooling, and AI-assisted systems.

For projects, collaborations, or opportunities, feel free to get in touch.

## Buttons

- Email Me
- GitHub
- LinkedIn

Use these temporary links until replaced:

```ts
email: "mailto:hello@example.com"
github: "https://github.com/"
linkedin: "https://www.linkedin.com/"
```

---

# Footer

© 2026 Abu Talha. Built with React, TypeScript and Tailwind CSS.

---

# Short SEO / Meta Copy

## Page Title

Abu Talha — Systems, Automation & Self-Hosted Infrastructure

## Meta Description

Portfolio of Abu Talha, focused on self-hosted infrastructure, automation, backup workflows, media systems, Python tooling, and practical AI/computer-vision projects.

---

# Suggested Website Tone Rules

- Do not sound like a startup landing page.
- Do not use phrases like “10x”, “rockstar”, “ninja”, “visionary”, or “world-class”.
- Keep the writing grounded.
- Mention tools only where relevant.
- Do not expose private system details.
- Avoid exact hardware specifications.
- Avoid personal domains, IP addresses, or internal paths.
- Avoid pretending projects are commercial products unless clearly described as personal or homelab projects.
- Make the site feel professional enough for job applications, technical networking, and project showcasing.
