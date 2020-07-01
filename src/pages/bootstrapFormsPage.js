let EC = protractor.ExpectedConditions;

const BootstrapFormsPage = function () {

        const title = element(by.css('h1#content'));
        this.readOnlyInput = element(by.css('input[readonly].form-control'));

        this.defaultCheckbox = element(by.id('defaultCheck1'));
        this.disabledCheckbox = element(by.id('defaultCheck2'));

        this.defaultRadioButton = element(by.id('exampleRadios1'));
        this.secondDefaultRadioButton = element(by.id('exampleRadios2'));
        this.disabledRadioButton = element(by.id('exampleRadios3'));

        this.disabledPrimaryButton = (buttonName) => element(by.buttonText(`${buttonName}`));
        this.activePrimaryLink = (linkName) => element(by.linkText(`${linkName}`));

        this.exampleSelect = element(by.id('exampleFormControlSelect1'));
        this.exampleMultiSelect = element(by.id('exampleFormControlSelect2'));


        this.isReadOnlyInputVisible = function () {
                return browser.wait(EC.visibilityOf(this.readOnlyInput), 1000);
        };

        this.getAttributeOfElement = function(webelement, attributeName) {
                return webelement.getAttribute(attributeName);
        };

        this.isFormElementSelected = function(checkboxName) {
                return checkboxName.isSelected();
        };

        this.isOptionAvailableInSelect = function(optionName) {
                let allOptions = element.all(by.xpath('//select[@id="exampleFormControlSelect1"]/option'));
                allOptions.then(function (actualItem) {
                        console.log(actualItem.getText())
                })
                return allOptions;
        }
};

module.exports = new BootstrapFormsPage();