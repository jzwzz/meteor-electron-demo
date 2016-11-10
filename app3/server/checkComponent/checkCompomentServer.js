import { Meteor } from 'meteor/meteor'
var shell = require('shelljs')
var ssh2Client = require('ssh2').Client

export default function () {

  Meteor.methods({
    foo: function (arg1, arg2, arg3) {

      check(arg1, String);
      check(arg2, Number);
      check(arg3, [Number]);

      var version = shell.exec('node --version', {silent:true}).stdout;

      console.log("some return value", version);
      return "some return value" + ',' + version;
    },
    bar: function () {

      var result = shell.exec('ls -l', {silent:true}).stdout;

      return "baz result:" + result;
    },
    uptime: function(){

    var conn = new ssh2Client();
    conn.on('ready', function() {
      console.log('Client :: ready');
      conn.exec('uptime', function(err, stream) {
        if (err) throw err;
        stream.on('close', function(code, signal) {
          console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
          conn.end();
        }).on('data', function(data) {
          console.log('STDOUT: ' + data);
        }).stderr.on('data', function(data) {
          console.log('STDERR: ' + data);
        });
      });
    }).connect({
      host: '47.88.212.130',
      port: 22,
      username: 'root',
      password: 'Rewatt2016'
    });


    }
  });
}
