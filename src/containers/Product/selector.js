import {createSelector} from 'reselect'

export const getProductList = state => state.product.listall;

export const getTrialProduct = createSelector([
    getProductList
], (productList) => productList.filter(item => item.isused === 0));