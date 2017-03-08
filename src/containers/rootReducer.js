import merge from 'lodash/merge';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as NavReducer } from './Nav';
import { reducer as ContentReducer } from './Content';
import { reducer as OptionReducer } from './Option';
import { reducer as ProductReducer } from './Product';

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
	routing,
	base,
	nav: NavReducer,
	content: ContentReducer,
	coupon: OptionReducer,
	product: ProductReducer,
});

export default rootReducer;