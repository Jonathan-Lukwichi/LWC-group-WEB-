# Deploying to Vercel

The repo is Vercel-ready. `vercel.json` handles the SPA routes (`/engineering`,
`/intelligence`, `/digital`, `/academy`) and long-cache headers for the hero
frame sequences, videos and images.

## Option A — Git integration (recommended, auto-deploys on every push)

1. Go to https://vercel.com/new and **Import** the GitHub repo
   `Jonathan-Lukwichi/LWC-group-WEB-` (authorise Vercel for the repo if asked).
2. Vercel auto-detects **Vite**. Confirm:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
3. Click **Deploy**. You get a URL like `lwc-group-web.vercel.app`.
4. Every push to `main` now redeploys automatically. The QA workflow
   (`.github/workflows/qa.yml`) still gates overflow/console on each push.

## Option B — Vercel CLI

```bash
npm i -g vercel
cd lwc-website
vercel          # first run: log in + link the project (follow the prompts)
vercel --prod   # promote to production
```

## Custom domain

In the Vercel project → **Settings → Domains**, add e.g. `lwcgroup.co.za`
and point the DNS records Vercel shows you. HTTPS is automatic.

## Notes

- SPA deep links work because of the rewrite in `vercel.json` (any non-file
  path serves `index.html`; React Router takes over client-side).
- Hero scroll-film frames live in `public/f-*` and are cached `immutable`.
  They only load on desktop (touch devices get the light fallback video).
- Before publishing the commercial videos anywhere public, swap the music bed
  for a licence-safe track.
