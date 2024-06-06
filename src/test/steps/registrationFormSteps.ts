import {Given, When, Then} from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";





Given('User navigates to the application', async function () {
    await pageFixture.page.goto("https://demoqa.com/automation-practice-form")
    await pageFixture.page.waitForLoadState();
});
       
Given('User enter first name as {string}', async function (firstName) {
    
});
          
Given('User enter last name as {string}', async function (string) {});
             
Given('User enter email as {string}', async function (string) {});
       
Given('User selects gender', async function () {});
       
Given('User enter mobile as {string}', async function (string) {});
             
Given('User selects date of birth as {string}', async function (string) {});
       
Given('User enter subjects', async function () {});
       
Given('User selects hobbies', async function () {});
       
Given('the user attaches the picture', async function () {});
             
Given('User enter current address as {string}', async function (string) {});
             
Given('User select state', async function () {});
           
Given('User select city', async function () {});
              
When('User click on the submit button', async function () {});
             
Then('Form is filled out', async function () {});
       
Then('User sees his data in the window with the questionnaire', async function () {});