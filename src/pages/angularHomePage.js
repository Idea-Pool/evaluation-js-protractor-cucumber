let EC = protractor.ExpectedConditions;

const AngularHomePage = function () {

    this.angularLogoNavbar = element(by.className('ng-star-inserted'));
    this.angularLogoHeroSection = element(by.css('.hero-logo img'));
    const textInHeroSection = element(by.css('div.hero-headline'));
    this.getStartedButton = element(by.className('button hero-cta'));
    this.searchInput = element(by.css('input[type="search"]'));

    this.apiSection = element(by.xpath('//h3[contains(text(), \'api\')]/../ul/li'));

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

    this.clickOnResultName = async function(searchText) {
        element(by.linkText(searchText)).click();
    }

};

module.exports = new AngularHomePage();