import { test, expect, Page, chromium, Locator } from '@playwright/test';

export class FunctionsPage {
    page: Page;
    LOGIN: Locator;

    constructor(page: Page) {
        this.page = page
        this.LOGIN = page.locator('//*[text()="Login/Register"]')
    }

    async loadHomepage(page: Page) {
        await page.goto('https:/www.example.com')
    }
    async loadGraingerWebsite(page: Page) {
        await page.goto('https://agi-hylt.gcom.grainger.com/en')
    }

    async loadGrowApp(page: Page) {
        const browser = await chromium.launch()
        const context = await browser.newContext()
        const newpage = await context.newPage()
        await newpage.goto('https://groww.in/')
        await newpage.waitForLoadState()
        return newpage;
    }

    async clickOnLoginRegisterLink(page: Page, newpage) {
        await newpage.locator('//*[text()="Login/Register"]').isVisible()
        await newpage.locator('//*[text()="Login/Register"]').click()
    }

    async enterEmailandClickOnContinue(page: Page, newpage) {
        await newpage.locator('//input[@id="login_email1"]').isVisible()
        await newpage.locator('//input[@id="login_email1"]').fill('testqa@getnada.com')
        await newpage.locator('//div/span[text()="Continue"]').click()
    }

    async navigateToInboxWebsite(page: Page) {
        const browser = await chromium.launch()
        const context = await browser.newContext()
        const page1 = await context.newPage()
        await page1.goto('https://www.inboxes.com/')
        await page1.waitForLoadState()
        return page1;
    }

    async verifymailandclickOnmail(page: Page, page1) {
        await page1.bringToFront()
        await page1.locator('//button[text()="Get my first inbox!"]').click()
        await page1.locator('//div/input[@id="username"]').fill('testqa')
        await page1.locator('//div[@class="w-full md:w-1/2 px-3"]/select').click()
        await page1.selectOption('//div[@class="w-full md:w-1/2 px-3"]/select', 'getnada.com')
        await page1.locator('//button[@class="text-center font-medium focus-within:ring-4 focus-within:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus-within:ring-primary-300 dark:focus-within:ring-primary-800 rounded-lg w-full1"]').click()
        await page1.waitForTimeout(3000)
        await page1.locator('//button[@title="Reload"]').click()
        await page1.waitForTimeout(3000)
        await page1.waitForSelector('(//tr/td[@class="px-2 py-4 whitespace-nowrap text-gray-900 dark:text-white font-bold +"])[1]')
        await page1.locator('(//tr/td[@class="px-2 py-4 whitespace-nowrap text-gray-900 dark:text-white font-bold +"])[1]').click()
        const heading = await page1.locator('//h4[@class="text-lg font-bold pb-2 mb-4 border-b-2"]').textContent()
        const trimmedText = heading.replace('Your email verification OTP is', '').trim();
        await page1.close()
        return trimmedText;
    }

    async enterOtp(newpage, otp) {
        await newpage.bringToFront()
        await newpage.locator('//input[@id="signup_otp1"]').fill(otp)
        await newpage.waitForTimeout(3000)
    }

    async searchWithProduct(page: Page) {
        await page.waitForSelector('//input[@id="search"]')
        await page.locator('//input[@id="search"]').fill('EGO13035')
        await page.keyboard.press('Enter')
    }

    async verifyPDPpage(page: Page) {
        const productId = await page.locator('//li[@id="itemNumber"]/span').textContent()
        await expect(productId).toBe('EGO13035')
    }

    async assertTitle(page: Page) {
        await page.waitForSelector('h5')
        const url = await page.url()
        await expect(url).toContain('fail')
    }

    async encrypt(page: Page, value: string) {
        const buffer = Buffer.from(value);
        return buffer.toString('base64');
    }

    async decrypt(page: Page, encrypted: string) {
        const buffer = Buffer.from(encrypted, 'base64');
        return buffer.toString();
    }

    async loginAsCNCuser(page: Page) {
        const username = 'test41@gmail.com'
        const password = 'Test@1234'
        let encodedusername = await this.encrypt(page, username)
        let encodedpassword = await this.encrypt(page, password)
        await page.locator('//input[@id="j_username"]').fill(await this.decrypt(page, encodedusername))
        await page.locator('//input[@id="j_password"]').fill(await this.decrypt(page, encodedpassword))
        await page.locator('//input[@id="authenticationform-submit-widget"]').click()
        await page.waitForTimeout(3000)
    }
}