import { fork, take, put, call, select } from 'redux-saga/effects'
import * as actions from './actions'
import { fetchList, fetchTable, uploadresult, addCoupon, queryPoint, queryCoupon, addPoint, takeCoupon } from './api'
import { message } from 'antd';

const { list, tabel, review, resetErrorMessage, fetchUserPoint, fetchCoupon } = actions;

/******************************************************************************/
/***************************** Subroutines ************************************/
/******************************************************************************/

/**
 * 请求后台列表数据接口的处理函数
 * 通过call api中的fetchList, 用来查询服务器上query接口的实现查不同模块的列表数据功能
 * @param {string} title   表示目前查询的模块 目前有member trial feedback
 * @param {string} type    表示查询类型 目前有 1 待审核 2 审核通过 3 审核不通过 10 全部
 * @param {string} page    当查询全部的时候 表示查询页数 没有的话就不传
 */
function* loadList(title, type, page){
    if(title && type){
        let entity = {title, type, page};
        yield put(list.request({title, type}));
        const { json, error} = yield call(fetchList, entity);
        if (json) {
            switch(json.code){
                case '1000':
                    yield put(list.success(entity, json.data))
                    return;
                default:
                    message.error(json.msg)
                    yield put(list.failure(entity, json.msg))
                    return;
            }
        } else {
            message.error('网络错误')
            yield put(list.failure(entity, error))
        }
    }
}
/**
 * 获取下载表格链接
 * 通过call api中的 fetchTable, 获取用户需要的
 * @param {object} data   分别有属性 {str} title 表示导出哪个模块, {array} timeRange 表示导出数据的时间范围 第一个为startday 第二个为endday 都为moment类型数据, {str} listtype 标识下载类型 3 未认证, 2 已认证 ，10 全部
 */
function* fetchTableUrl(data){
    const { json, error} = yield call(fetchTable, data);
    if (json.code === '1000') {
        yield put(tabel.success(json))
        location.href = json.data.downloadurl;
    } else {
        message.error(json.msg)
        yield put(tabel.failure(error||json))
    }
}
/**
 * 上传审核结果
 * 通过call api中的 uploadresult, 提交审核用户资料和结果
 * @param {objec} data 分别有 index 数据在列表中的index, record 用户数据, result 审核结果, type 上传结果的模块
 */
function* uploadReviewResult(data){
    const { json, error} = yield call(uploadresult, data);
    if (json.code === '1000') {
        yield put(review.success({
            type: data.type,
            index: data.index,
        }))
    } else {
        message.error(json.msg)
        yield put(review.failure(error||json))
    }
}
function* addCouponHandle({type, name, id}) {
    const { json, error} = yield call(addCoupon, type, name, id);
    if (json.code === '1000') {
        message.success('添加成功');
    } else {
        message.error(json.msg)
        yield put(resetErrorMessage(error||json))
    }
}
function* pointHandle(openid) {
    if(typeof openid ==='string'){
        const { json, error} = yield call(queryPoint, openid);
        console.log(json)
        if (json.code === '1000') {
            yield put(fetchUserPoint(json.data.points));
        } else {
            message.error(json.msg)
            yield put(resetErrorMessage(error||json))
        }
    }
    if(typeof openid === 'object'){
        const { json, error} = yield call(addPoint, openid);
        if (json.code === '1000') {
            message.success('添加成功');
            yield put(fetchUserPoint(json.data.totalpoints));
        } else {
            message.error(json.msg)
            yield put(resetErrorMessage(error||json))
        }
    }
}
function* loadCoupon() {
    const { json, error} = yield call(queryCoupon);
    if (json.code === '1000') {
        yield put(fetchCoupon(json.data));
    } else {
        message.error(json.msg)
        yield put(resetErrorMessage(error||json))
    }
}
function* takeCouponHandle(entity) {
    const { json, error} = yield call(takeCoupon, entity);
    if (json.code === '1000') {
        message.success('添加成功');
        //yield put(fetchCoupon(json.data));
    } else {
        message.error(json.msg)
        yield put(resetErrorMessage(error||json))
    }
}
/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
function* watchListFetch() {
    for (let i = 0; i < 1; i++) {
        const action = yield take('LOAD_LIST');
        let title = action.payload.title;
        if(title === 'member' || title === 'trial' || title === 'feedback'){
            let type = action.payload.subtitle.includes('all')?10:1;
            yield fork(loadList, title, type);
            yield fork(loadCoupon);
        }
    }
}
function* watchRouterFetch() {
    while (true) {
        yield take('@@router/LOCATION_CHANGE');
        let title = yield select(state=>state.nav.title);
        let subtitle = yield select(state=>state.nav.subtitle);
        let type = subtitle.includes('all')?10:1;
            //console.log(title, type)
        if(title === 'member' || title === 'trial' || title === 'feedback'){
            yield fork(loadList, title, type);
        }
    }
}
function* watchListChange() {
    while (true) {
        const action = yield take('CHANGE_DATA');
        yield fork(loadList, action.payload.title, action.payload.type);
    }
}
function* watchPageChange(){
    while (true) {
        const action = yield take('CHANGE_PAGE');
        yield fork(loadList, action.payload.title, 10, action.payload.page);
    }
}
function* watchExportTalbel(){
    while(true) {
        const action = yield take('EXPORT_TABLE');
        yield fork(fetchTableUrl, action.payload);
    }
}
function* watchReviewReq(){
    while(true) {
        const req = yield take('UPLOAD_REVIEW_RESULT');
        yield fork(uploadReviewResult, req.payload);
    }
}
function* watchAddCoupon(){
    while(true) {
        const action = yield take('ADD_COUPON');
        yield fork(addCouponHandle, action.payload);
    }
}
function* watchUserPoint(){
    while(true){
        const action = yield take('TOGGLE_DETAIL');
        if(action.payload){
            console.log(action.payload.record);
            yield fork(pointHandle, action.payload.record.openid)
        }
    }
}
function* watchPointAdd(){
    while(true){
        const action = yield take('ADD_POINT');
        if(action.payload){
            console.log(action.payload);
            yield fork(pointHandle, action.payload)
        }
    }
}
function* watchTakeCoupon(){
    while(true) {
        const action = yield take('TAKE_COUPON');
        yield fork(takeCouponHandle, action.payload);
    }
}
export default function* root() {
    yield [
        fork(watchRouterFetch),
        fork(watchListChange),
        fork(watchPageChange),
        fork(watchExportTalbel),
        fork(watchListFetch),
        fork(watchReviewReq),
        fork(watchAddCoupon),
        fork(watchUserPoint),
        fork(watchPointAdd),
        fork(watchTakeCoupon),
    ]
}