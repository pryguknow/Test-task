Feature: Filling out the student registration form

    Background:
      Given User navigates to the application

     Scenario Outline: Fill in all available fields
      When User enter first name as "<firstName>"
      And User enter last name as "<lastName>"
      And User enter email as "<email>"
      And User selects gender
      And User enter mobile as "<mobile>"
      And User selects date of birth as "<birthday>"
      And User enter subjects
      And User selects hobbies
      And the user attaches the picture
      And User enter current address as "<address>"
      And User select state
      And User select city
      And User click on the submit button
      Then Form is filled out 
      And User sees his data in the window with the questionnaire


    Examples:
      | firstName | lastName | email                    | mobile         | birthday    | addres        |
      | Martin    | Test     | test123@mail.com         | 1234567890     | 11 Jun 1950 | Test str. 123b|
      | lana      | test     | la,.natesnW2313@gmail.io | abc12345678901 | 24 Sep 2029 | test 22       |
      | TeStOtEsT | De Test  | dddddd@dddd.co           | 0000000000@    | 30 Jun 2000 | @sss 44ab     |



