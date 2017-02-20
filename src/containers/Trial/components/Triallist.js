import React from 'react'
import { Table } from 'antd';
import moment from'moment';
import {getState, getStatus} from 'containers/constants'

const Triallist = ({data, type, toggleDetail, toggleCheckbox, selectRows, selectedKeys, changePage}) => {
    const pagination = {
        total: data.total,
        pageSize: 20,
        onChange: type==='all'
            ? (current)=>{
                changePage('trial', current);
            }
            : (current)=>{
                console.log(current);
            }
    }
    const columns = [
        {
            title: '序号',
            key: 'idx',
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
            title: '认证状态',
            key: 'state',
            dataIndex: 'state',
            render: (text, record, index) => {
                let state = getState(text);
                if(type === 'all'){
                    return state;
                }
                return text===1?<a onClick={() => toggleDetail({index, record, type: 'member'})}>{state}</a>:state;
            },
        }, {
            title: '试用状态',
            key: 'status',
            dataIndex: 'status',
            render: (text) => getStatus(text),
        }, {
            title: '操作',
            key: 'operation',
            width: 120,
            render: (text, record, index) => {
                if(type === 'all'){
                    return <a onClick={() => toggleDetail({index, record, type: 'trial'})}>查看</a>
                } else {
                    return record.state === 2
                    ? <div>
                        <a onClick={() => toggleDetail({index, record, type: 'trial'})}>查看</a> | <a onClick={() => toggleCheckbox({index, record, type: 'trial', result:'1'})}>通过</a> | <a onClick={() => toggleCheckbox({index, record, type: 'trial', result:'0'})}>拒绝</a>
                    </div>
                    : <a onClick={() => toggleDetail({index, record, type: 'trial'})}>查看</a>
                }
            },
        }
    ];
    if(type==='review'){
        columns.shift();
    }
    return(
        <Table
            loading={data.fetching}
            dataSource={data.list?data.list:[]}
            scroll={{ x: 1200 }}
            columns={columns}
            pagination={pagination}
            rowKey='recordid'
            rowSelection={type === 'all' ? null : {
                selectedRowKeys: selectedKeys,
                onChange: selectRows,
            }}
        />
    )
}

export default Triallist