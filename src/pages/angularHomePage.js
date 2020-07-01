const AngularHomePage = function () {

    this.angularLogoNavbar = element(by.className('ng-star-inserted'));
    this.angularLogoHeroSection = element(by.css('.hero-logo img'));
    const textInHeroSection = element(by.css('div.hero-headline'));
    this.getStartedButton = element(by.linkText('GET STARTED'));
    const searchInput = element(by.css('input[type="search"]'));

    const apiSection = element(by.linkText('Directive'));

    this.isAngularElementVisible = async function (angularElement) {
        return angularElement.isDisplayed();
    };

    this.getTextFromHeroSection = async function () {
        return textInHeroSection.getText();
    };
};

module.exports = new AngularHomePage();