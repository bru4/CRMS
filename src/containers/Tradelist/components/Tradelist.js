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
            key: 'name',
            dataIndex: 'name',
        }, {
            title: '手机号',
            width: 100,
            key: 'mobile',
            dataIndex: 'mobile',
        }, {
            title: '收货人姓名',
            width: 70,
            key: 'receiverName',
            dataIndex: 'receiverName',
        }, {
            title: '收货地址',
            width: 250,
            key: 'receiverAddress',
            dataIndex: 'receiverAddress',
        }, {
            title: '收货电话',
            width: 100,
            key: 'receiverMobile',
            dataIndex: 'receiverMobile',
        }, {
            title: '试用产品',
            width: 100,
            key: 'product',
            dataIndex: 'product',
        }, {
            title: '推送状态',
            width: 70,
            key: 'syncStatus',
            dataIndex: 'syncStatus',
            render: (text) => {
                console.log(text);
                switch (text) {
                    case 0:
                        return '未推送';
                    case 1:
                        return '推送失败';
                    case 2:
                        return '已推送';
                    default:
                        return text;
                }
            },
        }, {
            title: '快递方式',
            width: 70,
            key: 'logisticsType',
            dataIndex: 'logisticsType',

        }, {
            title: '物流单号',
            width: 100,
            key: 'logisticsNo',
            dataIndex: 'logisticsNo',
        }, {
            title: '操作',
            key: 'operation',
            width: 80,
            render: (text, record) => record.syncStatus === 1 ? <a>重新推送</a> : null,
        }
    ];
    return(
        <Table
            columns = {columns}
            rowKey = 'tradeId'
            {...props}
        />
    )
}

export default Tradelist