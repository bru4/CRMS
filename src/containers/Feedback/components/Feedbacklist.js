import React from 'react'
import { Table } from 'antd';
import moment from'moment';

const getState = text => {
    switch (text) {
        case 0:
            return '未提交';
        case 1:
            return '待审核';
        case 2:
            return '已认证';
        case 3:
            return '认证失败';
        default:
            return text;
    }
}
const getQA = (list, index) => list&&list.length>0?<div>问题:{list[index].question} <br/> 回答:{list[index].answer}</div>:null;
const Feedbacklist = ({list, total, showDetail}) => {
    const pagination = {
        total: total,
        pageSize: 20,
        onChange: (current) => {
            console.log('Current: ', current);
        },
    }
    const columns = [{
        title: '序号',
        key: 'id',
        render: (text, record, index) => index + 1,
    }, {
        title: '申请产品',
        key: 'productname',
        dataIndex: 'productname',
    }, {
        title: '姓名',
        key: 'truename',
        dataIndex: 'truename',
    }, {
        title: '餐厅名称',
        key: 'restaurantname',
        dataIndex: 'restaurantname',
    }, {
        title: '问题1',
        key: 'q1',
        dataIndex: 'q1',
        render: (text, record) => getQA(record.feedBacklist, '0')
    }, {
        title: '问题2',
        key: 'q2',
        dataIndex: 'q2',
        render: (text, record) => getQA(record.feedBacklist, '1')
    }, {
        title: '问题3',
        key: 'q3',
        dataIndex: 'q3',
        render: (text, record) => getQA(record.feedBacklist, '2')
    }, {
        title: '问题4',
        key: 'q4',
        dataIndex: 'q4',
        render: (text, record) => getQA(record.feedBacklist, '3')
    }, {
        title: '问题5',
        key: 'q5',
        dataIndex: 'q5',
        render: (text, record) => getQA(record.feedBacklist, '4')
    }, {
        title: '问题6',
        key: 'q6',
        dataIndex: 'q6',
        render: (text, record) => getQA(record.feedBacklist, '5')
    }, {
        title: '问题7',
        key: 'q7',
        dataIndex: 'q7',
        render: (text, record) => getQA(record.feedBacklist, '6')
    }, {
        title: '问题8',
        key: 'q8',
        dataIndex: 'q8',
        render: (text, record) => getQA(record.feedBacklist, '7')
    }, {
        title: '状态',
        key: 'state',
        dataIndex: 'state',
        render: (text) => getState(text),
    }, {
        title: '试用状态',
        key: 'status',
        dataIndex: 'status',
        render: (text) => getState(text),
    }, {
        title: '操作',
        key: 'operation',
        render: (text, record, index) => <a onClick={()=>showDetail({index, record, type:'feedback'})}>查看</a>,
    }];
    return(
        <div>
            <Table
                loading={list?false:true}
                dataSource={list?list:[]}
                scroll={{ x: 1200 }}
                columns={columns}
                pagination={pagination}
                rowKey='mobile'
            />
        </div>
    )
}

export default Feedbacklist