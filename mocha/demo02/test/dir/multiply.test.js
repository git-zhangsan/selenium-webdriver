/*
* @Author: zhanghuiming
* @Date:   2017-12-25 17:03:19
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-25 17:03:28
*/
var multiply = require('../../src/multiply');
var expect = require('chai').expect;

describe('乘法函数的测试', function() {
  it('1 乘 1 应该等于 1', function() {
    expect(multiply(1, 1)).to.be.equal(1);
  });
})