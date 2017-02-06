import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../containers/rootReducer'
import createSagaMiddleware, { END } from 'redux-saga'
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

const configureStore = preloadedState => {
	const sagaMiddleware = createSagaMiddleware()
    const rm = routerMiddleware(browserHistory);
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(sagaMiddleware, rm)
	)

	store.runSaga = sagaMiddleware.run
	store.close = () => store.dispatch(END)
	return store
}
export default configureStore
