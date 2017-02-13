import { connect } from 'react-redux'
import React from 'react'
import { Form, Input, Button, Col, Row } from 'antd'
import * as actions from './actions'
import reducer from './reducer'

const Option = ({addCoupon, form}) => {
    console.log(form);
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 10 },
    }
    const buttonItemLayout = {
        wrapperCol: { span: 10, offset: 8 }
    }
    const checkCoupon = (e) => {
        e.preventDefault();
        console.log('in')
    }
    const { getFieldDecorator } = form;
    return(
        <div>
            <h2>注册送券设置</h2>
            <Form onSubmit={checkCoupon}>
                <Form.Item
                    label="类型"
                    {...formItemLayout}
                >
                    {getFieldDecorator('type')(<Input placeholder="输入优惠券的类型" />)}
                </Form.Item>
                <Form.Item
                    label="名称"
                    {...formItemLayout}
                >
                    {getFieldDecorator('name')(<Input placeholder="输入优惠券的名称" />)}
                </Form.Item>
                <Form.Item
                    label="编号"
                    {...formItemLayout}
                >
                    {getFieldDecorator('id')(<Input placeholder="输入优惠券的编号" />)}
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Row gutter={30}>
                        <Col span={4}>
                            <Button type="primary" size="large"  htmlType="submit">提交</Button>
                        </Col>
                        <Col span={4}>
                            <Button type="primary" size="large" htmlType="reset">重置</Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        coupon: state.coupon,
    }
}

export default connect(
    mapStateToProps,{
        ...actions,
    }
)(Form.create({
    onFieldsChange: (props, fields)=>{
        props.changeCouponInfo(fields);
    },
    mapPropsToFields: ({coupon}) => ({
        type: coupon.type,
        name: coupon.name,
        id: coupon.id,
    }),
    onValuesChange: (props, values) => {
        console.log(values)
    },
})(Option))

export {
    actions,
    reducer,
}