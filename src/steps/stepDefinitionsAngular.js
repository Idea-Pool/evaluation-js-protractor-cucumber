const { Given, When, Then, setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
const { browser, protractor} = require('protractor');
const { expect } = require('chai');
let EC = protractor.ExpectedConditions;
let angularHomePage = require('../pages/AngularHomePage');
let angularStartPage = require('../pages/angularStartPage');
browser.waitForAngular(false);

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