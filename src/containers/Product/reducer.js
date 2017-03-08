import { combineReducers } from 'redux';

const listall = (state = [], action) => {
    let payload = action.payload;
    switch (action.type) {
        case 'GET_TRIAL_PRODUCT':
            return [...payload.product];
        default:
            return state;
    }
};
const editProduct = (state = {}, action) => {
    let payload = action.payload;
    switch (action.type) {
        case 'aaa':
            return state;
        default:
            return state;
    }
};
export default combineReducers({
    listall,
    editProduct,
});