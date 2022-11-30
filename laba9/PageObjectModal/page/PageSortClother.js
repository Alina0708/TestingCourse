const {Builder, By, until} = require ('selenium-webdriver');
const { PageBase } = require('./PageBase');

class PageSortClother extends PageBase{
    constructor(browser){
        super(browser); 
        }

        async maxSize(){
    await this.driver.manage().window().maximize();
}

async openPage(path){
    await this.driver.get(path);  
}

async findElementXpathandClick(path){
    await this.driver.findElement(By.xpath(path)).click();
}

async sleepPage(num){
    await this.driver.sleep(num);
}

async closePage(){
    await this.driver.quit();
}
}

module.exports.PageSortClother = PageSortClother;
