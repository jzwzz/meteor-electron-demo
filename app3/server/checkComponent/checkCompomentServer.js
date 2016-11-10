import { Meteor } from 'meteor/meteor'

export default function () {

  Meteor.methods({
    foo: function (arg1, arg2, arg3) {
      check(arg1, String);
      check(arg2, Number);
      check(arg3, [Number]);


      return "some return value";
    },
    bar: function () {

      return "baz";
    }
  });
}
