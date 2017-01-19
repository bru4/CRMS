import React, { PropTypes } from 'react'
import Nav from './Common/Nav'

const App = ({ children }) =>
	<div className="App">
		<Nav />
		{children}
	</div>

App.PropTypes = {
	children: PropTypes.object
};

export default App;