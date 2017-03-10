import {createSelector} from 'reselect'

export const getProductList = state => state.product.listall;
export const getEditProduct = state => state.product.editProduct;
export const getSign = state => state.product.sign;
export const getTrialProduct = createSelector([
    getProductList
], (productList) => productList.filter(item => item.isused === 1));

export default {
    getProductList,
    getEditProduct,
    getTrialProduct,
}