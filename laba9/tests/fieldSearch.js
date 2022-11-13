//Проверка заполнения поля поиска 
const {Builder, By, until, Key} = require ('selenium-webdriver');

async function fieldSearch() {
    // 1. Открыть https://cloud.google.com/
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    await driver.get('https://proskate.by/');    
    // await driver.wait(until.elementIsVisible(By.xpath()));

    //2. Нажать на значок поиска в правом верхнем углу
    await driver.findElement(By.xpath("/html/body/div[3]/header[1]/div/div/div/div[3]/nav/div[2]/div/div[1]/div[2]")).click();
   //3.	Ввести данные для поиска (КЕДЫ VANS old sсhool)
   //4.	Нажимаем enter;
    await driver.findElement(By.xpath("/html/body/div[3]/div[4]/form/div[1]/div[2]/div/div/div/input")).sendKeys("КЕДЫ VANS old sсhool", Key.ENTER);  

}
fieldSearch();