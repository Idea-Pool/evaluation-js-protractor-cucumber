const BootstrapFormsPage = function () {

        const title = element(by.css('h1#content'));
        const readOnlyInput = element(by.css('input[readonly].form-control'));

        const defaultCheckbox = element(by.css('input#defaultCheck1'));
        const disabledCheckbox = element(by.css('input#defaultCheck2'));

        const defaultRadioButton = element(by.css('input#exampleRadios1'));
        const secondDefaultRadioButton = element(by.css('input#exampleRadios2'));
        const disabledRadioButton = element(by.css('input#exampleRadios3'));

        const exampleSelect = element(by.css('select#exampleFormControlSelect1'));
        const exampleMultiSelect = element(by.css('select#exampleFormControlSelect2'));

};

module.exports = new BootstrapFormsPage();