Feature: Validation all fields for registration form

    Background: 
      Given User navigates to the application

    Scenario Outline: Verefication all fields step-by-step
      When User click on the submit button
      Then All fields are outlined in red
      When User enter valid first name as "<validFirstName>"
      Then First name field is outlined in green
      When User enter invalid first name as "<invalidFirstName>" or leaving it blank
      Then First name field is outlined in red
      | validFirstName | invalidFirstName |
      | Kim            | 3333333333       |
      | martin         | @&?/             |
      When User enter valid last name as "<validLastName>"
      Then Last name field is outlined in green
      When User enter invalid last name as "<invalidLastName>" or leaving it blank
      Then Last name field is outlined in red
      | validLastName | invalidLastName |
      | Testlast      | 3333333333      |
      | de testing    | @&?/            |
      When User enter valid email as "<validEmail>"
      Then Email field is outlined in green
      When User enter invalid mail as "<invalidEmail>" or leaving it blank
      Then First name field is outlined in red
      | validEmail       | invalidEmail     |
      | test@tetetet.ww  | testmail.com     |
      | teStStsT@gg.qwert| qqq@wer.qwertyui |
      When User enter valid mobile as "<validMobile>"
      Then Mobile field is outlined in green
      When User enter invalid mobile as "<invalidMobile>" or leaving it blank
      Then Mobile field is outlined in red
      | validMobile | invalidMobile |
      | 1234567890  | 232323        |
      | 9999999999  | qqq1234567890 |
      When User will not change data in the date of birth field
      Then The date of birth field displays today's date
      When User will delete data from the date of birth field
      Then The date of birth field displays today's date
      When User enter valid Subjects as "<validSubjects>"
      Then A drop down menu appears with options for autofill
      And Subjects field outlined in green
      When User enter invalid subjects as "<invalidSubjects>" or leaving it blank
      Then Subjects field still empty
      And Subjects field is outlined in red
      | validSubjects | invalidSubjects |
      | English       | sss             |
      | Maths         | qwerty          |
      When User enter any info in  current address field
      Then Current address field outlined in green
      When Сlear current address field
      Then Current address field outlined in red




