import { test, expect } from '@playwright/test'

// The breakpoint matrix. 320 is the stress case; 344/430 cover the smallest
// Android and the largest iPhone Pro Max. The rest are the real device widths
// the audience uses. See CONTRIBUTING.md for the breakpoint contract.
const WIDTHS = [320, 344, 360, 375, 393, 412, 430, 768, 1024, 1280, 1920]
// Phone widths where longer French copy is most likely to overflow a card/image.
const PHONE_WIDTHS = [320, 344, 360, 375, 393, 412, 430]
const ROUTES = ['/', '/engineering', '/intelligence', '/digital', '/academy']

async function assertClean(page, route, w, lang) {
  const errors = []
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
  page.on('pageerror', (e) => errors.push(String(e)))

  // Force the language before any app code runs, then load.
  await page.addInitScript((l) => { try { localStorage.setItem('lwc-lang', l) } catch (e) {} }, lang)
  await page.setViewportSize({ width: w, height: 800 })
  await page.goto(route, { waitUntil: 'domcontentloaded' })

  // Scroll through so sticky and lazy sections lay out before measuring.
  await page.evaluate(async () => {
    const H = document.body.scrollHeight
    for (let y = 0; y <= H; y += window.innerHeight) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 20))
    }
    window.scrollTo(0, 0)
  })

  const overflow = await page.evaluate(
    () => document.scrollingElement.scrollWidth - document.documentElement.clientWidth
  )
  expect(overflow, `horizontal overflow of ${overflow}px at ${w}px on ${route} [${lang}]`).toBeLessThanOrEqual(1)
  expect(errors, `console errors at ${w}px on ${route} [${lang}]:\n${errors.join('\n')}`).toEqual([])
}

// English across the full width matrix.
for (const route of ROUTES) {
  for (const w of WIDTHS) {
    test(`${route} @ ${w}px [en]: no overflow + clean console`, async ({ page }) => {
      await assertClean(page, route, w, 'en')
    })
  }
}

// French across the phone widths — the longer copy must still not overlap/overflow.
for (const route of ROUTES) {
  for (const w of PHONE_WIDTHS) {
    test(`${route} @ ${w}px [fr]: no overflow + clean console`, async ({ page }) => {
      await assertClean(page, route, w, 'fr')
    })
  }
}
