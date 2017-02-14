import {couponInitialState} from './model'

const coupon = (state = couponInitialState, action) => {
    let payload = action.payload;
    switch (action.type) {
        case 'CHANGE_COUPON_INFO':
            return Object.assign({}, state, {
                id: payload.id ? payload.id : state.id,
                name: payload.name ? payload.name : state.name,
                type: payload.type ? payload.type : state.type,
            });
        case 'ADD_COUPON':
            return state;
        case 'RESET_COUPON':
            return couponInitialState;
        default:
            return state;
    }
};
export default coupon;