import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Index from './components/Home/Index';
import Content from './components/Common/Content';

export default (
	<Route path='/crmsadmin' component={App}>
		<IndexRoute component={Index} />
		<Route path=':title/:subtitle' component={Content} />
	</Route>
);
