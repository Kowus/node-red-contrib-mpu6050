var five = require('johnny-five');
var board = new five.Board();
module.exports = function(RED) {
  function MPU6050(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    board.on('ready', function() {
      var imu = new five.IMU({
        controller: 'MPU6050'
      });
      imu.on('change', function() {
        var payload = this;
        node.send(payload);
      });
    });
  }
  RED.nodes.registerType('mpu6050', MPU6050);
};
