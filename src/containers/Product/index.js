import { connect } from 'react-redux'
import Product from './components/Product'
import actions from './actions'
import reducer from './reducer'
import selectors, { getTrialProduct, getProductList, getEditProduct } from './selector'
import { actions as conActions } from 'containers/Content'
const { loadList } = conActions;
const mapStateToProps = (state) => {
    return {
        list: getProductList(state),
        triallist: getTrialProduct(state),
        editProduct: getEditProduct(state),
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...stateProps,
        actions: dispatchProps,
        router: ownProps.router,
    }
}

export default connect(
    mapStateToProps, {
    ...actions,
    loadList,
}, mergeProps)(Product);
export {
    reducer,
    selectors,
}