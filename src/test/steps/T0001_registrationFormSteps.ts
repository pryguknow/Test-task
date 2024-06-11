import { Given, When, Then, setDefaultTimeout, ITestCaseHookParameter } from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";
import { expect } from "@playwright/test";
import { statesListSelectors, hobbiesSelectors, genderSelectors, fieldsListSelectors, buttonsListSelectors } from "../../helper/locators/registrationFormPage"
import { citiesList } from "../../helper/locators/registrationFormPage";
import { createCitySelector } from "../../helper/scripts/givenSeletors";



setDefaultTimeout(60 * 1000 * 2);


Given('User navigates to the application', async function () {
    await pageFixture.page.goto("https://demoqa.com/automation-practice-form");
    await pageFixture.page.waitForLoadState();
    await pageFixture.page.isVisible(".practice-form-wrapper");
});
   
Given('User enter first name as {string}', async function (firstName) {
    await pageFixture.page.waitForSelector(fieldsListSelectors.firstNameField, {timeout: 5000, state: "visible"});
    await pageFixture.page.locator(fieldsListSelectors.firstNameField).fill(firstName);
});
    
Given('User enter last name as {string}', async function (lastName) {
    await pageFixture.page.waitForSelector(fieldsListSelectors.lastNameField, {timeout: 5000, state: "visible"});
    await pageFixture.page.locator(fieldsListSelectors.lastNameField).fill(lastName);
});
 
Given('User enter email as {string}', async function (email) {
   await pageFixture.page.waitForSelector(fieldsListSelectors.emailField, {timeout: 5000, state: "visible"});
   await pageFixture.page.locator(fieldsListSelectors.emailField).fill(email);
});
      
Given('User selects gender as {string}', async function (gender: keyof typeof genderSelectors) {
    await pageFixture.page.waitForSelector(`label[for=${genderSelectors[gender]}]`, {timeout: 5000, state: "visible"});
    await pageFixture.page.click(`label[for=${genderSelectors[gender]}]`);

});
       
Given('User enter mobile as {string}', async function (mobile) {
    await pageFixture.page.waitForSelector(fieldsListSelectors.mobileField, {timeout: 5000, state: "visible"});
    await pageFixture.page.locator(fieldsListSelectors.mobileField).fill(mobile);
});
             
Given('User selects date of birth as {string}', async function (dateOfBirthInput) {
    await pageFixture.page.locator(fieldsListSelectors.dateOfBirthField).fill(dateOfBirthInput);
});
       
Given('User enter subjects', async function () {
    const subjects = ["Math", "economic", "English"];
    await pageFixture.page.waitForSelector(fieldsListSelectors.subjectsField, {timeout: 5000, state: "visible"});
    for (const nameOfSubject of subjects){
        await pageFixture.page.locator(fieldsListSelectors.subjectsField).fill(nameOfSubject);
        await pageFixture.page.waitForSelector("#react-select-2-option-0", {timeout: 5000, state: "visible"});
        await pageFixture.page.click("#react-select-2-option-0")
    }
});
       
Given('User selects hobbies as {string}', async function (hobbie: keyof typeof hobbiesSelectors) {
    await pageFixture.page.waitForSelector(`label[for=${hobbiesSelectors[hobbie]}]`, {timeout: 5000, state: "visible"});
    await pageFixture.page.click(`label[for=${hobbiesSelectors[hobbie]}]`);
});
       
Given('the user attaches the picture', async function () {
    const fileChooserPromise = pageFixture.page.waitForEvent('filechooser');
    await pageFixture.page.locator(buttonsListSelectors.chooseFileButton).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('images/2F415E68-6AEB-484B-9029-05A7750D9254.JPG');
});
             
Given('User enter current address as {string}', async function (address) {
    await pageFixture.page.waitForSelector(fieldsListSelectors.currentAdressField, {timeout: 5000, state: "visible"});
    await pageFixture.page.locator(fieldsListSelectors.currentAdressField).fill(address);
});
          
Given('User select {string} and {string}', async function (state: string, city: string) {
    await pageFixture.page.waitForSelector(fieldsListSelectors.stateField, {timeout: 5000, state: "visible"});
    await pageFixture.page.click(fieldsListSelectors.stateField);
    
    await pageFixture.page.waitForSelector(statesListSelectors[state], {timeout: 5000, state: "visible"});
    await pageFixture.page.locator(statesListSelectors[state]).click();
    
    await pageFixture.page.waitForSelector(fieldsListSelectors.cityField, {timeout: 5000, state: "visible"});
    await pageFixture.page.click(fieldsListSelectors.cityField);
    
    await pageFixture.page.waitForSelector(fieldsListSelectors.cityField, {timeout: 5000, state: "visible"});
    await pageFixture.page.locator(createCitySelector(citiesList, state, city)).click();
});
          
When('User click on the submit button', async function () {
    await pageFixture.page.waitForSelector(buttonsListSelectors.submitButton, {timeout: 5000, state: "visible"});
    await pageFixture.page.click(buttonsListSelectors.submitButton);
    await pageFixture.page.waitForSelector('.was-validated');
});
             
Then('The form displays correct information about the user', async function () {
        await pageFixture.page.waitForSelector(".modal-content");
        await expect(pageFixture.page.locator("#example-modal-sizes-title-lg")).toHaveText("Thanks for submitting the form");
});