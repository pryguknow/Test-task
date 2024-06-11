import { When, Then } from "@cucumber/cucumber"
import { fieldsListSelectors } from "../../helper/locators/registrationFormPage"
import { pageFixture } from "../../hooks/pageFixture"
import { expect } from "@playwright/test"
import { elementValidation} from "../../helper/scripts/errorProcessing"
import { softAssertions } from "../../helper/scripts/softAssetions"



Then('All fields are outlined in red', async function (){
    //const errors: string[] = [];
    for (let selectorName in fieldsListSelectors){
        if (fieldsListSelectors[selectorName] === "#dateOfBirthInput"){
            continue;
        }
      await elementValidation(this, fieldsListSelectors[selectorName], "invalid",'#subjectsContainer')
}

})


When('User enter valid first name as {string}', async function (validFirstName){
    await pageFixture.page.waitForSelector(fieldsListSelectors.firstNameField);
    await pageFixture.page.locator(fieldsListSelectors.firstNameField).fill(validFirstName);
    
})

Then ('First name field is outlined in green', async function (){
    await elementValidation(this, fieldsListSelectors.firstNameField , "valid", null);    
})

When('User clear the first name field', async function (){
    await pageFixture.page.waitForSelector(fieldsListSelectors.firstNameField);
    await pageFixture.page.locator(fieldsListSelectors.firstNameField).fill('');
})

Then ('First name field is outlined in red', async function (){
    await elementValidation(this, fieldsListSelectors.firstNameField , "invalid", null);  
})

When('User enter valid last name as {string}', async function (validLastName){
    await pageFixture.page.waitForSelector(fieldsListSelectors.lastNameField);
    await pageFixture.page.locator(fieldsListSelectors.lastNameField).fill(validLastName);
})

Then ('Last name field is outlined in green', async function (){
    await elementValidation(this, fieldsListSelectors.lastNameField , "valid", null);    
})

When('User clear the last name field', async function (){
    await pageFixture.page.waitForSelector(fieldsListSelectors.lastNameField);
    await pageFixture.page.locator(fieldsListSelectors.lastNameField).fill('');
})

Then ('Last name field is outlined in red', async function (){
    await elementValidation(this, fieldsListSelectors.lastNameField , "invalid", null);  
})

When('User enter valid email as {string}', async function (validEmail){
    await pageFixture.page.waitForSelector(fieldsListSelectors.emailField);
    await pageFixture.page.locator(fieldsListSelectors.emailField).fill(validEmail);
})

Then ('Email field is outlined in green', async function (){
    await elementValidation(this, fieldsListSelectors.emailField , "valid", null);
})

When('User enter invalid mail as {string} or leaving it blank', async function (invalidEmail){
    await pageFixture.page.waitForSelector(fieldsListSelectors.emailField);
    await pageFixture.page.locator(fieldsListSelectors.emailField).fill(invalidEmail);
    await elementValidation(this, fieldsListSelectors.emailField , "invalid", null); 

    await pageFixture.page.locator(fieldsListSelectors.emailField).fill('');

})

Then ('Email field is outlined in red', async function (){
    await elementValidation(this, fieldsListSelectors.emailField , "invalid", null); 
})

When('User enter valid mobile as {string}', async function (validMobile){
    await pageFixture.page.waitForSelector(fieldsListSelectors.mobileField);
    await pageFixture.page.locator(fieldsListSelectors.mobileField).fill(validMobile);
})

Then ('Mobile field is outlined in green', async function (){
    await elementValidation(this, fieldsListSelectors.mobileField , "valid", null);  
})

When('User enter invalid mobile as {string} or leaving it blank', async function (invalidMobile){

})

Then ('Mobile field is outlined in red', async function (){

})

When('User will not change data in the date of birth field', async function (){

})

When('User will delete data from the date of birth field', async function (){

})

Then ("The date of birth field displays today's date", async function (){

})

When('User enter valid Subjects as {string}', async function (validSubjects){

})

Then ('A drop down menu appears with options for autofill', async function (){

})

Then ('Subjects field outlined in green', async function (){

})

When('User enter invalid subjects as {string} or leaving it blank', async function (invalidSubjects){

})

Then ('Subjects field still empty', async function (){

})

Then ('Subjects field is outlined in red', async function (){

})

When('User enter any info in  current address field', async function (){

})

Then ('Current address field outlined in green', async function (){

})

When('Clear current address field', async function (){

})

Then ('Current address field outlined in red', async function (){

})

// Checking for previously logged errors


Then('Checking for errors', function() {
    const errors = softAssertions.getErrors();
    if (errors.length > 0) {
        errors.forEach(error => {
            this.attach(error.message, 'text/plain');
            if (error.screenshot) {
                const buffer = Buffer.from(error.screenshot, 'base64');
                this.attach(buffer, 'image/png');
            }
        });

        // Отмечаем тест как проваленный
        expect(errors.length).toBe(0); // Это приведет к провалу шага, если есть ошибки
    }
})


