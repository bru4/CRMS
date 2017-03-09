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

    editSubmit = (data) => {
        console.log('in');
        this.props.form.validateFields((errors, values) => {
            console.log(errors, values);
            if(errors) {
                
            }
        })
        //this.props.actions.submitProductUpdate(data);
    }

    render() {
        const { showProductBox } = this.state;
        return (
            <div className='product'>
                <h2>试用产品维护</h2>
                <div className='product-body'>
                    <ProductList data={this.props.list}
                        toggleProductEditor={this.toggleProductBox}
                        toggleProductUsable={this.toggleProductUsable}
                    />
                    <ProductTrialList data={this.props.triallist} />
                </div>
                <Modal title="新建/修改试用产品"
                    visible={showProductBox}
                    onOk={this.editSubmit}
                    confirmLoading={this.state.loading}
                    onCancel={this.toggleProductBox}
                >
                    <ProductEditor form={this.props.form} />
                </Modal>
            </div>
        );
    }
}


export default Form.create({
    onFieldsChange: (props, fields) => {
        console.log(fields);
        if(fields.img) {
            let file = fields.img.value.file;
            fields.img.value = 'aaaaa.jpg';
            console.log(fields, file);
            props.actions.productChange(fields);
        } else {
            props.actions.productChange(fields);
        }
    },
    mapPropsToFields: ({editProduct}) => {
        const { name, ...other } = editProduct;
        return {
            firstname: { value: name.value.split(',')[0]},
            lastname: { value: name.value.split(',')[1]},
            ...other,
        }
    },
    onValuesChange(_, values) {
        console.log(values);
    },
})(Product);