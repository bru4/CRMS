import { connect } from 'react-redux'
import Trade from './components/Trade'
import * as actions from './actions'
import { actions as conActions } from 'containers/Content'
import * as contant from './contant'
const { loadList } = conActions;

const mapStateToProps = (state) => {
    return {
        datalist: state.content.userlist,
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
    ...actions,
}, mergeProps)(Trade);
export {
    actions,
    contant,
}