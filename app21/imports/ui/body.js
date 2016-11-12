import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import {Tasks} from '../api/tasks.js';

import './task.js';
import './body.html';

Template.body.onCreated(function bodyOnCreated(){
  this.state = new ReactiveDict();
  Meteor.subscribe("tasks");
});

Template.body.helpers({
  tasks2:[
    {text:'this is task 1'},
    {text:'this is task 2'},
    {text:'this is task 3'},
  ],

  tasks() {
    const instance = Template.instance();
    if(instance.state.get('hideCompolete')){
      return Tasks.find({checked:{$ne: true}}, {sort:{createdAt: -1}})
    }
   return Tasks.find({}, { sort: { createdAt: -1 } });
 },incompoleteCount(){
   return Tasks.find({checked: {$ne:true}}).count();
 }
});


Template.body.events({
  'submit .new-task'(event){
      event.preventDefault();

      const target = event.target;
      const text = target.text.value;

      // Tasks.insert({
      //   text,
      //   createdAt: new Date(),
      // });

      Meteor.call('tasks.insert', text);

      target.text.value = '';
  },
  'change .hide-completed input'(event, instance){
    instance.state.set('hideCompolete', event.target.checked);
  },
});
