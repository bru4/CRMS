import {initstate} from './model.js'

const content = (state = initstate, action) => {
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
        case 'SHOW_DETAIL':
        //console.log(data);
            return Object.assign({}, state, {
                detail: !state.detail,
                cur: data?data:state.cur,
            });
        case 'CHANGE_DATA':
            return Object.assign({}, state, {
                listtype: data.val,
            });
        // case 'TABLE_SUCCESS':
        //     return state;
        default: return state;
    }
}
export default content