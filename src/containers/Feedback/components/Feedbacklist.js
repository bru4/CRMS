import React from 'react'
import { Table } from 'antd';
import moment from'moment';
import {getTrueAnswer} from 'containers/constants'

const getQA = (list, index) => list.find(item => item.questionId === index).answer;
function Feedbacklist ({data, type, toggleDetail, toggleCheckbox, selectRows, selectedKeys, changePage}) {
    const pagination = {
        total: data.total,
        pageSize: 20,
        onChange: type==='all'
            ? (current)=>{
                changePage('feedback', current);
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
            fixed: 'left',
            render: (text, record, index) => index + 1,
        }, {
            title: '申请产品',
            key: 'productname',
            width: 150,
            fixed: 'left',
            dataIndex: 'productname',
            render: (text) => {
                let arr = text.split(';');
                
                return arr.length === 1 ? text: <div>
                    {arr.map((t,i)=> <div key={i}>{t}</div>)}
                </div>
            },
        }, {
            title: '姓名',
            key: 'truename',
            width: 80,
            fixed: 'left',
            dataIndex: 'truename',
        }, {
            title: '餐厅名称',
            key: 'restaurantname',
            width: 120,
            fixed: 'left',
            dataIndex: 'restaurantname',
        }, {
            title: '您用有点火试用调料制作的菜品是什么',
            key: 'q1',
            dataIndex: 'q1',
            width: 200,
            render: (text, record) => getQA(record.feedBacklist, 0)
        }, {
            title: '您用有点火调料的用法及用量',
            key: 'q2',
            dataIndex: 'q2',
            width: 250,
            render: (text, record) => getQA(record.feedBacklist, 1)
        }, {
            title: '您觉得有点火产品味道如何',
            key: 'q3',
            dataIndex: 'q3',
            width: 100,
            render: (text, record) => getTrueAnswer(getQA(record.feedBacklist, 2))
        }, {
            title: '味道的原因',
            key: 'q4',
            dataIndex: 'q4',
            width: 200,
            render: (text, record) => getQA(record.feedBacklist, 3)
        }, {
            title: '是否愿意购买',
            key: 'q5',
            dataIndex: 'q5',
            width: 100,
            render: (text, record) => getTrueAnswer(getQA(record.feedBacklist, 4))
        }, {
            title: '购买原因',
            key: 'q6',
            dataIndex: 'q6',
            width: 200,
            render: (text, record) => getQA(record.feedBacklist, 5)
        }, {
            title: '规格大小包装形式评价',
            key: 'q7',
            dataIndex: 'q7',
            width: 100,
            render: (text, record) => getTrueAnswer(getQA(record.feedBacklist, 6))
        }, {
            title: '包装原因',
            key: 'q8',
            dataIndex: 'q8',
            width: 200,
            render: (text, record) => getQA(record.feedBacklist, 7)
        }, {
            title: '申请日期',
            key: 'createtime',
            dataIndex: 'createtime',
            width: 80,
            fixed: 'right',
            render: text => <div>{moment(text).format('YYYY-MM-DD')}<br />{moment(text).format('HH:mm:ss')}</div>,
        }, {
            title: '操作',
            key: 'operation',
            width: 120,
            fixed: 'right',
                render: (text, record, index) => type === 'all'
                    ? <a onClick={() => toggleDetail({index, record, type: 'feedback'})}>查看</a>
                    : <div>
                        <a onClick={() => toggleDetail({index, record, type: 'feedback'})}>查看</a> | <a onClick={() => toggleCheckbox({index, record, type: 'feedback', result: 1})}>通过</a> | <a onClick={() => toggleCheckbox({index, record, type: 'feedback', result: 0})}>拒绝</a>
                    </div>,
        }
    ];
    if(type==='review') {
        columns.shift();
    }
    return(
        <Table
            loading={data.fetching}
            dataSource={data.list?data.list:[]}
            scroll={{ x: 1950, y: 400 }}
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

export default Feedbacklist