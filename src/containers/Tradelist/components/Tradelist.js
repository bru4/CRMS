import React from 'react'
import { Table } from 'antd'

const Tradelist = (props) => {
    const columns = [
        {
            title: '序号',
            key: 'idx',
            width: 50,
            render: (text, record, index) => index + 1,
        }, {
            title: '姓名',
            width: 70,
            key: 'truename',
            dataIndex: 'truename',
        }, {
            title: '手机号',
            width: 70,
            key: 'restaurantname',
            dataIndex: 'restaurantname',
        }, {
            title: '收货人姓名',
            width: 100,
            key: 'receivername',
            dataIndex: 'receivername',
        }, {
            title: '收货地址',
            width: 250,
            key: 'receiverdistrict',
            dataIndex: 'receiverdistrict',
        }, {
            title: '收货电话',
            width: 100,
            key: 'receivermobile',
            dataIndex: 'receivermobile',
        }, {
            title: '试用产品',
            width: 150,
            key: 'reason',
            dataIndex: 'reason',
        }, {
            title: '推送状态',
            key: 'source',
            width: 70,
            dataIndex: 'source',
            render: (text) => text === 0 ? '微信内' : '微信外',
        }, {
            title: '快递方式',
            key: 'state',
            width: 70,
            dataIndex: 'state',

        }, {
            title: '物流单号',
            key: 'status',
            dataIndex: 'status',
            width: 80,
        }, {
            title: '操作',
            key: 'operation',
            width: 120,
            render: (text, record, index) => {
            },
        }
    ];
    return(
        <Table
            columns={columns}
        />
    )
}

export default Tradelist