# Javascript Testing with Selenium Webdriver and Mocha

# 教程概述

## Mocha测试构建

+  Mocha介绍
+  Mocha安装
+  安装Chai声明模块
+  测试套件和测试用例结构
+  用Mocha构建测试
+  运行摩卡的测试套件和测试用例
+  管理异步测试代码的同步

## 使用Javascript Selenium API与MochaJS集成

+  Selenium介绍
+  Selenium安装
+  Webdriver构建
+  将MochaJS与Selenium Webdriver集成


## Mocha测试构建

### Mocha介绍

>  Mocha是一个在NodeJS上运行测试的Javascript测试框架。

### Mocha安装

推荐全局安装

`npm install -g mocha`

### 安装Chai声明模块

`npm install --save chai`

### 测试套件和测试用例结构

>  在Mocha中，测试套件由接受回调函数的'describe'关键字定义，测试用例由“it”函数表示，它接受回调函数并包含测试代码

>  Mocha支持测试套件设置和测试用例设置功能。测试套件设置用'before'表示，而测试用例设置用'beforeEach'。“beforeEach”实际上是套件中每个案例的常见设置，并将在每个案例之前执行。

>  Mocha支持测试套件和测试用例拆卸功能。一个测试套件的拆卸用'after'表示，而测试用例拆卸用'afterEach'功能实现，分别在一个测试套件之后和每个测试用例之后执行。

`
	describe("Inner Suite 1", function(){
  
    before(function(){
        
        // do something before test suite execution
        // no matter if there are failed cases
    
    });
 
    after(function(){
 
        // do something after test suite execution is finished
        // no matter if there are failed cases
 
    });
    
    beforeEach(function(){
        
        // do something before test case execution
        // no matter if there are failed cases
    
    });
 
    afterEach(function(){
 
        // do something after test case execution is finished
        // no matter if there are failed cases
 
    });
  
    it("Test-1", function(){
        
        // test Code
        // assertions
 
    });
 
    it("Test-2", function(){
 
        // test Code
        // assertions
        
    });
 
    it("Test-3", function(){
 
        // test Code
        // assertions
 
    });
  
	});
`

### 运行摩卡测试套件和测试用例

>  摩卡支持以三种方式执行测试：完整测试套件文件，通过“grep”模式过滤的测试以及在目录树中测试grep过滤（递归选项）

1.  运行整个测试套件文件

`mocha test.js`

2.  从特定的套件文件运行特定的套件或测试

`mocha -g “Test-2” test.js`

3.  通过在目录树中递归搜索来运行特定的套件或测试文件。

`mocha --recursive -g “Test-2” /directory/`

对于广泛的CLI使用选项

`mocha –-help`


### 管理异步测试代码的同步

>   如果要在测试用例中使用异步代码（例如http请求，文件，selenium等），请遵循以下准则

a).  ‘done’ Function

>  在你的测试函数（“it”）中，你需要在回调链中传递'done'函数，这样可以确保在最后一步之后执行

b).  Return Promise

>  返回一个promise是确保Mocha在使用异步函数时执行所有代码行的另一种方法（在这种情况下不需要“done”函数）


## 使用Javascript Selenium API与MochaJS集成

### Selenium介绍

>  Selenium是一个控制Web浏览器并模拟用户行为的库。更具体地说，Selenium为用户提供了称为“绑定”的特定语言库API。这些“绑定”作为客户端来执行对中间组件的请求，并作为服务器来最终控制浏览器。

### Selenium安装

>  基于NodeJS的Selenium实现。为了使用Javascript的Selenium API，需要安装selenium-webdriver

`npm install selenium-webdriver`

>  在nodejs中，通过以下方式使用

`require('selenium-webdriver')`

### Webdriver构建

>  为了能够使用Selenium，我们应该构建适当的'webdriver'对象，然后控制我们的浏览器。下面，我们可以看到我们如何使用“Builder”模式通过链接几个函数来构建一个web驱动程序对象

#### Builder with Options
`
	var webdriver = require('selenium-webdriver')
	var chrome = require('selenium-webdriver/chrome'),
	var firefox = require('selenium-webdriver/firefox');
	 
	var driver = new webdriver.Builder()
	    .forBrowser(‘firefox’)
	    .setFirefoxOptions( /* … */)
	    .setChromeOptions( /* … */)
	    .build();
`

#### Builder with Capabilities
`
	var driver = new webdriver.Builder().
    .withCapabilities( { ‘browserName’ : ‘firefox’ } )
    .build();
`

#### Selenium Webdriver Control Flow and Promise Management

> 由于Javascript和NodeJS基于异步原则，Selenium Webdriver的行为方式类似。为了避免回调金字塔，并协助测试工程师的脚本经验，以及代码的可读性和可维护性，Selenium Webdriver对象包含一个使用“ControlFlow”的promise管理器。 “ControlFlow”是一个负责顺序执行异步webdriver命令的类。

> 实际上，每个命令都在“driver”对象上执行，并返回一个promise。下一个命令不需要嵌套在“thens”中，除非需要处理promise解析值，如下所示

`
	driver.get("http://www.google.com");
	driver.getTitle().then(function( title ) {
	 
	    // google page title should be printed 
	    console.log(title)
	 
	});
	 
	driver.quit();
`

### 将MochaJS与Selenium Webdriver集成

> 一般来说，selenium webdriver可以与MochaJS集成，因为它被用在任何普通的NodeJS脚本中。 但是，由于Mocha在调用“done（）”或返回promise之前不知道异步函数何时完成，所以我们必须非常小心地处理。

#### Promise Based

> Selenium命令自动注册，以确保顺序和正确的顺序执行webdriver命令一个承诺应返回。



## Run

>  安装项目需要的依赖

`npm i`

>  启动本地服务

`node server/server.js`

>  执行测试

`mocha ./testacript/actionSequence.js`



























