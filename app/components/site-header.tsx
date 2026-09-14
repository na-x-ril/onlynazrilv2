"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";
import { headerLinks, sectionIds } from "../lib/data";

function Logo() {
  return (
    <Image
      src="/icon.png"
      alt=""
      aria-hidden="true"
      width={256}
      height={256}
      className="h-6 w-6 max-sm:h-7 max-sm:w-7"
    />
  );
}

export default function SiteHeader() {
  const [active, setActive] = useState("");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const setVars = () => {
      const h = `${header.offsetHeight}px`;
      document.documentElement.style.scrollPaddingTop = h;
      document.documentElement.style.setProperty("--header-h", h);
    };
    setVars();
    const ro = new ResizeObserver(setVars);
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.45;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) current = `#${id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b-3 border-ink bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 max-sm:gap-2 max-sm:px-4 max-sm:py-4">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center border-3 border-ink bg-lime shadow-[3px_3px_0_0_#0a0a0a] transition-transform duration-150 group-hover:-translate-y-0.5 max-sm:h-9 max-sm:w-9">
            <Logo />
          </span>
          <span className="hidden text-sm font-bold tracking-tight text-paper sm:block">
            ONLYNAZRIL<span className="text-lime-text">_v4.0</span>
          </span>
        </a>

        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          {headerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
              className={`border-2 px-2 py-1.25 text-xs font-bold tracking-wider transition-colors sm:px-3 sm:text-sm max-sm:px-1.5 max-sm:py-2 max-sm:text-xs max-sm:tracking-normal ${
                active === link.href
                  ? "border-ink bg-lime text-ink"
                  : "border-transparent text-paper/80 hover:border-ink hover:bg-lime hover:text-ink"
              }`}
            >
              <span className="sm:hidden">{link.short}</span>
              <span className="hidden sm:inline">{link.label}</span>
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
