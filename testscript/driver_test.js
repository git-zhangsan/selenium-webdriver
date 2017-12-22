/*
* @Author: zhanghuiming
* @Date:   2017-12-22 11:20:05
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-22 13:18:25
*/
var test = require('selenium-webdriver/testing');
let webdriver = require('selenium-webdriver'),
	chai = require('chai'),
	expect = require('chai').expect;

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

test.describe( 'Test Suite' , function(){
  
    test.before(function(){
    
       driver.get("http://localhost:3000/form.html");
       
      
    });
 
    test.after(function(){
        driver.quit();
    });
 
    test.it( 'Test Case' , function(){

    	driver.findElement(webdriver.By.id('utext')).sendKeys('test_content');
        driver.findElement(webdriver.By.id('submit')).click();
        driver.getTitle().then(function(title){
            expect(title).equals('Result Page');
       	})
 	 	
        driver.sleep();
    });
 
});
