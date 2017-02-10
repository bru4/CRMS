import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './containers/App';
import Index from './containers/Home/Index';
import Content from './containers/Common/Content';
import Member from './containers/Member';
import Trial from './containers/Trial';
import Feedback from './containers/Feedback';
export default (
    <Route path='/' component={App}>
    	<IndexRedirect to='/crmsadmin' />
    	<Route path='/crmsadmin' >
        	<IndexRoute component={Index} />
        	<Route component={Content}>
				<Route path='member/:subtitle' component={Member} />
				<Route path='trial/:subtitle' component={Trial} />
				<Route path='feedback/:subtitle' component={Feedback} />
			</Route>
        </Route>
    </Route>
);
