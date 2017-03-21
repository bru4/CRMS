import { connect } from 'react-redux'
import * as actions from './action'
import Home from './components/Home'

function mapStateToProps(state) {
	return {
		num: state.Home
	};
}


const mergeProps = (stateProps, dispatchProps, ownProps) => {
	return {
		...stateProps,
		...ownProps,
		actions: dispatchProps,
	}
}

export default connect(
	mapStateToProps, {
	...actions
}, mergeProps)(Home)
