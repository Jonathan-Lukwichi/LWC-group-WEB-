# Deploying to Render

The repo is Render-ready. `render.yaml` (a Render Blueprint) defines a static
site with the SPA rewrite for the routes (`/engineering`, `/intelligence`,
`/digital`, `/academy`) and long-cache headers for the hero frame sequences,
videos and images.

## Option A — Blueprint (recommended, from render.yaml)

1. Go to https://dashboard.render.com → **New** → **Blueprint**.
2. Connect GitHub and pick the repo `Jonathan-Lukwichi/LWC-group-WEB-`.
3. Render reads `render.yaml` and proposes a **Static Site** named `lwc-group`
   (build `npm install && npm run build`, publish `dist`). Click **Apply**.
4. First build runs; you get a URL like `lwc-group.onrender.com`.
5. Every push to `main` auto-redeploys. PR previews are on.

## Option B — Manual static site (no blueprint)

1. Dashboard → **New** → **Static Site** → connect the repo.
2. Set:
   - Build command: `npm install && npm run build`
   - Publish directory: `dist`
3. **Redirects/Rewrites** tab → add a rule:
   - Source `/*`  →  Destination `/index.html`  →  Action **Rewrite**
   (this makes deep links / refresh work with React Router).
4. Create Static Site → deploy.

## Custom domain

Render project → **Settings → Custom Domains** → add e.g. `lwcgroup.co.za`
and set the CNAME/ALIAS records Render shows you. TLS is automatic.

## Notes

- Deep links work because of the `/* → /index.html` rewrite; Render still
  serves real files (JS/CSS/frames/videos) directly.
- Hero scroll-film frames live in `public/f-*` and are cached `immutable`.
  They only load on desktop (touch devices get the light fallback video).
- Free static sites on Render are fine for launch; watch bandwidth if the
  media-heavy pages get high traffic.
- Before publishing the commercial videos anywhere public, swap the music bed
  for a licence-safe track.

---

_A `vercel.json` is also included if you ever prefer Vercel; Render ignores it._
