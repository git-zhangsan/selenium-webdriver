/*
* @Author: zhanghuiming
* @Date:   2017-12-25 17:13:07
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-25 17:13:58
*/
import add from '../src/add.js';
import chai from 'chai';

let expect = chai.expect;

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});