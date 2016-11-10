import { renderBasic, renderSlim } from './helpers.js';

export default function (FlowRouter) {
  FlowRouter.route('/', {
    action: () => renderBasic('home')
  });

  FlowRouter.route('/welcome', {
    action: () => renderSlim('welcome')
  });

  FlowRouter.route('/checkComponent', {
    action: () => renderSlim('checkComponent')
  });

  FlowRouter.notFound = {
    action: () => renderSlim('notFound')
  };
}
