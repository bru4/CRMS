import {initstate} from './model.js'

const content = (state = initstate, action) => {
    const data = action.payload;
    switch (action.type) {
        case 'LIST_SUCCESS':
            return Object.assign({}, state, {
                list: data.res.data.datalist,
                total: data.res.data.total,
                type: data.title.type === 10 ? 'all' : 'reserve',
            })
            case 'SHOW_DETAIL':
            return Object.assign({}, state, {
                detail: !state.detail,
            })
        default: return state;
    }
}
export default content