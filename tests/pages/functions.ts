import { test, expect, Page } from '@playwright/test';

export async function loadHomepage(page: Page) {
    await page.goto('https:/www.example.com')
}

export async function loadGraingerWebsite(page: Page) {
    await page.goto('https://agi-hylt.gcom.grainger.com/en')
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

export async function encrypt(page: Page, value: string) {
    const buffer = Buffer.from(value);
    return buffer.toString('base64');
}

export async function decrypt(page: Page, encrypted: string) {
    const buffer = Buffer.from(encrypted, 'base64');
    return buffer.toString();
}

export async function loginAsCNCuser(page: Page) {
    const username = 'test41@gmail.com'
    const password = 'Test@1234'
    let encodedusername = await encrypt(page, username)
    let encodedpassword = await encrypt(page, password)
    await page.locator('//input[@id="j_username"]').fill(await decrypt(page, encodedusername))
    await page.locator('//input[@id="j_password"]').fill(await decrypt(page, encodedpassword))
    await page.locator('//input[@id="authenticationform-submit-widget"]').click()
    await page.waitForTimeout(3000)
}