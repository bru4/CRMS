import { fork, take, put, call } from 'redux-saga/effects'
import * as actions from '../containers/actions'
import { fetchList, fetchTable, uploadresult } from './api'
import { message } from 'antd';

const { list, tabel, review } = actions;

/******************************************************************************/
/***************************** Subroutines ************************************/
/******************************************************************************/

function* loadList(title, type){
    if(title && type){
        let entity = {title, type};
        yield put(list.request({title, type}));
        const { json, error} = yield call(fetchList, entity);
        if (json.code === '1000') {
            yield put(list.success(entity, json.data))
        } else {
            message.error(json.msg)
            yield put(list.failure(entity, error))
        }
    }
}
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
function* uploadReviewResult(data){
    console.log(data)
    /*const { json, error} = yield call(uploadresult, data);
    console.log(json, error);
    if (json.code === '1000') {
        yield put(review.success(data.index))
    } else {
        message.error(json.msg)
        yield put(review.failure(error||json))
    }*/
}
/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
function* watchKistFetch() {
    for (let i = 0; i < 1; i++) {
        const action = yield take('LOAD_LIST');
        let title = action.payload.title;
        let type = action.payload.subtitle.includes('all')?10:1;
        yield fork(loadList, title, type);
    }
}
function* watchRouterFetch() {
    while (true) {
        const { payload:data } = yield take('@@router/LOCATION_CHANGE');
        let path = data.pathname.split('/');
        let title = path.length > 3 ? path[2] : null;
        let type = path[3].includes('all')?10:1;
        yield fork(loadList, title, type);
    }
}
function* watchListChange() {
    while (true) {
        const action = yield take('CHANGE_DATA');
        yield fork(loadList, action.payload.title, action.payload.type);
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
export default function* root() {
    yield [
        fork(watchRouterFetch),
        fork(watchListChange),
        fork(watchExportTalbel),
        fork(watchKistFetch),
        fork(watchReviewReq),
    ]
}