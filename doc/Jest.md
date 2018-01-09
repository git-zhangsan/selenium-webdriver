## expect(value)

每次要测试一个值时都会使用expect函数。

假设你有一个方法bestLaCroixFlavor（），它应该返回字符串“grapefruit”，测试用例如下：

>  test('the best flavor is grapefruit', () => {
    expect(bestLaCroixFlavor()).toBe('grapefruit');
>  });
     


## expect.extend(matchers)

可以使用expect.extend将自己的匹配器添加到Jest

假设您正在测试数字理论库，并且您经常断言数字可以被其他数字整除，你可以把它抽象成一个toBeDivisibleBy匹配器：

>  expect.extend({
	  toBeDivisibleBy(received, argument) {
	    const pass = received % argument == 0;
	    if (pass) {
	      return {
	        message: () =>
	          `expected ${received} not to be divisible by ${argument}`,
	        pass: true,
	      };
	    } else {
	      return {
	        message: () => `expected ${received} to be divisible by ${argument}`,
	        pass: false,
	      };
	    }
	  },
    });


	test('even and odd numbers', () => {
	  expect(100).toBeDivisibleBy(2);
	  expect(101).not.toBeDivisibleBy(2);
>   });


## expect.anything()

expect.anything（）匹配null或undefined的任何内容。你可以在里面用toEqual或toBeCalledWith而不是文字值。

假设你想检查一个模拟函数是用非空参数调用的

>  test('map calls its argument with a non-null argument', () => {
	  const mock = jest.fn();
	  [1].map(x => mock(x));
	  expect(mock).toBeCalledWith(expect.anything());
>  });

## expect.any(constructor)

expect.any（构造函数）匹配使用给定构造函数创建的任何东西。你可以在里面用toEqual或toBeCalledWith而不是文字值。


## expect.arrayContaining(array)

expect.arrayContaining（array）匹配收到的数组，其中包含期望数组中的所有元素。也就是说，期望的数组是接收数组的一个子集。

因此，它会匹配包含不在预期数组中的元素的接收数组

你可以使用它来代替文字值：

.  toEqual或toBeCalledWith

.  匹配objectContaining或toMatchObject中的属性


## expect.assertions(number)
## expect.hasAssertions()
## expect.objectContaining(object)
## expect.stringContaining(string)
## expect.stringMatching(regexp)
## expect.addSnapshotSerializer(serializer)
## .not
## .resolves
## .rejects
## .toBe(value)
## .toHaveBeenCalled()
## .toHaveBeenCalledTimes(number)
## .toHaveBeenCalledWith(arg1, arg2, ...)
## .toHaveBeenLastCalledWith(arg1, arg2, ...)
## .toBeCloseTo(number, numDigits)
## .toBeDefined()
## .toBeFalsy()
## .toBeGreaterThan(number)
## .toBeGreaterThanOrEqual(number)
## .toBeLessThan(number)
## .toBeLessThanOrEqual(number)
## .toBeInstanceOf(Class)
## .toBeNull()
## .toBeTruthy()
## .toBeUndefined()
## .toContain(item)
## .toContainEqual(item)
## .toEqual(value)
## .toHaveLength(number)
## .toMatch(regexpOrString)
## .toMatchObject(object)
## .toHaveProperty(keyPath, value)
## .toMatchSnapshot(optionalString)
## .toThrow(error)
## .toThrowErrorMatchingSnapshot()