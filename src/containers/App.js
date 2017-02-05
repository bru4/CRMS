import React, { PropTypes } from 'react'
import Nav from './Common/Nav/index';

const App = ({ children }) =>
	<div className="App">
		<Nav />
		{children}
	</div>

App.propTypes = {
	children: PropTypes.node
};

export default App;