import { combineReducers } from 'redux';
import _ from 'lodash'
const editProductInitState = {
    code: {
        dirty: false,
        value: '',
    },
    name: {
        dirty: false,
        value: '',
    },
    img: {
        dirty: false,
        value: '',
    },
    isused: {
        dirty: false,
        value: 0,
    },
};

const listall = (state = [], action) => {
    let payload = action.payload;
    switch (action.type) {
        case 'GET_TRIAL_PRODUCT':
            return [...payload.product];
        default:
            return state;
    }
};

const editProduct = (state = editProductInitState, action) => {
    const payload = action.payload;
    switch (action.type) {
        case 'EDIT_PRODUCT_UPDATE':
            if(payload === null){
                return editProductInitState;
            } else {
                return _.merge({}, state, {
                    code: { value: payload.code },
                    name: { value: payload.name },
                    img: { value: payload.img },
                    isused: { value: payload.isused },
                });
            }
        case 'PRODUCT_CHANGE':
            console.log(payload);
            let newState = {};
            for (var key in payload) {
                if (payload.hasOwnProperty(key)) {
                    var element = payload[key];
                    
                }
            }
            return Object.assign({}, state, {
                ...payload,
            });
        default:
            return state;
    }
};
export default combineReducers({
    listall,
    editProduct,
});