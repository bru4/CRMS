import React from 'react'
import { Row, Col, Button, Select, Input, message } from 'antd';

const Toolbar = ({loadList}) => {
    let state = '1',
        mobile = '';
    const onSelectHandle = () => {
        loadList({
            title: 'trial',
            subtitle: 'trade',
            type: state,
        })
    }
    const searchByMobile = () => {
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
    return(
        <Row className='toolbar'>
            <Col span={1} offset={2}>手机号：</Col>
            <Col span={3}>
                <Input
                    maxLength = '11'
                    onChange = {e => Number(e.target.value) ? mobile = e.target.value : e.target.value = ''}
                />
            </Col>
            <Col span={2} offset={1}>
                <Button onClick={searchByMobile}>搜索</Button>
            </Col>
            <Col span={3} offset={8}>
                <Select
                    style = {{width: '90%'}}
                    defaultValue = {state}
                    onChange = {val => state = val}
                >
                    <Select.Option value='2'>推送成功</Select.Option>
                    <Select.Option value='1'>推送失败</Select.Option>
                    <Select.Option value='10'>全部推送</Select.Option>
                </Select>
            </Col>
            <Col span={2}>
                <Button onClick={onSelectHandle}>确定</Button>
            </Col>
        </Row>
    )
}

export default Toolbar