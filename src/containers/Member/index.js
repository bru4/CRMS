import React from 'react';
//import components from './components';
//import * as constants from './constants';
//import reducer from './reducer';
//import * as selectors from './selectors';
import Memberlist from './components/Memberlist'

const Member = ({list, total, toggleDetail, toggleCheckbox, type, selectRows}) =>{
    //console.log(params)
    return <div>
        <Memberlist
            list = {list}
            total = {total}
            type = {type}
            toggleDetail = {toggleDetail}
            toggleCheckbox = {toggleCheckbox}
            selectRows = {selectRows}
        />
    </div>
}

export default Member;
export {
	//components,
	//constants,
	//reducer,
	//selectors,
};