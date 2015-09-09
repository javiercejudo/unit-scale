/*jshint node:true, mocha:true */

'use strict';

require('should');

var unitScale = require('../src/index');

describe('unit scale', function() {
  it('should be an array', function() {
    ({}.toString.call(unitScale)).should.equal('[object Array]');
  });

  it('should have two elements', function() {
    unitScale.length.should.be.exactly(2);
  });

  it('should have 0 as the first element', function() {
    unitScale[0].should.be.exactly(0);
  });

  it('should have 1 as the second element', function() {
    unitScale[1].should.be.exactly(1);
  });
});
