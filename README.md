# selenium-webdriver

# Class TouchSequence

用于定义用户触摸交互序列的类。在调用#perform之前，每个序列都不会被执行。 这个类不应该直接实例化。相反，使用WebDriver.touchActions（）获取一个实例。 示例用法

> driver.touchActions().
>      tapAndHold({x: 0, y: 0}).
>      move({x: 3, y: 4}).
>      release({x: 10, y: 10}).
>      perform();

## Instance Methods

	+ doubleTap( elem ) 

	> 描述：双击一个元素。

	> 参数: elem 要双击的元素


	+ flick( speed )

	> 描述：在屏幕上的任意位置以速度xspeed和yspeed轻弹。

	> 参数：speed	{xspeed: number, yspeed: number} 每个方向的速度，以像素/秒为单位。


	+ flickElement( elem, offset, speed ) 

	> 描述：从elem开始，以指定的速度移动x和y。

	> 参数：elem 轻弹开始的元素 offset {x: number, y: number}  speed 要弹开的偏移量 以每秒像素为单位的速度。


	+ longPress( elem )

	> 描述：长按一个元素。

	> 参数：elem 长按元素对象


	+ move( location )

	> 描述：将持有的触摸移到指定的位置

	> 参数：location {x: number, y: number} 移动到的位置


	+ perform()

	> 描述：执行这个动作序列


	+ release( location ) 

	> 描述：在指定位置释放保持的触摸。
	
	> 参数：location	{x: number, y: number} 要发布的位置


	+ scroll( offset )

	> 描述：按给定的偏移量滚动触摸屏

	> 参数：offset	{x: number, y: number} 要滚动到的偏移量


	+ scrollFromElement( elem, offset )

	> 描述：滚动触摸屏，从elem开始，移动指定的偏移量。

	> 参数：elem 滚动开始的元素。 offset	{x: number, y: number} 要滚动到的偏移量


	+ tap( elem ) 

	> 描述：点击一个元素

	> 参数：elem 要点击的元素。


	+ tapAndHold( location )

	> 描述：在给定的位置触摸。

	> 参数：location	{x: number, y: number} 要触及的位置























