import React from 'react'
import { Table, Button } from 'antd'
function ProductList ({data, toggleProductEditor, toggleProductUsable}) {
    const columns = [{
        title: '序号',
        key: 'id',
        width: 40,
        render: (text, record, index) => index + 1,
    }, {
        title: '图片',
        width: 100,
        key: 'picture',
        dataIndex: 'picture',
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
        render: (text, record, index) => text === 0 ? <a key={index} onClick={()=>toggleProductUsable(record)}>否</a> : <a key={index} onClick={()=>toggleProductUsable(record)}>是</a>,
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