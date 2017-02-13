import React from 'react'
import * as actions from './actions';
import reducer from './reducer';

const Content = props => {
    return (
        <div className='contentwrap'>
            {props.children}
        </div>
    );
}

export default Content;
export {
	actions,
    //constants,
    reducer,
    //selectors
};
