import { fork, take, put, call, select } from 'redux-saga/effects'
import * as actions from '../containers/actions'
import { selectors as navSelectors } from '../containers/Common/Nav'
import { fetchList, fetchTable, uploadresult } from './api'
import { message, Modal, Button } from 'antd';

const { list, tabel, review } = actions;

const getEntity = (title, subtitle) => ({
    title: title === 'trial' && subtitle.includes('feedback') ? 'feedback' : title,
    type: subtitle.includes('all') ? 10 : 1,
})


/******************************************************************************/
/***************************** Subroutines ************************************/
/******************************************************************************/

function* loadList(tv){
    const title = yield select(navSelectors.pageTitleSelector);
    const subTitle = yield select(navSelectors.pageSubtitleSelector);
    if(title === 'member' || title === 'trial'){
        const entity = tv?{title:tv.title, type:tv.val}:getEntity(title, subTitle);
        yield put(list.request(entity));
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
function* fetchReviewResult(result, type){
    console.log(result, type)
    const { json, error} = yield call(uploadresult, result, type);
    console.log(json, error);
    if (json.code === '1000') {
        yield put(review.success(result))
    } else {
        message.error(json.msg)
        yield put(review.failure(error||json))
    }
}
/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

function* watchRouterFetch() {
    while (true) {
        const { payload:data } = yield take('@@router/LOCATION_CHANGE');
        yield fork(loadList);
    }
}
function* watchListChange() {
    while (true) {
        const action = yield take('CHANGE_DATA');
        yield fork(loadList, action.payload);
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
        const req = yield take('REVIEW_CKECK');
        if(req.payload.result==='1'){
            Modal.confirm({
                title: '确认要通过该审核?',
                onOk: () => new Promise(resolve => {
                    fork(fetchReviewResult, req.payload, '1');
                    resolve();
                }),
                onCancel() {},
            })
        }
        if(req.payload.result==='0'){
            yield fork(fetchReviewResult, req.payload, '0');
        }
    }
}
export default function* root() {
    yield [
        fork(watchRouterFetch),
        fork(watchListChange),
        fork(watchExportTalbel),
        //fork(watchReviewReq),
    ]
}