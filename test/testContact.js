const {PageBase} = require('../page/PageBase.js');
const {Builder, By, until} = require ('selenium-webdriver');
const {PageContact} = require('../page/PageContact.js');

const sortClother = async () =>{
    const pageContact = new PageContact('chrome');
    await pageContact.maxSize();
    await pageContact.openPage('https://proskate.by/');
    await pageContact.findElementXPath("/html/body/div[3]/header[1]/div/div/div/div[3]/nav/ul/li[9]/a");
    await pageContact.findElementXPath("/html/body/div[3]/div[2]/section/div/div/div[1]/div/article/div/div/div/div[2]/div/div/div[1]/div[3]/div/div/p[5]/a/span/span");

}

sortClother();
