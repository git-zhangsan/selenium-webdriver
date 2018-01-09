# Class Chrome Options

用于管理ChromeDriver特定选项的类

## Instance Methods

+  addArguments( ...var_args ) 

>  描述：添加其他命令行参数以在启动Chrome浏览器时使用。每个参数可以用或不用“ - ”前缀（例如“-foo”和“foo”）来指定。带有相关值的参数应该用“=”分隔：“foo = bar”。

>  参数：var_args (string|Array<string>) 要添加的参数。


+  addExtensions( ...var_args )

>  描述：添加其他扩展程序以在启动Chrome时进行安装。应将每个扩展指定为打包的CRX文件的路径，或指定扩展的缓冲区

>  参数：var_args (string|Array<string>) 要添加的参数。


+  androidActivity( name ) 

>  描述：设置托管基于Chrome的Android WebView的活动的名称。该选项必须设置为连接到Android WebView

>  参数：name （string）活动名称。


+  androidChrome()

>  描述：配置ChromeDriver通过adb在Android上启动Chrome。这个函数是options.androidPackage（'com.android.chrome'）的缩写


+  androidDeviceSerial( serial )

>  描述：设置通过ADB连接的设备序列号。如果没有指定，ChromeDriver会随机选择一个未使用的设备。如果所有设备已经有活动会话，则会返回错误

>  参数：serial	（string）	要连接的设备序列号。


+  androidPackage( pkg ) 

>  描述：设置Chrome或WebView应用的软件包名称

>  参数：pkg	(string|null)  要连接的包，或者为null，以禁用Android并切换回使用桌面版Chrome。


+  androidProcess( processName )

>  描述：设置托管WebView的Activity的进程名称（由ps给出）。如果未指定，则假定进程名称与#androidPackage相同。

>  参数：processName	（string） 主要的活动名称


+  androidUseRunningApp( useRunning )

>  描述：设置是否连接到已经运行的应用程序而不是指定的应用程序，而不是使用干净的数据目录启动应用程序。

>  参数：useRunning	boolean 是否连接到正在运行的实例


+  detachDriver( detach )

>  描述：设置在webdriver.WebDriver＃quit（）被调用之前，如果控制的ChromeDriver服务被终止，是否让启动的Chrome浏览器运行

>  参数：detach	boolean 如果在会话之前终止了chromedriver服务，是否让浏览器继续运行。


+  excludeSwitches( ...var_args ) 

>  描述：Chrome浏览器命令行开关列表，用于在启动Chrome时默认排除ChromeDriver。不要用“ - ”开头。

>  参数：var_args	...(string|Array<string>)  要排除的开关。


+  setChromeBinaryPath( path )

>  描述：设置要使用的Chrome二进制文件的路径。在Mac OS X上，此路径应该引用实际的Chrome可执行文件，而不仅仅是应用程序二进制文件（例如“/ Applications / Google Chrome.app/Contents/MacOS/Google Chrome”）。	

>  参数： path	string  Chrome二进制文件的使用路径


+  setChromeLogFile( path )

>  描述:设置Chrome日志文件的路径。这个路径应该会在启动Chrome的机器上存在

>  参数：path string 要使用的日志文件的路径


+  setChromeMinidumpPath( path )

>  描述：设置存储Chrome微转储的目录。只有在Linux上运行ChromeDriver时才支持该选项。

>  参数：path	string  目录路径。


+  setLocalState( state )

>  描述：在Chrome的用户数据目录中设置“本地状态”文件的首选项。

>  参数：state	Object


+  setLoggingPrefs( prefs )

>  描述：设置新会话的日志记录首选项。

>  参数：prefs	Preferences 日志记录首选项。


+  setMobileEmulation( config ) 

>  描述：配置Chrome以模拟移动设备。有关更多信息，请参阅移动仿真中的ChromeDriver项目页面。配置选项包括：

	deviceName: 预配置的仿真设备的名称
	width: 屏幕宽度，以像素为单位
	height: 屏幕高度，以像素为单位
	pixelRatio: 屏幕像素比例

>  示例1

`let options = new chrome.Options().setMobileEmulation(
     {deviceName: 'Google Nexus 5'});
 let driver = chrome.Driver.createSession(options);`

>  示例2
`let options = new chrome.Options().setMobileEmulation({
     width: 360,
     height: 640,
     pixelRatio: 3.0
 });
 let driver = chrome.Driver.createSession(options);`


>  参数：config	({deviceName: string}|{height: number, pixelRatio: number, width: number}|null)  移动仿真配置，或者为null来禁用。


+  setPerfLoggingPrefs( prefs ) 

>  设置性能日志记录首选项。选项包括

	enableNetwork: 是否收集来自网络域的事件
	enablePage: 是否从Page域收集事件
	enableTimeline: 是否从时间轴域收集事件。注意：启用跟踪时，时间轴域被隐式禁用，除非enableTimeline被明确设置为true。
	tracingCategories: 应该收集跟踪事件的Chrome跟踪类别的逗号分隔字符串。 未指定或空字符串将禁用跟踪。
	bufferUsageReportingInterval: DevTools跟踪缓冲区使用事件之间所请求的毫秒数。 例如，如果1000，那么每秒一次，DevTools将报告跟踪缓冲区有多满。 如果报告显示缓冲区使用率为100％，则会发出警告。



































