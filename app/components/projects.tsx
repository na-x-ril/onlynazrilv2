import Reveal from "./reveal";
import { projects } from "../lib/data";

export default function Projects() {
  return (
    <section id="projects" className="flex min-h-[calc(80svh+var(--header-h))] flex-col justify-center border-b-3 border-ink">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <div className="mb-4 inline-flex items-center gap-3 border-3 border-ink bg-surface px-3 py-1.5 shadow-nb">
            <span className="h-3 w-3 bg-blue" />
            <span className="text-xs font-bold tracking-[0.2em] text-paper">
              SECTION_04 // PROJECTS
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-paper uppercase sm:text-5xl">
            Pro<span className="bg-blue px-1 text-ink">jects</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-paper/70">
            Built, shipped, and documented. Each one is out in the wild and
            ready for a fork.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.12} className={i % 2 === 1 ? "lg:translate-y-10" : ""}>
              <article
                className={`flex h-full flex-col ${project.cardClass} p-6 sm:p-8`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-bold tracking-[0.2em] opacity-70">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="text-4xl font-bold opacity-20">0{i + 1}</span>
                </div>

                <div className="mt-6 border-3 border-ink bg-surface p-4 shadow-[4px_4px_0_0_#0a0a0a]">
                  <project.visual />
                </div>

                <p className="mt-6 flex-1 text-sm leading-relaxed opacity-90">
                  {project.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`border-2 border-ink px-2 py-1 text-[0.65rem] font-bold tracking-wider ${project.chipClass}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <a key={link.label} href={link.href} className={`${link.cls} px-5 py-3 text-xs`}>
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
