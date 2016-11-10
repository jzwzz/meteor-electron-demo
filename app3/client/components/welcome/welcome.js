// TODO: call this in entry file
// import { Template } from 'meteor/templating';
//
// import './welcome.html';

export default function (Template) {
  Template['welcome'].helpers({
    tasks: [
      { text: 'This is task 1' },
      { text: 'This is task 2' },
      { text: 'This is task 3' },
    ],
  });

  Template['welcome'].events({
    'click #abc' : () => {
      console.log('1');
      alert('1');
    }
  });
}
