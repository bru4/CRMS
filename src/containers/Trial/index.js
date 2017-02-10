import React from 'react'
//import components from './components';
//import * as constants from './constants';
//import reducer from './reducer';
//import * as selectors from './selectors';
import Triallist from './components/Triallist'
import Trialreview from './components/Trialreview'

export const Trial = ({list, total, type, showDetail}) => (
    <div>
    {
        type==='all'?
        <Triallist
            list={list}
            total={total}
            showDetail={showDetail}
        />:
        <Trialreview
            list={list}
            total={total}
            showDetail={showDetail}
        />
    }
    </div>
)

export default Trial
export {
	//components,
	//constants,
	//reducer,
	//selectors,
};