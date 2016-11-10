import { Meteor } from 'meteor/meteor'
var shell = require('shelljs')

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
    }
  });
}
