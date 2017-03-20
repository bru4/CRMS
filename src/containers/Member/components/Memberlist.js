import React from 'react';
import {Table} from 'antd';
import moment from 'moment';
import {averagespend, profession, shoptype, getState} from 'containers/constants'

function Memberlist ({data, type, toggleDetail, toggleCheckbox, selectRows, selectedKeys, changePage}) {
    const pagination = {
        total: data.total,
        pageSize: 20,
        onChange: type==='all'
            ? (current)=>{
                changePage('member', current);
            }
            : (current)=>{
                console.log(current);
            }
    }
    const columns = [
        {
            title: '序号',
            key: 'id',
            width: 50,
            render: (text, record, index) => index + 1
        }, {
            title: '手机号',
            key: 'mobile',
            dataIndex: 'mobile',
            width: 120,
        }, {
            title: '姓名',
            key: 'truename',
            dataIndex: 'truename',
            width: 120,
        }, {
            title: '餐厅名称',
            key: 'restaurantname',
            dataIndex: 'restaurantname',
            width: 120,
        }, {
            title: '创建日期',
            key: 'createtime',
            dataIndex: 'createtime',
            width: 90,
            render: text => <div>{moment(text).format('YYYY-MM-DD')}<br />{moment(text).format('HH:mm:ss')}</div>,
        }, {
            title: '职位',
            key: 'position',
            dataIndex: 'position',
            width: 120,
            render: (text) => {
                //console.log(typeof text)
                let item = profession.find(i => i.value == text);//正式应该用"==="号这里为了mock数据可以正确显示采用"=="
                return item
                    ? item.label
                    : text;
            },
        }, {
            title: '业态',
            key: 'mode',
            dataIndex: 'mode',
            width: 120,
            render: (text) => {
                let item = shoptype.find(i => i.value == text);//正式应该用"==="号这里为了mock数据可以正确显示采用"=="
                return item
                    ? item.label
                    : text;
            },
        }, {
            title: '人均消费',
            key: 'price',
            dataIndex: 'price',
            width: 120,
            render: (text) => {
                let item = averagespend.find(i => i.value == text);//正式应该用"==="号这里为了mock数据可以正确显示采用"=="
                return item
                    ? item.label
                    : text;
            },
        }, {
            title: '地址',
            key: 'restaurantaddress',
            dataIndex: 'restaurantaddress',
            width: 200,
        }, {
            title: '来源类型',
            key: 'source',
            width: 70,
            dataIndex: 'source',
            render: (text) => text === 0 ? '微信内' : '微信外',
        }, {
            title: '状态',
            key: 'state',
            dataIndex: 'state',
            width: 120,
            render: (text) => getState(text),
        }, {
            title: '操作',
            key: 'operation',
            width: 120,
            render: (text, record, index) => type === 'all'
                ? <a onClick={() => toggleDetail({index, record, type: 'member'})}>查看</a>
                : <div>
                    <a onClick={() => toggleDetail({index, record, type: 'member'})}>查看</a> | <a onClick={() => toggleCheckbox({index, record, type: 'member', result: 1})}>通过</a> | <a onClick={() => toggleCheckbox({index, record, type: 'member', result: 0})}>拒绝</a>
                </div>,
        }
    ];
    if(type==='review'){
        columns.shift();
    }
    return (
        <Table
            rowClassName={(record, index) => index % 2 === 0 ? 'even' : 'odd'}
            loading={data.fetching}
            dataSource={data.list ? data.list : []}
            scroll={{x: 1200}}
            columns={columns}
            pagination={pagination}
            rowKey='mobile'
            rowSelection={type === 'all' ? null : {
                selectedRowKeys: selectedKeys,
                onChange: selectRows,
            }}
        />
    );
}

Memberlist.propTypes = {
    list: React.PropTypes.array,
    total: React.PropTypes.number
}

export default Memberlist;
