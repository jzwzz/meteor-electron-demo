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
    'click #copySD' : (event, instance) =>{
    	console.log('copySD....');
    	Meteor.call('copySD', function (error, result) {
          console.log('copySD.....', result);
          instance.counter.set(instance.counter.get() + result);
     });
  	},
  	'click #update' : (event, instance) =>{
    	console.log('update....');
    	Meteor.call('update', function (error, result) {
          console.log('update.....', result);
          instance.counter.set(instance.counter.get() + result);
     });
  	},
  	'click #formateSD' : (event, instance) =>{
    	console.log('formateSD....');
    	Meteor.call('formateSD', function (error, result) {
          console.log('formateSD.....', result);
          instance.counter.set(instance.counter.get() + result);
     });
  	},
  	'click #setInformation' : (event, instance) =>{
    	console.log('setInformation....');
    	Meteor.call('setInformation', function (error, result) {
          console.log('setInformation.....', result);
          instance.counter.set(instance.counter.get() + result);
     });
  	},
  });
}
