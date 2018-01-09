/*
* @Author: zhanghuiming
* @Date:   2017-12-24 22:25:16
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-24 22:35:57
*/
//  Uncomment if using Node
var chai = require('chai');
var assert = chai.assert;

describe('Array', function() {
  it('should start empty', function() {
    var arr = [];

    assert.equal(arr.length, 0);
  });
});