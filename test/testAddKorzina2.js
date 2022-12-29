const {PageBase} = require('../page/PageBase.js');
const {Builder, By, until} = require ('selenium-webdriver');
const {PageAddKorzina2} = require('../page/PageAddKorzina2.js');

const testAddKorzina2 = async () =>{
    const pageAddKorzina2 = new PageAddKorzina2('chrome');
    await pageAddKorzina2.maxSize();
    await pageAddKorzina2.openPage('https://proskate.by/');
    await pageAddKorzina2.findElementXPath("/html/body/div[3]/div[3]/section/div/div/div[1]/div/article/div/div/div[1]/div[2]/div/div/div[1]/div[1]/a/div/div/div/img");
    await pageAddKorzina2.findElementXPath("/html/body/div[3]/header[1]/div/div/div/div[3]/nav/div[2]/div/div[1]/div[2]");

    await pageAddKorzina2.findElementSendKeys("/html/body/div[3]/div[3]/form/div[1]/div[2]/div/div/div/input", 'КЕДЫ VANS ULTRARANGE VR3');
    await pageAddKorzina2.SleepPage();

    await pageAddKorzina2.findElementXPath("/html/body/div[3]/div[3]/form/div[2]/div[3]/div/div/div/div[1]/div[1]/div/div[1]/div/a");
    await pageAddKorzina2.SleepPage();

    await pageAddKorzina2.findElementXPath("/html/body/div[3]/div[2]/section/div/div/div[1]/article/div[2]/div[1]/div[2]/div/div[2]/div[1]/div[2]/span");

    await pageAddKorzina2.findElementXPath("/html/body/div[3]/div[2]/section/div/div/div[1]/article/div[2]/div[1]/div[2]/div/div[2]/div[2]/div/div[2]");
    await pageAddKorzina2.findElementXPath("/html/body/div[3]/div[2]/section/div/div/div[1]/article/div[2]/div[1]/div[4]/a");
    await pageAddKorzina2.SleepPage();

    await pageAddKorzina2.findElementXPath("/html/body/div[7]/aside/div[2]/div/div[2]/div[2]/div/div/span[2]");
}

testAddKorzina2();
