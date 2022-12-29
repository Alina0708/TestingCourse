


//5.	Нажать на кнопку «Добавить в корзину»

const {Builder, By, until, Key} = require ('selenium-webdriver');

async function AddKorzinaWithSize() {
//1.	Зайти на сайт https://proskate.by/
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    await driver.get('https://proskate.by/');    

//2.	На главной странице выбрать необходимую категорию (обувь)/
    await driver.findElement(By.xpath("/html/body/div[3]/div[3]/section/div/div/div[1]/div/article/div/div/div[1]/div[2]/div/div/div[1]/div[1]/a/div/div/div/img")).click();

 //3. Нажать на поле поиска и ввести КЕДЫ VANS SK8-HI MTE 2.0
 await driver.findElement(By.xpath("/html/body/div[3]/header[1]/div/div/div/div[3]/nav/div[2]/div/div[1]/div[2]")).click();
 await driver.findElement(By.xpath("/html/body/div[3]/div[3]/form/div[1]/div[2]/div/div/div/input")).sendKeys("КЕДЫ VANS ULTRARANGE VR3");
 await driver.sleep(4000);

 //4. Кликнуть по выпавшему в списке товару
 await driver.findElement(By.xpath("/html/body/div[3]/div[3]/form/div[2]/div[3]/div/div/div/div[1]/div[1]/div/div[1]/div/a")).click();

 // 5. Кликнуть на выпадающий список
 await driver.findElement(By.xpath("/html/body/div[3]/div[2]/section/div/div/div[1]/article/div[2]/div[1]/div[2]/div/div[2]/div[1]/div[2]/span")).click();

 //5.	Указать размер выбранного товара Rus 39
 await driver.findElement(By.xpath("/html/body/div[3]/div[2]/section/div/div/div[1]/article/div[2]/div[1]/div[2]/div/div[2]/div[2]/div/div[2]")).click();

 //6. Добавить в корзину
 await driver.findElement(By.xpath("/html/body/div[3]/div[2]/section/div/div/div[1]/article/div[2]/div[1]/div[4]/a")).click();

 //await driver.sleep(5000);
 //await driver.quit();

}

AddKorzinaWithSize();