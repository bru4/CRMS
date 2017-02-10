import React from 'react';
//import components from './components';
//import * as constants from './constants';
//import reducer from './reducer';
//import * as selectors from './selectors';
import Memberlist from './components/Memberlist'

const Member = ({list, total, type, toggleDetail, pass, reject, toggleCheckbox, params}) =>{
    console.log(params)
    return <div>
        <Memberlist
            list = {list}
            total = {total}
            type = {type}
            toggleDetail = {toggleDetail}
            pass = {pass}
            reject = {reject}
            toggleCheckbox = {toggleCheckbox}
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