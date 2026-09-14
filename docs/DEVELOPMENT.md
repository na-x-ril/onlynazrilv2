# Development Guide — Local Setup, Scripts, and Agent Workflow

## 1. Quick Start

```bash
bun install                          # install with bun@1.3.14 (packageManager)
bun run dev                          # Next.js dev at http://localhost:3000 (no Workers bindings)
# or
bun run dev:vinext --port 3001       # Workers-aware dev with KV, Images, CDN (vite.config.ts: cloudflare plugin)
```

- `next dev` reads `node_modules/next/dist/docs/` for breaking API changes (AGENTS.md block).
- `vinext dev` uses `@cloudflare/vite-plugin` with `viteEnvironment: { name: rsc, childEnvironments: [ssr] }`.

## 2. Scripts Reference (`package.json:5-13`)

| Script | Command | When to Use |
|--------|---------|-------------|
| `dev` | `next dev` | UI iteration without Workers features |
| `dev:vinext` | `vinext dev --port 3001` | When testing KV cache, Images optimizer, or `wrangler.jsonc` bindings |
| `build` | `next build` | NOT for production — only for Next static check |
| `build:vinext` | `vinext build` | Production build → `dist/client` (assets) + `dist/server` (Worker) |
| `start:vinext` | `wrangler dev --config dist/server/wrangler.json` | Preview production build locally |
| `deploy:vinext` | `vinext-cloudflare deploy --config dist/server/wrangler.json` | Manual deploy (CI does this via `wrangler deploy`) |
| `lint` | `eslint` | CI runs this before build |

## 3. Project Structure

```
app/                App Router (page, layout, icon.png, favicon.ico, opengraph-image.tsx)
  components/       site-header.tsx:10 (uses public/icon.png), hero, skills, etc
  lib/data.ts       headerLinks, sectionIds — single source for nav
public/             Static assets: icon.png (header), self-portrait.png
docs/               Tracked docs: ASSETS.md, DEPLOY.md, DEVELOPMENT.md (this file)
dist/               Build output (gitignored): dist/client (static), dist/server (Worker)
.vinext/ .wrangler/ .next/  gitignored caches
wrangler.jsonc      Worker config (assets, bindings, KV)
vite.config.ts      vinext + cloudflare plugin
.github/workflows/deploy.yml  Auto deploy on push main
```

## 4. Version Control Workflow

- **Remote:** `origin git@github.com:na-x-ril/onlynazrilv2.git`, branch `main` (linear history, fast-forward merges).
- **Commits:** Conventional commits (`chore:`, `feat:`, `fix:`, `deploy:`) — see `git log --oneline` (`88d78bb` feat: ignore dev.vars, `8715cba` chore: track favicon etc).
- **Current tracked assets:** `app/icon.png`, `app/favicon.ico`, `public/icon.png` — see `docs/ASSETS.md` duplication rule.
- **Ignored (correct):** `node_modules`, `.next/`, `dist/`, `.vinext/`, `.wrangler/`, `.dev.vars`, `.env*` (`!.env.example`), `graphify-out/`, `PRD.md`, `AGENTS.md`, `CLAUDE.md`.
- **AGENTS.md stays ignored** (user decision) — agents should read `docs/` instead (this folder is tracked). `AGENTS.md` contains only `next dev` auto-generated block, kept local.

## 5. Environment & Secrets

- `.env.example` → `RESEND_API_KEY`, `CONTACT_TO`, `GITHUB_TOKEN` (documented, values not committed).
- `.dev.vars` (35b: `CONTACT_TO='nazrilpro10@gmail.com'`) → local Workers vars, copied to `dist/server/.dev.vars` at build. Ignored.
- Production secrets: `wrangler secret put RESEND_API_KEY` (seen 2 Secret Change deployments) + GitHub Secrets `CLOUDFLARE_API_TOKEN`/`CLOUDFLARE_ACCOUNT_ID` for CI.
- `next.config.ts` only has `allowedDevOrigins: ['192.168.0.234']` — no image remotePatterns needed (skill-icons uses `https://thesvg.org` via `next/image` but optimizer handles it).

## 6. Common Pitfalls for Agents

| Pitfall | Why | Correct |
|---------|-----|---------|
| Using `app/icon.png` directly in `<Image src="/icon.png">` | Metadata route not static | Use `public/icon.png` for `src="/..."` |
| Moving `app/icon.png` to `public/` via `mv` | Breaks favicon auto-tag | Copy: `cp app/icon.png public/icon.png` |
| Placing `favicon.ico` in `public/` | No hash caching, `max-age=0` | Place in `app/favicon.ico` (metadata route) |
| Running `next build` for deploy | Produces `.next/`, not `dist/` | Run `build:vinext` |
| Committing `dist/` or `.wrangler/` | Build artifacts, ignored for a reason | Never commit |
| Editing `AGENTS.md` and expecting it to be tracked | It's gitignored (`88d78bb` decision) | Edit `docs/*.md` and `README.md` (tracked) |
| Forgetting to regenerate `app/favicon.ico` after icon change | Favicon stale | Re-run `magick app/icon.png -define icon:auto-resize=256,48,32,16 app/favicon.ico` |

## 7. Verification Checklist (for agents after changes)

1. `bun run lint` passes.
2. `bun run build:vinext` succeeds → `dist/client/icon.png` exists, `file app/favicon.ico` is 4-icon ICO if changed.
3. `curl -I localhost:3000/icon.png` 200 (via `vinext dev`) and `/_next/image?url=%2Ficon.png` not 404.
4. `git status` shows only intended tracked files (respect `.gitignore`).

## 8. Further Reading

- `docs/ASSETS.md` — icon/favicon vs public handling, generation commands, postmortem.
- `docs/DEPLOY.md` — Workers config, CI workflow, secrets, rollback.
- `node_modules/next/dist/docs/` — breaking changes for Next 16.3.1 (AGENTS.md warning).
