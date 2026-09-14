# Assets Guide — Icons, Images, and Static Files

> **Source of truth for agent decisions.** This document prevents the `site-header` 404 regression and clarifies Next.js App Router asset conventions.

## 1. Two Distinct Asset Systems

This project uses **Next.js 16.3.1 App Router** with **vinext (Vite)** for Cloudflare Workers. Assets are split into two systems that must not be confused:

| System | Location | URL | Used For | Caching |
|--------|----------|-----|----------|---------|
| **Metadata Routes** (Next file convention) | `app/` | `/*` via Route Handler with `?<hash>` | Browser tab favicon, SEO | Hashed, immutable, statically optimized |
| **Static Assets** (public folder) | `public/` | `/*` direct | In-app `<Image>` / `<img>` | `Cache-Control: public, max-age=0` (no hash) |

### Metadata Routes (`app/`)

- `app/favicon.ico` → served at `/favicon.ico` as `<link rel="icon" href="/favicon.ico" sizes="any">`
- `app/icon.png` → served at `/icon?<hash>` as `<link rel="icon" href="/icon?<hash>" type="image/png" sizes="256x256">`
- `app/apple-icon.png` → `<link rel="apple-touch-icon">`
- `app/opengraph-image.tsx` → OG image Route Handler

Docs: `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/app-icons.md` and `public-folder.md:43-44` (App Router should use `app/` for `favicon.ico` etc).

### Static Assets (`public/`)

- `public/icon.png` → `https://<host>/icon.png` → used by `app/components/site-header.tsx:10` as `<Image src="/icon.png" width={256} height={256}>`
- `public/self-portrait.png` → hero/about avatar
- Accessed via `next/image` with `src="/<path>"` starting from `/` (`public-folder.md:9-18`)

## 2. Current Asset Map (Production-Critical)

```
app/icon.png        80KB  256x256 PNG — canonical source, tracked in git, metadata route
app/favicon.ico     279KB  multi-size ICO 256/48/32/16 — generated from icon.png, tracked
public/icon.png     80KB  256x256 PNG — COPY of app/icon.png for header Image, tracked
public/self-portrait.png 657KB — static hero image
```

**Rule:** `app/icon.png` and `public/icon.png` are intentionally duplicated. Do NOT `mv` (move) — use `cp app/icon.png public/icon.png`. Moving breaks either the favicon auto-tag or the header image.

## 3. Why `site-header.tsx:10` Failed Before (Postmortem)

```tsx
// app/components/site-header.tsx:10
<Image src="/icon.png" alt="" width={256} height={256} />
```

- `src="/icon.png"` expects `public/icon.png` (public-folder convention).
- Only `app/icon.png` existed → Next `/_next/image?url=%2Ficon.png` 404. `app/icon.png` is served at `/icon?<hash>` (not `/icon.png`).
- `dist/client/` after `vinext build` only contained `self-portrait.png` — proof of missing static file.
- Fix: `cp app/icon.png public/icon.png` → `dist/client/icon.png` appears, build succeeds.

## 4. Favicon Generation (Best Practice)

- **Never generate to `public/favicon.ico`** — App Router prefers `app/favicon.ico` for hashed caching (`public-folder.md` Cache-Control vs metadata route caching).
- Generate multi-size ICO from source PNG:
  ```bash
  magick app/icon.png -define icon:auto-resize=256,48,32,16 app/favicon.ico
  # verify
  file app/favicon.ico          # → MS Windows icon resource - 4 icons
  magick identify app/favicon.ico  # → 256x256, 48x48, 32x32, 16x16
  ```
- Requires `ImageMagick 7.1.2` (`magick` / `convert`) — already available. Fallback: `sharp` via `bun` + `png-to-ico`.
- Source `app/icon.png` is 256x256 8-bit sRGB. If updating icon, re-run magick to regenerate `app/favicon.ico` and re-copy to `public/icon.png`.

## 5. Rules for Agents

1. **For favicon/browser tab:** edit/add `app/favicon.ico` or `app/icon.png` (metadata route). Do NOT place favicon in `public/`.
2. **For in-app images (`next/image` with `src="/..."`):** place in `public/` and reference as `/<path>`. Do NOT reference metadata routes directly.
3. **When changing the logo:** update `app/icon.png` (source) → regenerate `app/favicon.ico` → `cp app/icon.png public/icon.png` → commit both.
4. **Do not delete `app/icon.png`** to "move to public" — it breaks auto SEO tags. Copy, don't move.
5. **Verify after change:** `bun run build:vinext` → check `dist/client/icon.png` exists and `file app/favicon.ico` is multi-size. Test `curl -I localhost:3000/icon.png` and `/favicon.ico` 200.

## 6. Related Files

- `app/components/site-header.tsx:10` — consumer of `public/icon.png`
- `app/layout.tsx:11` — `metadata` (no explicit `icons` needed; file convention auto-injects)
- `app/opengraph-image.tsx` — other metadata route example
- `vite.config.ts:8-14` — vinext images optimizer (affects runtime image optimization, not source location)
