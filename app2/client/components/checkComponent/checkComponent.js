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
    	event.preventDefault();
    	console.log('copySD....');
    	Meteor.call('copySD', function (error, result) {
          console.log('copySD.....'+result);
          instance.counter.set(instance.counter.get() + result);
     });
  	},
  	'click #update' : (event, instance) =>{
  		event.preventDefault();
    	console.log('update....');
    	Meteor.call('update', function (error, result) {
          console.log('update.....', result);
          instance.counter.set(instance.counter.get() + result);
     });
  	},
  	'click #formateSD' : (event, instance) =>{
  	    event.preventDefault();
    	console.log('formateSD....');
    	Meteor.call('formateSD', function (error, result) {
          console.log('formateSD.....', result);
          instance.counter.set(instance.counter.get() + result);
     });
  	},
  	'click #installProgram' : (event, instance) =>{
    	event.preventDefault();
    	console.log('installProgram....');
    	Meteor.call('installProgram', function (error, result) {
          console.log('installProgram.....', result);
          instance.counter.set(instance.counter.get() + result);
     });
  	},
  	'click #setInformation' : (event, instance) =>{
  	    event.preventDefault();
    	console.log('setInformation....');
    	var data = $('#chargeconnectorId').val();
    	console.log(data);
    	Meteor.call('setInformation',data, function (error, result) {
          console.log('result is :', result);
          instance.counter.set(instance.counter.get() + result);
     });
  	}
  });
}
