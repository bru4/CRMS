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
import Login from './components/Login';
import Product from './containers/Product'
import Tradelist from './containers/Tradelist'
const checkIn = (nextState, replace, next) => {
	var tokenInfo = sessionStorage.tokenInfo;
	if(tokenInfo) {
		next()//如果有值直接下一步
	} else {
		replace('/crmsadmin/login')//如果token信息为空就直接到登录页面
		next();
	}
}
export default (
	<Route path='/crmsadmin' component={App}>
		<IndexRoute component={Index} />
		<Route component={Content}  onEnter={checkIn}>
			<Route path='trial'>
				<Route path='product' component={Product} />
				<Route path='tradelist' component={Tradelist} />
				<Route path=':subtitle' component={Trial} />
			</Route>
			<Route path='member/:subtitle' component={Member} />
			<Route path='feedback/:subtitle' component={Feedback} />
			<Route path='option/:subtitle' component={Option} />
			<Route path='order/:subtitle' component={Order} />
		</Route>
		<Route path='login' component={Login}/>
    </Route>
);