import type { ComponentType } from "react";
import {
  LinuxIcon,
  TSIcon,
  TailwindIcon,
  NextIcon,
  DrizzleIcon,
  BunIcon,
  DartIcon,
  KotlinIcon,
  GitIcon,
} from "../components/skill-icons";
import { SysmonVisual, TaskbruteVisual } from "../components/project-visuals";

export const headerLinks = [
  { href: "#about", label: "ABOUT", short: "ABOUT" },
  { href: "#skills", label: "STACK", short: "STACK" },
  { href: "#projects", label: "PROJECTS", short: "WORK" },
  { href: "#contact", label: "TRANSMIT", short: "TRANSMIT" },
];

export const sectionIds = ["about", "skills", "projects", "contact"];

export const heroPhrases = [
  "RAW ENERGY",
  "REFUSING GOOD ENOUGH",
  "~4 YEARS IN THE GAME",
  "HOME LAB RUNNING",
  "DEEP IN THE TERMINAL",
  "BREAKING THINGS",
  "SHIPPING FAST",
  "DISTRO HOPPING",
  "READ THE DOCS",
];

export const aboutStats = [
  { value: "~4", label: "YEARS IN THE GAME" },
  { value: "9+", label: "TECH TOOLS" },
  { value: "24/7", label: "HOME LAB RUNNING" },
];

export type Skill = {
  name: string;
  desc: string;
  chip: string;
  icon: ComponentType;
};

export const skills: Skill[] = [
  {
    name: "LINUX",
    desc: "Daily driver on CachyOS + MangoWM. At home in the terminal, not scared of systemd.",
    chip: "bg-lime",
    icon: LinuxIcon,
  },
  {
    name: "TYPESCRIPT",
    desc: "Types as guardrails for speed. Ship faster by letting the compiler catch the dumb stuff.",
    chip: "bg-blue",
    icon: TSIcon,
  },
  {
    name: "TAILWIND CSS",
    desc: "Utility-first styling with near-zero CSS payload and lightning-fast iteration.",
    chip: "bg-cream",
    icon: TailwindIcon,
  },
  {
    name: "NEXT.JS",
    desc: "React with SSR, image optimization, and tiny client bundles. Performance by default.",
    chip: "bg-lime",
    icon: NextIcon,
  },
  {
    name: "DRIZZLE ORM",
    desc: "Typed SQL that stays transparent. No magic, just queries that behave.",
    chip: "bg-blue",
    icon: DrizzleIcon,
  },
  {
    name: "BUN",
    desc: "One runtime for scripts, tests, and servers. Fewer moving parts, faster everything.",
    chip: "bg-cream",
    icon: BunIcon,
  },
  {
    name: "DART",
    desc: "Compiled, fast, and sharp. Writing tooling that doesn't waste a single cycle.",
    chip: "bg-transparent",
    icon: DartIcon,
  },
  {
    name: "KOTLIN",
    desc: "Modern JVM/Android code that reads clean and runs lean. My go-to for mobile.",
    chip: "bg-blue",
    icon: KotlinIcon,
  },
  {
    name: "GIT",
    desc: "History as a safety net. Branch, commit, break things, revert with confidence.",
    chip: "bg-cream",
    icon: GitIcon,
  },
];

export const skillsTicker = skills.map((s) => s.name);

export type ProjectLink = {
  label: string;
  href: string;
  cls: string;
};

export type Project = {
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  visual: ComponentType;
  cardClass: string;
  chipClass: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "SYSMON CORE",
    subtitle: "LINUX MONITORING DAEMON",
    desc: "A lightweight Linux system monitor that watches CPU, memory, disk, and service health — then fires webhooks the moment something goes sideways. Built to sip resources, not hog them.",
    tags: ["LINUX", "BASH", "SYSTEMD", "WEBHOOKS"],
    visual: SysmonVisual,
    cardClass: "nb-card-lime",
    chipClass: "bg-blue",
    links: [{ label: "SOURCE CODE", href: "#", cls: "nb-btn nb-btn-paper nb-btn-active" }],
  },
  {
    title: "TASKBRUTE",
    subtitle: "ANDROID TASK MANAGER",
    desc: "A brutalist Android task manager that puts every task in its place. Priority-first lists, swipe-to-kill, and a UI that gets out of your way. Kotlin under the hood, zero fluff on screen.",
    tags: ["KOTLIN", "JETPACK COMPOSE", "ROOM", "COROUTINES"],
    visual: TaskbruteVisual,
    cardClass: "nb-card-paper",
    chipClass: "bg-lime",
    links: [
      { label: "SOURCE CODE", href: "#", cls: "nb-btn nb-btn-blue nb-btn-active" },
      { label: "PLAY STORE", href: "#", cls: "nb-btn nb-btn-active" },
    ],
  },
];

export const socials = [
  { label: "GITHUB", href: "https://github.com/" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/mnazril_7673" },
  // { label: "TWITTER", href: "#" },
];

export const contactFacts: [string, string][] = [
  ["UPTIME", "24/7 — unless the home lab is acting up"],
  ["RESPONSE", "< 24 HRS"],
  ["LANG", "EN / ID"],
];
