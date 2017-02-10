import {initstate} from './model.js'
import {combineReducers} from 'redux'

const content = (state = initstate.base, action) => {
    const data = action.payload;
    switch (action.type) {
        // case 'LIST_REQUEST':
        //     return Object.assign({}, state, {
        //         title: data.title,
        //         type: data.type === 10 ? 'all' : 'review',
        //     });
        case 'LIST_SUCCESS':
            return Object.assign({}, state, {
                list: data.res.datalist,
                total: data.res.total,
            });
        case 'CHANGE_DATA':
            return Object.assign({}, state, {
                listtype: data.val,
            });
        case 'TOGGLE_DETAIL':
        //console.log(data);
            return Object.assign({}, state, {
                detail: !state.detail,
                cur: data?data:state.cur,
            });
        case 'TOGGLE_CKECKBOX':
            let {result, ...other } = data;
            return Object.assign({}, state, {
                checkbox: !state.checkbox,
                result: result,
                cur: {...other},
            });
        default: return state;
    }
}
const list = (state = initstate.list, action) => {

}
export default content