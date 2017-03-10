import { Form, Input, Upload, Icon, Modal } from 'antd';
import React, { Component } from 'react';

class ProductEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
        }
    }

    handlePreview = (file) => {
        console.log(file);
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleCancel = () => this.setState({ previewVisible: false })

    handleChange = ({ fileList }) => {
        console.log(fileList);
        //this.setState({ fileList })
    }

    render() {
        const { form, sign } = this.props;
        const { getFieldDecorator, getFieldValue } = form;
        const picture = getFieldValue('picture');
        const fileList = picture ? [{
            uid: 0,
            status: 'done',
            url: picture,
        }] : [];
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
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
                    {getFieldDecorator('picturelist', {
                        rules: [{ required: true, message: '请上传产品图片!' }],
                    })(
                        <Upload
                            name='filecontent'
                            action="http://web.image.myqcloud.com/photos/v2/10019081/activity10/0/"
                            listType="picture-card"
                            onPreview={this.handlePreview}
                            onChange={this.handleChange}
                            headers={{
                                Authorization: sign,
                            }}
                        >
                            { fileList.length ? null : uploadButton }
                        </Upload>
                    )}
                </Form.Item>
                <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={picture} />
                </Modal>
            </Form>
        );
    }
}

export default ProductEditor;