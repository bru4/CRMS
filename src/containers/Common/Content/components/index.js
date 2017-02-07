import React from 'react'
import { connect } from 'react-redux'
import  Member from 'containers/Member'
import * as actions from '../actions'
import DetailBox from './DetailBox'

const mapStateToProps = ({ content }) => content;
const Content = (props) =>{
    //console.log(props)
return<div>
    {
        props.params.title === 'member' ?
        <Member
            list={props.list}
            total={props.total}
            type={props.type}
            showDetail={props.showDetail}
        /> : null
    }
    <DetailBox
        show={props.detail}
        showDetail={props.showDetail}
    />
</div>
}

export default connect(
    mapStateToProps, {
        showDetail: actions.showDetail,
    }
    // Implement map dispatch to props
)(Content)