import React, { Component } from 'react';
import DetailBox from 'components/DetailBox'
import { Modal } from 'antd'
import Toolbar from 'components/Toolbar'
import Triallist from './Triallist'

class Trial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            page: 1,
        }
    }

    componentDidMount() {
        this.props.loadList({
            title: 'trial',
            subtitle: this.props.type,
        })
    }
    
    componentWillUpdate(nextProps, nextState) {
        if(nextProps.type !== nextState.type) {
            this.props.loadList({
                title: 'trial',
                subtitle: nextProps.type,
            });
            this.setState({
                type: nextProps.type,
                page: 1,
            });
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

    changePageHandle = current => {
        const { type, changePage } = this.props;
        this.setState({
            page: current,
        });
        if(type === 'all') {
            changePage('trial', --current);
        }
    }

    render() {
        const { userlist, type } = this.props;
        const pagination = {
            total: userlist.total,
            pageSize: 20,
            onChange: this.changePageHandle,
            current: this.state.page,
        }
        return (
        <div>
            <h2>{type === 'all'?'全部试用':'试用审核'}</h2>
            <Toolbar
                type = {type}
                title = 'trial'
                exportTable = {this.props.exportTable}
                change = {this.props.changeData}
                pass = {this.clickHandleCheckbox}
                listtype = {this.props.userlist.listtype}
                selected = {this.props.selected}
            />
            <Triallist
                type = {this.props.type}
                pagination = {pagination}
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

export default Trial;