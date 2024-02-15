import { test, expect } from '@playwright/test';
import {loadHomepage, assertTitle, loadGraingerWebsite, loginAsCNCuser} from '../tests//pages/functions';

test.only('assertion in heading', async ({ page }) => {
await loadGraingerWebsite(page)
await loginAsCNCuser(page)
});