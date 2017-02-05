import { fork, take, put, call, select } from 'redux-saga/effects'
import * as actions from '../containers/actions'
import { selectors as navSelectors } from '../containers/Common/Nav'
import { fetchList } from './api'

const { list } = actions;
console.log(actions)

/******************************************************************************/
/***************************** Subroutines ************************************/
/******************************************************************************/

function* loadList(){
    const title = yield select(navSelectors.pageTitleSelector);
    const subTitle = yield select(navSelectors.pageSubtitleSelector);
    if(title !== 'index'){
        yield put(list.request(title));
        const {response, error} = yield fork(fetchList, title)
        if (response) {
            yield put(list.success(title, response))
        } else {
            yield put(list.failure(title, error))
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