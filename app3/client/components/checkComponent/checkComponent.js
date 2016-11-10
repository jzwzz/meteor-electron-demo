import { Meteor } from 'meteor/meteor'


// TODO: call this in entry file
export default function (Template) {

    Template['checkComponent'].helpers({
      tasks: [
        { text: 'This is task 1' },
        { text: 'This is task 2' },
        { text: 'This is task 3' },
      ],
    });

    Template['checkComponent'].events({
      'click #abc' : () => {
          console.log('1');
          // async call
          Meteor.call('foo', '1', 2,[1,2,3], function (error, result) {
            console.log('foo async callback result:', result);
          } );

          Meteor.call('bar', function (error, result) {
            console.log('bar async callback result:', result);
          } );

          // sync call(目前不能返回结果,不知道为什么)
          var result1 = Meteor.call('foo', '1', 2, [1,2,3]);
          console.log('foo sync result1:' , result1);

          // sync call(目前不能返回结果,不知道为什么)
          var result2 = Meteor.call('bar');
          console.log('bar sync result2:' , result2);

      }
    });
}
