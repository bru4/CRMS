import React, { Component } from 'react';

class Product extends Component {
    
    componentWillMount() {
        this.props.actions.getTrialProduct();
    }
    
    render() {
        return (
            <div>
                <h2>试用产品维护</h2>
            </div>
        );
    }
}


export default Product;