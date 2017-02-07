import merge from 'lodash/merge';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as NavReducer } from './Common/Nav';
import { reducer as ContentReducer } from './Common/Content';

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
	nav: NavReducer,
	content: ContentReducer,
	routing,
});

export default rootReducer;