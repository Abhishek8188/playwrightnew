import { test, expect } from '@playwright/test';
import { FunctionsPage } from './pages/functions';


test('assertion in heading', async ({ page }) => {
    const functionsPage = new FunctionsPage(page)

    await functionsPage.loadHomepage(page)
    await functionsPage.assertTitle(page)
});