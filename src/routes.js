import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './containers/App';
import Index from './containers/Home/Index';
import Content from './containers/Common/Content';

export default (
    <Route path='/' component={App}>
    	<IndexRedirect to='/crmsadmin' />
    	<Route path='/crmsadmin' >
        	<IndexRoute component={Index} />
        	<Route path=':title/:subtitle' component={Content} />
        </Route>
    </Route>
);
