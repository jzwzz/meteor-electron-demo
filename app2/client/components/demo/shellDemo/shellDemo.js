// TODO: call this in entry file
export default function (Template) {
  Template['shellDemo'].helpers({
  });

  Template['shellDemo'].events({
    'click #btnShellDemo' : (event, instance) => {
        console.log('1');
        // async call
        Meteor.call('shellDemo_hello', function (error, result) {
          console.log('shellDemo_hello async callback result:', result);
        } );

    },
    'click #btnSshCommand' : (event, instance) => {
        console.log('1');
        // async call
        Meteor.call('shellDemo_sshCommand', function (error, result) {
          console.log('shellDemo_sshCommand async callback result:', result);
        } );

    },
  });
}
