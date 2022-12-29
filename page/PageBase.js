const {Builder, By, until} = require ('selenium-webdriver');

class  PageBase{
    constructor(browser){
        this.driver = new Builder().forBrowser(browser).build();
       
    }
}

module.exports.PageBase = PageBase;