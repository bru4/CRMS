import React from 'react'
import {connect} from 'react-redux'
import * as actions from './action'

function mapStateToProps(state) {
		return {num: state.Home};
}
/*const clickHandler = async () => {
		const data = await fetch('/hello', {
				method: 'post',
				mode: 'cors',
				headers: {
						'Content-Type': 'application/json'
				},
						body: {
								'currentpage': 0
						}
				})
				.then(response => response.json().then(json => ({json, response})))
				.then(({json, response}) => {
						if (!response.ok) {
								return Promise.reject(json)
						} else {
								return {json};
						}
				})
				.then(data => data, error => ({
						error: error.message || 'Something bad happened'
				}));
		console.log(data);
};*/

const Index = (props) => <div>
		<h1>Index</h1>
		{props.children}
</div>

export default connect(mapStateToProps, {
		...actions
})(Index)
