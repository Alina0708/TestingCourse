const { PageBase } = require('./PageBase');
const {Builder, By, until} = require ('selenium-webdriver');


class PageContact extends PageBase{
    constructor(browser){
        super(browser); 
        }

        async maxSize(){
    await this.driver.manage().window().maximize();
}

async openPage(path){
    await this.driver.get(path);  
}

async findElementXPath(xpath){
    await this.driver.findElement(By.xpath(xpath)).click();
}

async closePage(){
    await this.driver.quit();
}
}

module.exports.PageContact = PageContact;
