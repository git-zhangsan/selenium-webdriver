/*
* @Author: zhanghuiming
* @Date:   2017-12-20 14:10:49
* 操作序列
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-20 17:22:22
*/


// this.click( opt_elementOrButton, opt_button )
// this.doubleClick(opt_elementOrButton, opt_button )
// this.dragAndDrop(element, location )
// this.keyDown(key)
// this.keyUp(key)
// this.mouseDown(opt_elementOrButton, opt_button)
// this.mouseMove(location, opt_offset)
// this.mouseUp(opt_elementOrButton, opt_button)
// this.perform()
// this.sendKeys(...var_args)


let webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	Key = require('selenium-webdriver/lib/input').Key,
	chrome = require('selenium-webdriver/chrome'),
	chai = require('chai'),
	expect = require('chai').expect;

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();



 
describe('Test Suite', function () {
	before(function(){
		driver.get('http://localhost:3000/ActionSequence/index.html');
	})

	it( 'Test Case By click', function(){
		driver.findElement(By.id('act1')).click();
		driver.findElement(By.id('act4')).sendKeys('webdriver');

		driver.actions()
		.doubleClick(driver.findElement(By.id('act2')))
		.dragAndDrop(driver.findElement(By.id('dragtarget')),{x:100,y:0})
		.keyUp(Key.CONTROL)
		.keyDown(Key.SHIFT)
		.perform();

		driver.quit()
		
	});

});