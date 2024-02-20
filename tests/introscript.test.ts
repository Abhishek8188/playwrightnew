import { test, expect } from '@playwright/test';



test('new script', async ({ page }) => {
    await page.goto('https://playwright.dev/')
    const heading = await page.locator("//h1[@class='hero__title heroTitle_ohkl']")
    await expect(heading).toContainText('Playwright');
})
