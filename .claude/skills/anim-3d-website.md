---
name: anim-3d-website
description: Build premium, "3D-feeling" animated scroll marketing websites (the awwwards / "$10k site" look) — cinematic hero, scroll-scrubbed frame sequences OR image+GSAP scroll journeys, before/after transformations, a luxury design system, and GitHub→Vercel deploy. Use for any marketing/landing-site build or animation. Distilled from the "$10k animated 3D website" tutorials, with the hype removed and a no-paid-tools path included.
---

# anim-3d-website

How to build the premium animated scroll sites that look expensive. **Read the honesty note last — it matters.**

## The one thing to understand first
The "3D" in viral "$10k websites" is almost never WebGL/Three.js. It is a **video (or image sequence) scrubbed by scroll position on a `<canvas>`** — scroll down advances the frames, scroll up reverses them. Everything else (design system, deploy) is ordinary web work. Three techniques, pick by what you have:

| Recipe | What it is | Requires | Use when |
|---|---|---|---|
| **A. Frame-scrub** | image→video→FFmpeg frames→scroll maps to frame index | a video generator + FFmpeg | you have a video-gen tool and want the cinematic assemble/explode/fly-through |
| **B. Image + GSAP/CSS** | pinned sections, cross-fade / wipe / parallax, count-up stats, reveal-on-scroll | only images (Gemini/Firefly) | **default** — 90% of the wow, no paid video tools, mobile-friendly |
| **C. Real WebGL** | Three.js / React-Three-Fiber + GSAP + Lenis | heaviest build | genuinely interactive 3D geometry is the point |

Default to **B** unless a video generator is available and the frame-scrub is worth it.

## Asset pipeline (both A and B)
1. **Hero + scene images** — generate 16:9, no text, leave space for hero copy. Tools: Gemini (Nano Banana), Adobe Firefly (commercial-safe), Midjourney (paid). Keep ONE consistent style sentence across all images so the set matches.
2. **Before/after or transition pairs** — generate the pair **in the same session** ("keep the same people/scene, now calm and in control…") so characters stay consistent.
3. **(Recipe A only) image→video** — same image as first+last frame, static camera, only the subject moves. Tools: Seedance 2.0 / Kling / Veo / Kie.ai / Higgsfield.
4. **(Recipe A only) frames** — `ffmpeg -i in.mp4 -vf fps=24 frames/%04d.webp` (10fps = lighter site, 24 = smoother).
5. **Optimise** — convert to WebP, compress hard. Page weight is a feature, not an afterthought (see accessibility).

## Stack (pick by ambition)
- **Single-file `index.html` + GSAP + Lenis via CDN** — simplest, portable, deploys anywhere. **Best default for a marketing site.**
- **React + Vite + GSAP (+ R3F for recipe C)** — only if the site will grow into an app.
- Libraries that do the heavy lifting: **GSAP + ScrollTrigger** (pin, scrub, reveal), **Lenis** (smooth scroll), **Framer Motion** (React alt). Fonts via Google Fonts / self-host.

## Design system — the "looks expensive" rules
- **Dark, typography-led, restraint = luxury.** Whitespace is the design.
- **Exact-match backgrounds:** frame/image background === page background (e.g. both `#0B0B0D`) so sequences have no visible seam.
- **One accent colour, used sparingly** (rules, numerals, CTA). For LWC: gold `#C8912E → #F5D67A` on near-black.
- **Motion:** slow, eased, 0.8–1.2s, custom cubic-bezier. Never bouncy. Reveal, don't bounce.
- **Type:** high-contrast display serif for headlines + restrained grotesk/sans for body; generous letter-spacing on small uppercase labels.
- **Nav:** whisper-thin fixed bar, transparent at top → hairline border + slight background after scroll.
- **Avoid** (unless the brand truly calls for it): cards everywhere, glassmorphism, glow, text gradients, stocky "AI-brain" clichés.
- **Reference-first:** before building, pull a concrete look from **awwwards.com / dribbble / motionsites.ai** and match its colour/type/spacing/motion. Skipping this is why sites look generic.

## Scroll mechanics
- **Hero pin:** pin the hero for ~300–350vh; map scroll progress → frame index (recipe A) or → cross-fade/transform (recipe B), **interpolated, no snapping**; reverse on scroll-up.
- **Narrative overlays:** text blocks fade in/out at scroll ranges (0–20%, 20–45%, …), alternating sides.
- **Section reveals:** GSAP ScrollTrigger stagger, parallax bands, count-up stat numbers.
- **Frame-scrub perf (recipe A):** preload frames progressively and decode off the main thread (`createImageBitmap`) so scrubbing never stutters.
- **Before→after mechanic (recipe B):** BEFORE image (cold/desaturated) → on scroll, a wipe/light-sweep → AFTER image (warm/ordered), with a metric counting up. Reuse the same transition on every case so the site has rhythm.

## Accessibility & performance (non-negotiable — the audience may be on mobile / low bandwidth)
- Honour `prefers-reduced-motion`: replace scrubs with a static hero + simple fades.
- Lazy/progressive-load images; WebP; compress; cap total page weight; test on a throttled connection.
- Desktop-first build, then an explicit **mobile pass** (F12 mobile view → fix; it will look broken until you do).

## Deploy
- **GitHub → Vercel** (sign in with GitHub → Import repo → Deploy, ~60s). Classic bug: 404 on load → the entry file isn't `index.html` at repo root → **rename entry to `index.html`**, push, auto-redeploy.
- Verify on **localhost first**; never share a `localhost:PORT` URL — it only resolves on your machine.
- Alternatives: Netlify (drag-drop), Hostinger (has an MCP connector), Cloudflare Pages.

## The master build prompt (fill the brackets)
> Build a single-page marketing site for **[brand]**, **[one-line positioning]**. Feel: **[dark/luxury/industrial…]**, typography-led, restraint over decoration. Stack: **[single-file HTML + GSAP + Lenis / React+Vite]**. Hero: **[recipe A frame-scrub pinned ~350vh / recipe B before→after transform]** using **[assets]**; page background exactly **[#hex]** to match the media. Narrative overlays fading in/out by scroll range **[list beats + copy]**. Below the hero: **[sections]**. Art direction: palette **[bg / text / one accent hex]**; type **[serif headline + grotesk body]**; motion slow/eased 0.8–1.2s. Nav: thin fixed bar, transparent→hairline on scroll. Responsive: mobile axis vertical, honour prefers-reduced-motion (static hero + fades). Deploy-ready as `index.html` at repo root.

## Gotchas ledger
- FFmpeg must be installed for recipe A frame extraction.
- Some video tools cap uploads (~30–40 MB) — keep clips ~8 s.
- **Approve generated images before stitching a video** — stray objects sneak in (a tutorial got an unwanted sauna).
- For a walkthrough/fly-through, give a **floor plan + explicit path** or room order is random.
- First draft is usually weak → budget one iteration pass; these are not true one-shots.
- **Character consistency** across before/after: generate the pair in one session.

## ⚠️ Honesty note (do not skip)
- The "$10,000 website in minutes" framing is **marketing hype**. The *engineering* (frame-scrub, scroll-journey, design system, deploy) is real and reusable; the price tags and timelines are not.
- Several tutorials tell you to run Claude Code with `--dangerously-skip-permissions`. **Don't** on a machine with sensitive data — it lets the agent run commands unprompted. Use normal permission prompts, or an isolated folder/machine.
- The paid stacks (Higgsfield, Kie.ai, Seedance, Claude Design, Fable 5) are **optional**. Recipe B needs none of them. Reach for paid video only when the cinematic frame-scrub genuinely earns its cost.
