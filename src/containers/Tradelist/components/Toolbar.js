import React from 'react'
import { Row, Col, Button, Select, Input } from 'antd';

const Toolbar = (props) => {
    return(
        <Row className='toolbar'>
            <Col span={1} offset={2}>手机号：</Col>
            <Col span={3}><Input /></Col>
            <Col span={2} offset={1}>
                <Button>搜索</Button>
            </Col>
            <Col span={3} offset={8}>
                <Select style={{ width: '90%' }}>
                    <Select.Option value='推送成功'>推送成功</Select.Option>
                    <Select.Option value='推送失败'>推送失败</Select.Option>
                    <Select.Option value='全部推送'>全部推送</Select.Option>
                </Select>
            </Col>
            <Col span={2}>
                <Button>确定</Button>
            </Col>
        </Row>
    )
}

export default Toolbar