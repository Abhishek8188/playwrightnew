import { test, expect } from '@playwright/test';
import { FunctionsPage } from '../tests/pages/functions'

test('assertion in heading', async ({ page }) => {

    const functionsPage = new FunctionsPage(page)

    await functionsPage.loadGraingerWebsite(page)
    await functionsPage.searchWithProduct(page)
    await functionsPage.verifyPDPpage(page)
});