import React from 'react'
import { connect } from 'react-redux'
import * as actions from './action'

function mapStateToProps(state) {
  return {
  	num:state.Home
  };
}

const Index = (props) =>
	<div>
		<h1>Index</h1>
		{props.children}
	</div>

export default connect(
  mapStateToProps,{
  	...actions
  }
)(Index)
