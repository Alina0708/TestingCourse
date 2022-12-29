const {PageBase} = require('../page/PageBase.js');
const {Builder, By, until} = require ('selenium-webdriver');
const { PageVariosThings } = require('../page/PageVariosThings.js');

const SMS = async () =>{
    const pageVariosThings = new PageVariosThings('chrome');
    await pageVariosThings.maxSize();
    await pageVariosThings.openPage('https://proskate.by/');

    await pageVariosThings.findElementXPath("/html/body/div[3]/header[1]/div/div/div/div[3]/nav/ul/li[9]/a");

    await pageVariosThings.findElementSendKeys("/html/body/div[3]/div[2]/section/div/div/div[1]/div/article/div/div/div/div[2]/div/div/div[2]/div[4]/div/div/form/div[2]/div/div[2]/div/input", "Alina");
    await pageVariosThings.findElementSendKeys("/html/body/div[3]/div[2]/section/div/div/div[1]/div/article/div/div/div/div[2]/div/div/div[2]/div[4]/div/div/form/div[2]/div/div[3]/div/input", "laba");
    await pageVariosThings.findElementSendKeys("/html/body/div[3]/div[2]/section/div/div/div[1]/div/article/div/div/div/div[2]/div/div/div[2]/div[4]/div/div/form/div[2]/div/div[4]/div/input", "test@gmail.com");
    await pageVariosThings.findElementSendKeys("/html/body/div[3]/div[2]/section/div/div/div[1]/div/article/div/div/div/div[2]/div/div/div[2]/div[4]/div/div/form/div[2]/div/div[5]/div/textarea", "Hello");
    await pageVariosThings.SleepPage();
    await pageVariosThings.findElementXPath("/html/body/div[3]/div[2]/section/div/div/div[1]/div/article/div/div/div/div[2]/div/div/div[2]/div[4]/div/div/form/div[3]/div/button");
    await pageVariosThings.SleepPage();
    await pageVariosThings.closePage();
}

SMS();
