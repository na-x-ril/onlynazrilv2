"use client";

import { useMemo, useState } from "react";
import type { GitHubRepo } from "../lib/github";

const SORTS = [
  { key: "newest", label: "NEWEST" },
  { key: "oldest", label: "OLDEST" },
  { key: "az", label: "A-Z" },
  { key: "za", label: "Z-A" },
  { key: "stars", label: "STARS" },
] as const;

type SortKey = (typeof SORTS)[number]["key"];

const CARD_STYLES = ["nb-card-lime", "nb-card-paper"];

export default function ProjectGrid({ repos }: { repos: GitHubRepo[] }) {
  const [sortKey, setSortKey] = useState<SortKey>("newest");

  const sorted = useMemo(() => {
    const list = [...repos];
    switch (sortKey) {
      case "newest":
        return list.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
      case "oldest":
        return list.sort((a, b) => a.updatedAt.localeCompare(b.updatedAt));
      case "az":
        return list.sort((a, b) => a.name.localeCompare(b.name));
      case "za":
        return list.sort((a, b) => b.name.localeCompare(a.name));
      case "stars":
        return list.sort((a, b) => b.stars - a.stars);
    }
  }, [repos, sortKey]);

  return (
    <>
      <div
        aria-label="Sort projects"
        role="group"
        className="flex flex-wrap items-center gap-2"
      >
        {SORTS.map((sort) => (
          <button
            key={sort.key}
            type="button"
            onClick={() => setSortKey(sort.key)}
            className={`border-2 px-2.5 py-1.5 text-xs font-bold tracking-wider transition-colors ${
              sortKey === sort.key
                ? "border-ink bg-lime text-ink"
                : "border-transparent text-paper/70 hover:border-ink hover:bg-lime hover:text-ink"
            }`}
          >
            {sort.label}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-10 lg:grid-cols-2">
        {sorted.map((repo, i) => (
          <article
            key={repo.name}
            className={`relative flex h-full flex-col p-6 sm:p-8 ${CARD_STYLES[i % 2]}`}
          >
            <span className="absolute -top-4 -right-4 z-10 border-3 border-ink bg-lime px-2.5 py-1 text-xs font-bold text-ink shadow-nb">
              ★ {repo.stars}
            </span>

            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {repo.name.toUpperCase()}
            </h3>

            <p className="flex-1 text-sm leading-relaxed opacity-90">
              {repo.description ||
                "No description on the repo. Fork and explore."}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="border-2 border-ink bg-cream px-2 py-1 text-[0.65rem] font-bold tracking-wider text-ink shadow-[2px_2px_0_0_#0a0a0a]">
                {repo.language ?? "NO LANG"}
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={repo.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nb-btn nb-btn-active px-5 py-3 text-xs"
              >
                GITHUB ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
