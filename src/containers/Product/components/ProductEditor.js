import { Form, Input, Upload, Icon, Modal, message } from 'antd';
import React, { Component } from 'react';

class PicturesWall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            sign: '',
        }
    }
    
    componentWillMount() {
        const sign = fetch('http://cs.udianhuo.com/crms/api/center/wxyt/getsign?type=upload')
            .then(res=> res.json())
            .then(res=>res.data.sign)
            .catch(error => error);
        sign.then((val) => {
            if(val.msg){
                message.error(val.msg);
                return;
            }
            this.setState({sign: val});
        })

    }

    /*chooseFile = () => {
        console.log('in')
    }*/

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        console.log(file);
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => this.setState({ fileList });
    handleRemove = ({ fileList }) => this.setState({ fileList });
    onSuccess(ret) {
        console.log('onSuccess', ret);
    }

    onError(err) {
        console.log('onError', err);
    }

    render() {
        console.log(this.props);
        const { previewVisible, sign } = this.state;
        const { fileList } = this.props;
        //const show = !!fileList.length;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
        <div className="clearfix">
            <Upload
                action="http://web.image.myqcloud.com/photos/v2/10019081/activity10/0/"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onRemove={this.handleRemove}
                onSuccess={this.onSuccess}
                onError={this.onError}
                headers={{
                    Authorization: sign,
                }}
            >
                { fileList.length ? null : uploadButton }
            </Upload>
            {/*<input type="file" ref='imginput' />
            <div className='img-item' onClick={this.chooseFile}>
                {
                    this.props.value ? <img src={this.props.value} alt=""/> : uploadButton
                }
            </div>*/}
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={this.props.value} />
            </Modal>
        </div>
        );
    }
}

const ProductEditor = ({form}) => {
    const { getFieldDecorator, getFieldProps, getFieldValue } = form;
    const picture = getFieldValue('picture');
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
                {getFieldDecorator('picture', {
                    rules: [{ required: true, message: '请输入产品名称!' }],
                })(
                    <PicturesWall />
                )}
                    {/*<PicturesWall
                        fileList = {
                            picture
                            ? [{
                                uid: 0,
                                status: 'done',
                                url: picture,
                            }]
                            : []
                        }
                    />*/}
            </Form.Item>
        </Form>
    )
}

export default ProductEditor;