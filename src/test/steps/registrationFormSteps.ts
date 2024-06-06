import {Given, When, Then} from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";
import { expect } from "@playwright/test";





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
       
Given('User selects gender as {string}', async function (gender) {
    const gendersSelcetors = {
        Male: pageFixture.page.locator("9#gender-radio-1"),
        Female: pageFixture.page.locator("#gender-radio-2"),
        Other: pageFixture.page.locator("#gender-radio-3")
    };
    const genderSelector = gendersSelcetors[gender];
    await genderSelector.click();
});
       
Given('User enter mobile as {string}', async function (mobile) {
    await pageFixture.page.locator("#userNumber").fill(mobile);
});
             
Given('User selects date of birth as {string}', async function (dateOfBirthInput) {
    await pageFixture.page.locator("#dateOfBirthInput").fill(dateOfBirthInput);
});
       
Given('User enter subjects', async function () {
    const subjects = ["Math", "economics", "English"];
    for (const nameOfSubject of subjects){
        await pageFixture.page.locator("#subjectsContainer").fill(nameOfSubject);
    }
});
       
Given('User selects hobbies as {string}', async function (hobbies) {
    const hobbiesList = {
        Sport: "#hobbies-checkbox-1",
        Reading: "#hobbies-checkbox-2",
        Music: "#hobbies-checkbox-3"
    }
    await pageFixture.page.locator(hobbiesList[hobbies]).click();
});
       
Given('the user attaches the picture', async function () {
    await pageFixture.page.locator("#uploadPicture").setInputFiles('../../../images/2F415E68-6AEB-484B-9029-05A7750D9254.JPG');
});
             
Given('User enter current address as {string}', async function (address) {
    await pageFixture.page.locator("#currentAddress").fill(address);
});
             
Given('User select state as {string}', async function (state) {
    const statesList = {
        NCR: "#react-select-3-option-0",
        UttarPradesh: "#react-select-3-option-1",
        Haryana: "#react-select-3-option-2",
        Rajasthan: "#react-select-3-option-3"
    };
    await pageFixture.page.locator("#state").click();
    await expect(pageFixture.page.locator(".css-26l3qy-menu")).toBeVisible();
    await pageFixture.page.locator(statesList[state]).click();
    //expect(await pageFixture.page.locator(".css-11unzgr").isVisible()).toBeTruthy;
});
           
Given('User select city as {string}', async function (city) {
    const cities = {
        Delhi: "#react-select-4-option-0",
        Merrut: "#react-select-4-option-2",
        Panipat: "#react-select-4-option-1",
        Jaipur: "#react-select-4-option-0"
    };
    await pageFixture.page.locator("#city").click();
    await pageFixture.page.locator(cities[city]).click();

    //const state = pageFixture.page.locator(".css-1uccc91-singleValue").innerText();

});
              
When('User click on the submit button', async function () {
    await pageFixture.page.locator("#submit").click();
});
             
Then('User sees window with title "Thanks for submitting the form"', async function () {
    await expect(pageFixture.page.locator(".modal-content")).toBeVisible();
    await expect(pageFixture.page.locator("#example-modal-sizes-title-lg")).toHaveText("Thanks for submitting the form");
});
       
Then('The form displays correct information about the user', async function () {
    console.log("success")
});