import { When, Then } from "@cucumber/cucumber"
import { fieldsListSelectors } from "../../helper/locators/registrationFormPage"
import { pageFixture } from "../../hooks/pageFixture"
import { expect } from "@playwright/test"
import { elementValidation} from "../../helper/scripts/elementValidation"
import { softAssertions } from "../../helper/scripts/softAssetions"
import { getCurrentFormattedDate } from "../../helper/scripts/getCurrentFormattedDate"



Then('All fields are outlined in red', async function (){
    for (let selectorName in fieldsListSelectors){
        if (fieldsListSelectors[selectorName] === "#dateOfBirthInput"){
            continue;
        }
      await elementValidation(this, fieldsListSelectors[selectorName], ":invalid", "#subjectsInput");
}

})


When('User enter valid first name as {string}', async function (validFirstName){
    await pageFixture.page.waitForSelector(fieldsListSelectors.firstNameField);
    await pageFixture.page.locator(fieldsListSelectors.firstNameField).fill(validFirstName);
    
})

Then ('First name field is outlined in green', async function (){
    await elementValidation(this, fieldsListSelectors.firstNameField , ":valid", null);    
})

When('User clear the first name field', async function (){
    await pageFixture.page.waitForSelector(fieldsListSelectors.firstNameField);
    await pageFixture.page.locator(fieldsListSelectors.firstNameField).fill('');
})

Then ('First name field is outlined in red', async function (){
    await elementValidation(this, fieldsListSelectors.firstNameField , ":invalid", null);  
})

When('User enter valid last name as {string}', async function (validLastName){
    await pageFixture.page.waitForSelector(fieldsListSelectors.lastNameField);
    await pageFixture.page.locator(fieldsListSelectors.lastNameField).fill(validLastName);
})

Then ('Last name field is outlined in green', async function (){
    await elementValidation(this, fieldsListSelectors.lastNameField , ":valid", null);    
})

When('User clear the last name field', async function (){
    await pageFixture.page.waitForSelector(fieldsListSelectors.lastNameField);
    await pageFixture.page.locator(fieldsListSelectors.lastNameField).fill('');
})

Then ('Last name field is outlined in red', async function (){
    await elementValidation(this, fieldsListSelectors.lastNameField , ":invalid", null);  
})

When('User enter valid email as {string}', async function (validEmail){
    await pageFixture.page.waitForSelector(fieldsListSelectors.emailField);
    await pageFixture.page.locator(fieldsListSelectors.emailField).fill(validEmail);
})

Then ('Email field is outlined in green', async function (){
    await elementValidation(this, fieldsListSelectors.emailField , ":valid", null);
})

When('User enter invalid mail as {string} or leaving it blank', async function (invalidEmail){
    await pageFixture.page.waitForSelector(fieldsListSelectors.emailField);
    await pageFixture.page.locator(fieldsListSelectors.emailField).fill(invalidEmail);
    await elementValidation(this, fieldsListSelectors.emailField , ":invalid", null); 

    await pageFixture.page.locator(fieldsListSelectors.emailField).fill('');

})

Then ('Email field is outlined in red', async function (){
    await elementValidation(this, fieldsListSelectors.emailField , ":invalid", null); 
})

When('User enter valid mobile as {string}', async function (validMobile){
    await pageFixture.page.waitForSelector(fieldsListSelectors.mobileField);
    await pageFixture.page.locator(fieldsListSelectors.mobileField).fill(validMobile);
})

Then ('Mobile field is outlined in green', async function (){
    await elementValidation(this, fieldsListSelectors.mobileField , ":valid", null);  
})

When('User enter invalid mobile as {string} or leaving it blank', async function (invalidMobile){
    await pageFixture.page.locator(fieldsListSelectors.mobileField).fill(invalidMobile);
    await elementValidation(this, fieldsListSelectors.mobileField , ":invalid", null); 

    await pageFixture.page.locator(fieldsListSelectors.mobileField).fill('');
})

Then ('Mobile field is outlined in red', async function (){
    await elementValidation(this, fieldsListSelectors.mobileField , ":invalid", null); 
})

When('User will not change data in the date of birth field', async function (){
    const fildValue: string = await pageFixture.page.inputValue(fieldsListSelectors.dateOfBirthField);
    const currentDate: string = await getCurrentFormattedDate();
    expect(fildValue).toEqual(currentDate);
})

When('User will delete data from the date of birth field', async function (){
    //These two steps will be commented out, since there is a bug in this field that crashes the page. 
    //To make sure it plays, uncomment this and the next step 

    //await pageFixture.page.locator(fieldsListSelectors.dateOfBirthField).fill('');
})

Then ("The date of birth field displays today's date", async function (){
    // const fildValue: string = await pageFixture.page.inputValue(fieldsListSelectors.dateOfBirthField);
    // const currentDate: string = await getCurrentFormattedDate();
    // expect(fildValue).toEqual(currentDate);
})

When('User enter valid Subjects as {string}', async function (validSubjects){
    await pageFixture.page.locator(fieldsListSelectors.subjectsField).fill(validSubjects);
    
})

Then ('A drop down menu appears with options for autofill', async function (){
    await elementValidation(this, fieldsListSelectors.subjectsField , "", "#react-select-2-option-0");
    await pageFixture.page.click("#react-select-2-option-0");
})

Then ('Subjects field outlined in green', async function (){
    await elementValidation(this, fieldsListSelectors.subjectsField , ":valid", null);
    
    //await pageFixture.page.click("..subjects-auto-complete__multi-value__remove");
})
//
//             the same problem as for date of birth
///
When('User enter invalid subjects as {string} or leaving it blank', async function (invalidSubjects){
//     await pageFixture.page.locator(fieldsListSelectors.subjectsField).fill(invalidSubjects);
//     expect (await pageFixture.page.locator(".subjects-auto-complete__multi-value__label").isVisible()).toBeFalsy();

//     await elementValidation(this, fieldsListSelectors.subjectsField , ":invalid", null); 
//     await pageFixture.page.locator(fieldsListSelectors.subjectsField).fill('');
})

Then ('Subjects field still empty', async function (){
    //await pageFixture.page.locator(fieldsListSelectors.subjectsField).fill('');
})

Then ('Subjects field is outlined in red', async function (){
    //await elementValidation(this, fieldsListSelectors.subjectsField , ":invalid", null); 
})

When('User enter any info in current address field', async function (){
    await pageFixture.page.locator(fieldsListSelectors.currentAdressField).fill('sadsadasdasd 22 @ .,./,;');
})

Then ('Current address field outlined in green', async function (){
    await elementValidation(this, fieldsListSelectors.currentAdressField , ":valid", null); 
})

When('Clear current address field', async function (){
    await pageFixture.page.locator(fieldsListSelectors.currentAdressField).fill('');
})

Then ('Current address field outlined in red', async function (){
    await elementValidation(this, fieldsListSelectors.currentAdressField , ":invalid", null); 
})

// Checking for previously logged errors


Then('Error checking', function() {
    const errors = softAssertions.getErrors();
    if (errors.length > 0) {
        errors.forEach(error => {
            this.attach(error.message, 'text/plain');
            if (error.screenshot) {
                const buffer = Buffer.from(error.screenshot, 'base64');
                this.attach(buffer, 'image/png');
            }
        });

        
        expect(errors.length).toBe(0); 
    }
})


