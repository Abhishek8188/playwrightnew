import { test, expect } from '@playwright/test';
import {loadGrowApp, clickOnLoginRegisterLink, enterEmailandClickOnContinue, navigateToInboxWebsite, verifymailandclickOnmail, enterOtp} from '../tests//pages/functions';

test.only('assertion in heading', async ({ page }) => {
const newpage = await loadGrowApp(page)
await clickOnLoginRegisterLink(page, newpage)
await enterEmailandClickOnContinue(page, newpage)
const page1 = await navigateToInboxWebsite(page)
const otp = await verifymailandclickOnmail(page, page1)
await enterOtp(newpage, otp)
});