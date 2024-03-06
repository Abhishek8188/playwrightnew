import { test } from '@playwright/test';
import dotenv from 'dotenv';
import ENV from '../utils/env';
import globalSetup from '../utils/globalSetup';

test.only("basic test", async ({ page }) => {
    let qaurl;
    // console.log(qaurl);
   qaurl = process.env.GRAINGER_URL;
    await page.goto(qaurl);
});