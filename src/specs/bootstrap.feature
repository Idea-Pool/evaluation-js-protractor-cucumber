@bootstrap
Feature: This feature will check the basic capabilities of the Protractor framework on getbootstrap.com site

#Scenario: Checking form elements
#Given "https://getbootstrap.com/docs/4.4/components/forms/" URL is opened
#Then title of the browser should be "Forms · Bootstrap"
#And The readonly input should not be in the viewport
#When The readonly input is scrolled into the viewport
#Then The readonly input should be in the viewport
#And The readonly input should be readonly
#
#Scenario: Interaction with checkbox form elements
#Given "https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios" URL is opened
#Then The default checkbox should be enabled
#And The disabled checkbox should be disabled
#And The default checkbox should be unchecked
#When The default checkbox is clicked on
#Then The default checkbox should be checked
#
#Scenario: Interaction with radio form elements
#Given "https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios" URL is opened
#Then The default radio should be enabled
#And The disabled radion should be disabled
#And The default radio should be selected
#And The second default radio should not be selected
#When The second default radio is clicked on
#Then The default radio should be not selected
#And The second default radio should be selected
#
#Scenario: Checking button form elements
#Given "https://getbootstrap.com/docs/4.4/components/buttons/#disabled-state" URL is opened
#Then There should be a button with text "Primary button"
#And The primary button should be disabled
#When the page is scrolled down 1 page
#Then The active primary link button should not be disabled

Scenario: Checking select form elements
Given "https://getbootstrap.com/docs/4.4/components/forms/#form-controls" URL is opened
Then The example select should be visible
And The example multiple select should be a multiple select
And The selected option in example select should be "1"
And there should not be option like "hello" in example select
And there should be option like "2" in example select
When The option "2" is selected in example select
Then The selected option in example select should be "2"
And The number of options in example select should be 5