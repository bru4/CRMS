import React, { Component } from 'react';
import Toolbar from './Toolbar'
import Tradelist from './Tradelist'
import { message, Modal } from 'antd'
class Trade extends Component {
    state = {
        mobile: '',
        type: '1',
        currentpage: 1,
    }

    componentWillMount() {
        this.props.actions.loadList({
            title: 'trial',
            subtitle: 'trade',
            type: 1,
            pagination: {
                currentpage: 0,
                pagesize: 20,
            },
        });
    }

    changeMobileHandle = e => {
        const val = e.target.value;
        if(Number(val) || e.target.value === '') {
            this.setState({
                mobile: val,
            });
        }
    };

    searchByMobile = () => {
        const { mobile } = this.state;
        const { loadList } = this.props.actions;
        if(mobile.length === 11) {
            loadList({
                title: 'trial',
                subtitle: 'trade',
                mobile: mobile,
            })
        } else {
            message.error('电话号码位数不足')
        }
    }

    changeTypeHandle = val => {
        const { loadList } = this.props.actions;
        this.setState({
            type: val,
            currentpage: 0,
        });
        loadList({
            title: 'trial',
            subtitle: 'trade',
            type: val,
            pagination: {
                currentpage: 0,
                pagesize: 20,
            }
        });
    };

    searchByType = () => {
        const { type } = this.state;
        const { loadList } = this.props.actions;
        loadList({
            title: 'trial',
            subtitle: 'trade',
            type: type,
            pagination: {
                currentpage: 0,
                pagesize: 20,
            }
        });
        this.setState({
            currentpage: 1,
        });
    }

    changePageHandle = current => {
        const { loadList } = this.props.actions;
        const { type } = this.state;
        this.setState({
            currentpage: current,
        });
        if(type !== '1') {
            loadList({
                title: 'trial',
                subtitle: 'trade',
                type: type,
                pagination: {
                    currentpage: --current,
                    pagesize: 20,
                },
            });
        }
    }

    resendHandle = (id) => {
        const { resendTrade } = this.props.actions;
        Modal.confirm({
            title: '操作确认',
            text: '是否确认 重新推送 该条试用记录？',
            onOk() {
                resendTrade(id);
            },
            onCancel() {},
        });
    }

    resendByHuman = (id) => {
        const { resendTradeHuman } = this.props.actions;
        Modal.confirm({
            title: '操作确认',
            text: '请确认是否已经在旺店通手动推单该条试用记录？',
            onOk() {
                resendTradeHuman(id);
            },
            onCancel() {},
        });
    }

    render() {
        const { mobile, type, currentpage } = this.state;
        const { datalist } = this.props;
        const pagination = {
            total: datalist.total,
            current: currentpage,
            pageSize: 20,
            onChange: this.changePageHandle,
        }
        return (
            <div>
                <Toolbar
                    type = {type}
                    changeType = {this.changeTypeHandle}
                    searchByType = {this.searchByType}
                    mobile = {mobile}
                    changeMobile = {this.changeMobileHandle}
                    searchByMobile = {this.searchByMobile}
                />
                <Tradelist
                    loading = {datalist.fetching}
                    dataSource = {datalist.list}
                    pagination = {pagination}
                    resend = {this.resendHandle}
                    resendByHuman = {this.resendByHuman}
                />
            </div>
        );
    }
}

export default Trade;