import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Index from './containers/Home/Index';
import Content from './containers/Content';
import Member from './containers/Member';
import Trial from './containers/Trial';
import Feedback from './containers/Feedback';
import Option from './containers/Option';
import Order from './containers/Order';
export default (
	<Route path='/crmsadmin' component={App}>
		<IndexRoute component={Index} />
		<Route component={Content}>
			<Route path='member/:subtitle' component={Member} />
			<Route path='trial/:subtitle' component={Trial} />
			<Route path='feedback/:subtitle' component={Feedback} />
			<Route path='option/:subtitle' component={Option} />
			<Route path='order/:subtitle' component={Order} />
		</Route>
    </Route>
);
/*
	<Route path='/' component={App}>
    	<IndexRedirect to='/crmsadmin' />
    	<Route path='/crmsadmin' >
        	<IndexRoute component={Index} />
        	<Route component={Content}>
				<Route path='member/:subtitle' component={Member} />
				<Route path='trial/:subtitle' component={Trial} />
				<Route path='feedback/:subtitle' component={Feedback} />
				<Route path='option/:subtitle' component={Option} />
			</Route>
        </Route>
    </Route>
*/