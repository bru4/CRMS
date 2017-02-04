import React from 'react';
import { connect } from 'react-redux';
import  Member from 'containers/Member';

function mapStateToProps(state) {
  return {

  };
}

const Content = (props) =>{
	console.log(props)
return<div>
	{props.params.title==='member'?<Member />:null}
</div>
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Content)
