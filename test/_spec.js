var should = require('should');
var helper = require('node-red-test-helper');
var imuNode = require('../mpu6050');

describe('MPU6050 Node', function() {
  afterEach(function() {
    helper.unload();
  });
  it('should be loaded', function(done) {
    var flow = [{ id: 'n1', type: 'mpu6050', name: 'mpu6050' }];
    helper.load(imuNode, flow, function() {
      var n1 = helper.getNode('n1');
      n1.should.have.property('name', 'mpu6050');
      done();
    });
  });
});
