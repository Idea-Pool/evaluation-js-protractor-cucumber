const {Before, Given, When, Then} = require('cucumber');
const { browser} = require('protractor');
const { expect } = require('chai');
let EC = protractor.ExpectedConditions;
let angularHomePage = require('../pages/AngularHomePage');
let angularStartPage = require('../pages/angularStartPage');
let bootstrapFormsPage = require('../pages/bootstrapFormsPage');

Given('{string} URL is opened', async (pageToOpen) => {
    await browser.get(pageToOpen);
});

Then('Angular logo in the top navbar should be visible', async function () {
    expect( await angularHomePage.isAngularElementVisible(angularHomePage.angularLogoNavbar)).to.be.true;
});

Then('Angular logo in the hero section should be visible', async function () {
    expect( await angularHomePage.isAngularElementVisible(angularHomePage.angularLogoHeroSection)).to.be.true;
});

Then('text in hero section should be {string}', async function (heroText) {
    const textOnScreen = (await angularHomePage.getTextFromHeroSection()).replace(/(\r\n|\n|\r)/gm, '');
    expect( textOnScreen).to.equal(heroText);
});

Then('Get started button should be visible in the hero section', async function () {
    expect(await angularHomePage.isAngularElementVisible(angularHomePage.getStartedButton)).to.be.true;
});

When('Get started button is clicked in the hero section',  function () {
     angularHomePage.getStartedButton.click();
});

Then('the URL should be {string}', async function (expectedUrl) {
    browser.wait(EC.urlContains(expectedUrl), 10000);
    expect(await browser.getCurrentUrl()).to.equal(expectedUrl);
});

Then('the title on the content should be {string}', async function (expectedTitle) {
    browser.wait(EC.textToBePresentInElement(angularStartPage.title, expectedTitle));
    expect(await angularStartPage.getTitleOfThePage()).to.equal(expectedTitle);
});

Then('Search input in the top navbar should be visible', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('it should be empty', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('it should be {string} as placeholder', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('it is clicked in', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('{string} is typed in it', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('clear icon should be visible in it', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('{string} should be listed in the {string} section', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('{string} is clicked in the {string} section', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('the URL should be https:\/\/angular.io\/api\/core\/Directive', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

//Given('https://getbootstrap.com/docs/{float}/components/forms URL is opened', function (float) {
//    // Write code here that turns the phrase above into concrete actions
//    return 'pending';
// });

Then('title of the browser should be {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('The readonly input should not be in the viewport', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('The readonly input is scrolled into the viewport', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('The readonly input should be in the viewport', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('The readonly input should be readonly', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

//Given('https:\/\/getbootstrap.com\/docs\/{float}\/components\/forms\/#checkboxes-and-radios URL is opened', function (float) {
// Write code here that turns the phrase above into concrete actions
//    return 'pending';
//});

Then('The default checkbox should be enabled', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('The disabled checkbox should be disabled', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('The default checkbox should be unchecked', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('The default chdckbox is clicked on', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('The default checkbox should be checked', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

//Given('https:\/\/getbootstrap.com\/docs\/{float}\/components\/forms\/#checkboxes-and-radios URL is opened', function (float) {
// Write code here that turns the phrase above into concrete actions
//    return 'pending';
//});

Then('The default radio should be enabled', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('The disabled radion should be disabled', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('The default radio should be selected', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('The second default radio should not be selected', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('The second default radio is clicked on', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('The default radio should be not selected', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('The second default radio should be selected', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

//Given('https:\/\/getbootstrap.com\/docs\/{float}\/components\/buttons\/#disabled-state URL is opened', function (float) {
// Write code here that turns the phrase above into concrete actions
//    return 'pending';
//});

Then('There should be a button with text {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('The primary button should be disabled', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('the page is scrolled down {int} page', function (int) {
    // When('the page is scrolled down {float} page', function (float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('The active primary link button should not be disabled', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

//Given('https:\/\/getbootstrap.com\/docs\/{float}\/components\/forms\/#form-controls URL is opened', function (float) {
// Write code here that turns the phrase above into concrete actions
//    return 'pending';
//});

Then('The example select should be visible', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('The example multiple select should be a multiple select', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('The selected option in example select should be {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('there should not be option like {string} in example select', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('there should be option like {string} in example select', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('The option {string} is selected in example select', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('The selected option in example select should be {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('Thu number of options in example select should be {int}', function (int) {
    // Then('Thu number of options in example select should be {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});