"use client";

import { useLayoutEffect, useRef, useState } from "react";

const SPEED = 60;

export default function Marquee({
  items,
  bg,
  className,
}: {
  items: string[];
  bg: string;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(22);

  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => setDuration(el.scrollWidth / 2 / SPEED);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`relative border-t-3 border-ink ${bg} py-3 text-ink ${className ?? ""}`}
    >
      <div
        ref={trackRef}
        className="flex w-max animate-nb-marquee items-center gap-8 whitespace-nowrap"
        style={{ animationDuration: `${duration}s` }}
      >
        {[...items, ...items, ...items, ...items].map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="text-sm font-bold tracking-[0.15em]"
          >
            {label} <span className="ml-8">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
