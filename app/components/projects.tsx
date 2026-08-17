import Reveal from "./reveal";
import ProjectGrid from "./project-grid";
import { fetchRepos } from "../lib/github";

export const revalidate = 3600;

export default async function Projects() {
  let repos;
  try {
    repos = await fetchRepos();
  } catch {
    repos = null;
  }

  return (
    <section id="projects" className="flex min-h-[calc(80svh+var(--header-h))] flex-col justify-center border-b-3 border-ink bg-surface/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:py-28 max-sm:py-10 max-sm:pb-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between mb-8">
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
              Pulled live from GitHub. Built, shipped, and documented. Each one
              is out in the wild and ready for a fork.
            </p>
          </Reveal>
        </div>

        {!repos || repos.length === 0 ? (
          <div className="mt-12 border-3 border-ink bg-surface p-8 shadow-nb-lg">
            <p className="text-2xl font-bold tracking-tight text-paper">
              REPO LINK DOWN — TRY LATER
            </p>
            <p className="mt-2 text-sm font-semibold text-paper/70">
              The GitHub relay refused to respond. Check back after a while.
            </p>
          </div>
        ) : (
          <Reveal delay={0.1}>
            <ProjectGrid repos={repos} />
          </Reveal>
        )}
      </div>
    </section>
  );
}
