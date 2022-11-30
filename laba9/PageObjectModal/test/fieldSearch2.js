const {PageBase} = require('../page/PageBase.js');
const {Builder, By, until} = require ('selenium-webdriver');
const {MyTest} = require('../page/MyTest.js');

const BringItOn = async () => {
    const myTest  = new MyTest('chrome');
    await myTest.MaxSize();
    await myTest.getPage('https://proskate.by/');
    await myTest.findElementByxpathandClick("/html/body/div[3]/header[1]/div/div/div/div[3]/nav/div[2]/div/div[1]/div[2]");

    await myTest.findElementXpathEnter();
    await myTest.SleepPage();
    await myTest.ClosePage();
}

BringItOn();