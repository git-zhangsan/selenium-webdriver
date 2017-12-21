# Class ActionSequence

> 用于定义复杂用户交互序列的类。在调用#perform之前，每个序列都不会被执行。这个类不应该直接实例化。相反，使用WebDriver.actions（）获取一个实例

> driver.actions().
>      keyDown(Key.SHIFT).
>      click(element1).
>      click(element2).
>      dragAndDrop(element3, element4).
>      keyUp(Key.SHIFT).
>      perform();

## Instance Methods

+  click( opt_elementOrButton, opt_button ) 

>  描述：点击鼠标按钮。

>  参数: opt_elementOrButton 元素进行交互或按钮点击。如果既没有指定元素也没有指定按钮，则默认为input.Button.LEFT
>        opt_button 要使用的按钮。默认为input.Button.LEFT。如果提供了一个按钮作为第一个参数，则忽略


+  doubleClick( opt_elementOrButton, opt_button  )

>  描述：双击一个鼠标按钮。

>  参数: opt_elementOrButton 元素进行交互或按钮点击。如果既没有指定元素也没有指定按钮，则默认为input.Button.LEFT
>        opt_button 要使用的按钮。默认为input.Button.LEFT。如果提供了一个按钮作为第一个参数，则忽略


+  dragAndDrop( element, location )

>  描述：用于执行“拖放”操作的便利功能。目标元素可以移动到另一个元素的位置，或者通过偏移量（以像素为单位）。

>  参数：element 要拖动的元素 location {x: number, y: number} 要拖动到的位置，或者作为另一个WebElement或像素中的偏移量。


+  keyDown( key ) 

>  描述：执行修改键按下。在调用#keyUp或#sendKeys之前，修饰键不会被释放。主要新闻将针对目前关注的因素。

>  参数：key 要修改的键。必须是{ALT，CONTROL，SHIFT，COMMAND，META}之一


+  keyUp( key )

>  描述：执行修改键释放。该版本针对当前的焦点元素。

>  参数：key 要释放的修改键。必须是{ALT，CONTROL，SHIFT，COMMAND，META}之一。


+  mouseDown( opt_elementOrButton, opt_button )

>  描述：按下鼠标按钮。不管这个调用是按照这个顺序还是以另一个顺序调用，在调用#mouseUp之前，鼠标按钮都不会被释放。乱序事件（例如mouseDown，click）的行为是未定义的。

>  参数：opt_elementOrButton  元素进行交互或按钮点击。如果既没有指定元素也没有指定按钮，则默认为input.Button.LEFT。
>        opt_button 要使用的按钮。默认为input.Button.LEFT。如果提供了一个按钮作为第一个参数，则忽略


+  mouseUp( opt_elementOrButton, opt_button ) 

>  描述：释放一个鼠标按钮。行为未定义调用此函数没有以前调用#mouseDown。 如果提供了一个元素，鼠标将首先移动到该元素的中心。

>  参数：opt_elementOrButton  元素进行交互或按钮点击。如果既没有指定元素也没有指定按钮，则默认为input.Button.LEFT。
>        opt_button 要使用的按钮。默认为input.Button.LEFT。如果提供了一个按钮作为第一个参数，则忽略


+  mouseMove( location, opt_offset )

>  描述：移动鼠标。移动到的位置可以通过鼠标的当前位置，相对于元素左上角的偏移量或元素（在这种情况下元素的中间被使用）来指定

>  参数：location {x: number, y: number}  作为另一个WebElement或像素中的偏移量拖动到的位置。
>       opt_offset {x: number, y: number} 如果目标位置被定义为./webdriver.WebElement，则该参数定义该元素内的偏移量。应该以相对于元素的边界框的左上角的像素来指定偏移量。 如果省略，元素的中心将被用作目标偏移量


+  perform()

>  描述：执行这个动作序列


+  sendKeys( ...var_args )

>  描述：模拟键入多个键。在序列中遇到的每个修饰键在被再次遇到之前不会被释放。所有关键事件都将针对当前关注的元素

>  参数：var_args 键入的内容

