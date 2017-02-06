
const content = (state = { list: [], total: 0, type: -1 }, action) => {
    const data = action.payload;
    switch (action.type) {
        case 'LIST_SUCCESS':
            return Object.assign({}, state, {
                list: data.res.data.datalist,
                total: data.res.data.total,
                type: data.title.type === 10 ? 'all' : 'reserve',
            })
        default: return state;
    }
}
export default content