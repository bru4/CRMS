import React from 'react'
import { DatePicker, Row, Col, Button, Select, message } from 'antd';
const { RangePicker } = DatePicker;

const Toolbar = ({type, exportTable, change, pass, listtype, title, selected}) => {
    let timeRange = null;
    const selectTime = (dates) => {
		timeRange = dates;
	}
    const exportData = () => {
        if(timeRange===null){
            message.error('选择有效的日期');
        }else{
            exportTable({timeRange, listtype, title})
        }
    }
    const changeData = val => {
        change(title, val)
    }
    const passAll = () => {
        pass({index: selected.keys, record:selected.records, result:'1', type: title})
    }
    return(
        type==='all'?
        <Row className='toolbar'>
            <Col span={6} offset={2}>
                <RangePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    onChange={selectTime}
                    placeholder={['开始时间', '结束时间']}
                    disabledDate={current=>current && current.valueOf() > Date.now()}
                />
            </Col>
            <Col span={2} offset={1}><Button onClick={exportData}>导出会员</Button></Col>
            <Col span={2} offset={1}>
                <Select size="large" defaultValue="10" style={{ width: 200 }} onChange={changeData}>
                    <Select.Option value="10">全部会员</Select.Option>
                    <Select.Option value="2">已认证会员</Select.Option>
                    <Select.Option value="3">认证失败会员</Select.Option>
                </Select>
            </Col>
        </Row>:
        <Row className='toolbar'>
            <Col span={2} offset={1}><Button onClick={passAll}>批量通过</Button></Col>
        </Row>
    )
}

export default Toolbar