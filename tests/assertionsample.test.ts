import { test, expect } from '@playwright/test';
import {loadHomepage, assertTitle} from '../tests/functions';


test('assertion in heading', async ({ page }) => {
await loadHomepage(page)
await assertTitle(page)
});