import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";
import { softAssertions } from "./softAssetions";

//if you don't have eny exceptions, enter null
export async function elementValidation (context: any, selector:string, validity:string, exceptions: any){
    try {
        await pageFixture.page.waitForSelector(selector);
        expect(await pageFixture.page.isVisible(`${selector}${validity}`)).toBeTruthy();
    } catch (error: unknown){
        const message: string = `Element ${selector} isn't ${validity} state`
            let screenshotBuffer: Buffer | undefined;

            if (exceptions && (exceptions === selector)){
                screenshotBuffer = await pageFixture.page.locator("#subjectsWrapper").screenshot();
            } else {
                screenshotBuffer = await pageFixture.page.locator(selector).screenshot();
            };
            
            
            softAssertions.addError(message, screenshotBuffer?.toString('base64'));
            
            context.attach(message, 'text/plain');
            context.attach(screenshotBuffer, 'image/png');
    }

};