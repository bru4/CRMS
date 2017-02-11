import {initstate} from './model.js'
import {combineReducers} from 'redux'

const base = (state = initstate.base, action) => {
    //const payload = action.payload;
    switch (action.type) {
        case 'TOGGLE_DETAIL':
            return Object.assign({}, state, {
                detail: !state.detail,
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
            })
        case 'LIST_SUCCESS':
            return Object.assign({}, state, {
                list: payload.res.datalist,
                total: payload.res.total,
                fetching: false,
            });
        case 'CHANGE_DATA':
        console.log(payload.type)
            return Object.assign({}, state, {
                listtype: payload.type,
            });
        default:
            return state;
    }
}
const cur = (state = initstate.cur, action) => {
    const payload = action.payload;
    switch (action.type) {
        case 'TOGGLE_DETAIL':
            let data = payload?payload:state.cur
            return Object.assign({}, state, {
                ...data,
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