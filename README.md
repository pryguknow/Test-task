# 
#
# To run tests: enter "npm run test" in console
#
# Report:
#   After a test runned, there is an html file with a default cucumber report in the test-report/ folder.
#   Also I added more informative version of the report, if you want to see it you need to: 
# 1. enter "npm run test" in console
# 2. After test run: enter "npm run report"
# 3. Collapse IDE, find the project folder on your computer. Open file index.html
# 
# Next to each step where is an error was found there is a description and a screenshot
#
#
#
# Description of an approach:
#
#   After setting up the testing environment I created a test coverage matrix to better understand what was covered by the tests. Due to the lack of requirements I wrote my requirements based on experience and logic.
#   When writing scenario I used variables to test the same script with different data. The meaning of the variables is placed in the "examples" block
#   All scripts, locators and type aliases have been moved to a '*/helper/* folder
#   Based on the principles of pageObject, I moved locators of the page to a new file for convenience and reuse. This action optimized tests and maked them more readable. For more correct operation I created a couple of type aliases.
#   Also, to optimize the tests I created hooks with default conditions for tests.
#   For better readability of the test, as well as optimization of work, I moved the scripts that I reuse to new files in */scripts/*.ts
#   To validate fields I created a new script with error handling. This makes it possible not to stop the test if an error is found. Also I added the last step "Error checking", so a test with errors is not displayed in the report as successfully passed. All founded errors are attached to the report in the form of an error message and a screenshot of the element that contains the bug.