import React, { Component } from 'react';
import Feedbacklist from './Feedbacklist'
import Toolbar from 'components/Toolbar'
import DetailBox from 'components/DetailBox'
import { Modal } from 'antd'

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
        }
    }

    componentDidMount() {
        this.props.loadList({
            title: 'feedback',
            subtitle: this.props.type,
        })
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextProps.type !== nextState.type) {
            this.props.loadList({
                title: 'feedback',
                subtitle: nextProps.type,
            });
            this.setState({type: nextProps.type});
        }
    }

    clickHandleCheckbox = res => {
        let text = res.result===1?'是否确定 通过 此用户的审核申请?':'是否确定 拒绝 此用户的审核申请?'
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

export default Feedback;