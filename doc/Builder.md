# Class Builder

> 创建新的WebDriver实例。下面列出的环境变量可以用来覆盖构建器的配置，允许快速的运行时更改

+  SELENIUM_BROWSER  
>  在窗体浏览器[：version] [：platform]中定义目标浏览器。

+  SELENIUM_REMOTE_URL
>  定义所有构建器实例的远程URL。此环境变量应设置为WebDriver服务器的完全限定URL（例如，http://localhost:4444/wd/ hub）。该选项总是优先于SELENIUM_SERVER_JAR

+  SELENIUM_SERVER_JAR
>  定义要使用的独立Selenium服务器jar的路径。服务器将在第一次启动WebDriver实例并在进程退出时被终止。


>  假设你有创建WebDriver的mytest.js
>  var driver = new webdriver.Builder()
>       .forBrowser('chrome')
>       .build();


## Instance Methods

+  build() 

>  描述：根据此构建器的当前配置创建一个新的WebDriver客户端
>  返回：一个新的WebDriver实例


+  disableEnvironmentOverrides()

>  描述：将此构建器配置为忽略任何环境变量覆盖，并仅使用通过此实例的API指定的配置


+  forBrowser( name, opt_version, opt_platform )

>  描述：为此实例创建的客户端配置目标浏览器。在此功能之后，任何对#withCapabilities的调用都将覆盖这些设置。

>  参数：name 目标浏览器的名称; webdriver.Browser枚举提供了常见的默认值。
>       opt_version 期望的版本;如果应该使用任何版本，可以省略。
>       opt_platform 期望的平台;如果可能使用任何版本，则可以省略。


+  getCapabilities()

>  描述：返回此实例当前配置使用的基本能力集


+  getFirefoxOptions()

>  返回 当前为此实例配置的Firefox特定选项。


+  getHttpAgent() 

>  返回 用于每个请求的http代理


+  getSafariOptions() 

>  返回 当前为此实例配置的Safari特定选项


+  getServerUrl() 

>  返回 此实例配置为使用的WebDriver服务器的URL


+  getWebDriverProxy() 

>  返回 用于WebDriver的HTTP连接的代理服务器的URL，如果未设置，则为null


+  setAlertBehavior( behavior )

>  描述：在返回错误之前，设置带有意外警报的默认操作。

>  参数：behavior （string）期望的行为;应该是“accept”，“dismiss”或“ignore”。默认为“dismiss”。


+  setChromeOptions( options ) 

>  描述：为由此构建器创建的驱动程序设置Chrome特定的选项。在给定选项上定义的任何日志记录或代理设置将分别优先于通过#setLoggingPrefs和#setProxy设置的日志或代理设置

>  参数：options (Options) ChromeDriver选项使用 使用详情见Chrome/option


+  setControlFlow( flow ) 

>  描述：设置驱动程序应该执行的操作的控制流程。如果流程从未设置或设置为null，则将在调用#build（）时使用主动流程

>  参数：flow 	(ControlFlow|null) 要使用的控制流程，或者为null 使用详情见promise/ControlFlow


+  setEdgeOptions( options ) 

>  描述：为由此构建器创建的驱动程序设置特定于Microsoft Edge浏览器的选项。在给定选项上定义的任何代理设置将优先于通过#setProxy设置的代理设置

>  参数：options (Options) 要使用的MicrosoftEdgeDriver选项


+  setEnableNativeEvents( enabled ) 

>  描述：设置是否应使用本地事件。

>  参数：enabled （boolean） 是否启用本地事件。


+  setFirefoxOptions( options ) 

>  描述：为由此构建器创建的驱动程序设置Firefox特定的选项。在给定选项上定义的任何日志记录或代理设置将分别优先于通过#setLoggingPrefs和#setProxy设置的日志或代理设置。

>  参数：options (Options)  要使用的FirefoxDriver选项。



+  setIeOptions( options ) 

>  描述：为由此构建器创建的驱动程序设置Internet Explorer特定的选项。在给定选项上定义的任何代理设置将优先于通过#setProxy设置的代理设置。

>  参数：options (Options) 要使用的IE驱动程序选项。


+  setLoggingPrefs( prefs )

>  描述：为创建的会话设置日志记录首选项。可以通过重复调用或通过调用#withCapabilities来改变首选项。

>  参数：prefs (Preferences|Object<string, string>) 所需的日志首选项


+  setOperaOptions( options ) 

>  描述：为由此构建器创建的驱动程序设置Opera特定的选项。在给定选项上定义的任何日志记录或代理设置将分别优先于通过#setLoggingPrefs和#setProxy设置的日志或代理设置

>  参数：options (Options) OperaDriver选项使用。


+  setProxy( config )

>  描述：设置目标浏览器的代理配置。在此功能之后，任何对#withCapabilities的调用都将覆盖这些设置。

>  参数：config (ProxyConfig) 要使用的配置 详情参见 ProxyConfig


+  setSafariOptions( options )

>  描述：为由此构建器创建的驱动程序设置Safari特定的选项。在给定选项上定义的任何日志记录设置将优先于通过#setLoggingPrefs设置的日志设置

>  参数：(Options) 要使用的Safari选项。


+  setScrollBehavior( behavior )

>  描述：设置如何将元素滚动到视图中进行交互

>  参数：behavior (number) 所需的滚动行为：0与视口的顶部对齐，1与底部对齐


+  usingHttpAgent( agent ) 

>  描述：设置每个请求使用的http代理。如果这个方法没有被调用，Builder默认使用http.globalAgent

>  参数：agent (http.Agent|null) 用于每个请求的代理。


+  usingServer( url )

>  描述：设置要使用的远程WebDriver服务器的URL。一旦指定了远程URL，构建器就会将所有新客户端指向该服务器。如果此方法从未被调用，则Builder将尝试在本地创建所有客户端。

>  作为此方法的替代方法，您还可以设置SELENIUM_REMOTE_URL环境变量。

>  参数：url （string）要使用的远程服务器的URL


+  usingWebDriverProxy( proxy )

>  描述：设置用于WebDriver的HTTP连接的代理的URL。如果这个方法从未被调用过，那么Builder将会创建一个没有代理的连接

>  参数：proxy （string） 要使用的代理的URL


+  withCapabilities( capabilities )

>  描述：请求新会话时设置所需的功能。这将覆盖任何以前设置的功能

>  参数：capabilities (Object|Capabilities) 新会话的所需功能

























