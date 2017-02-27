import { connect } from 'react-redux'
import Product from './components/Product'
import * as actions from './actions'

const mapStateToProps = () => {
    return {
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...stateProps,
        actions: dispatchProps,
        ...ownProps,
    }
}

export default connect(
    mapStateToProps,{
    ...actions,
},mergeProps)(Product)