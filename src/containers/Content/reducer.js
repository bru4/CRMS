import {initstate} from './model.js'
import {combineReducers} from 'redux'

const base = (state = initstate.base, action) => {
    const payload = action.payload;
    switch (action.type) {
        case 'TOGGLE_DETAIL':
            return Object.assign({}, state, {
                detail: !state.detail,
            });
        case 'FETCH_COUPON':
            return Object.assign({}, state, {
                coupon: payload,
            });
        default:
            return state;
    }
}
const list = (state = initstate.list, action) => {
    const payload = action.payload;
    switch (action.type) {
        case 'LIST_REQUEST':
            return Object.assign({}, initstate.list, {
                fetching: true,
            });
        case 'LIST_SUCCESS':
            return Object.assign({}, state, {
                list: payload.res!==null && payload.res.datalist?payload.res.datalist:[payload.res],
                total: payload.res===null?0:payload.res.total,
                fetching: false,
            });
        case 'CHANGE_DATA':
            return Object.assign({}, state, {
                listtype: payload.type,
            });
        case 'REVIEW_SUCCESS':
            if(typeof payload.index === 'number'){
                return Object.assign({}, state, {
                    list: [
                        ...state.list.slice(0,payload.index),
                        ...state.list.slice(payload.index+1)
                    ],
                    total: --state.total,
                });
            } else {
                let narr = state.list.filter(val=>{
                    let n;
                    console.log(payload.type)
                    switch (payload.type){
                        case 'member':
                            n = val.openid;
                            break;
                        case 'trial':
                        case 'feedback':
                            n = val.recordid;
                            break;
                        default:
                            n = val.mobile;
                        
                    }
                    for(let i = 0; i < payload.index.length; i++){
                        if(payload.index[i] === n){
                            return false;
                        }
                    }
                    return true;
                });
                let ntotal = state.total - payload.index.length;
                return Object.assign({}, state, {
                    list: narr,
                    total: ntotal,
                });
            }
        default:
            return state;
    }
}
const cur = (state = initstate.cur, action) => {
    const payload = action.payload;
    switch (action.type) {
        case 'TOGGLE_DETAIL':
            if(payload === null){
                return Object.assign({}, state, {
                    points: '',
                });
            }
            let data = payload?payload:state.cur;
            return Object.assign({}, state, {
                ...data,
            });
        case 'FETCH_USER_POINT':
            return Object.assign({}, state, {
                points: payload,
            });
        default:
            return state;
    }
}
const selected = (state = initstate.selected, action) => {
    const payload = action.payload;
    switch (action.type) {
        case 'SELECT_ROWS':
            return Object.assign({}, state, {
                keys: payload.keys,
                records: payload.records,
            });
        case 'REVIEW_SUCCESS':
            return initstate.selected
        default:
            return state;
    }
}
export default combineReducers({
    base,
    userlist:list,
    cur,
    selected,
})