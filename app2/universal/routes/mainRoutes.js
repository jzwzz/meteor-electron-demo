import { renderBasic, renderSlim } from './helpers.js';

export default function (FlowRouter) {
  FlowRouter.route('/', {
    action: () => renderBasic('home')
  });

  FlowRouter.notFound = {
    action: () => renderSlim('notFound')
  };

  FlowRouter.route('/checkComponent', {
    action: () => renderSlim('checkComponent')
  });
  FlowRouter.route('/shellDemo', {
    action: () => renderSlim('shellDemo')
  });
}
