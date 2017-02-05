import { combineReducers } from 'redux'

const initState = 'index';
const title = (state = initState, action) => {
  let data = action.payload;
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      let path = data.pathname.split('/');
      return path.length > 2 ? path[2] : initState;
    default:
      return state;
  }
};
const subtitle = (state = initState, action) => {
  let data = action.payload;
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      let path = data.pathname.split('/');
      return path.length > 3 ? path[3] : initState;
    default:
      return state;
  }
};
const navReducer = combineReducers({
  title,
  subtitle
});

export default navReducer;