/*
* @Author: zhanghuiming
* @Date:   2017-12-20 16:14:43
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-20 16:15:22
*/

let webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	Key = require('selenium-webdriver/lib/input').Key,
	safari = require('selenium-webdriver/safari'),
	chai = require('chai'),
	expect = require('chai').expect;

let driver = new webdriver.Builder()
    .forBrowser('safari')
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
		
	});

});