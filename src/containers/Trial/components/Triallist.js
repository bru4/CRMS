import React from 'react'
import { Table } from 'antd';
import moment from'moment';
import {getState, getStatus} from 'containers/constants'
import { contant } from '../../Tradelist'
const { getSyncState } = contant;
function Triallist({data, type, toggleDetail, toggleCheckbox, selectRows, selectedKeys, pagination}) {
    const columns = [
        {
            title: '序号',
            key: 'idx',
            width: 50,
            render: (text, record, index) => index + 1,
        }, {
            title: '申请产品',
            width: 150,
            key: 'productname',
            dataIndex: 'productname',
            render: (text) => {
                let arr = text.split(';');
                
                return arr.length === 1 ? text: <div>
                    {arr.map((t,i)=> <div key={i}>{t}</div>)}
                </div>
            },
        }, {
            title: '姓名',
            width: 70,
            key: 'truename',
            dataIndex: 'truename',
        }, {
            title: '餐厅名称',
            width: 70,
            key: 'restaurantname',
            dataIndex: 'restaurantname',
        }, {
            title: '申请日期',
            width: 100,
            key: 'createtime',
            dataIndex: 'createtime',
            render: text => <div>{moment(text).format('YYYY-MM-DD')}<br />{moment(text).format('HH:mm:ss')}</div>,
        }, {
            title: '收货人姓名',
            width: 100,
            key: 'receivername',
            dataIndex: 'receivername',
        }, {
            title: '收货电话',
            width: 100,
            key: 'receivermobile',
            dataIndex: 'receivermobile',
        }, {
            title: '收货地址',
            width: 250,
            key: 'receiverdistrict',
            dataIndex: 'receiverdistrict',
        }, {
            title: '申请理由',
            width: 150,
            key: 'reason',
            dataIndex: 'reason',
        }, {
            title: '推送状态',
            width: 80,
            key: 'syncStatus',
            dataIndex: 'syncStatus',
            render: (text) => getSyncState(text),
        }, {
            title: '物流单号',
            width: 120,
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
                    case 20:
                        type = 'huitongkuaidi';
                        break;
                    default:
                        break;
                }
                return text.length > 4 ? <a target='_blank' href={`https://www.kuaidi100.com/chaxun?com=${type}&nu=${text}`}>{text}</a> : text
            },
        }, {
            title: '来源类型',
            key: 'source',
            width: 70,
            dataIndex: 'source',
            render: (text) => text === 0 ? '微信内' : '微信外',
        }, {
            title: '认证状态',
            key: 'state',
            width: 70,
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
            width: 80,
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
                        <a onClick={() => toggleDetail({index, record, type: 'trial'})}>查看</a> | <a onClick={() => toggleCheckbox({index, record, type: 'trial', result: 1})}>通过</a> | <a onClick={() => toggleCheckbox({index, record, type: 'trial', result: 0})}>拒绝</a>
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