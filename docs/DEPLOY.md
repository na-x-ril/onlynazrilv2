# Deploy Guide — Cloudflare Workers (vinext) + GitHub Actions

> Production deploy is **automated** via GitHub Actions on push to `main`. This document is the source of truth for agents and humans.

## 1. Stack

- **Framework:** Next.js 16.3.1 (App Router) + React 19.2.8 + vinext 1.0.0-beta.9 + @vinext/cloudflare beta.7 + Vite 8.3.0
- **Runtime:** Cloudflare Workers (`nodejs_compat`) via `vinext/server/fetch-handler`
- **Package manager:** `bun@1.3.14` (`package.json:packageManager`)
- **Deploy target:** Single production Workers `portfolio` (`wrangler.jsonc:name`)

## 2. Config Files

| File | Purpose | Tracked |
|------|---------|---------|
| `wrangler.jsonc` | Source of truth: Worker name, `compatibility_date: 2026-09-14`, `compatibility_flags: [nodejs_compat]`, `main: vinext/server/fetch-handler`, `assets: { directory: dist/client }`, `images: { binding: IMAGES }`, `kv_namespaces: [{ binding: VINEXT_KV_CACHE, id: dd7fb1c22... }]`, `cache: { enabled: true }`, `version_metadata` | Yes |
| `dist/server/wrangler.json` | **Generated** after `build:vinext` — expanded with `main: index.js`, `assets.directory: ../client`, `no_bundle: true`. Used by deploy. | No (gitignored) |
| `vite.config.ts` | vinext + cloudflare vite plugin. `vinext({ cache: { data: kvDataAdapter(), cdn: cdnAdapter() }, images: { optimizer: imagesOptimizer() }, prerender: { routes: "*" } })`. Build output to `dist/` | Yes |
| `.dev.vars` | Local secrets (`CONTACT_TO`, `RESEND_API_KEY`, etc) — never commit. Copied to `dist/server/.dev.vars` at build | No (gitignored) |
| `.env.example` | Documents required env vars (`RESEND_API_KEY`, `CONTACT_TO`, `GITHUB_TOKEN`) — commit, but not values | Yes |

## 3. Scripts (`package.json:5-13`)

```json
"dev": "next dev"                          // local Next dev (no Workers)
"build": "next build"                      // standard Next build (not for production)
"dev:vinext": "vinext dev --port 3001"     // Workers-aware dev with KV/Images bindings
"build:vinext": "vinext build"             // production build → dist/client + dist/server
"start:vinext": "wrangler dev --config dist/server/wrangler.json"
"deploy:vinext": "vinext-cloudflare deploy --config dist/server/wrangler.json"
"lint": "eslint"
```

**Rule:** Production build is ALWAYS `build:vinext`, not `build`. Deploy is `wrangler deploy --config dist/server/wrangler.json` (or `deploy:vinext`).

## 4. CI/CD — GitHub Actions (Production Only)

### Workflow: `.github/workflows/deploy.yml`

```yaml
on: push: branches: [main] + workflow_dispatch
jobs: deploy:
  runs-on: ubuntu-latest
  steps: checkout → setup-bun → bun install → bun run lint → bun run build:vinext → bunx wrangler deploy --config dist/server/wrangler.json
  env: CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID (secrets)
```

- **Trigger:** any `git push origin main` (including empty `git commit --allow-empty -m "chore: trigger"`)
- **No preview environments** — `f7ae64b` confirmed decision. Single production Worker only.
- **History:** `8715cba` first push failed at Deploy (secrets not yet set), `f7ae64b` success 2026-09-14T14:59:28Z after adding secrets.

### Secrets (GitHub Repository Secrets)

| Secret | How to Obtain | Scope |
|--------|---------------|-------|
| `CLOUDFLARE_ACCOUNT_ID` | `dash.cloudflare.com/<ACCOUNT_ID>` URL or `bunx wrangler whoami` → `2dc22970b90d11d6955630d5a8f82268` (for `nazrilpro10@gmail.com`) | Account ID |
| `CLOUDFLARE_API_TOKEN` | `dash.cloudflare.com > My Profile > API Tokens > Create Token > Edit Cloudflare Workers` template. Required perms: `Account - Workers Scripts:Edit`, `Workers KV Storage:Edit`. Current token TTL 2026-09-14 → 2027-09-15 with broader perms (R2/Pages/Containers/Agents) — works but over-permissive. Minimal is Scripts+KV. | Token with Workers Edit |

Add via `GitHub > na-x-ril/onlynazrilv2 > Settings > Secrets and variables > Actions > New secret`.

### Verification

- **Actions tab:** `Deploy to Cloudflare Workers (Production)` run should be `success` (check steps, especially `Deploy to Cloudflare Workers`).
- **Dashboard:** `dash.cloudflare.com > Workers & Pages > portfolio > Deployments` → new version `f7ae64b` via GitHub Actions (not manual Upload).
- **Smoke test:** `curl -I https://portfolio.<subdomain>.workers.dev/icon.png` 200, `/favicon.ico` 200, header logo renders.
- **CLI:** `bunx wrangler deployments list --config dist/server/wrangler.json`

### Manual Fallback (if CI disabled)

```bash
bun run build:vinext
bunx wrangler deploy --config dist/server/wrangler.json   # uses local wrangler login
# or
bun run deploy:vinext
```

## 5. Production vs Local

- `dist/`, `.vinext/`, `.wrangler/` are gitignored — never commit. CI builds fresh.
- `.dev.vars` + `.env` are gitignored — production uses `wrangler secret put RESEND_API_KEY` (seen as 2 Secret Change deployments 2026-09-14T14:00/14:05) and `CLOUDFLARE_API_TOKEN` secret.
- `vinext-prerender.json` shows `/` skipped (dynamic SSR with KV/CDN cache), `/404` rendered. `prerender: "*"` in `vite.config.ts` but dynamic route stays SSR.

## 6. Rules for Agents

1. **Never run `wrangler deploy` without `build:vinext` first** — `dist/server/wrangler.json` must be generated.
2. **Never commit `dist/` or `.wrangler/`** — they are build artifacts.
3. **Never commit `.dev.vars`** — use example + secrets.
4. **For production changes, push to `main` triggers auto deploy** — do `git commit -m "chore: ..." && git push origin main`, then check Actions.
5. **Do not create preview environments** unless requested — single production only.
6. **After asset changes (icon/favicon), verify `dist/client/icon.png` exists** after `build:vinext` (see `docs/ASSETS.md`).
