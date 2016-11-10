import setupBrowserPolicy from './config/security.js';
import loadFixtures from './loaders/fixtures.js';
import loadUsers from './loaders/users.js';
import checkCompomentServer from './checkComponent/checkCompomentServer.js';


setupBrowserPolicy(BrowserPolicy);

checkCompomentServer();

Meteor.startup(() => {
  loadUsers();
  //loadFixtures([{ foo: 'bar' }], myCollection);


});
