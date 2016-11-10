import config from '../universal/config';
import createMainRoutes from '../universal/routes/mainRoutes';
import createHome from './components/home/home';
import createHeader from './components/header/header';

import createWelcome from './components/welcome/welcome';

import createCheckComponent from './components/checkComponent/checkComponent';

createMainRoutes(FlowRouter);
createHome(Template);

createWelcome(Template);
createCheckComponent(Template);
