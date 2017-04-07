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
        return (
            <div>
                <Toolbar />
                <Tradelist />
            </div>
        );
    }
}

export default Trade;