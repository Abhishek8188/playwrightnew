import { test, expect } from '@playwright/test';

export async function loadHomepage(page) {
    await page.goto('https:/www.example.com')  
}

export async function assertTitle(page) {
await page.waitForSelector('h5')
const url = await page.url()
await expect(url).toContain('fail')
}