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

const Triallist = ({list, total, showDetail}) => {
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
        title: '申请日期',
        key: 'createtime',
        dataIndex: 'createtime',
        render: text => moment(text).format('YYYY-MM-DD HH:mm:ss'),
    }, {
        title: '收货人姓名',
        key: 'receivername',
        dataIndex: 'receivername',
    }, {
        title: '收货电话',
        key: 'receivermobile',
        dataIndex: 'receivermobile',
    }, {
        title: '收货地址',
        key: 'receiverdistrict',
        dataIndex: 'receiverdistrict',
    }, {
        title: '申请理由',
        key: 'reason',
        dataIndex: 'reason',
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
        render: (text, record, index) => <a onClick={()=>showDetail({index, record, type:'trial'})}>查看</a>,
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

export default Triallist