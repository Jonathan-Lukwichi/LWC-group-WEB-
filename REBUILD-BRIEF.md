# LWC Group Site Rebuild Brief

> Saved 2026-08-21. Master spec for rebuilding the LWC Group marketing site into a
> dynamic, immersive, mobile-flawless scroll experience. Execute in the order below;
> diagnose before editing; verify, do not claim.

You are a senior front-end engineer and UI/UX designer. Rebuild the LWC Group
marketing site (currently at localhost:4173) into a dynamic, immersive scroll
experience that is flawless on every phone in real use, without sacrificing
accessibility, performance, or clarity.

STEP 0 - GROUND YOURSELF FIRST. Do not write code yet.
Read the repository and report back: framework and build tool, styling system
(and its exact major version, since Tailwind v3 and v4 syntax differ), any
animation library already installed, the homepage component structure, where
design tokens live, and the current contents of the viewport meta tag. Then
give me your plan and wait for approval. My stack is: [FILL IN].

=== BRAND CONTEXT ===
LWC Group, a South African engineering and technology company serving business,
mining and industrial operations across South Africa and the DRC. Four
divisions: Engineering, Intelligence, Digital, Academy. Bilingual EN/FR.
Current aesthetic: black and gold, serif display headings. Audience: mining
executives, plant managers, procurement leads, often on mid-range Android
phones on variable networks. Tone must stay credible and industrial. Every
motion decision should increase confidence, never distract from it.

=== PART 1: FIX WHAT IS BROKEN (before adding any motion) ===
1. Duplicate headline. "Four capabilities. One purpose: create measurable
   value." is used for BOTH the "Who we are" and "What we do" sections.
   Rewrite one of them.
2. Layout dead space. At 1440px and above, content sits in a narrow centre
   column with large empty regions, and the "Who we are" section has an empty
   left half. Investigate whether a grid cell has a missing asset, then rebuild
   on a 12 column grid with content max-width around 1280 to 1440px.
3. Type scale. Rebuild as a fluid modular scale using clamp(). Hero h1 around
   clamp(2.5rem, 7vw, 6rem). Body copy minimum 17px on desktop, never below
   16px on mobile. Line length 60 to 75 characters. Body line height 1.5+.
4. Contrast. Audit every text and background pair against WCAG 2.2 AA (4.5:1
   body, 3:1 large text). Text over photography gets a real gradient scrim
   behind it. Never rely on the image happening to be dark enough.
5. Navigation. Currently small and low contrast. Raise contrast, enforce
   44x44px minimum targets, add a visible focus ring, and give the bar a solid
   or blurred background once the user scrolls past the hero.

=== PART 2: THE HERO ===
Full viewport scene using 100dvh (keep a 100vh line above it as fallback):
- Layered composition: background media, gradient scrim, then content.
- Hierarchy: eyebrow, h1, one sentence subhead, two CTAs (primary and
  secondary). Consider an asymmetric lower-left anchor rather than centring
  everything, which suits industrial brands and gives the imagery room.
- Staggered fade and rise entrance, 400 to 600ms, ease-out. Nothing bouncy.
- A scroll cue that fades out on first scroll.
- The hero must be legible and complete with JavaScript disabled.
- On phones the hero must fit without the CTAs falling below the fold. Verify
  at 360x640, the tightest real case.

=== PART 3: SCROLL CHOREOGRAPHY ===
Treat the page as a narrative in acts, each using a different technique:

ACT 1 Hero: parallax, background slower than foreground. DESKTOP ONLY.
ACT 2 Who we are: plain vertical scroll with reveal on enter. Let it breathe.
ACT 3 Four divisions: ONE pinned horizontal scroll section, panels translating
      horizontally as the user scrolls vertically. This is the centrepiece.
      DESKTOP AND TABLET LANDSCAPE ONLY (see Part 4).
ACT 4 Process (Understand, Analyse, Engineer, Prove, Scale): sticky stacking,
      heading pinned while steps advance, with a progress indicator.
ACT 5 Proven value: count-up on the R170,000 to R915,000 figure, triggered
      once on enter, never re-triggered on scroll back.
ACT 6 Team and contact: calm, simple fades. End the page quietly.

Sparingly: a slow marquee of sectors, clip-path image reveals, a thin scroll
progress bar under the nav.

=== PART 4: MOBILE AND RESPONSIVE (TREAT AS THE PRIMARY TARGET) ===
Most of this audience will meet the site on a phone first. Build mobile first
and let desktop be the enhancement, not the reverse.

4.1 DEVICE MATRIX. The site must be verified at every one of these:
  Small Android      360 x 640
  iPhone SE          375 x 667
  iPhone 15/16 Pro   393 x 852   (notch and home indicator)
  Large Android      412 x 915
  Tablet portrait    768 x 1024
  Tablet landscape   1024 x 768
  Laptop             1280 x 800
  Wide desktop       1920 x 1080
Also check 320px width as a stress test, and every phone above in landscape.

4.2 MOBILE-FIRST DISCIPLINE.
- Base styles target the smallest viewport. Every breakpoint is a min-width
  addition. Never layer max-width patches over a desktop design.
- Fluid type and space via clamp() rather than stepped size chains whose
  intermediate values were never actually looked at.
- Pair rem with vw inside clamp so text still scales when the user changes
  their browser font size.

4.3 VIEWPORT AND UNITS.
- The viewport meta must be:
  <meta name="viewport" content="width=device-width, initial-scale=1,
   viewport-fit=cover">
  The viewport-fit=cover part is required for safe-area support. Do not add
  user-scalable=no or maximum-scale, which break pinch zoom and fail WCAG.
- Replace every 100vh with 100dvh, keeping a 100vh fallback line above it.
  Use 100svh where an element must fit with the mobile URL bar expanded.
  Plain 100vh causes the well known iOS Safari bottom-cropping bug.

4.4 NOTCH AND SAFE AREAS.
- Any fixed header, bottom bar, floating button or modal must add
  env(safe-area-inset-*) padding so it clears the notch and the home
  indicator on iPhone 15/16 Pro.
- Verify the WhatsApp CTA specifically, since floating action buttons are the
  most common casualty of the home indicator.

4.5 TOUCH.
- Every interactive element at least 44x44px, including nav links, chips,
  division tags and social icons. The current nav and the small pill tags on
  the divisions section will both fail this and need rebuilding.
- Minimum 8px spacing between adjacent tap targets.
- NO hover-only interactions. Anything revealed on hover must also be
  reachable by tap and by keyboard focus. Card overlays that appear on hover
  are invisible to touch users.
- Set -webkit-tap-highlight-color deliberately rather than leaving the
  default grey flash.
- Any form input must have font-size 16px or larger, otherwise iOS Safari
  auto-zooms the page on focus and the user cannot zoom back out cleanly.

4.6 NAVIGATION ON MOBILE.
- Collapse the seven item nav into an accessible disclosure menu: a real
  button with aria-expanded and aria-controls, focus moved into the panel on
  open, focus trapped while open, Escape closes and returns focus to the
  trigger. Do not use the CSS-only checkbox hack.
- Lock background scroll while the menu is open, and restore scroll position
  on close.

4.7 THE HORIZONTAL SECTION ON MOBILE. This is the highest risk item.
- Below 1024px and on any touch device, Act 3 must NOT pin. Replace it with
  either a vertical stack of the four division panels, or a native swipeable
  carousel using CSS scroll-snap with visible pagination dots.
- Detect with a media query on width plus (hover: none) and (pointer: coarse),
  not by user-agent sniffing.
- Rationale: pinned horizontal scroll on touch fights the browser's own
  gesture handling, breaks pull-to-refresh, and traps users.

4.8 MOBILE PERFORMANCE (mid-range Android is the target, not your laptop).
- Disable parallax and all pinning below 1024px. On low-end devices these
  cause visible jank and battery drain for no benefit on a small screen.
- Animate only transform and opacity. Never animate width, height, top, left.
- IntersectionObserver for reveals, never scroll event listeners. If a scroll
  listener is unavoidable, throttle through requestAnimationFrame.
- Serve responsive images with srcset and sizes so a 360px phone never
  downloads a 1920px hero. Modern formats (AVIF or WebP) with fallback.
- Explicit width and height on every image to prevent layout shift.
- Lazy-load everything below the fold. The hero image loads eagerly with
  fetchpriority="high".
- If the hero uses video, do not autoplay it on mobile. Serve a poster image
  instead, or gate it behind prefers-reduced-data.
- Mobile targets: Lighthouse mobile Performance 85+, LCP under 2.5s on
  simulated 4G, CLS under 0.1, no long task over 200ms during scroll.

4.9 OVERFLOW: DIAGNOSE, DO NOT GUESS.
Horizontal overflow is the single most common mobile failure. Search the
codebase in this priority order:
  1. fixed px widths and min-width on layout containers
  2. unclamped display type (a 6rem heading at 360px is 96px of overflow)
  3. nav or button rows with no collapse breakpoint
  4. white-space: nowrap on long strings
  5. absolutely positioned decorative elements outside a clipped relative parent
  6. wide tables and code blocks
  7. images without max-width: 100%
  8. grid-template-columns with a fixed N and no mobile-first base
  9. 100vw used where 100% was meant (100vw includes the scrollbar)
Then confirm empirically with the offender-scan snippet (see Part 7).
Report offenders as a ranked list with file and line references BEFORE editing.
overflow-x: clip on the root wrapper is a net, not a fix, and must be labelled so.

4.10 GRID AND CARD DISCIPLINE.
- Card grids use auto-fit with the mandatory wrapper:
  grid-template-columns: repeat(auto-fit, minmax(min(var(--card-min), 100%), 1fr));
- Apply min-width: 0 to flex and grid children that contain text.
- Use container queries rather than viewport queries for component-level decisions.
- Long strings (emails, URLs, part numbers) get overflow-wrap: anywhere.

4.11 MOBILE CONTENT STRATEGY, NOT JUST MOBILE CSS.
- Reflow rather than shrink. DOM order matches visual order.
- The five step process bar becomes a vertical list, not five squeezed circles.
- Keep the primary CTA reachable without a long scroll.
- Section vertical padding fluid, roughly clamp(3rem, 10vw, 8rem).

=== PART 5: NON-NEGOTIABLE CONSTRAINTS ===
MOTION
- NO SCROLLJACKING. Never override native scroll speed/physics; never replace
  the real scrollbar. Act 3 vertical->horizontal while pinned is fine on desktop.
- Every animation respects prefers-reduced-motion: reduce (disable parallax,
  pinning, transforms; Act 3 becomes a vertical stack). Ship in the same commit.
- Entrance animations under 600ms.

ACCESSIBILITY (WCAG 2.2 AA)
- Fully operable by keyboard, including the pinned section.
- Content visible without JS: default visible in CSS, animate from there.
- Semantic HTML: one h1, logical heading order, real nav/main/section, alt text.
- Visible focus indicators everywhere.
- Pinch zoom works. Reflow without loss at 320px and 400% zoom.

=== PART 6: HOW TO WORK ===
- Work section by section. After each act, stop and show the result.
- Diagnose before editing. Show the ranked cause list and wait for confirmation
  on anything architectural.
- Do not add a heavy animation library if CSS + IntersectionObserver suffice.
- Prefer editing existing files over creating parallel "v2" components.
- Keep existing brand colours and typography unless arguing for a change.
- Be honest when something needs a design decision, and ask.
- Do not use em dashes in generated copy or code comments.

=== PART 7: VERIFICATION (do not claim, verify) ===
Produce a filled device matrix. Every cell PASS, FAIL or UNVERIFIED, never blank.
Per viewport check: no horizontal scroll (scrollWidth <= clientWidth + 1), text
legible (body >= 16px), navigation usable (open/close/trap/Escape), images render
(srcset, no CLS), console clean, touch targets >= 44x44, safe area respected,
motion respects settings.

Offender-scan snippet to run in console at each width:

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

Drive verification with Playwright across all eight viewports asserting
document.scrollingElement.scrollWidth <= clientWidth + 1 and capturing console
errors. Add a CI Playwright check that fails the build on horizontal overflow or
console errors at 320px, and document the breakpoint contract in a CONTRIBUTING note.

=== DEFINITION OF DONE ===
Build passes. No console errors at any viewport. No horizontal overflow 320-1920px.
Keyboard navigable end to end. prefers-reduced-motion yields a calm usable page.
Contrast passes AA. Pinned horizontal scroll absent on all touch devices.
Lighthouse mobile Performance 85+ and Accessibility 95+. Report honestly what was
verified versus assumed.
