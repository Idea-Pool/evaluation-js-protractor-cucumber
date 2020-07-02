@angular
Feature: This feature will check the basic capabilities of the Protractor framework on Angular.IO site

  Scenario: Checking landing pages elements
    Given "https://angular.io" URL is opened
    Then Angular logo in the top navbar should be visible
    And Angular logo in the hero section should be visible
    And text in hero section should be "One framework.Mobile & desktop."
    And Get started button should be visible in the hero section
    When Get started button is clicked in the hero section
    Then the URL should be "https://angular.io/docs"
    And the title on the content should be "Introduction to the Angular Docs"

  Scenario: Checking search field on landing page
    Given "https://angular.io" URL is opened
    Then Search input in the top navbar should be visible
    And it should be empty
    And it should be "Search" as placeholder
    When it is clicked in
    And "directive" is typed in it
    And "Directive" should be listed in the API section
    When "Directive" is clicked in the "API" section
    Then the URL should be "https://angular.io/api/core/Directive"
    And the title on the content should be "Directive"

  Scenario: Checking select form elements
    Given "https://docs.angularjs.org/api/ng/directive/select#simple-select-elements-with-static-options" URL is opened
    Then The example select should be visible
    And The example multiple select should be a multiple select
    And The selected option in example select should be "null"
    And there should not be option like "hello" in example select
    And there should be option like "option-2" in example select
    When The option "Option 2" is selected in example select
    Then The selected option in example select should be "option-2"
    And The number of options in example select should be 2