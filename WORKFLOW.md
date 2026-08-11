# LWC Group — Website Build Workflow (Maintenance first)

Applies the `anim-3d-website` skill (in `.claude/skills/`) to build the LWC Group site.
**Scope of build #1: the Maintenance Reliability page only.** Other pillars (hospital,
process, data→decisions) are added later as more before/after sections.

---

## 1. What we are building
A premium, animated single-page **marketing** site for **LWC Group — Maintenance Reliability
Services**. Luxury visuals + **grounded copy** (the site looks like a million dollars; the words
never overclaim). Signature mechanic: a **before → after transformation on scroll** — a mining
breakdown "no one can master" becomes reliability "everyone masters," with a gold crown/light sweep
(from the logo) as the transition.

## 2. Brand
- **Palette:** near-black `#0B0B0D` background · gold accent `#C8912E → #F5D67A` (used sparingly) ·
  warm off-white text `#EDE8E0` (90% / 55% opacity). BEFORE tones = cold/desaturated/red;
  AFTER tones = warm gold, ordered.
- **Logo:** `Gold Luxury Initial Emblem Logo.png` (crown + laurel + LWC monogram) — top-left + hero.
- **Tagline:** "King of Engineering Solutions."
- **Type:** high-contrast display serif headline (e.g. Fraunces) + restrained grotesk body
  (e.g. Inter); generous letter-spacing on small uppercase labels.
- **Voice:** calm, evidence-first. The "What we will not claim" section is a trust centrepiece.

## 3. Content source
The **LWC Group Maintenance Reliability proposal** (already written) —
`Desktop\LWC_Group_Maintenance_Reliability_Proposal.docx`. Reuse its 8 sections as the site copy.

## 4. Storyboard (scroll order)
1. **Hero** — black; gold emblem; headline + subhead + CTA. Subtle animated background
   (looping dark industrial clip OR slow zoom on a dark plant image + drifting gold particles).
   Headline candidate: *"We turn breakdowns no one can master into reliability everyone can."*
2. **The problem** — "Most plants maintain out of habit, not evidence." The wrench-time line
   (25–35% vs ~55% world-class) + the four failure points, revealed on scroll.
3. **★ Signature BEFORE → AFTER (Mining reliability)** — the Gemini pair. BEFORE (stressed engineers
   at a failed machine, cold) → gold crown/light sweep on scroll → AFTER (same team calm, machine
   running, warm). A metric counts up (e.g. "unplanned downtime ↓").
4. **How we work** — the 4 stages as a scroll journey: Review → Data Diagnostic → Reliability
   Workbench → Condition & Prediction. Each stage reveals with its one-line promise.
5. **Where we use AI — and where we don't** — trust / grounded.
6. **What we will not claim** — trust (the three red-lined promises).
7. **Investment** — the staged table (Stages 1–2 fixed, 3–4 quoted).
8. **Next step + footer** — two brothers, contact, EN/FR, South Africa · DRC · Africa.

## 5. Animation approach (decided by asset availability)
- **Default = Recipe B (image + GSAP/CSS)** — needs only the Gemini images; mobile-friendly; free.
  The before/after is a scroll cross-fade + gold wipe; sections reveal with ScrollTrigger; stats
  count up.
- **Upgrade = Recipe A (frame-scrub)** — only if a video generator is available and we want the
  cinematic before→after as a scrubbed clip. Needs FFmpeg.
- See the `anim-3d-website` skill for both.

## 6. Assets needed for build #1 (from Gemini)
- [ ] **Hero background** — dark industrial/plant, room for text (16:9). *Or* a short looping clip.
- [ ] **Mining BEFORE** — stressed engineers at a failed machine, cold tone (prompt already written).
- [ ] **Mining AFTER** — same engineers, calm, machine running, warm/gold (prompt already written).
- [ ] (Optional) 4 small stage icons/illustrations for the "How we work" journey.
- Logo PNG (have it). Later builds add the other 3 cases' before/after pairs.

## 7. Tech + deploy
- **Stack:** single-file `index.html` + GSAP + ScrollTrigger + Lenis (CDN). Portable, easy deploy.
- **Deploy:** GitHub → **Vercel** (you already use Vercel). Entry file = `index.html` at repo root.
- Verify on localhost first; mobile pass after desktop.

## 8. Build steps
1. Scaffold `index.html` + design tokens (palette, type, spacing) per §2.
2. Drop in copy from the proposal (§3) — grounded, no overclaim.
3. Build hero (logo, headline, CTA, animated bg).
4. Build the ★ before/after mechanic (the signature — get this feeling right first).
5. Build sections 2 + 4–8 with ScrollTrigger reveals + count-up stats.
6. Accessibility: `prefers-reduced-motion` fallback; lazy-load images; compress.
7. Mobile pass (F12 → fix).
8. Deploy to Vercel; verify live.
9. Iterate (budget one polish pass).

## 9. Open questions (answer these and we start building)
1. **Video generator?** Do you have access to an image→video tool (Higgsfield / Kling / Seedance /
   Kie.ai / Veo)? → Yes = we can do the cinematic frame-scrub (Recipe A). No/unsure = we use the
   image-only Recipe B (my recommendation to start — it needs only your Gemini images).
2. **Stack:** single portable `index.html` (my recommendation), or React + Vite?
3. **Deploy target:** Vercel (you already use it), or another?
4. **Do you have the two mining images yet** (BEFORE/AFTER from Gemini), or should I build with
   tasteful placeholders so you can drop them in later?
5. **Domain/contact details** for the footer + a real CTA (email/phone/WhatsApp)?
