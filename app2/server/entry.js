import setupBrowserPolicy from './config/security.js';
import loadFixtures from './loaders/fixtures.js';
import loadUsers from './loaders/users.js';
import checkCompomentServer from './checkComponent/checkCompomentServer.js';
import shellDemoServer from './demo/shellDemoServer.js';

setupBrowserPolicy(BrowserPolicy);


checkCompomentServer();

shellDemoServer();

Meteor.startup(() => {
  loadUsers();
  //loadFixtures([{ foo: 'bar' }], myCollection);


});
