//Корректность внутренней ссылки «Контакты» на странице «Контакты»

//1.	Зайти на сайт https://proskate.by/
//2.	Перейти на страницу Контакты нажав пункт меню «Контакты»
//3.    Нажать на пункт меню «Контакты», расположенный слева на странице Контакты

//Проверка заполнения поля поиска 
const {Builder, By, until, Key} = require ('selenium-webdriver');

async function contact() {
    // 1. Открыть https://cloud.google.com/
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    await driver.get('https://proskate.by/');    
    // await driver.wait(until.elementIsVisible(By.xpath()));

   //2.	В главном меню выбрать ссылку «Контакты»
await driver.findElement(By.xpath("/html/body/div[3]/header[1]/div/div/div/div[3]/nav/ul/li[9]/a")).click();

//3.    Нажать на пункт меню «Контакты», расположенный слева на странице Контакты
await driver.findElement(By.xpath("/html/body/div[3]/div[2]/section/div/div/div[1]/div/article/div/div/div/div[2]/div/div/div[1]/div[3]/div/div/p[5]/a/span/span")).click();


}
contact();