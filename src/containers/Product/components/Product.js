import React, { Component } from 'react';
import ProductList from './ProductList'
import ProductTrialList from './ProductTrialList'
import { Modal, Form } from 'antd';
import ProductEditor from './ProductEditor'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProductBox: false,
            loading: false,
        }
    }
    
    componentWillMount() {
        this.props.actions.loadList({
            title: 'trial',
            subtitle: 'product',
        });
        this.props.actions.getUploadSign();
    }

    toggleProductBox = (data) => {
        if(typeof data === 'string'){
            this.props.actions.editProductUpdate(null);
        } else if(data.code) {
            this.props.actions.editProductUpdate(data);
        }
        this.setState({
            showProductBox: !this.state.showProductBox,
        });
    }

    toggleProductUsable = ({code, isused}) => {
        console.log(code, isused);
        this.props.actions.submitProductUpdate({
            code,
            isused: isused ? 0 : 1,
        });
    }

    editSubmit = () => {
        console.log('editSubmit');
        console.log(this.props.editProduct);
        const { actions, form } = this.props;
        form.validateFields((errors, values) => {
            console.log(errors, values);
            if(errors) {
                console.log(errors);
            } else {
                console.log(values);
                actions.submitProductUpdate({
                    name: `${values.firstname},${values.lastname}`,
                    code: values.code,
                });
                this.setState({
                    showProductBox: !this.state.showProductBox,
                });
            }
        })
        //this.props.actions.submitProductUpdate(data);
    }

    render() {
        const { showProductBox } = this.state;
        const { list, triallist, form, sign, actions } = this.props;
        return (
            <div className='product'>
                <h2>试用产品维护</h2>
                <div className='product-body'>
                    <ProductList data={list}
                        toggleProductEditor={this.toggleProductBox}
                        toggleProductUsable={this.toggleProductUsable}
                    />
                    <ProductTrialList data={triallist} />
                </div>
                <Modal title="新建/修改试用产品"
                    visible={showProductBox}
                    onOk={this.editSubmit}
                    confirmLoading={this.state.loading}
                    onCancel={this.toggleProductBox}
                >
                    <ProductEditor
                        sign={sign}
                        form={form}
                        getImageUrl={actions.getImageUrl}
                    />
                </Modal>
            </div>
        );
    }
}


export default Form.create({
    onFieldsChange: (props, fields) => {
        if(fields.picture) {
            console.log('onFieldsChange');
            console.log(fields);
            let file = fields.picture.value.file;
            if(file.status === 'removed'){
                props.actions.removeImageUrl(file);
            } else {
                props.actions.getImageUrl(file);
            }
        } else {
            props.actions.productChange(fields);
        }
    },
    mapPropsToFields: ({editProduct}) => {
        const { name, picture, code, isused } = editProduct;
        console.log('mapPropsToFields:');
        console.log(isused);
        console.log(picture);
        return {
            firstname: { value: name.value.split(',')[0]},
            lastname: { value: name.value.split(',')[1]},
            isused: { value: isused.value },
            code: { value: code.value },
            picture: {
                value: {
                    file: {
                        uid: 0,
                        name: name.value,
                        status: 'done',
                        url: picture.value,
                    },
                    fileList: picture.value ? [{
                        uid: 0,
                        name: name.value,
                        status: 'done',
                        url: picture.value,
                    }] : [],
                },
            },
        }
    },
    onValuesChange(_, values) {
        console.log(values);
    },
})(Product);