//1.	Зайти на сайт https://proskate.by/
//2.	В главном меню выбрать ссылку «Контакты»
//3.	Перейти на ссылку «Таблица размеров»

const {Builder, By, until, Key} = require ('selenium-webdriver');

async function ShowTableSize() {
//1.	Зайти на сайт https://proskate.by/
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    await driver.get('https://proskate.by/');    

//2.	В главном меню выбрать ссылку «Контакты»
    await driver.findElement(By.xpath("/html/body/div[3]/header[1]/div/div/div/div[3]/nav/ul/li[9]/a")).click();
//3.	Перейти на ссылку «Таблица размеров»
await driver.findElement(By.xpath("/html/body/div[3]/div[2]/section/div/div/div[1]/div/article/div/div/div/div[2]/div/div/div[1]/div[3]/div/div/p[1]/a/span/span")).click();


}

ShowTableSize();