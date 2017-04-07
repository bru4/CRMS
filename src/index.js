import 'babel-polyfill';
import 'isomorphic-fetch'
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './root/index';
import rootSaga from './middleware/saga'
import 'styles/index.css';

import startFetchMock from '../mock/mock';
startFetchMock();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
store.runSaga(rootSaga)

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./root/index', () => {
        const NewRoot = require('./root/index').default;
        render(
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
