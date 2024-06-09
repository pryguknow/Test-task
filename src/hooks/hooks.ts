import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { After, AfterAll, Before, BeforeAll, BeforeStep, AfterStep, Status } from "@cucumber/cucumber";

let page: Page;
let browser: Browser;
let context: BrowserContext;

BeforeAll( async function () {
    browser = await chromium.launch({ headless:false });
});

Before(async function () {

    context = await browser.newContext();
    page = await browser.newPage();
    pageFixture.page = page;
});

After(async function ({ pickle, result}) {
    //screenshot
    if (result?.status == Status.FAILED){
        const img = await pageFixture.page.screenshot({ path: `./test-result/screenshots/${pickle.name}Fail.png`, type: 'png'})
        await this.attach(img, "image/png");
    } else {
        const img = await pageFixture.page.screenshot({ path: `./test-result/screenshots/${pickle.name}Success.png`, type: 'png'})
        await this.attach(img, "image/png");
    }

    await pageFixture.page.close();
    await context.close();
});

AfterAll(async function () {
    await browser.close();
});