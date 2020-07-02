const {browser, element, protractor} = require('protractor');
let EC = protractor.ExpectedConditions;

const AngularHomePage = function () {

    this.angularLogoNavbar = element(by.className('ng-star-inserted'));
    this.angularLogoHeroSection = element(by.css('.hero-logo img'));
    const textInHeroSection = element(by.css('div.hero-headline'));
    this.getStartedButton = element(by.className('button hero-cta'));
    this.searchInput = element(by.css('input[type="search"]'));

    this.apiSection = element(by.xpath('//h3[contains(text(), \'api\')]/../ul/li'));

    this.exampleSelect = element(by.model('data.singleSelect'));
    this.exampleMultiSelect = element(by.model('data.multipleSelect'));

    this.isAngularElementVisible = async function (angularElement) {
        return angularElement.isDisplayed();
    };

    this.getTextFromHeroSection = async function () {
        return textInHeroSection.getText();
    };

    this.getSearchInputAttribute = async function (attributeName) {
        return this.searchInput.getAttribute(attributeName);
    };

    this.enterSearchText = function (searchText) {
        this.searchInput.sendKeys(searchText);
    };

    this.getTextInApiSection = async function () {
        browser.wait(EC.visibilityOf(this.apiSection));
        return this.apiSection.getText();
    };

    this.clickOnResultName = async function (searchText) {
        element(by.linkText(searchText)).click();
    };

    this.getAttributeOfElement = function (webelement, attributeName) {
        return webelement.getAttribute(attributeName);
    };

    this.getOptionsInSelect = async function () {
        return await this.exampleSelect.all(by.tagName('option'));
    };

    this.isOptionAvailableInSelect = async function (testedOption) {
        let allOptions = await this.exampleSelect.all(by.tagName('option')).getAttribute('value');
        return allOptions.includes(testedOption);
    };

    this.selectOption = function (optionToSelect) {
        element(by.cssContainingText('option', optionToSelect)).click();
    };
};

module.exports = new AngularHomePage();