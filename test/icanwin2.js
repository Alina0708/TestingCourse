const {PageBase} = require('../page/PageBase.js');
const {Builder, By, until} = require ('selenium-webdriver');
const {EnterDataField} = require('../page/EnterDataField.js')


const TestEnterDataField = async () => {
   
  const enterDataField  = new EnterDataField('chrome');
  await enterDataField.getBrowser('https://pastebin.com');
  await enterDataField.EnterData('postform-text', 'Hello from WebDriver');
  await enterDataField.findElementByCSSandClick("div.form-group.field-postform-expiration span.select2-selection__arrow");
  await enterDataField.findElementByXPatchandClick('//span[@class="select2-results"]/ul[@class="select2-results__options"]/li[text()="10 Minutes"]');
  await enterDataField.findElementByID('postform-name', 'helloweb');
  await enterDataField.ClosePage();
} 

TestEnterDataField();

