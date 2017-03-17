import { connect } from 'react-redux'
import React from 'react'
import { Form, Input, Button, Col, Row, Select } from 'antd'
import * as actions from './actions'
import reducer from './reducer'

function Option ({addCoupon, form}) {
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 10 },
    }
    const buttonItemLayout = {
        wrapperCol: { span: 10, offset: 8 }
    }
    const checkCoupon = (e) => {
        e.preventDefault();
        form.validateFields((errors, values)=>{
            if (errors) {
                console.log(errors);
            } else {
                addCoupon(values);
            }
        });
    }
    const resetCoupon = () => {
        form.resetFields()
    }
    const { getFieldDecorator } = form;
    return(
        <div>
            <h2>注册送券设置</h2>
            <Form onSubmit={checkCoupon} onReset={resetCoupon}>
                <Form.Item
                    label="类型"
                    {...formItemLayout}
                >
                    {getFieldDecorator('type', {
                        rules: [{required: true, message: '必须输入优惠券类型'}],
                    })(
                        <Select placeholder="输入优惠券的类型">
                            <Select.Option value='0'>每月送券</Select.Option>
                            <Select.Option value='1'>反馈完成送券</Select.Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item
                    label="名称"
                    {...formItemLayout}
                >
                    {getFieldDecorator('name', {
                        rules: [{required: true, message: '必须输入优惠券名称'}],
                    })(<Input placeholder="输入优惠券的名称" />)}
                </Form.Item>
                <Form.Item
                    label="编号"
                    {...formItemLayout}
                >
                    {getFieldDecorator('id', {
                        rules: [{type: 'number', required: true, message: '必须输入优惠券id编号(数字)'}],
                        getValueFromEvent: (e) => Number(e.target.value),
                    })(<Input placeholder="输入优惠券的编号" />)}
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
        //props.changeCouponInfo(fields);
    },
})(Option))

export {
    actions,
    reducer,
}