import { test, expect } from '@playwright/test'

// The breakpoint matrix. 320 is the stress case; the rest are the real device
// widths the audience uses. See CONTRIBUTING.md for the breakpoint contract.
const WIDTHS = [320, 360, 375, 393, 412, 768, 1024, 1280, 1920]
const ROUTES = ['/', '/engineering', '/intelligence', '/digital', '/academy']

for (const route of ROUTES) {
  for (const w of WIDTHS) {
    test(`${route} @ ${w}px: no horizontal overflow + clean console`, async ({ page }) => {
      const errors = []
      page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
      page.on('pageerror', (e) => errors.push(String(e)))

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
      expect(overflow, `horizontal overflow of ${overflow}px at ${w}px on ${route}`).toBeLessThanOrEqual(1)
      expect(errors, `console errors at ${w}px on ${route}:\n${errors.join('\n')}`).toEqual([])
    })
  }
}
