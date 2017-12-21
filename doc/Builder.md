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

>  参数：behavior 期望的行为;应该是“接受”，“拒绝受理”或“忽略”。默认为“拒绝受理”。


+  setChromeOptions( options ) 

>  描述：为由此构建器创建的驱动程序设置Chrome特定的选项。在给定选项上定义的任何日志记录或代理设置将分别优先于通过#setLoggingPrefs和#setProxy设置的日志或代理设置

>  参数：options ChromeDriver选项使用 使用详情见Chrome/option


+  setControlFlow( flow ) 

>  描述：设置驱动程序应该执行的操作的控制流程。如果流程从未设置或设置为null，则将在调用#build（）时使用主动流程

>  参数：flow 要使用的控制流程，或者为null 使用详情见promise/ControlFlow


+  setEdgeOptions( options ) 

>  描述：为由此构建器创建的驱动程序设置特定于Microsoft Edge浏览器的选项。在给定选项上定义的任何代理设置将优先于通过#setProxy设置的代理设置

>  参数：要使用的MicrosoftEdgeDriver选项


+  setEnableNativeEvents( enabled ) 

>  描述：设置是否应使用本地事件。

>  参数：enabled 是否启用本地事件。


+  setFirefoxOptions( options ) 

>  描述：为由此构建器创建的驱动程序设置Firefox特定的选项。在给定选项上定义的任何日志记录或代理设置将分别优先于通过#setLoggingPrefs和#setProxy设置的日志或代理设置。

>  参数：options 要使用的FirefoxDriver选项。



+  setIeOptions( options ) 

>  描述：为由此构建器创建的驱动程序设置Internet Explorer特定的选项。在给定选项上定义的任何代理设置将优先于通过#setProxy设置的代理设置。

>  参数：要使用的IE驱动程序选项。


+  setLoggingPrefs( prefs )

>  描述：为创建的会话设置日志记录首选项。可以通过重复调用或通过调用#withCapabilities来改变首选项。

>  参数：prefs 所需的日志首选项


+  setOperaOptions( options ) 

>  描述：为由此构建器创建的驱动程序设置Opera特定的选项。在给定选项上定义的任何日志记录或代理设置将分别优先于通过#setLoggingPrefs和#setProxy设置的日志或代理设置

>  参数：OperaDriver选项使用。


+  setProxy( config )

>  描述：设置目标浏览器的代理配置。在此功能之后，任何对#withCapabilities的调用都将覆盖这些设置。

>  参数：要使用的配置 详情参见 ProxyConfig

























