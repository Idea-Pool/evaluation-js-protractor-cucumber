const {Given, When, Then, setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
const {browser, by, element, protractor} = require('protractor');
const {expect} = require('chai');
let EC = protractor.ExpectedConditions;
let angularHomePage = require('../pages/AngularHomePage');
let angularStartPage = require('../pages/angularStartPage');

Given('{string} URL is opened', async (pageToOpen) => {
    await browser.get(pageToOpen);
});

Then('Angular logo in the top navbar should be visible', async function () {
    expect(await angularHomePage.isAngularElementVisible(angularHomePage.angularLogoNavbar)).to.be.true;
});

Then('Angular logo in the hero section should be visible', async function () {
    expect(await angularHomePage.isAngularElementVisible(angularHomePage.angularLogoHeroSection)).to.be.true;
});

Then('text in hero section should be {string}', async function (heroText) {
    const textOnScreen = (await angularHomePage.getTextFromHeroSection()).replace(/(\r\n|\n|\r)/gm, '');
    expect(textOnScreen).to.equal(heroText);
});

Then('Get started button should be visible in the hero section', async function () {
    expect(await angularHomePage.isAngularElementVisible(angularHomePage.getStartedButton)).to.be.true;
});

When('Get started button is clicked in the hero section', function () {
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

Then('Search input in the top navbar should be visible', async function () {
    expect(await angularHomePage.isAngularElementVisible(angularHomePage.searchInput)).to.be.true;
});

Then('it should be empty', async function () {
    expect(await angularHomePage.getSearchInputAttribute('value')).to.equal('');
});

Then('it should be {string} as placeholder', async function (expectedPlaceholder) {
    expect(await angularHomePage.getSearchInputAttribute('placeholder')).to.equal(expectedPlaceholder);
});

When('it is clicked in', function () {
    angularHomePage.searchInput.click();
});

When('{string} is typed in it', function (searchTerm) {
    angularHomePage.enterSearchText(searchTerm);
});

Then('{string} should be listed in the API section', async function (searchTerm) {
    const searchResults = await angularHomePage.getTextInApiSection();
    expect(searchResults.indexOf(searchTerm) !== -1).to.be.true;
});

When('{string} is clicked in the {string} section', function (searchItem, string2) {
    angularHomePage.clickOnResultName(searchItem);
});

Then('The example select should be visible', async function () {
    browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
    browser.wait(EC.presenceOf(angularHomePage.exampleSelect), 5000);
    expect(await angularHomePage.exampleSelect.isDisplayed()).to.be.true;
});

Then('The example multiple select should be a multiple select', async function () {
    expect(await angularHomePage.getAttributeOfElement(angularHomePage.exampleMultiSelect, 'multiple')).to.equal('true');
});

Then('The selected option in example select should be {string}', async function (expectedValue) {
    expect(await angularHomePage.exampleSelect.getAttribute('value')).to.have.string(expectedValue);
});

Then('there should not be option like {string} in example select', async function (expectedOption) {
    expect(await angularHomePage.isOptionAvailableInSelect(expectedOption)).to.be.false;
});

Then('there should be option like {string} in example select', async function (expectedOption) {
    expect(await angularHomePage.isOptionAvailableInSelect(expectedOption)).to.be.true;
});

When('The option {string} is selected in example select', function (optionToSelect) {
    angularHomePage.selectOption(optionToSelect);
});

Then('The number of options in example select should be {int}', async function (numberOfOptions) {
    const displayedOptions = await angularHomePage.getOptionsInSelect();
    expect(displayedOptions.length).to.equal(numberOfOptions);
});