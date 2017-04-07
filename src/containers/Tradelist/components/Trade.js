import React, { Component } from 'react';
import Toolbar from './Toolbar'
import Tradelist from './Tradelist'
class Trade extends Component {
    
    componentWillMount() {
        this.props.actions.loadList({
            title: 'trial',
            subtitle: 'trade',
        })
    }
    
    render() {
        const { datalist } = this.props;
        const pagination = {
            pageSize: 20
        }
        return (
            <div>
                <Toolbar />
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