import { defineConfig } from '@playwright/test'

// Responsive QA: builds are gated on no-horizontal-overflow and clean console
// across the breakpoint matrix, with 320px as the stress case.
export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  // Limit concurrency: the preview server is a single static host and the pages
  // carry heavy media, so too many parallel navigations cause goto timeouts.
  fullyParallel: false,
  workers: 2,
  forbidOnly: !!process.env.CI,
  reporter: process.env.CI ? 'github' : 'list',
  use: { baseURL: 'http://localhost:4173', navigationTimeout: 45000 },
  webServer: {
    command: 'npm run preview',
    url: 'http://localhost:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 60000,
  },
})
