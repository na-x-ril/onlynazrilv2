import Reveal from "./reveal";
import Marquee from "./marquee";
import { skills, skillsTicker } from "../lib/data";

export default function Skills() {
  return (
    <section id="skills" className="flex min-h-[calc(80svh+var(--header-h))] flex-col justify-center overflow-hidden border-b-3 border-ink">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:py-28 max-sm:py-10 max-sm:pb-28">
        <Reveal>
          <div className="mb-4 inline-flex items-center gap-3 border-3 border-ink bg-surface px-3 py-1.5 shadow-nb">
            <span className="h-3 w-3 bg-lime-deep" />
            <span className="text-xs font-bold tracking-[0.2em] text-paper">
              SECTION_03 // THE STACK
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-paper uppercase sm:text-5xl">
            <span className="nb-outline block sm:inline">The</span> Stack
          </h2>
          <p className="mt-4 max-w-2xl text-base text-paper/70">
            Tools I grab when the job needs to get done fast and stay done.
            Picked for speed, ergonomics, and zero bloat.
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={(i % 3) * 0.08}>
              <div className="group flex h-full flex-col border-3 border-ink bg-surface p-5 shadow-nb transition-transform duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-nb-lg">
                <div className="flex items-start justify-between">
                  <div
                    className={`grid h-14 w-14 place-items-center border-3 border-ink ${skill.chip} shadow-[3px_3px_0_0_#0a0a0a]`}
                  >
                    <skill.icon />
                  </div>
                  <span className="text-2xl font-bold text-paper/20">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-wide text-paper">
                  {skill.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">
                  {skill.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Marquee items={skillsTicker} bg="bg-blue" />
    </section>
  );
}
