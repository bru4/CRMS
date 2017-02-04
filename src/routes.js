import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Index from './containers/Home/Index';
import Content from './containers/Common/Content';

export default (
    <Route path='/crmsadmin' component={App}>
        <IndexRoute component={Index} />
        <Route path=':title/:subtitle' component={Content} />
    </Route>
);
