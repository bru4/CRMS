import React, { Component } from 'react';
import { connect } from 'react-redux'

class Order extends Component {
    render() {
        return (
            <div>
                <h2>订单系统</h2>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.order,
    }
}

export default connect(
    mapStateToProps,
)(Order)