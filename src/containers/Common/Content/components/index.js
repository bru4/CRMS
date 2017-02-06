import React from 'react';
import { connect } from 'react-redux';
import  Member from 'containers/Member';

function mapStateToProps({ useList }) {
    return {
        list: useList.list,
        total: useList.total,
    };
}
const Content = (props) =>{
	//console.log(props)
return<div>
    {
        props.params.title === 'member' ? <Member list={props.list} total={props.total} /> : null
    }
</div>
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Content)