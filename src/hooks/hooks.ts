import { Browser, Page, chromium } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { After, Before } from "@cucumber/cucumber";

let page: Page;
let browser: Browser;

Before(async function () {
    browser = await chromium.launch({ headless:false });
    page = await browser.newPage();
    pageFixture.page = page;
})

After(async function () {
    await page.close();
    await browser.close();
})