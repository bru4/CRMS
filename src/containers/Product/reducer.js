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
    picture: {
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
            return [...payload];
        case 'GET_PRODUCT_CHANGE':
            const { code, ...other } = payload;
            return state.map((item) => item.code === code ? {...item, ...other} : item);
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
                    picture: { value: payload.picture },
                    isused: { value: payload.isused },
                });
            }
        case 'PRODUCT_CHANGE':
            console.log(payload);
            let newState = {};
            for (let key in payload) {
                if (payload.hasOwnProperty(key)) {
                    newState[key] = {
                        dirty: true,
                        value: payload[key].value,
                    }
                }
            }
            console.log(newState);
            return Object.assign({}, state, {
                ...newState,
            });
        default:
            return state;
    }
};
const sign = (state = '', action) => {
    switch (action.type) {
        case 'GET_UPLOAD_SIGN':
            return action.payload.sign;
        default:
            return state;
    }
}
export default combineReducers({
    listall,
    editProduct,
    sign,
});