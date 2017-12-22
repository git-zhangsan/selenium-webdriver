/*
* @Author: zhanghuiming
* @Date:   2017-12-22 11:08:16
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-22 13:19:11
*/
let webdriver = require('selenium-webdriver'),
	chai = require('chai'),
	expect = require('chai').expect;

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

describe( 'Test Suite' , function(){
	before(function(){
 
        return driver.get("http://localhost:3000/form.html");
       
    });
 
    after(function(){
 		
        return driver.quit();
 
    });
 
    it( 'Test Case', function(){
    	driver.findElement(webdriver.By.id('utext')).sendKeys('test_content');
        driver.findElement(webdriver.By.id('submit')).click();
        driver.getTitle().then(function(title){
            expect(title).equals('Result Page'); 
       	})

	})
})	
 
    