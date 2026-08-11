# LWC Group — Maintenance Reliability (website)

Premium animated single-page marketing site. React + Vite + GSAP + Lenis.
Gold-on-black, typography-led, **luxury visuals + grounded copy**. Signature mechanic:
the mining **before → after** transformation on scroll (breakdown no one can master →
reliability everyone can), with a gold light sweep.

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build & preview
```bash
npm run build      # outputs to /dist
npm run preview
```

## Assets (in /public)
| File | What | Status |
|---|---|---|
| `logo.png` | LWC gold emblem | ✅ in place |
| `mining-before.png` | Gemini BEFORE (panic at broken machine) | ✅ in place |
| `mining-after.png`  | Gemini AFTER (calm, tablet dashboard) | ✅ in place |
| `hero.mp4` *(optional)* | looping/scrubbed hero video | not used yet |

**Optimise before launch:** the two mining PNGs are ~2 MB each. Convert to WebP and
compress (e.g. squoosh.app) for faster load — important for mobile / low-bandwidth
visitors in SA · DRC · Africa.

## Edit the copy
All text lives in **`src/data/content.js`** — one file. Change wording, KPIs, fees,
contact there. The copy is deliberately grounded (no overclaim); keep it that way.

## Structure
```
src/
  main.jsx            app entry
  App.jsx             composition + scroll-reveal observer
  index.css           the whole design system (tokens + components)
  lib/smoothScroll.js Lenis + GSAP ScrollTrigger + prefers-reduced-motion
  data/content.js     ALL copy
  components/
    Nav, Hero, Problem, BeforeAfter (signature), HowWeWork,
    WhereAI, WontClaim, Investment, Contact, Footer, CountUp
```

## Accessibility & performance
- Honours `prefers-reduced-motion` (no smooth-scroll, no scrub — static states).
- Fade-up reveals via IntersectionObserver; count-up stats.
- Desktop-first — do a mobile pass (F12 → device view) before launch.

## Deploy to Vercel
1. `git init && git add -A && git commit -m "LWC maintenance site"`
2. Push to a GitHub repo.
3. On Vercel: **New Project → Import** the repo. Vercel auto-detects Vite
   (`vercel.json` is included). **Deploy** (~60s).
4. Add the domain **jlwanalytic.com** in Vercel → Project → Settings → Domains.

## To upgrade the hero to the cinematic frame-scrub video (later)
When you render the LWC "rescue" video (see the video prompt), export it, run
`ffmpeg -i rescue.mp4 -vf fps=24 public/frames/%04d.webp`, and swap the Hero canvas
for a scroll-scrubbed frame sequence (see the `anim-3d-website` skill, Recipe A).

---
TODO before launch: add phone/WhatsApp in `content.js` (`brand.phone`), optimise images,
mobile pass.
