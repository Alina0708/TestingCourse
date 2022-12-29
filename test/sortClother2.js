const {PageBase} = require('../page/PageBase.js');
const {Builder, By, until} = require ('selenium-webdriver');
const {PageSortClother} = require('./../page/PageSortClother.js');

const sortClother = async () =>{
    const pageSortClother = new PageSortClother('chrome');
    await pageSortClother.maxSize();
    await pageSortClother.openPage('https://proskate.by/');
    await pageSortClother.findElementXpathandClick("/html/body/div[3]/div[3]/section/div/div/div[1]/div/article/div/div/div[1]/div[2]/div/div/div[2]/div[1]/a/div/div/div/img");
    await pageSortClother.findElementXpathandClick("/html/body/div[3]/div[2]/section/div/div/div[1]/div/div/span/span[2]");
    await pageSortClother.sleepPage(2000);
    await pageSortClother.findElementXpathandClick("/html/body/div[3]/div[2]/section/div/div/div[1]/div/div/div/ul/li[2]/a");
    await pageSortClother.sleepPage(5000);
    await pageSortClother.closePage();

}

sortClother();
