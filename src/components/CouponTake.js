import React, { Component, PropTypes } from 'react';
import { Select, Button } from 'antd';

class CouponTake extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coupon: '',
        }
    }
    onClickHandle = () => {
        if(this.state.coupon){
            this.props.take(this.state.coupon);
            this.setState({
                coupon: '',
            });
        }
    }
    onChangeHandle = val => {
        this.setState({
            coupon: val,
        });
    }
    render() {
        return (
            <span>
                <Select value={this.state.coupon} style={this.props.iptStyle} onChange={this.onChangeHandle}>
                {
                    this.props.data.map((t, i)=><Select.Option key={i} value={t.group_id}>{t.title}</Select.Option>)
                }
                </Select>
                <Button onClick={this.onClickHandle}>确定</Button>
            </span>
        );
    }
}

CouponTake.propTypes = {
    data: PropTypes.array,
    take: PropTypes.func,
};

export default CouponTake;