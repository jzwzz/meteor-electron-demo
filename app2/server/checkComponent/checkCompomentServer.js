import { Meteor } from 'meteor/meteor'


var shell = require('shelljs')

var Promise = process.env.USE_GLOBAL_PROMISE
  ? global.Promise
  : require("promise/lib/es6-extensions");


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
				var result2 = '2';
        // var x = Meteor.wrapAsync(function(error, result){
          var ssh2Client = require('ssh2').Client;
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
                        result2 = data;

                        console.log('11111');

                        // conn.end();
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

        // });
        // x();
        console.log('22222');
        return '12' + result2;
        // return 'uptime result';
    },
//    copySD : function () {
//      var result = shell.exec('sh /home/zz/Desktop/meteor-electron-demo/app2/private/local/10.sh', {silent:true}).stdout;
                                    ///home/zz/Desktop/meteor-electron-demo/app2/.meteor/local/build/programs/private/local/
//      console.log("copySD Done", result);
//      return "copySD Done" + ',' + result;
//     },
     copySD: function () {
       console.log('begin copySD.....');
       var path=require('path');
       var path=process.cwd().slice(0,-36)+'/private/local/';
       //console.log(path);
       var result = shell.exec('sh '+path+'10.sh', {silent:true}).stdout;
       console.log("copySD Done", result);
       return "copySD Done" + ',' + result;
     },
	 update : function () {
      var path=require('path');
      var path=process.cwd().slice(0,-36)+'/private/local/';
      //console.log(path);
//    var result = shell.exec('sh '+path+'20.sh', {silent:true}).stdout;
//    console.log("update Done", result);
//    return "update Done" + ',' + result;
     },
    formateSD : function () {
      var result = shell.exec('sh', {silent:true}).stdout;
      console.log("formateSD Done", result);
      return "formateSD Done" + ',' + result;
     },
     installProgram : function () {
     var result = shell.exec('sh '+path+'20.sh', {silent:true}).stdout;
      console.log("installProgram Done", result);
      return "installProgram" + ',' + result;
     },
     setInformation : function (data) {
     check(data,String);
      console.log(data);
      var result = shell.exec('sh', {silent:true}).stdout;
      console.log("setInformation Done");
      return "setInformation Done";
     }
  });
}
