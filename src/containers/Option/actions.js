import {createAction} from 'redux-actions';

export const changeCouponInfo = createAction('CHANGE_COUPON_INFO', data=>data);
export const addCoupon = createAction('ADD_COUPON', (e)=>{e.preventDefault()});