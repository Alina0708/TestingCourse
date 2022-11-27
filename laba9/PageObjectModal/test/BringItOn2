const {PageBase} = require('../page/PageBase.js');
const {Builder, By, until} = require ('selenium-webdriver');
const {CompareField} = require('./../page/CompareField');

const BringItOn = async () => {
    const compareField  = new CompareField('chrome');
    await compareField.getBrowser('https://pastebin.com');
    await compareField.findElementIDandEnter('postform-text', `git config --global user.name  "New Sheriff in Town"
    git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
    git push origin master --force` );
    await compareField.sleepDriver();
    await compareField.WaitElementLocatedCSS('.active-path');
    await compareField.findElementCSSandClick('.active-path');
    await compareField.findElementCSSandClick('.toggle__control > label:nth-child(2)');
    await compareField.findElementXpathandClick('//*[@id="select2-postform-format-container"]');
    await compareField.findElementXpathandClick( '(//ul[@class="select2-results__options select2-results__options--nested"]/*[.="Bash"])[1]');
    await compareField.findElementCSSandClick('div.form-group.field-postform-expiration span.select2-selection__arrow');
    await compareField.findElementXpathandClick('//span[@class="select2-results"]/ul[@class="select2-results__options"]/li[text()="10 Minutes"]');
    await compareField.findElementIDandEnter('postform-name', 'how to gain dominance among developers');
    await compareField.WaitElementLocatedXpath('//button[@class="btn -big"]');
    await compareField.findElementXpathandClick('//button[@class="btn -big"]');
    await compareField.sleepDriver();
    await compareField.WaitElementLocatedXpath('(//a[@class="btn -small h_800"])[1]');
    await compareField.WaitElementLocatedXpath('(//a[@class="btn -small h_800"])[1]');
    await compareField.ClosePage();
}

BringItOn();
