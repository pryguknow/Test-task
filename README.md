# 
#
# To run tests: enter "npm run test" into the console
#
# Report:
#   After a test run, in the test-report/ folder there is an html file with a default cucumber report.
#   I have added a more informative version of the report, in order to see it you need to: 
# 1. npm run test
# 2. After test run: npm run report
# 3. Collapse IDE, find the project folder on your computer. Open file index.html
# 
# Near each step in which an error was found there will be a description and a screenshot
#
#
#
# Description of the approach:
#
#   After setting up the testing environment, I created a test coverage matrix to visually understand what was covered by the tests. Due to the lack of requirements, I wrote my requirements based on experience and logic.
#   When writing scenario, I used variables to test the same script with different data. The meaning of the variables is placed in the "examples" block
#   All scripts, locators and type aliases have been moved to a separate '*/helper/* folder
#   Based on the principles of pageObject, I moved locators from the page to a separate file for convenience and reuse, which optimizes tests and makes them more readable. For more correct operation, I created a couple of type aliases
#   Also, to optimize the tests, I created hooks with default conditions for tests
#   For better readability of the test, as well as optimization of work, I moved the scripts that I reuse into separate files in */scripts/*.ts
#   To validate the fields, I created a separate script with error handling. This makes it possible not to stop the test if an error is found. I added the last step "Error checking". This is necessary so that the test with errors is not displayed in the report as successfully passed. All errors found are attached to the report in the form of an error message and a screenshot of the element that contains the bug