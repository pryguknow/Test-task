import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";
import { expect } from "@playwright/test";
import { statesListSelectors, hobbiesSelectors, genderSelectors } from "../../helper/locators/registrationFormPage"
import { citiesList } from "../../helper/locators/registrationFormPage"
//import path from "path";
import { createCitySelector } from "../../helper/scripts/givenSeletors";


setDefaultTimeout(60 * 1000 * 2);


Given('User navigates to the application', async function () {
    await pageFixture.page.goto("https://demoqa.com/automation-practice-form");
    await pageFixture.page.waitForLoadState();
    await pageFixture.page.isVisible(".practice-form-wrapper");
});
   

Given('User enter first name as {string}', async function (firstName) {

    await pageFixture.page.locator("#firstName").fill(firstName);

});
    

Given('User enter last name as {string}', async function (lastName) {
    await pageFixture.page.locator("#lastName").fill(lastName);
});
 

Given('User enter email as {string}', async function (email) {
    await pageFixture.page.locator("#userEmail").fill(email);
});
      

Given('User selects gender as {string}', async function (gender: keyof typeof genderSelectors) {
   
    await pageFixture.page.click(`label[for=${genderSelectors[gender]}]`);

});
       

Given('User enter mobile as {string}', async function (mobile) {
    await pageFixture.page.locator("#userNumber").fill(mobile);
});
             
Given('User selects date of birth as {string}', async function (dateOfBirthInput) {
    await pageFixture.page.locator("#dateOfBirthInput").fill(dateOfBirthInput);
});
       
Given('User enter subjects', async function () {
    const subjects = ["Math", "economic", "English"];
    for (const nameOfSubject of subjects){
        await pageFixture.page.locator("#subjectsInput").fill(nameOfSubject);
        await pageFixture.page.click("#react-select-2-option-0")
    }
});
       
Given('User selects hobbies as {string}', async function (hobbie: keyof typeof hobbiesSelectors) {

    await pageFixture.page.click(`label[for=${hobbiesSelectors[hobbie]}]`);

});
       

Given('the user attaches the picture', async function () {

    const fileChooserPromise = pageFixture.page.waitForEvent('filechooser');
    await pageFixture.page.locator('#uploadPicture').click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('src/test/features/2F415E68-6AEB-484B-9029-05A7750D9254.JPG');

});
             
Given('User enter current address as {string}', async function (address) {
    await pageFixture.page.locator("#currentAddress").fill(address);
});


             
Given('User select {string} and {string}', async function (state: string, city: string) {
   
    await pageFixture.page.locator("#state").click();
    await pageFixture.page.locator(statesListSelectors[state]).click();
    await pageFixture.page.click("#city");
    //const citySelector: string = createCitySelector(citiesList, state, city);
    await pageFixture.page.locator(createCitySelector(citiesList, state, city)).click();
});

              
When('User click on the submit button', async function () {
    await pageFixture.page.click("#submit");
});
             
Then('User sees window with title "Thanks for submitting the form"', async function () {
    await expect(pageFixture.page.locator(".modal-content")).toBeVisible();
    await expect(pageFixture.page.locator("#example-modal-sizes-title-lg")).toHaveText("Thanks for submitting the form");
});
       
Then('The form displays correct information about the user', async function () {
    //make a screenshot
});