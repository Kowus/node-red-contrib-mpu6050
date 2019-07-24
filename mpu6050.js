module.exports = function(RED) {
  function MPU6050(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    var Raspi = require('raspi-io').RaspiIO;
    var five = require('johnny-five');
    var board = new five.Board({
      io: new Raspi()
    });

    board.on('ready', function() {
      var imu = new five.IMU({
        controller: 'MPU6050'
      });
      imu.on('change', function(payload) {
        node.send(payload);
      });
    });
  }
  RED.nodes.registerType('mpu6050', MPU6050);
};
