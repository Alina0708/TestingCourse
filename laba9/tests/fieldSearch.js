//Проверка заполнения поля поиска 
const {Builder, By, until, Key} = require ('selenium-webdriver');

async function fieldSearch() {
    // 1. Открыть https://cloud.google.com/
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    await driver.get('https://proskate.by/');    
    // await driver.wait(until.elementIsVisible(By.xpath()));

    //2. Нажать на значок поиска в правом верхнем углу
    await driver.findElement(By.css(".l-header__icon l-header__icon--search")).click();
   //3.	Ввести данные для поиска (КЕДЫ VANS old sсhool)
   //4.	Нажимаем enter;
    await driver.findElement(By.css(".searchform__input js--searchform_input placeholder-default f__2")).sendKeys("КЕДЫ VANS old sсhool", Key.ENTER);  

}
fieldSearch();