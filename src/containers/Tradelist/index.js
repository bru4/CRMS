import { connect } from 'react-redux'
import Tradelist from './components/Tradelist'
//import {actionCreator} from 'actionCreatorPath'

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

}, mergeProps)(Tradelist)