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