const {PageBase} = require('../page/PageBase.js');
const {Builder, By, until} = require ('selenium-webdriver');
const { PageVariosThings } = require('../page/PageVariosThings.js');

const VariosClother = async () =>{
    const pageVariosThings = new PageVariosThings('chrome');
    await pageVariosThings.maxSize();
    await pageVariosThings.openPage('https://proskate.by/');
    await pageVariosThings.findElementXPath("/html/body/div[3]/div[3]/section/div/div/div[1]/div/article/div/div/div[1]/div[2]/div/div/div[1]/div[1]/a/div/div/div/img");
    await pageVariosThings.findElementXPath("/html/body/div[3]/header[1]/div/div/div/div[3]/nav/div[2]/div/div[1]/div[2]");

    await pageVariosThings.findElementSendKeys("/html/body/div[3]/div[3]/form/div[1]/div[2]/div/div/div/input", 'КЕДЫ VANS ULTRARANGE VR3');
    await pageVariosThings.SleepPage();

    await pageVariosThings.findElementXPath("/html/body/div[3]/div[3]/form/div[2]/div[3]/div/div/div/div[1]/div[1]/div/div[1]/div/a");
    await pageVariosThings.SleepPage();

    await pageVariosThings.findElementXPath("/html/body/div[3]/div[2]/section/div/div/div[1]/article/div[2]/div[1]/div[2]/div/div[2]/div[1]/div[2]/span");

    await pageVariosThings.findElementXPath("/html/body/div[3]/div[2]/section/div/div/div[1]/article/div[2]/div[1]/div[2]/div/div[2]/div[2]/div/div[2]");
    await pageVariosThings.findElementXPath("/html/body/div[3]/div[2]/section/div/div/div[1]/article/div[2]/div[1]/div[4]/a");

    //---
    await pageVariosThings.findElementXPath("/html/body/div[3]/div[2]/section/div/div/div[4]/div/div[1]/div/a/div[1]/img");
    await pageVariosThings.findElementXPath("/html/body/div[3]/div[2]/section/div/div/div[1]/article/div[2]/div[1]/div[2]/div/div[2]/div[1]/div[2]/span");
    await pageVariosThings.findElementXPath("/html/body/div[3]/div[2]/section/div/div/div[1]/article/div[2]/div[1]/div[2]/div/div[2]/div[2]/div/div[2]");
    await pageVariosThings.findElementXPath("/html/body/div[3]/div[2]/section/div/div/div[1]/article/div[2]/div[1]/div[4]/a");
}

VariosClother();
