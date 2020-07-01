const AngularStartPage = function () {

        this.title = element(by.tagName('h1'));

        this.getTitleOfThePage = async function(){
                return this.title.getText();
        };
};

module.exports = new AngularStartPage();