# Contributing — LWC Group site

## Breakpoint contract

The site is **mobile-first**. Base styles target the smallest phone (~360px, stress
tested at 320px). Every layout breakpoint is a **`min-width`** addition. Do not add
`max-width` patches over a desktop design.

There are exactly **three** layout breakpoints. Use these; do not invent new ones:

| Token    | min-width | Purpose                                             |
|----------|-----------|-----------------------------------------------------|
| (base)   | 0         | Single column, disclosure nav, stacked heroes       |
| `640px`  | 640       | 2-column grids, chain arrows appear                 |
| `900px`  | 900       | Multi-column grids, split/phone-hero side by side, desktop nav (with `pointer:fine`) |
| `1024px` | 1024      | Reserved for capability gating (3D, scroll-scrub), not general layout |

Rules:

- **Touch is detected with `(pointer: coarse)` / `(pointer: fine)`, never user-agent
  sniffing.** The desktop nav is `@media (min-width:900px) and (pointer:fine)`, so a
  landscape phone wider than 900px still gets the 44px disclosure nav.
- **Viewport units:** use `100dvh` with a `100vh` fallback line above it, or `100svh`
  where an element must fit with the mobile URL bar expanded. Never bare `100vh`.
- **Safe area:** any fixed / floating UI adds `env(safe-area-inset-*)` padding.
  `index.html` must keep `viewport-fit=cover` (and never `user-scalable=no`).
- **Tap targets** are at least 44x44px on touch. Pills use `min-height:44px`.
- **Fluid type/space** via `clamp()` (pair `rem` with `vw`), not stepped chains.
- **Animate only `transform` and `opacity`.** Reveals use IntersectionObserver.
  Every new motion ships its `prefers-reduced-motion` fallback in the same commit.
- **Content is visible without JS:** default visible in CSS, animate from there.
- Grids that can hold cards use
  `repeat(auto-fit, minmax(min(var(--card-min), 100%), 1fr))` and set `min-width:0`
  on text-bearing grid/flex children.
- No `overflow-x: hidden` band-aid on `body`. If overflow appears, find the cause
  (see the detector in `REFINEMENT-BRIEF.md`, Part D).

## Media

- Videos: optimized H.264 mp4 **plus** a WebM sibling, served via `<source>`
  (WebM first). Cap the long edge at 1280px. Masters live in
  `../lwc-video-masters/`, not the repo.
- Images: ship responsive WebP (`-480/-960/-1440`) with `srcSet`+`sizes` (see
  `src/lib/img.js`). Never let a phone fetch a full-size hero.
- Below-the-fold media is lazy; the hero poster is the LCP and loads first.

## QA gate

`npm run test:qa` (Playwright) runs on every push/PR via `.github/workflows/qa.yml`
and **fails the build on any horizontal overflow (down to 320px) or console error**
across `/`, `/engineering`, `/intelligence`, `/digital`, `/academy`.

Run it locally:

```bash
npm run build
npx playwright install chromium   # first time only
npm run test:qa
```
