# 安装


全局安装npm：

`npm install --global mocha`

作为项目的开发依赖项：

`npm install --save-dev mocha`
 
>  摩卡也可以通过Bower（bower install mocha）安装，并可在cdnjs上使用。


# 入门

`npm install mocha`

添加文件test.js
`
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});
`

执行 mocha test.js


# 断言

摩卡允许你使用任何你想要的断言库。在上面的例子中，我们使用了Node.js的内置断言模块 但是一般来说，如果抛出一个Error，它就会工作！这意味着你可以使用库如：

should.js - 在这些文档中显示的BDD风格

expect.js - expect()风格的断言

chai - expect()，assert()和should式的断言

better-assert - C风格的自我记录assert()

unexpected - “可扩展的BDD断言工具包”

注：关于断言的理解参照：https://segmentfault.com/a/1190000010903897


# 异步代码
# 同步码
# 箭头功能
# 钩
# 等待测试
# 独家测试
# 包容性测试
# 重试测试
# 动态生成测试
# 超时
# 的diff
# 用法

Usage: mocha [debug] [options] [files]


  Options:

    -V, --version                           output the version number
    -A, --async-only                        force all tests to take a callback (async) or return a promise
    -c, --colors                            force enabling of colors
    -C, --no-colors                         force disabling of colors
    -G, --growl                             enable growl notification support
    -O, --reporter-options <k=v,k2=v2,...>  reporter-specific options
    -R, --reporter <name>                   specify the reporter to use
    -S, --sort                              sort test files
    -b, --bail                              bail after first test failure
    -d, --debug                             enable node's debugger, synonym for node --debug
    -g, --grep <pattern>                    only run tests matching <pattern>
    -f, --fgrep <string>                    only run tests containing <string>
    -gc, --expose-gc                        expose gc extension
    -i, --invert                            inverts --grep and --fgrep matches
    -r, --require <name>                    require the given module
    -s, --slow <ms>                         "slow" test threshold in milliseconds [75]
    -t, --timeout <ms>                      set test-case timeout in milliseconds [2000]
    -u, --ui <name>                         specify user-interface (bdd|tdd|qunit|exports)
    -w, --watch                             watch files for changes
    --check-leaks                           check for global variable leaks
    --full-trace                            display the full stack trace
    --compilers <ext>:<module>,...          use the given module(s) to compile files
    --debug-brk                             enable node's debugger breaking on the first line
    --globals <names>                       allow the given comma-delimited global [names]
    --es_staging                            enable all staged features
    --harmony<_classes,_generators,...>     all node --harmony* flags are available
    --preserve-symlinks                     Instructs the module loader to preserve symbolic links when resolving and caching modules
    --icu-data-dir                          include ICU data
    --inline-diffs                          display actual/expected differences inline within each string
    --inspect                               activate devtools in chrome
    --inspect-brk                           activate devtools in chrome and break on the first line
    --interfaces                            display available interfaces
    --no-deprecation                        silence deprecation warnings
    --exit                                  force shutdown of the event loop after test run: mocha will call process.exit
    --no-timeouts                           disables timeouts, given implicitly with --debug
    --no-warnings                           silence all node process warnings
    --opts <path>                           specify opts path
    --perf-basic-prof                       enable perf linux profiler (basic support)
    --napi-modules                          enable experimental NAPI modules
    --prof                                  log statistical profiling information
    --log-timer-events                      Time events including external callbacks
    --recursive                             include sub directories
    --reporters                             display available reporters
    --retries <times>                       set numbers of time to retry a failed test case
    --throw-deprecation                     throw an exception anytime a deprecated function is used
    --trace                                 trace function calls
    --trace-deprecation                     show stack traces on deprecations
    --trace-warnings                        show stack traces on node process warnings
    --use_strict                            enforce strict mode
    --watch-extensions <ext>,...            additional extensions to monitor with --watch
    --delay                                 wait for async suite definition
    --allow-uncaught                        enable uncaught errors to propagate
    --forbid-only                           causes test marked with only to fail the suite
    --forbid-pending                        causes pending tests and test marked with skip to fail the suite
    -h, --help                              output usage information

# 接口
# 记者
# 在浏览器中运行摩卡
# mocha.opts
# 该test/目录
# 编辑插件
# 例子
# 测试摩卡
# 更多信息