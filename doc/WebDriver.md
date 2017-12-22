# Class WebDriver

	每个WebDriver实例都提供对浏览器会话的自动控制。

## Instance Methods

+  actions()

>  描述：使用这个驱动程序创建一个新的动作序列。序列将不会被调度执行，直到actions.ActionSequence＃perform被调用

>  例子：`driver.actions().mouseDown(element1).mouseMove(element2).mouseUp().perform();`

>  返回：此实例的新操作序列


+  call( fn, opt_scope, ...var_args )

>  描述：计划执行自定义函数的命令

>  参数：fn	function(...?): (T|IThenable<(T|null)>|null)  要执行的功能
>       opt_scope (Object|null|undefined)  在其范围内执行该功能的对象
>       var_args  任何传递给函数的参数


>  返回：function执行结果的一个promise


+  close() 

>  描述：计划关闭当前窗口的命令。


+  controlFlow()

>  返回：此实例使用的控制流


+  findElement( locator ) 

>  描述：调用一个命令来查找页面上的某个元素。如果元素不能被发现，一个bot.errorcode.no_such_element结果将由驱动程序返回。与其他命令不同，此错误不能被抑制。换句话说，调度一个命令来查找一个元素，这是断言该元素存在于页面上的双重断言。测试一个元素是否存在于页面，使用# findelements：

>  参数：locator	(By|Function)  要使用的定位器

>  返回：一个WebElement，可以用来对位于的元素发出命令。如果找不到该元素，该元素将失效，所有预定的命令将中止


+  findElements( locator )

>  描述：调用一个命令来搜索页面上的多个元素

>  参数：locator	(By|Function)   要使用的定位器

>  返回：一个promise对象，包含WebElements数组


+  get( url ) 

>  描述：调用命令导航到给定的URL

>  参数：url (string) 一个url地址

>  返回：文档加载完成后返回一个promise对象


















