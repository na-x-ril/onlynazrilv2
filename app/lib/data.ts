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

export const githubUsername = "na-x-ril";

export const excludeRepos = [
  "customCSS",
  "roblox-menu-script",
  "web-api-1",
  "whatsapp-ext",
  "youtube-injected",
];

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
  chip?: `bg-${string}`;
  icon: ComponentType;
};

export const skills: Skill[] = [
  {
    name: "LINUX",
    desc: "Daily driver on CachyOS + MangoWM. At home in the terminal, not scared of systemd.",
    icon: LinuxIcon,
  },
  {
    name: "TYPESCRIPT",
    desc: "Types as guardrails for speed. Ship faster by letting the compiler catch the dumb stuff.",
    icon: TSIcon,
  },
  {
    name: "TAILWIND CSS",
    desc: "Utility-first styling with near-zero CSS payload and lightning-fast iteration.",
    icon: TailwindIcon,
  },
  {
    name: "NEXT.JS",
    desc: "React with SSR, image optimization, and tiny client bundles. Performance by default.",
    chip: "bg-white",
    icon: NextIcon,
  },
  {
    name: "DRIZZLE ORM",
    desc: "Typed SQL that stays transparent. No magic, just queries that behave.",
    chip: "bg-[#1c1c1c]",
    icon: DrizzleIcon,
  },
  {
    name: "BUN",
    desc: "One runtime for scripts, tests, and servers. Fewer moving parts, faster everything.",
    icon: BunIcon,
  },
  {
    name: "DART",
    desc: "Compiled, fast, and sharp. Writing tooling that doesn't waste a single cycle.",
    icon: DartIcon,
  },
  {
    name: "KOTLIN",
    desc: "Modern JVM/Android code that reads clean and runs lean. My go-to for mobile.",
    icon: KotlinIcon,
  },
  {
    name: "GIT",
    desc: "History as a safety net. Branch, commit, break things, revert with confidence.",
    icon: GitIcon,
  },
];

export const skillsTicker = skills.map((s) => s.name);

export const socials = [
  { label: "GITHUB", href: "https://github.com/na-x-ril" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/mnazril_7673" },
  // { label: "TWITTER", href: "#" },
];

export const contactFacts: [string, string][] = [
  ["UPTIME", "24/7 — unless the home lab is acting up"],
  ["RESPONSE", "< 24 HRS"],
  ["LANG", "EN / ID"],
];
