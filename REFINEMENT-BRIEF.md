# LWC Group Site Refinement Brief

> Saved 2026-08-20. Supersedes REBUILD-BRIEF.md, which was written before anyone
> had read this code. Audit below is measured against `rebuild/immersive-site`
> at commit a35c928. Keep the design. Refine the delivery.

---

## PART A: AUDIT (measured, not assumed)

### A1. What is already good, and must not be thrown away

The dark and gold system works. Do not restyle it. Specifically preserve:

- The token set in `src/index.css:5-16`. The palette is measurably strong
  (contrast table in A6).
- Playfair Display for headings against Inter for body. The pairing carries the
  premium industrial tone the brand needs.
- `prefers-reduced-motion` is already respected in five separate places
  (`index.css` lines 110, 123, 168, 202, 308) and inside `smoothScroll.js:19`.
  This is better than most production sites. Keep every one of them.
- `HeroBand.jsx` and `PhoneHero.jsx` gate video playback on IntersectionObserver
  and pause offscreen. Correct pattern. Extend it, do not replace it.
- Scroll listeners in `Cinematic.jsx` and `useFrameScrub.js` are already
  rAF throttled and registered `{ passive: true }`.
- Lenis is correctly disabled under reduced motion. Keep Lenis.

### A2. Media weight is the dominant problem

Measured from the git tree:

| Category | Size |
|---|---|
| Videos, 18 files | 20.6 MB |
| Scroll frame sequences, 318 JPEGs | 23.1 MB |
| Other images | 11.5 MB |
| **Total `public/`** | **55.2 MB** |

The home page alone can pull **11.58 MB of video**: `v-mine-ops.mp4` 2.17 MB,
`v-cap-engineering.mp4` 1.97 MB, `v-eng-inspect.mp4` 1.90 MB,
`v-s1-smelt.mp4` 1.30 MB, `v-cap-emblem.mp4` 1.29 MB, plus five smaller clips.
`mining-after.png` (2.02 MB) and `mining-before.png` (1.95 MB) are PNGs holding
photographic content, which is the wrong format by roughly an order of magnitude.

On a mid-range Android on mobile data, this is the difference between a site
that feels premium and one that never finishes loading.

### A3. Three loading behaviours that need changing

1. **`useFrameScrub.js:5-10` preloads every frame unconditionally on mount.**
   The loop creates `new Image()` for all frames the moment the hook runs, with
   no reduced-motion check, no connection check, and no mobile gate. On a
   Division page that is 44 to 55 JPEGs at once. `public/frames/` holds 120.

2. **`HeroVideo.jsx` uses `preload="auto"` with `autoPlay`** on
   `/v-cap-emblem.mp4` (1.29 MB). This competes directly with the Largest
   Contentful Paint. The poster should paint first and the video should arrive
   after, not race it.

3. **`Cinematic.jsx` mounts every shot at once.** All `<video preload="metadata">`
   elements render together (nine across the two home cinematics), and every
   still shot is a CSS `background-image`, which cannot be lazy loaded at all.
   Both cinematics therefore fetch their full still set on page load.

### A4. Page length

`Cinematic` sets its height to `shots.length * 92vh`.

- `scenario1` has 7 shots = 644vh
- `scenario3` has 6 shots = 552vh

With the hero, two hero bands and the content sections, the home page is
roughly 16 to 18 viewport heights. About 12 of those are atmospheric footage.
A procurement lead looking for what LWC actually does has to scroll past six
screens of ore and smelting before reaching a single division. This is the
most important structural problem on the site, and it is fixed by reordering,
not by deleting the cinematics.

### A5. Responsive gaps

- `index.html` viewport meta is `width=device-width, initial-scale=1.0`. It is
  missing `viewport-fit=cover`, so `env(safe-area-inset-*)` cannot work.
- Zero `safe-area-inset` usage anywhere in the codebase.
- Six `100vh` declarations against only two `dvh`/`svh`. On iOS Safari the
  plain `100vh` blocks crop under the URL bar.
- All 8 layout media queries are `max-width`, across seven arbitrary
  breakpoints: 900, 820, 800, 720, 700, 640, 620. This is desktop-first
  patching. Untested widths fall through the gaps between those numbers.
- `body { overflow-x: hidden }` (`index.css:20`) is a safety net masking any
  real overflow cause rather than fixing it.
- `.tags span` (`index.css`) is `font-size:12.5px; padding:6px 12px`, giving
  roughly a 29px tap height. These are the division capability pills, and they
  fail the 44x44px minimum. `.btn` (46px) and the mobile nav links (46px) pass.

### A6. Contrast, computed

Against `--bg #0A0A0C`:

| Token | Ratio | Body 4.5:1 | Large 3:1 |
|---|---|---|---|
| `--ink #F3F0E7` | 17.36:1 | PASS | PASS |
| `--gold-hi #F7E7A6` | 15.95:1 | PASS | PASS |
| `--dim #B8B3A6` | 9.45:1 | PASS | PASS |
| `--gold #D4AF37` | 9.41:1 | PASS | PASS |
| `--faint #7C776C` | 4.44:1 | **FAIL** | PASS |
| `--gold-deep #8C6A1E` | 3.95:1 | **FAIL** | PASS |

Only two tokens fail, and only marginally. `--faint` misses by 0.06. Lifting it
to about `#8A8578` clears 4.5:1 and is visually almost identical. `--gold-deep`
is fine where it is only used for large text or borders, but must not carry body
copy. Button text `#1a1305` on gold is 8.77:1, comfortably fine.

### A7. Dead code

Never imported anywhere: `Hero3D.jsx`, `ScrollFilm.jsx`, `VerticalMarquee.jsx`,
`HeroScroll.jsx`, `BeforeAfter.jsx`. Their CSS is still shipped in `index.css`
(`.sfilm`, `.vmarq` blocks).

`three`, `@react-three/fiber` and `@react-three/drei` are all installed and
present in `package.json`, but the only consumer, `Hero3D.jsx`, is unused. The
3D capability is paid for and sitting idle.

### A8. Corrections to the earlier blind review

Two claims made from screenshots before this code was read were wrong, and
acting on them would have made the site worse:

- **"Type scale is far too small."** Wrong. `.display` is
  `clamp(40px,7vw,84px)` and `.vhero__title` is `clamp(2.6rem,6.4vw,5.2rem)`.
  Those are correct. The screenshots were taken at a zoomed-out browser level,
  which shrank everything uniformly including the nav. Do not inflate the type.
- **"Empty left half, probably a missing asset."** Wrong. That section is
  `.shead` at `max-width:760px` inside a `max-width:1200px` container. It is
  left-aligned by design. There is no broken grid cell. It is a composition
  choice, addressed in Part B, not a bug.

One claim was confirmed exactly:

- **The duplicate headline is real.** "Four capabilities. One purpose: create
  measurable value." appears at `src/data/content.js:33` (rendered as
  `h.about.title`) and again hardcoded at `src/pages/Home.jsx:99`. Both render.

---

## PART B: RECOMMENDED STRUCTURE

The current order asks the visitor to absorb atmosphere before information.
Reorder so the page answers questions in the order a real buyer asks them.

### Current order

1. Video hero
2. Cinematic scenario1 (644vh)
3. About and approach
4. Hero band, "Engineering that pays for itself"
5. Divisions heading, its own section
6. Four division sections
7. Proven value
8. Team
9. Cinematic scenario3 (552vh)
10. Hero band, closing CTA
11. Contact, repeating the same three people as Team

### Proposed order

| # | Section | Answers | Height |
|---|---|---|---|
| 1 | Video hero | Who are you and what do you do | 100svh |
| 2 | Credibility strip | Are you real | ~30vh |
| 3 | **Four divisions** | What can you do for me | ~4 screens |
| 4 | Cinematic scenario1, shortened | Emotional payoff, now earned | ~4 screens |
| 5 | How we work, the 5 step chain | How do you operate | ~1 screen |
| 6 | Proven value KPI | Does it pay | ~1 screen |
| 7 | Hero band, "pays for itself" | Reinforce | 88vh |
| 8 | Team | Who will I deal with | ~1 screen |
| 9 | Contact, merged with team | How do I start | ~1 screen |
| 10 | Closing CTA band | Last call | 88vh |

### The five moves that matter

1. **Divisions move above the first cinematic.** This is the single highest
   impact change. The visitor reaches the answer within two screens instead of
   eight. The footage then plays as reward, not as toll.

2. **Add a credibility strip directly under the hero.** One thin band, roughly
   30vh: regions served, four division names, languages, years of experience.
   Answers "are these people real" before the visitor has to decide whether to
   keep scrolling. Currently that information is buried in the footer.

3. **Fold the divisions heading into the divisions section.** It is currently
   its own `<section>` with `paddingBottom: 0`, which is why it reads as
   floating. Merging it also removes the duplicate headline, since one of the
   two copies disappears by construction.

4. **Merge Team and Contact.** The same three people are listed twice, once
   with bios and once with phone and email. One section, one card per person,
   bio and contact together. Saves a full screen and removes the "haven't I
   just seen this" feeling.

5. **Cut cinematic height from `92vh` to about `65vh` per shot,
   and to `55vh` on mobile.** The storytelling survives. The scroll fatigue
   does not. `scenario1` drops from 644vh to roughly 455vh on desktop.

### Where the 3D and the two hero axes fit

The request is for 3D, a vertical hero and a horizontal hero. All three already
exist in the codebase. The work is wiring and gating, not building.

- **Vertical (main hero).** Keep `HeroVideo`. It is the right hero. Fix its
  loading per A3.2 and add the safe-area and `dvh` fixes.
- **Horizontal.** `ScrollHero` already does scroll-scrubbed horizontal footage
  and is live on Division pages. Promote one instance to the home page as
  section 4's opening beat, desktop and tablet landscape only.
- **3D.** `Hero3D` already renders a gold medallion with R3F and drei, and all
  three dependencies are installed. Bring it back as a **progressive
  enhancement layered over the video hero**, never as a replacement: video
  poster paints first, video plays, and the 3D canvas mounts only if the device
  clears a capability check. Lazy load it with `React.lazy` so `three` stays out
  of the main bundle.

**Hard rule on 3D and mobile:** do not mount an R3F canvas below 1024px, on
`(pointer: coarse)`, under `prefers-reduced-motion`, or when
`navigator.hardwareConcurrency <= 4`. Three.js plus drei is several hundred KB
of JavaScript and a continuous GPU load. On the mid-range Android this audience
actually uses, it will drain battery and stutter for no gain on a 6 inch screen.

---

## PART C: THE REFINEMENT PROMPT

Paste everything below into a fresh agent session in this repo.

```
You are a senior front-end engineer and UI/UX designer working on the LWC Group
marketing site. Branch: rebuild/immersive-site. Stack: React 18 + Vite 5, plain
CSS in src/index.css, GSAP + ScrollTrigger, Lenis smooth scroll, React Router 7,
three + @react-three/fiber + @react-three/drei already installed.

Read REFINEMENT-BRIEF.md first. Its audit is measured against this exact commit.
Do not re-derive it and do not re-litigate its findings.

THE DESIGN IS APPROVED. Keep the dark and gold system, the tokens at
src/index.css:5-16, and the Playfair + Inter pairing. You are refining delivery,
structure and performance. You are not restyling.

Work in the phases below, in order. After each phase, stop, show me what
changed, and wait before starting the next.

--- PHASE 1: MEDIA DIET (do this first, it dominates everything else) ---
Target: home page under 3 MB on first load, down from about 11.6 MB of video.
1. Re-encode all 18 mp4s: H.264 baseline plus a WebM/VP9 or AV1 sibling, max
   1600px on the long edge, target 900 kbps. Serve via <source> with the small
   format first. Report the before and after byte count per file.
2. Convert mining-before.png and mining-after.png to AVIF with WebP fallback.
   They are photographs stored as PNG, currently about 2 MB each.
3. Generate responsive widths (480 / 960 / 1600) for every jpg in public/ and
   serve with srcset + sizes. A 360px phone must never fetch a 1600px file.
4. HeroVideo.jsx: change preload="auto" to preload="none", keep the poster,
   and start the video only after the window load event or first interaction.
   The poster is the LCP element and must not compete with the video.
5. Cinematic.jsx: mount only the active shot and its immediate neighbours.
   Replace CSS background-image stills with <img loading="lazy" decoding="async">
   so they can be deferred at all.
6. useFrameScrub.js: do not preload the whole sequence. Load the first frame
   plus a sliding window, and skip the sequence entirely when
   prefers-reduced-motion is set, when matchMedia('(pointer: coarse)') matches,
   or when navigator.connection.saveData is true. Fall back to a static poster.

--- PHASE 2: MOBILE CORRECTNESS ---
1. index.html: viewport meta becomes
   content="width=device-width, initial-scale=1, viewport-fit=cover"
   Do not add user-scalable=no or maximum-scale.
2. Replace all six 100vh with 100dvh, keeping a 100vh fallback line above each.
   Use 100svh where an element must fit with the URL bar expanded.
3. Add env(safe-area-inset-*) padding to the fixed nav, the mobile nav panel and
   any floating CTA. Verify on 393x852 with the home indicator visible.
4. Rewrite every layout media query mobile-first. Base styles target 360px.
   Collapse the seven ad hoc breakpoints (900/820/800/720/700/640/620) to a
   documented four: 640, 900, 1200, 1600, all min-width.
5. .tags span currently computes to about 29px tall. Raise to a 44px minimum
   tap target with at least 8px between adjacent pills.
6. Lift --faint from #7C776C to about #8A8578. It measures 4.44:1 against
   --bg and needs 4.5:1. Never use --gold-deep (3.95:1) for body copy.
7. Remove body { overflow-x: hidden } and find the real overflow causes. Paste
   the detector from PART D of REFINEMENT-BRIEF.md into the console at each
   width in the device matrix and report offenders with file and line before
   editing. Re-add the rule at the end only if something remains, and say
   explicitly that it is a net and not a fix.

--- PHASE 3: STRUCTURE (follow PART B of the brief) ---
1. Reorder Home.jsx to the proposed order in PART B.
2. Add the credibility strip under the hero.
3. Fold the divisions heading into the divisions section, which removes the
   duplicate headline at content.js:33 / Home.jsx:99. Rewrite whichever copy
   survives so About and Divisions no longer say the same sentence.
4. Merge the Team and Contact sections into one. The same three people are
   currently listed twice.
5. Reduce Cinematic height from shots.length * 92vh to * 65vh, and * 55vh below
   900px.

--- PHASE 4: THE THREE HERO AXES ---
1. Vertical: keep HeroVideo as the main hero, now fixed by Phases 1 and 2.
2. Horizontal: promote a ScrollHero instance onto the home page to open the
   divisions act. Desktop and tablet landscape only. Below 1024px or on
   (pointer: coarse) it degrades to a static poster with the same headline.
   It must never trap scroll, and tab order must pass straight through it.
3. 3D: re-enable Hero3D as a layer over the video hero, never as a replacement.
   Load it with React.lazy so three stays out of the main bundle. Mount it only
   when ALL of these hold: viewport >= 1024px, (pointer: fine),
   prefers-reduced-motion is not set, and navigator.hardwareConcurrency > 4.
   Cap the renderer at devicePixelRatio 2, pause the animation loop when the
   canvas leaves the viewport, and dispose geometries and materials on unmount.
4. Delete the dead components and their CSS: ScrollFilm, VerticalMarquee,
   HeroScroll, BeforeAfter, plus the .sfilm and .vmarq blocks in index.css.

--- CONSTRAINTS (hard, apply to every phase) ---
- Keep Lenis. It is correctly gated behind prefers-reduced-motion already.
  Additionally disable it on (pointer: coarse) so touch keeps native physics.
- NO SCROLLJACKING beyond the existing pinned sections. Never override native
  scroll speed. The user must always scroll through at their own pace.
- Preserve all five existing prefers-reduced-motion blocks. Any new motion ships
  with its reduced-motion fallback in the SAME commit.
- Animate only transform and opacity.
- Content must be visible without JavaScript. Default visible in CSS, animate
  from there.
- Keyboard operable end to end. Test tabbing through every pinned section.
- Do not add a new animation or styling library. GSAP, Lenis and R3F are enough.
- Edit existing files. Do not create parallel v2 components.
- No em dashes in copy or code comments.

--- VERIFICATION (do not claim, verify) ---
Fill this matrix. Every cell PASS, FAIL or UNVERIFIED. Never blank, never guessed.

Viewports: 360x640, 375x667, 393x852, 412x915, 768x1024, 1024x768, 1280x800,
1920x1080, plus 320px as a stress test, plus every phone in landscape.

Checks per viewport: no horizontal scroll (scrollWidth <= clientWidth + 1);
body text >= 16px; nav opens, closes and traps focus, Escape works; correct
srcset served; console clean; all tap targets >= 44x44; safe area respected on
notched devices; reduced-motion yields a calm usable page.

Targets: Lighthouse mobile Performance >= 85, Accessibility >= 95, LCP < 2.5s
on simulated 4G, CLS < 0.1, home page first load < 3 MB.

Report honestly what you verified in a browser versus what you assumed.
```

---

## PART D: OVERFLOW DETECTOR

Paste into the browser console at each viewport width. Lists every element
wider than the viewport, widest first.

```js
(() => {
  const vw = document.documentElement.clientWidth;
  const offenders = [];
  document.querySelectorAll('body *').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.width > vw + 1 || r.right > vw + 1 || r.left < -1) {
      offenders.push({ el, width: Math.round(r.width), right: Math.round(r.right) });
    }
  });
  offenders.sort((a, b) => b.width - a.width);
  const sel = (el) => {
    let s = el.tagName.toLowerCase();
    if (el.id) s += '#' + el.id;
    if (el.classList.length) s += '.' + [...el.classList].slice(0, 3).join('.');
    return s;
  };
  console.log(`viewport ${vw}px, ${offenders.length} offender(s)`);
  offenders.slice(0, 25).forEach((o) =>
    console.log(`${o.width}px (right edge ${o.right})  ${sel(o.el)}`, o.el));
  return offenders.length === 0 ? 'CLEAN' : offenders.map((o) => o.el);
})();
```
