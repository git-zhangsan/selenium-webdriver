#Class By

介绍在页面上查找元素的机制

## Instance Methods

+  toString()

## Instance Properties

+  using 

+  value

## Static Functions

+  By.className( name ) 

>  描述：找到具有特定类名称的元素

>  参数：name (string) 找到具有特定类名称的元素


+  By.css( selector ) 

>  描述：使用CSS选择器查找元素

>  参数：selector (string) 要使用的CSS选择器。


+  By.id( id ) 

>  描述：通过ID属性查找元素。这个定位器使用CSS选择器* [id =“$ ID”]，而不是document.getElementById

>  参数：id (string) 要搜索的ID。


+  By.js( script, ...var_args ) 

>  描述：通过评估JavaScript表达式来定位元素。该表达式的结果必须是元素或元素列表

>  参数：script (string|Function) 要执行的脚本  var_args  传递给脚本的参数

>  返回：function(WebDriver): Promise 一个新的基于JavaScript的定位器功能


+  By.linkText( text ) 

>  描述：找到其可见文本与给定字符串匹配的链接元素。

>  参数：text (string) 要搜索的链接文本


+  By.name( name ) 

>  描述：查找name属性具有给定值的元素。

>  参数：name (string) 要搜索的名称属性。



+  By.partialLinkText( text ) 

>  描述：找到其可见文本包含给定子字符串的链接元素。

>  参数：text (string) 在链接的可见文本中检查的子字符串


+  By.xpath( xpath )

>  描述：找到匹配XPath选择器的元素。 当使用具有webdriver.WebElement的XPath选择器时，应该小心，因为WebDriver将遵守选择器中指定的上下文。 例如，给定选择器// div，WebDriver将从文档根目录搜索，而不管定位符是否与WebElement一起使用

>  参数：xpath（string） 要使用的XPath选择器。


+  By.tagName( name ) 

>  已弃用

















