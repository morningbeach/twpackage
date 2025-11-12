# twpackage  — Gift/Gift Box/Gift Set (EN‑first) Demo

**Stack:** Next.js (App Router) on Cloudflare Pages with `@cloudflare/next-on-pages`, Tailwind, next-intl (default EN).  
**Goal:** Elegant, fashion-grade static demo with fake data & images. Ready to switch to Workers+D1 later.

## Quickstart

```bash
pnpm i   # or npm i / yarn
pnpm dev
```

## Deploy to Cloudflare Pages

- Framework: **Next.js**
- Build command: `npx @cloudflare/next-on-pages`
- Compatibility flags: **enable `nodejs_compat`**
- Output: generated automatically

## Structure

- `app/en/...` — EN pages (home, lists, details)
- `components/` — Hero, category tiles, product grid/page
- `content/products/en/*.json` — fake data (18 items)
- `content/i18n/en.json` — UI strings
- `middleware.ts` — i18n routing (default EN)
- `app/globals.css` + `tailwind.config.ts` — elegant styling
```

## Next steps

- Swap Unsplash URLs with Cloudflare Images (set `NEXT_PUBLIC_CDN_BASE` if desired)
- Later: introduce Workers (Hono) + D1 with the same response shape
