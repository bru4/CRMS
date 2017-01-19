import React from 'react'
import { connect } from 'react-redux'
import * as actions from './action'

function mapStateToProps(state) {
  return {
  	num:state.Home
  };
}

const Index = ({add, addAsync, num}) =>
	<div>
		<h1>Index</h1>
	</div>

export default connect(
  mapStateToProps,{
  	...actions
  }
)(Index)
