//Проверка заполнения поля поиска 
const {Builder, By, until, Key} = require ('selenium-webdriver');

async function SMSForVans() {
    // 1. Открыть https://cloud.google.com/
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    await driver.get('https://proskate.by/');    

   //2.	На главной странице перейти по вкладке Контакты
   await driver.findElement(By.xpath("/html/body/div[3]/header[1]/div/div/div/div[3]/nav/ul/li[9]/a")).click();

   //3 Заполнить поле Имя
   await driver.findElement(By.xpath("/html/body/div[3]/div[2]/section/div/div/div[1]/div/article/div/div/div/div[2]/div/div/div[2]/div[4]/div/div/form/div[2]/div/div[2]/div/input")).sendKeys("Alina");  
   //4 Заполнить поле Фамилия
   await driver.findElement(By.xpath("/html/body/div[3]/div[2]/section/div/div/div[1]/div/article/div/div/div/div[2]/div/div/div[2]/div[4]/div/div/form/div[2]/div/div[3]/div/input")).sendKeys("Laba13");  
   //5 Заполнить поле E-mail
   await driver.findElement(By.xpath("/html/body/div[3]/div[2]/section/div/div/div[1]/div/article/div/div/div/div[2]/div/div/div[2]/div[4]/div/div/form/div[2]/div/div[4]/div/input")).sendKeys("test@gmail.com");  
   //6 Заполнить поле Сообщения
   await driver.findElement(By.xpath("/html/body/div[3]/div[2]/section/div/div/div[1]/div/article/div/div/div/div[2]/div/div/div[2]/div[4]/div/div/form/div[2]/div/div[5]/div/textarea")).sendKeys("Hello"); 

   //7 Кликнуть на кнопку отправить
   await driver.findElement(By.xpath("/html/body/div[3]/div[2]/section/div/div/div[1]/div/article/div/div/div/div[2]/div/div/div[2]/div[4]/div/div/form/div[3]/div/button")).click();
}
SMSForVans();