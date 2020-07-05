# Test cases

## `TC-1` Checking landing pages elements

1. **Given** https://angular.io URL is opened
1. **Then** Angular logo in the top navbar should be visible
1. **And** Angular logo in the hero section should be visible
1. **And** text in hero section should be "One framework. Mobile & desktop."
1. **And** Get started button should be visible in the hero section
1. **When** Get started button is clicked in the hero section
1. **Then** the URL should be https://angular.io/docs
1. **And** the title on the content should be "Introduction to the Angular Docs"

## `TC-2` Checking search field on landing page

1. **Given** https://angular.io URL is opened
1. **Then** Search input in the top navbar should be visible
1. **And** it should be empty
1. **And** it should be "Search" as placeholder
1. **When** it is clicked in
1. **And** "directive" is typed in it
1. **And** "Directive" should be listed in the "API" section
1. **When** "Directive" is clicked in the "API" section
1. **Then** the URL should be https://angular.io/api/core/Directive
1. **And** the title on the content should be "Directive"

## `TC-3` Checking select form elements

1. **Given** "https://docs.angularjs.org/api/ng/directive/select#simple-select-elements-with-static-options" URL is opened
1. **Then** The example select should be visible
1. **And** The example multiple select should be a multiple select
1. **And** The selected option in example select should be "null"
1. **And** there should not be option like "hello" in example select
1. **And** there should be option like "option-2" in example select
1. **When** The option "Option 2" is selected in example select
1. **Then** The selected option in example select should be "option-2"
1. **And** The number of options in example select should be 2

## `TC-4` Checking form elements

1. **Given** https://getbootstrap.com/docs/4.4/components/forms/ URL is opened
1. **Then** title of the browser should be "Forms · Bootstrap"
1. **And** The readonly input should not be in the viewport
1. **When** The readonly input is scrolled into the viewport
1. **Then** The readonly input should be in the viewport
1. **And** The readonly input should be readonly

## `TC-5` Interaction with checkbox form elements

1. **Given** https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios URL is opened
1. **Then** The default checkbox should be enabled
1. **And** The disabled checkbox should be disabled
1. **And** The default checkbox should be unchecked
1. **When** The default chdckbox is clicked on
1. **Then** The default checkbox should be checked

## `TC-6` Interaction with radio form elements

1. **Given** https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios URL is opened
1. **Then** The default radio should be enabled
1. **And** The disabled radion should be disabled
1. **And** The default radio should be selected
1. **And** The second default radio should not be selected
1. **When** The second default radio is clicked on
1. **Then** The default radio should be not selected
1. **And** The second default radio should be selected

## `TC-7` Checking button form elements

1. **Given** https://getbootstrap.com/docs/4.4/components/buttons/#disabled-state URL is opened
1. **Then** There should be a button with text "Primary button"
1. **And** The primary button should be disabled
1. **When** the page is scrolled down 1 page
1. **Then** The active primary link button should not be disabled