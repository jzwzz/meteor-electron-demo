import { Meteor } from 'meteor/meteor'

import { ReactiveVar } from 'meteor/reactive-var'


// TODO: call this in entry file
export default function (Template) {


  Template['checkComponent'].onCreated(function checkComponentOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar('2');
  });


  Template['checkComponent'].helpers({

    status:'1',

    counter() {
      return Template.instance().counter.get();
    },
  });

  Template['checkComponent'].events({
    'click #uptimeBtn' : (event, instance) => {
        console.log('1');
        // async call
        Meteor.call('uptime', function (error, result) {
          console.log('uptime async callback result:', result);
          instance.counter.set(instance.counter.get() + result);
        } );


      // var r1 =  Meteor.call('uptime');
      // instance.counter.set(instance.counter.get() + 2);


    },
    'click #plus1' : (event, instance) => {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);

    },
    'click #syncCall' : (event, instance) => {
        // increment the counter when button is clicked
        // instance.counter.set(instance.counter.get() + 1);
        Meteor.call('syncCall', function (error, result) {
          console.log('syncCall async callback result:', result);
          instance.counter.set(instance.counter.get() + result);
        } );
    },
    'click #cpSD' : (event, instance) =>{
    	console.log('copySD....');
    	Meteor.call('doCpSD', function (error, result) {
          console.log('doShell.....', result);
          instance.counter.set(instance.counter.get() + result);
     });
  }
  });
}
