import React from 'react'
import { connect } from 'react-redux'
import  Member from 'containers/Member'
import  Trial from 'containers/Trial'
import  Feedback from 'containers/Feedback'
import * as actions from '../actions'
import DetailBox from 'components/DetailBox'

const mapStateToProps = ({ content }) => content;
const Content = (props) =>{
    //console.log(props)
return<div>
    {
        props.title === 'member' ?
        <Member
            list={props.list}
            total={props.total}
            type={props.type}
            showDetail={props.showDetail}
        /> : null
    }
    {
        props.title === 'trial' ?
        <Trial
            list={props.list}
            total={props.total}
            type={props.type}
            showDetail={props.showDetail}
        /> : null
    }
     {
        props.title === 'feedback' ?
        <Feedback
            list={props.list}
            total={props.total}
            type={props.type}
            showDetail={props.showDetail}
        /> : null
    }
   <DetailBox
        show={props.detail}
        showDetail={props.showDetail}
        data={props.cur}
        model={props.type}
    />
</div>
}

export default connect(
    mapStateToProps, {
        showDetail: actions.showDetail,
    }
    // Implement map dispatch to props
)(Content)