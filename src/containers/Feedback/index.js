import React, { Component } from 'react';
import { connect } from 'react-redux'
//import * as constants from './constants';
//import reducer from './reducer';
//import * as selectors from './selectors';
import { actions } from 'containers/Content'

import Feedbacklist from './components/Feedbacklist'
import Toolbar from 'components/Toolbar'
import { selectors as navSelectors } from 'containers/Nav'
import DetailBox from 'components/DetailBox'
import { Modal } from 'antd'

class Feedback extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.loadList({
            title: 'feedback',
            subtitle: this.props.type,
        })
    }

    clickHandleCheckbox = res => {
        let text = res.result==='1'?'是否确定 通过 此用户的认证申请?':'是否确定 拒绝 此用户的认证申请?'
        Modal.confirm({
            title: '操作确认',
            content: text,
            onOk: ()=>{
                this.props.uploadResult(res);
            },
            onCancel: ()=>{},
        })
        //this.props.toggleCheckbox
    }

    render() {
        return (
        <div>
            <h2>{this.props.type === 'all'?'全部反馈':'反馈审核'}</h2>
            <Toolbar
                type = {this.props.type}
                title = 'feedback'
                exportTable = {this.props.exportTable}
                change = {this.props.changeData}
                pass = {this.clickHandleCheckbox}
                listtype = {this.props.userlist.listtype}
                selected = {this.props.selected}
            />
            <Feedbacklist
                type = {this.props.type}
                data = {this.props.userlist}
                toggleDetail = {this.props.toggleDetail}
                toggleCheckbox = {this.clickHandleCheckbox}
                selectRows = {this.props.selectRows}
                selectedKeys = {this.props.selected.keys}
                changePage = {this.props.changePage}
            />
            <DetailBox
                show = {this.props.base.detail}
                data = {this.props.cur}
                toggleDetail = {this.props.toggleDetail}
                model = {this.props.type}
                toggleCheckbox = {this.clickHandleCheckbox}
            />
        </div>
        );
    }
}
const mapStateToProps = (state) => ({
    type: navSelectors.typeSelector(state),
    ...state.content,
});

export default connect(
    mapStateToProps, {
        ...actions,
    }
)(Feedback)

export {
	//constants,
	//reducer,
	//selectors,
};