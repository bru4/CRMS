import React from 'react'
import { Form, Input, Upload, Icon } from 'antd';

const ProductEditor = ({form}) => {
    const { getFieldDecorator, getFieldValue } = form;
    const img = getFieldValue('img')
    return(
        <Form className='product-editor'>
            <Form.Item className='item' label='产品名称:'>
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: '请输入产品名称!' }],
                })(
                    <Input className='input' />
                )}
            </Form.Item>
            <Form.Item className='item' label='产品编码:'>
                {getFieldDecorator('code', {
                    rules: [{ required: true, message: '请输入产品编码!' }],
                })(
                    <Input className='input' />
                )}
            </Form.Item>
            <Form.Item className='item' label='产品图片:'>
                {getFieldDecorator('img', {
                    rules: [{ required: true, message: '请上传产品图片!' }],
                })(
                    <Upload
                        className="avatar-uploader"
                        name="avatar"
                        showUploadList={false}
                        //action="/upload.do"
                        fileList={[img]}
                    >
                        {
                            img ?
                            <img src={img} alt="" className="avatar" /> :
                            <Icon type="plus" className="uploader-trigger" />
                        }
                    </Upload>
                )}
            </Form.Item>
        </Form>
    )
}

export default Form.create({
    mapPropsToFields: ({product}) => {
        return {
            name: { value: product.name},
            code: { value: product.code},
            img: { value: product.img},
        }
    },
    onValuesChange: (props, values) => {
        console.log(values)
    },
})(ProductEditor);