const {PageBase} = require('../page/PageBase.js');
const {Builder, By, until} = require ('selenium-webdriver');
const {PageShowTableSize} = require('../page/PageShowTableSize.js');

const testTable = async () =>{
    const pageShowTableSize = new PageShowTableSize('chrome');
    await pageShowTableSize.maxSize();
    await pageShowTableSize.openPage('https://proskate.by/');
    await pageShowTableSize.findElementXPath("/html/body/div[3]/header[1]/div/div/div/div[3]/nav/ul/li[9]/a");
    await pageShowTableSize.findElementXPath("/html/body/div[3]/div[2]/section/div/div/div[1]/div/article/div/div/div/div[2]/div/div/div[1]/div[3]/div/div/p[1]/a/span/span");

}

testTable();
