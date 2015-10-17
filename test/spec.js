/*jshint node:true, mocha:true */

'use strict';

require('should');

var rescaleUtil = require('rescale-util');
var unitScale = require('../src/index');

describe('unit scale', function() {
  it('should be a scale', function() {
    rescaleUtil.isValidScale(unitScale).should.be.exactly(true);
  });

  it('should have 0 as the first element', function() {
    unitScale[0].should.be.exactly(0);
  });

  it('should have 1 as the second element', function() {
    unitScale[1].should.be.exactly(1);
  });
});
