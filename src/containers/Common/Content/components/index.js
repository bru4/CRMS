import React from 'react'
import { connect } from 'react-redux'
import  Member from 'containers/Member'
import  Trial from 'containers/Trial'
import  Feedback from 'containers/Feedback'
import * as actions from '../actions'
import DetailBox from 'components/DetailBox'
import Toolbar from 'components/Toolbar'

const mapStateToProps = ({ content }) => content;
const Content = (props) =>{
    console.log(props)
    const type = props.params.subtitle.includes('all')?'all':'review';
return<div className='contentwrap'>
    {
        props.params.title === 'member' ?
        <div>
            <h2>{type === 'all'?'全部会员':'餐饮审核'}</h2>
            <Toolbar
                type = {type}
                title = {props.params.title}
                exportTable = {props.exportTable}
                change = {props.changeData}
                pass = {props.passAll}
                listtype = {props.listtype}
            />
            <Member
                list={props.list}
                total={props.total}
                type={type}
                showDetail={props.showDetail}
                pass = {props.pass}
                reject = {props.reject}
            />
        </div> : null
    }
    {
        props.params.title === 'trial' ?
        <div>
            <h2>{props.params.subtitle === 'all'?'全部试用':'试用审核'}</h2>
            <Toolbar
                type = {type}
                title = {props.params.title}
                exportTable = {props.exportTable}
                change = {props.changeData}
                pass = {props.passAll}
                listtype = {props.listtype}
            />
            <Trial
                list={props.list}
                total={props.total}
                type={type}
                showDetail={props.showDetail}
            />
        </div> : null
    }
    {
        props.params.title === 'feedback' ?
        <div>
            <h2>{props.params.subtitle === 'all'?'全部反馈':'反馈审核'}</h2>
            <Toolbar
                type = {type}
                title = {props.params.title}
                exportTable = {props.exportTable}
                change = {props.changeData}
                pass = {props.passAll}
                listtype = {props.listtype}
            />
            <Feedback
                list={props.list}
                total={props.total}
                type={type}
                showDetail={props.showDetail}
            />
        </div> : null
    }
   <DetailBox
        show={props.detail}
        showDetail={props.showDetail}
        data={props.cur}
        model={type}
    />
</div>
}

export default connect(
    mapStateToProps, {
        ...actions
    }
    // Implement map dispatch to props
)(Content)