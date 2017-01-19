import merge from 'lodash/merge'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

const base = (state = '', action) => {
	switch (action.type) {
		case 'FILTER':
			return merge(state, {
				filter: action.filter
			});
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	base,
	routing
});

export default rootReducer;