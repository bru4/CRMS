import React from 'react'
import { Table, Button } from 'antd'
const ProductList = ({data, toggleProductEditor}) => {
    const columns = [{
        title: '序号',
        key: 'id',
        width: 40,
        render: (text, record, index) => index + 1,
    }, {
        title: '图片',
        width: 100,
        key: 'img',
        dataIndex: 'img',
        render: (text) => <img className='product-img' src={text} />,
    }, {
        title: '产品名称',
        width: 120,
        key: 'name',
        dataIndex: 'name',
    }, {
        title: '产品编码',
        width: 100,
        key: 'code',
        dataIndex: 'code',
    }, {
        title: '是否试用',
        width: 100,
        key: 'isused',
        dataIndex: 'isused',
        render: (text) => text === 0 ? '否' : '是',
    }, {
        title: '操作',
        width: 70,
        key: 'operation',
        render: (text, record, index) => <a key={index} onClick={()=>toggleProductEditor(record)}>操作</a> ,
    }];
    return(
        <div className="productList">
            <Button onClick={() => toggleProductEditor('add')}>新增产品</Button>
            <Table
                className='product-table'
                dataSource={data?data:[]}
                columns={columns}
                pagination={false}
                scroll={{y: 530}}
                rowKey='code'
            />
        </div>
    )
}

export default ProductList;