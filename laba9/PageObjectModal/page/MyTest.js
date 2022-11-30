const {PageBase} = require('./PageBase.js');
const {Builder, By, until} = require ('selenium-webdriver');

class MyTest extends PageBase{
    constructor(browser){
        super(browser);
    }

    async MaxSize(){
        await this.driver.manage().window().maximize();
    }

    async getPage(path){
        await this.driver.get(path);      
    }

    async findElementByxpathandClick(path){
        await this.driver.findElement(By.xpath(path)).click();

    }

    async findElementXpathEnter(){
        await this.driver.findElement(By.xpath("/html/body/div[3]/div[4]/form/div[1]/div[2]/div/div/div/input")).sendKeys("Кеды VANS old sсhool");  
    }

    async SleepPage(){
        await this.driver.sleep(7000);
    }

    async ClosePage(){
        await this.driver.quit();
    }
}

module.exports.MyTest = MyTest;