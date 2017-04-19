import React from 'react'
import { Row, Col, Button, Select, Input } from 'antd';

const Toolbar = ({ type, changeType, mobile, changeMobile, searchByMobile }) => {
    return(
        <Row className='toolbar'>
            <Col span={1} offset={2}>手机号：</Col>
            <Col span={3}>
                <Input
                    maxLength = '11'
                    onChange = {changeMobile}
                    value = {mobile}
                />
            </Col>
            <Col span={2} offset={1}>
                <Button onClick={searchByMobile}>搜索</Button>
            </Col>
            <Col span={3} offset={10}>
                <Select
                    style = {{width: '100%'}}
                    defaultValue = {type}
                    value = {type}
                    onChange = {changeType}
                >
                    <Select.Option value='2'>推送成功</Select.Option>
                    <Select.Option value='1'>推送失败</Select.Option>
                    <Select.Option value='10'>全部推送</Select.Option>
                </Select>
            </Col>
        </Row>
    )
}

export default Toolbar