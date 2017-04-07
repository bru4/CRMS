import { connect } from 'react-redux'
import Trade from './components/Trade'
//import {actionCreator} from 'actionCreatorPath'
import { actions as conActions } from 'containers/Content'
const { loadList } = conActions;

const mapStateToProps = (state) => {
    return {
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...stateProps,
        ...ownProps,
        actions: dispatchProps,
    }
}

export default connect(mapStateToProps, {
    loadList,
}, mergeProps)(Trade)