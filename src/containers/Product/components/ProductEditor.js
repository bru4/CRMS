import React from 'react'
import { Form, Input, Upload, Icon } from 'antd';

const ProductEditor = ({form}) => {
    const { getFieldDecorator, getFieldProps, getFieldValue } = form;
    const img = getFieldValue('img');
    return(
        <Form className='product-editor'>
            <div className="name-box">
            <Form.Item className='item-firstname' label='产品名称:'>
                {getFieldDecorator('firstname', {
                    rules: [{ required: true, message: '请输入产品名称!' }],
                })(
                    <Input className='input' />
                )}
            </Form.Item>
            <Form.Item className='item-lastname'>
                {getFieldDecorator('lastname', {
                    rules: [{ required: true, message: '请输入产品名称!' }],
                })(
                    <Input className='input' />
                )}
            </Form.Item>
            </div>
            <Form.Item className='item' label='产品编码:'>
                {getFieldDecorator('code', {
                    rules: [
                        { required: true, message: '请输入产品编码!' },
                        { len: 6, message: '产品编码长度错误'}
                    ],
                })(
                    <Input className='input' maxLength='6' />
                )}
            </Form.Item>
            <Form.Item className='item' label='产品图片:'>
                <Upload
                    className="avatar-uploader"
                    name="avatar"
                    showUploadList={false}
                    {...getFieldProps('img', {
                        rules: [{ required: true, message: '请上传产品图片!' }],
                    })}
                >
                    {
                        img ?
                        <img src={img} alt="" className="avatar" /> :
                        <Icon type="plus" className="uploader-trigger" />
                    }
                </Upload>
            </Form.Item>
        </Form>
    )
}

export default ProductEditor;