/*
* @Author: zhanghuiming
* @Date:   2017-12-22 10:34:53
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-26 14:28:53
*/

let chai = require('chai'),
    expect = require('chai').expect;
var fetch = require('node-fetch');

describe("Inner Suite 1", function(){
  
    before(function(){
        
        // do something before test suite execution
        // no matter if there are failed cases
    
    });
 
    after(function(){
 
        // do something after test suite execution is finished
        // no matter if there are failed cases
 
    });
    
    beforeEach(function(){
        
        // do something before test case execution
        // no matter if there are failed cases
    
    });
 
    afterEach(function(){
 
        // do something after test case execution is finished
        // no matter if there are failed cases
 
    });
  
    it("Test-1", function(){
        
        // test Code
        // assertions
        setTimeout(function(){
        
        console.log("timeout!");
 
		  // mocha will wait for done to be called before exiting function.
		        done();     
		    }, 3000);
 
    });
 
    it("Test-2", function(){
 
       return fetch('https://api.github.com')
    .then(function(res) {
      return res.json();
    }).then(function(json) {
      expect(json).to.be.an('object');
    });
     	
	    
        
    });
 
    it("Test-3", function(){
 
        // test Code
        // assertions
 
    });
  
});