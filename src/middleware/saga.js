import { fork, take, put, call, select } from 'redux-saga/effects'
import * as actions from '../containers/actions'
import { selectors as navSelectors } from '../containers/Common/Nav'
import { fetchList } from './api'

const { list } = actions;

const getEntity = (title, subtitle) => ({
    title: title === 'trial' && subtitle.includes('feedback') ? 'feedback' : title,
    type: subtitle.includes('all') ? 10 : 1,
})


/******************************************************************************/
/***************************** Subroutines ************************************/
/******************************************************************************/

function* loadList(){
    console.log('in')
    const title = yield select(navSelectors.pageTitleSelector);
    const subTitle = yield select(navSelectors.pageSubtitleSelector);
    if(title === 'member' || title === 'trial'){
        const entity = getEntity(title, subTitle);
        yield put(list.request(entity));
        const { json, error} = yield call(fetchList, entity);
        if (json) {
            yield put(list.success(entity, json))
        } else {
            yield put(list.failure(entity, error))
        }
    }
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

function* watchRouterFetch() {
    while (true) {
        const action = yield take('@@router/LOCATION_CHANGE');
        yield fork(loadList);
    }
}

export default function* root() {
    yield [
        fork(watchRouterFetch),
    ]
}