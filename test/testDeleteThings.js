const {PageBase} = require('../page/PageBase.js');
const {Builder, By, until} = require ('selenium-webdriver');
const {PageDeleteThings} = require('../page/PageDeleteThings.js');

const testDelete = async () =>{
    const pageDeleteThings = new PageDeleteThings('chrome');
    await pageDeleteThings.maxSize();
    await pageDeleteThings.openPage('https://proskate.by/');
    await pageDeleteThings.findElementXPath("/html/body/div[3]/div[3]/section/div/div/div[1]/div/article/div/div/div[1]/div[2]/div/div/div[1]/div[1]/a/div/div/div/img");
    await pageDeleteThings.findElementXPath("/html/body/div[3]/header[1]/div/div/div/div[3]/nav/div[2]/div/div[1]/div[2]");

    await pageDeleteThings.findElementSendKeys("/html/body/div[3]/div[3]/form/div[1]/div[2]/div/div/div/input", 'КЕДЫ VANS ULTRARANGE VR3');
    await pageDeleteThings.SleepPage();

    await pageDeleteThings.findElementXPath("/html/body/div[3]/div[3]/form/div[2]/div[3]/div/div/div/div[1]/div[1]/div/div[1]/div/a");
    await pageDeleteThings.SleepPage();

    await pageDeleteThings.findElementXPath("/html/body/div[3]/div[2]/section/div/div/div[1]/article/div[2]/div[1]/div[2]/div/div[2]/div[1]/div[2]/span");

    await pageDeleteThings.findElementXPath("/html/body/div[3]/div[2]/section/div/div/div[1]/article/div[2]/div[1]/div[2]/div/div[2]/div[2]/div/div[2]");
    await pageDeleteThings.findElementXPath("/html/body/div[3]/div[2]/section/div/div/div[1]/article/div[2]/div[1]/div[4]/a");

   // await pageDeleteThings.findElementXPath("/html/body/div[7]/aside/div[2]/div/div[2]/div[1]/button/svg");
await pageDeleteThings.SleepPage();
  // await pageDeleteThings.findElementXPath("/html/body/div[3]/header[1]/div/div/div/div[1]/div/div/div[1]/div[1]/div/a/span[1]/svg");

   await pageDeleteThings.findElementXPath("/html/body/div[7]/aside/div[2]/div/div[2]/div[1]/button");

}

testDelete();
