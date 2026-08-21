# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: qa.spec.js >> / @ 393px: no horizontal overflow + clean console
- Location: tests\qa.spec.js:10:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "http://localhost:4173/", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | // The breakpoint matrix. 320 is the stress case; the rest are the real device
  4  | // widths the audience uses. See CONTRIBUTING.md for the breakpoint contract.
  5  | const WIDTHS = [320, 360, 375, 393, 412, 768, 1024, 1280, 1920]
  6  | const ROUTES = ['/', '/engineering', '/intelligence', '/digital', '/academy']
  7  | 
  8  | for (const route of ROUTES) {
  9  |   for (const w of WIDTHS) {
  10 |     test(`${route} @ ${w}px: no horizontal overflow + clean console`, async ({ page }) => {
  11 |       const errors = []
  12 |       page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
  13 |       page.on('pageerror', (e) => errors.push(String(e)))
  14 | 
  15 |       await page.setViewportSize({ width: w, height: 800 })
> 16 |       await page.goto(route, { waitUntil: 'domcontentloaded' })
     |                  ^ Error: page.goto: Test timeout of 30000ms exceeded.
  17 | 
  18 |       // Scroll through so sticky and lazy sections lay out before measuring.
  19 |       await page.evaluate(async () => {
  20 |         const H = document.body.scrollHeight
  21 |         for (let y = 0; y <= H; y += window.innerHeight) {
  22 |           window.scrollTo(0, y)
  23 |           await new Promise((r) => setTimeout(r, 20))
  24 |         }
  25 |         window.scrollTo(0, 0)
  26 |       })
  27 | 
  28 |       const overflow = await page.evaluate(
  29 |         () => document.scrollingElement.scrollWidth - document.documentElement.clientWidth
  30 |       )
  31 |       expect(overflow, `horizontal overflow of ${overflow}px at ${w}px on ${route}`).toBeLessThanOrEqual(1)
  32 |       expect(errors, `console errors at ${w}px on ${route}:\n${errors.join('\n')}`).toEqual([])
  33 |     })
  34 |   }
  35 | }
  36 | 
```