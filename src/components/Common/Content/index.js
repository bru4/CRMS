import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

const Content = (props) =>{
return<div>
	{props.routeParams.title}
</div>
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Content)
