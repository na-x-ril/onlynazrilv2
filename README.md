# Onlynazril Portfolio — High School Tech Enthusiast

Neobrutalist single-page portfolio built with **Next.js 16.3.1 (App Router) + vinext + Cloudflare Workers**. See `PRD.md` (local, gitignored) for visual identity.

## Getting Started

```bash
bun install
bun run dev              # Next dev at http://localhost:3000
bun run dev:vinext --port 3001  # Workers-aware dev with KV/Images bindings
```

Edit `app/page.tsx` — auto-reloads. Fonts: `Space_Grotesk` via `next/font`.

## Scripts

| Script | Use |
|--------|-----|
| `bun run dev` | Local Next dev (no Workers) |
| `bun run dev:vinext` | Workers dev with `vite.config.ts` vinext + cloudflare plugin |
| `bun run build:vinext` | Production build → `dist/client` + `dist/server` |
| `bun run deploy:vinext` | Manual deploy `vinext-cloudflare deploy --config dist/server/wrangler.json` |
| `bun run lint` | ESLint |

See `docs/DEVELOPMENT.md` for full workflow and pitfalls.

## Deployment

**Automated production** via `.github/workflows/deploy.yml` on `push` to `main`:

`bun install` → `lint` → `build:vinext` → `wrangler deploy --config dist/server/wrangler.json` (requires `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` secrets).

Single production Workers `portfolio` (`wrangler.jsonc`). No preview environments.

See `docs/DEPLOY.md` for config, secrets, and manual fallback.

## Assets

- `app/icon.png` / `app/favicon.ico` → metadata routes for `<link rel="icon">` (hashed, cached) — **do not** use directly in `<Image src>`.
- `public/icon.png` / `public/self-portrait.png` → static assets for `src="/..."` (e.g., `site-header.tsx:10`).

Duplication `app/icon.png` → `public/icon.png` is intentional (copy, not move). Generation: `magick app/icon.png -define icon:auto-resize=256,48,32,16 app/favicon.ico`.

See `docs/ASSETS.md` for postmortem and rules.

## Docs

- `docs/DEVELOPMENT.md` — local setup, scripts, structure, verification
- `docs/ASSETS.md` — icon/favicon vs public, generation, agent rules
- `docs/DEPLOY.md` — Workers config, CI/CD, secrets
- `node_modules/next/dist/docs/` — Next.js 16 breaking changes (AGENTS.md warning)

> **Note:** `AGENTS.md` / `CLAUDE.md` are gitignored and contain only the auto-generated `next dev` block. Tracked docs are in `docs/` + this `README.md`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) — app router, metadata files
- [vinext](https://github.com/vitejs/vite-plugin-rsc) — Vite RSC + Cloudflare
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/) — Workers CLI
