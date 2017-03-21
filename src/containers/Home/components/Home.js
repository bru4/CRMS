import React, { Component } from 'react';

class Home extends Component {
    
    componentWillMount() {
        const { getWxUserDate } = this.props.actions;
        getWxUserDate();
    }
    
    render() {
        return (
            <div>
                <h1>Index</h1>
            </div>
        );
    }
}

export default Home;