import { connect } from 'react-redux'
//import components from './components';
//import * as constants from './constants';
//import reducer from './reducer';
//import * as selectors from './selectors';
import { selectors as navSelectors } from 'containers/Nav'
import { actions as contActions } from 'containers/Content'
import * as ownActions from './actions'
//import ListHoc from 'components/ListHOC'
import Member from './components/Member'

const mapStateToProps = (state) => ({
    type: navSelectors.typeSelector(state),
    ...state.content,
});

export default connect(
    mapStateToProps, {
        ...contActions,
        ...ownActions,
    }
    // Implement map dispatch to props
)(Member);

export {
	//components,
	//constants,
	//reducer,
	//selectors,
};