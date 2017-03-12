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
        case 'GET_IMAGE_URL':
            console.log(payload);
            const res = payload.response;
            return res ? Object.assign({}, state, {
                picture: {value: res.data.download_url}
            }) : state;
        case 'EDIT_PRODUCT_UPDATE':
            if(payload === null){
                return editProductInitState;
            } else {
                const firstname = payload.name.split(',')[0];
                const lastname = payload.name.split(',')[1];
                return _.merge({}, state, {
                    code: { value: payload.code },
                    firstname: { value: firstname },
                    lastname: { value:lastname ? lastname : '' },
                    name: { value: payload.name },
                    /*picture: {
                        value: {
                            file: {
                                status: 'done',
                                uid: 0,
                                url: payload.picture,
                            },
                            fileList: [{
                                status: 'done',
                                uid: 0,
                                url: payload.picture,
                            }],
                        },
                    },*/
                    picture: { value: payload.picture },
                    isused: { value: payload.isused },
                });
            }
        case 'PRODUCT_CHANGE':
            let newState = {};
            for (let key in payload) {
                if (payload.hasOwnProperty(key)) {
                    newState[key] = {
                        dirty: true,
                        value: payload[key].value,
                    }
                }
            }
            console.log(payload);
            console.log(newState);
            console.log(state);
            if(newState['firstname']) {
                const lastname = state.name.value.split(',')[1];
                return Object.assign({}, state, {
                    name: {
                        value: `${newState['firstname'].value},${lastname?lastname:''}`
                    },
                });
            }
            if(newState['lastname']) {
                const firstname = state.name.value.split(',')[0];
                return Object.assign({}, state, {
                    name: {
                        value: `${firstname?firstname:''},${newState['lastname'].value}`
                    },
                });
            }
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