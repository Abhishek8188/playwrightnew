import { test, expect } from '@playwright/test';
import { FunctionsPage } from '../tests/pages/functions'


test.only('assertion in heading', async ({ page }) => {
    const functionsPage = new FunctionsPage(page)

    const newpage = await functionsPage.loadGrowApp(page)
    await functionsPage.clickOnLoginRegisterLink(page, newpage)
    await functionsPage.enterEmailandClickOnContinue(page, newpage)
    const page1 = await functionsPage.navigateToInboxWebsite(page)
    const otp = await functionsPage.verifymailandclickOnmail(page, page1)
    await functionsPage.enterOtp(newpage, otp)
});