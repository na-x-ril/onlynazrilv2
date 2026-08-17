import Reveal from "./reveal";
import { Avatar } from "./avatar";
import { aboutStats } from "../lib/data";

export default function About() {
  return (
    <section id="about" className="flex min-h-[calc(80svh+var(--header-h))] flex-col justify-center border-b-3 border-ink">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:py-28 max-sm:py-10 max-sm:pb-28">
        <Reveal className="relative order-2 md:order-1">
          <div className="relative inline-block -rotate-3">
            <div className="border-3 border-ink bg-surface p-4 shadow-nb-lg">
              <Avatar />
            </div>
            <div className="absolute -right-5 -top-5 z-10 border-3 border-ink bg-lime px-3 py-1 text-xs font-bold text-ink shadow-nb">
              SELF-PORTRAIT
            </div>
          </div>
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-3 border-3 border-ink bg-surface px-3 py-1.5 shadow-nb">
              <span className="h-3 w-3 bg-blue" />
              <span className="text-xs font-bold tracking-[0.2em] text-paper">
                SECTION_02 // ABOUT
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-paper uppercase sm:text-5xl">
              Behind the <span className="bg-lime px-2 text-ink">Code</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg font-medium leading-relaxed text-paper/90">
              I don&apos;t settle for &quot;good enough&quot;. That phrase is a
              bug in my firmware. Every project gets ripped open, profiled,
              and rebuilt until it&apos;s leaner and meaner than it was before.
            </p>
            <p className="mt-4 text-base leading-relaxed text-paper/70">
              That curiosity is why I&apos;m neck-deep in the terminal: distro
              hopping across CachyOS, tinkering with window managers, and
              running a home lab where services die so I can learn why they
              died. Raw energy, deep-dive technical obsession, and the patience
              to read the docs nobody reads.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {aboutStats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.15 + i * 0.1}>
                <div className="border-3 border-ink bg-cream p-3 text-ink shadow-nb">
                  <div className="text-2xl font-bold sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[0.6rem] font-bold tracking-wider sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
