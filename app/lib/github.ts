import "server-only";

import { excludeRepos, githubUsername } from "./data";

export type GitHubRepo = {
  name: string;
  description: string;
  language: string | null;
  stars: number;
  htmlUrl: string;
  updatedAt: string;
};

type ApiRepo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
  updated_at: string;
  private: boolean;
};

const MAX_REPOS = 8;

export async function fetchRepos(): Promise<GitHubRepo[]> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "onlynazril-portfolio",
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(
    `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`,
    { headers, next: { revalidate: 3600 } },
  );

  if (!res.ok) {
    throw new Error(`GitHub API request failed: ${res.status}`);
  }

  const repos = (await res.json()) as ApiRepo[];

  return repos
    .filter((repo) => !repo.private && !excludeRepos.includes(repo.name))
    .map((repo) => ({
      name: repo.name,
      description: repo.description ?? "",
      language: repo.language,
      stars: repo.stargazers_count,
      htmlUrl: repo.html_url,
      updatedAt: repo.updated_at,
    }))
    .slice(0, MAX_REPOS);
}