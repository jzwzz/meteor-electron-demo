import { Meteor } from 'meteor/meteor'

var shell = require('shelljs')


export default function () {

  Meteor.methods({
    shellDemo_hello: function () {

      var version = shell.exec('node --version', {silent:true}).stdout;

      console.log("some return value", version);
      return "some return value" + ',' + version;
    },
    shellDemo_sshCommand: function () {

      var version = shell.exec('ssh ', {silent:true}).stdout;

      console.log("some return value", version);
      return "some return value" + ',' + version;
    }
  });
}
