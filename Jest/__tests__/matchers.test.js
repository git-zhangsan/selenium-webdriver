/*
* @Author: zhanghuiming
* @Date:   2017-12-27 14:58:25
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-28 14:19:36
*/
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

//=====================expect=====================
function bestLaCroixFlavor(){
	return 'grapefruit';
}
test('the best flavor is grapefruit', () => {
  expect(bestLaCroixFlavor()).toBe('grapefruit');
});

//=====================expect.extend=====================

expect.extend({
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
  expect(9).toBeDivisibleBy(3);
  expect(101).not.toBeDivisibleBy(2);
});

//=====================expect.anything=====================
test('map calls its argument with a non-null argument', () => {
  const mock = jest.fn();
  [1,null,undefined,'',false,'thisvalue'].map(x => mock(x));
  expect(mock).toBeCalledWith(expect.anything());
});

//=====================expect.any=====================

function randocall(fn) {
  return fn(Math.floor(Math.random() * 6 + 1));
}

test('randocall calls its callback with a number', () => {
  const mock = jest.fn();
  randocall(mock);
  expect(mock).toBeCalledWith(expect.any(Number));
});

//=====================expect.arrayContaining=====================

describe('arrayContaining', () => {
  const expected = ['Alice', 'Bob'];
  it('matches even if received contains additional elements', () => {
    expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
  });
});


describe('Beware of a misunderstanding! A sequence of dice rolls', () => {
  const expected = [1, 2, 3, 4, 5, 6];
  it('matches even with an unexpected number 7', () => {
    expect([4, 1, 6, 7, 3, 5, 2, 5, 4, 6]).toEqual(
      expect.arrayContaining(expected),
    );
  });
  it('does not match without an expected number 2', () => {
    expect([4, 1, 6, 7, 3, 5, 7, 5, 4, 6]).not.toEqual(
      expect.arrayContaining(expected),
    );
  });
});

//=====================expect.assertions=====================
// test('doAsync calls both callbacks', () => {
//   expect.assertions(2);
//   function callback1(data) {
//     expect(data).toBeTruthy();
//   }
//   function callback2(data) {
//     expect(data).toBeTruthy();
//   }

//   doAsync(callback1, callback2);
// });
// 


//=====================expect.hasAssertions()=====================
// test('prepareState prepares a valid state', () => {
//   expect.hasAssertions();
//   prepareState(state => {
//     expect(validateState(state)).toBeTruthy();
//   });
//   return waitOnState();
// });

//=====================expect.objectContaining(object)=====================
// test('onPress gets called with the right thing', () => {
//   const onPress = jest.fn();
//   simulatePresses(onPress);
//   expect(onPress).toBeCalledWith(
//     expect.objectContaining({
//       x: expect.any(Number),
//       y: expect.any(Number),
//     }),
//   );
// });

//=====================expect.stringMatching(regexp)=====================
describe('stringMatching in arrayContaining', () => {
  const expected = [
    expect.stringMatching(/^Alic/),
    expect.stringMatching(/^[BR]ob/),
  ];
  it('matches even if received contains additional elements', () => {
    expect(['Alicia', 'Roberto', 'Evelina']).toEqual(
      expect.arrayContaining(expected),
    );
  });
  it('does not match if received does not contain expected elements', () => {
    expect(['Roberto', 'Evelina']).not.toEqual(
      expect.arrayContaining(expected),
    );
  });
});

//=====================not=====================
test('the best flavor is not coconut', () => {
  expect(bestLaCroixFlavor()).not.toBe('coconut');
});











