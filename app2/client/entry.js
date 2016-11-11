import config from '../universal/config';
import createMainRoutes from '../universal/routes/mainRoutes';
import createHome from './components/home/home';
import createHeader from './components/header/header';

import createCheckComponent from './components/checkComponent/checkComponent';
import createShellDemo from './components/demo/shellDemo/shellDemo';


createMainRoutes(FlowRouter);
createHome(Template);
createHeader(Template);

createCheckComponent(Template);
createShellDemo(Template);
