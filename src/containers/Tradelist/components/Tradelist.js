import React from 'react'
import { Table } from 'antd'
import { getSyncState, getLogisticsType } from '../contant'
const Tradelist = ({resend, resendByHuman, ...other}) => {
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
            render: (text, record) => text === 1 ?<a onClick={() => resend(record.tradeId)}>{getSyncState(text)}</a> : getSyncState(text) ,
        }, {
            title: '快递方式',
            width: 70,
            key: 'logisticsType',
            dataIndex: 'logisticsType',
            render: text => getLogisticsType(text),
        }, {
            title: '物流单号',
            width: 100,
            key: 'logisticsNo',
            dataIndex: 'logisticsNo',
            render: (text, record) => {
                let lt = record.logisticsType;
                let type = '';
                switch (lt) {
                    case 3:
                        type = 'ems';
                        break;
                    case 5:
                        type = 'zhongtong';
                        break;
                    case 16:
                        type = 'tiantian';
                        break;
                    case 10:
                        type = 'huitongkuaidi';
                        break;
                    default:
                        break;
                }
                return text && text.length > 4 ? <a target='_blank' href={`https://www.kuaidi100.com/chaxun?com=${type}&nu=${text}`}>{text}</a> : text
            },
        }, {
            title: '操作',
            key: 'operation',
            width: 120,
            render: (text, record) => record.syncStatus === 1 && <span><a onClick={() => resend(record.tradeId)}>重新推送</a> | <a onClick={() => resendByHuman(record.tradeId)}>手动建单</a></span>,
        }
    ];
    return(
        <Table
            columns = {columns}
            rowKey = 'tradeId'
            {...other}
        />
    )
}

export default Tradelist