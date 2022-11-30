//Проверка заполнения поля поиска 
const {Builder, By, until, Key} = require ('selenium-webdriver');

async function sortClothes() {
    // 1. Открыть https://cloud.google.com/
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    await driver.get('https://proskate.by/');    
    // await driver.wait(until.elementIsVisible(By.xpath()));

   //2.	На главной странице выбрать необходимую каталог (одежда)
    await driver.findElement(By.xpath("/html/body/div[3]/div[3]/section/div/div/div[1]/div/article/div/div/div[1]/div[2]/div/div/div[2]/div[1]/a/div/div/div/img")).click();
   //3.	В выпадающем списке сортировок выбрать "цена по убыванию"
   await driver.findElement(By.xpath("/html/body/div[3]/div[2]/section/div/div/div[1]/div/div/span/span[2]")).click();
   await driver.sleep(2000);
   await driver.findElement(By.xpath("/html/body/div[3]/div[2]/section/div/div/div[1]/div/div/div/ul/li[2]/a")).click(); 
   await driver.sleep(5000);
    await driver.quit();

    //  await expect((await $('//span[contains(text(), "Босоножки с ремешками, на каблуке")][1]'))).toExist()
}
sortClothes();