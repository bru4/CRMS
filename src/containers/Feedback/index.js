import { connect } from 'react-redux'
//import * as constants from './constants';
//import reducer from './reducer';
//import * as selectors from './selectors';
import { actions } from 'containers/Content'
import { selectors as navSelectors } from 'containers/Nav'
import Feedback from './components/Feedback'


const mapStateToProps = (state) => ({
    type: navSelectors.typeSelector(state),
    ...state.content,
});

export default connect(
    mapStateToProps, {
        ...actions,
    }
)(Feedback)

export {
	//constants,
	//reducer,
	//selectors,
};