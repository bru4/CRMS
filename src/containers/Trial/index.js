import { connect } from 'react-redux'
//import components from './components';
//import * as constants from './constants';
//import reducer from './reducer';
//import * as selectors from './selectors';
import { actions } from 'containers/Content'
import { selectors as navSelectors } from 'containers/Nav'
import Trial from './components/Trial'

const mapStateToProps = (state) => ({
    type: navSelectors.typeSelector(state),
    ...state.content,
});

export default connect(
    mapStateToProps, {
        ...actions,
    }
)(Trial)
export {
	//components,
	//constants,
	//reducer,
	//selectors,
};