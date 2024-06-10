Feature: Filling out the student registration form

    Background:
      Given User navigates to the application

     Scenario Outline: Fill in all available fields
      And User enter first name as "<firstName>"
      And User enter last name as "<lastName>"
      And User enter email as "<email>"
      And User selects gender as "<gender>"
      And User enter mobile as "<mobile>"
      And User selects date of birth as "<dateOfBirthInput>"
      And User enter subjects
      And User selects hobbies as "<hobbies>"
      And the user attaches the picture
      And User enter current address as "<address>"
      And User select "<state>" and "<city>"  
      When User click on the submit button
      Then The form displays correct information about the user 


    Examples:
      | firstName | lastName    | email                      | gender | mobile         | dateOfBirthInput | hobbies | address           | state        | city    |
      | Martin    | Test        | test123@ma.il_-.com        | Male   | 1234567890     | 11 Jun 1950      | Sport   | Test str. 123b    | NCR          | Delhi   |
      | lana      | test        | la-.09natesnW2313@gmail.io | Female | 12345678901    | 24 Sep 2029      | Reading | test 22           | UttarPradesh | Merrut  |
      | TeStOtEsT | De Test     | d_ddddd@d18.comtt          | Other  | 0000000000     | 30 Jun 2000      | Music   | @sss 44ab         | Haryana      | Panipat |
      | tets22    | de test test| 111qate_-st@mm2442wd.cc    | Male   | 11223334563423 | 01 Oct 1999      | Sport   | sdsaddsadasda_-2@ | Rajasthan    | Jaipur  |


    # Scenario: Validate all elements on registration form
    #   Given User click on "submit" button with empty elements
    #   Then All elements are outlined red
    #   When User fills "first name" and "last name" fields
    #   Then User fills"First name" and "Last name" fields are outlined green
    #   When User fills "email" and "last name" fields
    #   Then "Email" field in outlined green
    #   When User selects gender
    #   Then "Gender" field outlined green
    #   When User fills "Mobile" field
    #   Then "Mobile field outlined green

