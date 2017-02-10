import React from 'react';
//import * as constants from './constants';
//import reducer from './reducer';
//import * as selectors from './selectors';
import Feedbacklist from './components/Feedbacklist'

const Feedback = ({list, total, type, showDetail}) =>
    <div>
        <Feedbacklist
            list={list}
            total={total}
            type={type}
            showDetail={showDetail}
        />
    </div>

export default Feedback;

export {
	//constants,
	//reducer,
	//selectors,
};