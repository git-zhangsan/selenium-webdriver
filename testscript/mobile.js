/*
* @Author: zhanghuiming
* @Date:   2017-12-20 16:44:14
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-22 13:27:13
*/
const {Builder, By, Key, promise, until} = require('selenium-webdriver');
const {Options} = require('selenium-webdriver/chrome');

promise.consume(function* () {
  let driver;
  try {
    driver = yield new Builder()
        .forBrowser('chrome')
        .setChromeOptions(
            new Options().setMobileEmulation({deviceName: 'iPhone 6'}))
        .build();

    yield driver.get('http://m.kaishustory.com/');

   driver.sleep(500);

   driver.touchActions()
   .tap(driver.findElement({className: 'homeSearch'}))
   .perform();

  	driver.findElement(By.id('searchContent')).sendKeys('凯叔三国演义');

   yield driver.touchActions()
   .tap(driver.findElement({className: 'searchRight'}))
   .perform();

  
   yield driver.touchActions()
   .scrollFromElement(driver.findElement(By.id('searchResult')),{x:0,y:500})
   .tap(driver.findElement(By.id('searchResult')))
   .perform();

   driver.sleep(500);

   driver.touchActions()
   .scrollFromElement(driver.findElement(By.id('detailStoryyListInfinite')),{x:0,y:500})
   .perform();

   let eleTitle = driver.findElement({'className':'detailTitle'}),
       eleUl = 	eleTitle.findElement({'tagName':'ul'});
      
    yield eleUl.findElements({'tagName':'li'}).then(function(el){

    	driver.touchActions()
    	.tap(el[1])
    	.scrollFromElement(driver.findElement(By.id('detailStoryyListInfinite')),{x:0,y:500})
    	.perform();

    	let groupWrap = driver.findElement({'className':'storyGroupListWrap'}),
    		openWrap = groupWrap.findElement({'className':'groupWrap'});
    	

    	openWrap.findElements({'className':'detailStoryListCon'}).then(function(item){
	   	
			driver.touchActions()
			.tap(item[0])
			.perform();

		})

  		//groupWrap.findElements({'className':'groupWrapBorderNone'}).then(function(item){
	   	
		// 	driver.touchActions()
		// 	.tap(item[0])
		// 	.perform();

		// })

		// groupWrap.findElements({'className':'detailStoryListCon'}).then(function(item){
	   	
		// 	driver.touchActions()
		// 	.tap(item[0])
		// 	.perform();

		// })

		

    	// driver.touchActions()
    	// .tap(el[2])
    	// .scrollFromElement(driver.findElement(By.id('detailStoryyListInfinite')),{x:0,y:500})
    	// .perform();
    })
  } finally {
    //yield driver && driver.quit();
  }
}).then(_ => console.log('SUCCESS'), err => console.error('ERROR: ' + err));

