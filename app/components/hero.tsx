"use client";

import { motion } from "motion/react";
import Marquee from "./marquee";
import { heroPhrases } from "../lib/data";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-3 border-ink">
      <motion.div
        className="relative mx-auto flex min-h-[calc(100svh-60px)] max-w-6xl flex-col justify-center px-5 py-16 -translate-y-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={item}
          className="mb-5 inline-flex w-fit items-center gap-2 border-3 border-ink bg-surface px-3 py-1.5 shadow-nb"
        >
          <span className="h-2.5 w-2.5 animate-nb-blink bg-lime-deep" />
          <span className="flex gap-2 text-xs font-bold tracking-[0.2em] text-paper">
            STATUS: ONLINE
            <span className="hidden sm:inline">
              {`// HIGH SCHOOL TECH ENTHUSIAST`}
            </span>
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-sans text-[15vw] font-bold leading-[0.85] tracking-tight text-paper uppercase sm:text-[12vw] lg:text-[10.5rem]"
        >
          <span className="nb-outline-lime block">ONLY</span>
          <span className="block text-paper">NAZRIL</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg font-medium leading-snug text-paper/90 sm:text-2xl"
        >
          HIGH SCHOOL TECH ENTHUSIAST{" "}
          <span className="bg-lime px-1 text-ink">~4 YEARS</span> IN THE GAME.
          Building fast. Breaking things. Refusing{" "}
          <span className="text-lime-text">&quot;good enough&quot;</span>.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#projects" className="nb-btn nb-btn-active px-7 py-4 text-sm">
            CHECK MY WORK
            <span aria-hidden="true">↓</span>
          </a>
          <a
            href="#contact"
            className="nb-btn nb-btn-ghost nb-btn-active px-7 py-4 text-sm"
          >
            TRANSMIT DATA
          </a>
        </motion.div>

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="animate-nb-float absolute right-[8%] top-[12%] h-16 w-16 border-3 border-ink bg-lime shadow-nb max-sm:h-10 max-sm:w-10"
            style={{ ["--nb-rotate" as string]: "0deg", animationDelay: "0s" }}
          />
          <div
            className="animate-nb-float absolute right-[24%] top-[38%] h-12 w-12 border-3 border-ink bg-blue shadow-nb max-sm:h-8 max-sm:w-8"
            style={{ ["--nb-rotate" as string]: "18deg", animationDelay: "0.8s" }}
          />
          <div
            className="animate-nb-float absolute left-[4%] bottom-[6%] lg:bottom-[14%] h-20 w-20 border-3 border-ink bg-cream shadow-nb max-sm:h-12 max-sm:w-12"
            style={{ ["--nb-rotate" as string]: "-12deg", animationDelay: "1.4s" }}
          />
          <div
            className="animate-nb-float absolute right-[5%] bottom-[10%] h-10 w-10 rounded-full border-3 border-ink bg-transparent shadow-nb max-sm:h-8 max-sm:w-8"
            style={{ ["--nb-rotate" as string]: "0deg", animationDelay: "2s" }}
          />
          <span className="absolute left-[16%] top-[22%] hidden text-3xl font-bold text-lime sm:block">
            +_+
          </span>
          <span className="absolute right-[40%] top-[8%] hidden text-2xl font-bold text-blue sm:block">
            &gt;_
          </span>
        </div>
      </motion.div>

      <Marquee items={heroPhrases} bg="bg-lime" />
    </section>
  );
}
