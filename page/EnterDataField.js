const {Builder, By, until} = require ('selenium-webdriver');
const { PageBase } = require('./PageBase');

class  EnterDataField extends PageBase{
constructor(browser){
super(browser);

}

    async getBrowser(url){
        await this.driver.get(url); 
    }
    async EnterData(id, quote){
        await this.driver.findElement(By.id(id)).sendKeys(quote);
    }

    async findElementByCSSandClick(elemcss){
        await this.driver.findElement(By.css(elemcss)).click();
    }

    async findElementByXPatchandClick(elemxpath){
        await this.driver.findElement(By.xpath(elemxpath)).click();
    }

    async findElementByID(id, send){
       await  this.driver.findElement(By.id(id)).sendKeys(send);
    }

    async ClosePage(){
        await this.driver.sleep(5000);
        await this.driver.quit();
    }
}

module.exports.EnterDataField = EnterDataField;