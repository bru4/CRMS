import React, { Component } from 'react';
import Toolbar from './Toolbar'
import Tradelist from './Tradelist'
class Trade extends Component {
    
    componentWillMount() {
        this.props.actions.loadList({
            title: 'trial',
            subtitle: 'trade',
            type: 1,
        })
    }
    
    render() {
        const { datalist, actions } = this.props;
        const pagination = {
            total: datalist.total,
            pageSize: 20,
        }
        return (
            <div>
                <Toolbar
                    loadList = {actions.loadList}
                />
                <Tradelist
                    loading = {datalist.fetching}
                    dataSource = {datalist.list}
                    pagination = {pagination}
                />
            </div>
        );
    }
}

export default Trade;