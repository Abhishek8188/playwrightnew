import { test, expect, Page } from '@playwright/test';

export async function loadHomepage(page: Page) {
    await page.goto('https:/www.example.com')  
}

export async function loadGraingerWebsite(page: Page) {
    await page.goto('https://www.grainger.ca')
}

export async function searchWithProduct(page: Page) {
    await page.waitForSelector('//input[@id="search"]')
    await page.locator('//input[@id="search"]').fill('EGO13035')
    await page.keyboard.press('Enter')
}

export async function verifyPDPpage(page: Page) {
    const productId = await page.locator('//li[@id="itemNumber"]/span').textContent()
    await expect(productId).toBe('EGO13035')
}

export async function assertTitle(page: Page) {
await page.waitForSelector('h5')
const url = await page.url()
await expect(url).toContain('fail')
}