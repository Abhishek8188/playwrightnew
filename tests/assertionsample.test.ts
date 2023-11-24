import { test, expect } from '@playwright/test';
import {loadHomepage, assertTitle} from '../tests/functions';


test.only('assertion in heading', async ({ page }) => {
await loadHomepage()
await assertTitle()
});