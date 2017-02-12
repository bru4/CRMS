import React, { Component } from 'react';
import { connect } from 'react-redux'

//import components from './components';
//import * as constants from './constants';
//import reducer from './reducer';
//import * as selectors from './selectors';
import Memberlist from './components/Memberlist'
import { selectors as navSelectors } from 'containers/Nav'
import { actions } from 'containers/Content'
import ListHoc from 'components/ListHOC'
import Toolbar from 'components/Toolbar'
const Member = (props) =>{
    console.log(props);
    /*let Wrapmember;
    if(props.subtitle==='all'){
        Wrapmember =  ListHoc({title:'全部会员'}, Memberlist);
        return <Wrapmember {...props}/>
    }else{
        Wrapmember =  ListHoc({title:'餐饮审核'}, Memberlist);
        return <Wrapmember {...props}/>
    }*/
    let type = props.subtitle;
    return <div>
        <h2>{type === 'all'?'全部会员':'餐饮审核'}</h2>
        <Toolbar

        />
        <Memberlist
            type = {type}
            data = {props.userlist}
            toggleDetail = {props.toggleDetail}
            toggleCheckbox = {props.toggleCheckbox}
            selectRows = {props.selectRows}
        />
    </div>
}

const Members = props => {
    console.log(props)
    return (
        <Memberlist
            fetching = {props.fetching}
            list = {props.list}
            total = {props.total}
            type = {props.type}
            toggleDetail = {props.toggleDetail}
            toggleCheckbox = {props.toggleCheckbox}
            selectRows = {props.selectRows}
        />
    );
}
//const wrapMembers = ListHoc({title:'全部会员'}, Members);
const mapStateToProps = (state) => ({
    type: navSelectors.typeSelector(state),
    ...state.content,
    ...state.nav,
});

export default connect(
    mapStateToProps, {
        ...actions,
    }
    // Implement map dispatch to props
)(Member);

export {
	//components,
	//constants,
	//reducer,
	//selectors,
};