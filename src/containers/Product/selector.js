import {createSelector} from 'reselect'

export const getProductList = state => state.product.listall;
export const getEditProduct = state => state.product.editProduct;
export const getTrialProduct = createSelector([
    getProductList
], (productList) => productList.filter(item => item.isused === 0));

export default {
    getProductList,
    getEditProduct,
    getTrialProduct,
}