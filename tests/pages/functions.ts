import { test, expect } from '@playwright/test';

export async function loadHomepage(page) {
    await page.goto('https:/www.example.com')  
}

export async function loadGraingerWebsite(page) {
    await page.goto('https://www.grainger.ca')
}

export async function searchWithProduct(page) {
    await page.waitForSelector('//input[@id="search"]')
    await page.locator('//input[@id="search"]').type('EGO13035')
    await page.press('ENTER')
}

export async function assertTitle(page) {
await page.waitForSelector('h5')
const url = await page.url()
await expect(url).toContain('fail')
}