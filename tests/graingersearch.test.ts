import { test, expect } from '@playwright/test';
import {loadHomepage, assertTitle, loadGraingerWebsite, searchWithProduct} from '../tests//pages/functions';

test('assertion in heading', async ({ page }) => {
await loadGraingerWebsite(page)
await searchWithProduct(page)
});