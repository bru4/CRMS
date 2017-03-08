import React, { Component } from 'react';
import ProductList from './ProductList'
import ProductTrialList from './ProductTrialList'
import { Modal } from 'antd';
import ProductEditor from './ProductEditor'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProductBox: false,
            editProduct: {},
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
            this.setState({
                editProduct: {},
            });
        } else if(data.code) {
            this.setState({
                editProduct: data,
            });
        }
        this.setState({
            showProductBox: !this.state.showProductBox,
        });
    }
    
    editSubmit() {
        console.log('in');
    }

    render() {
        const { showProductBox, editProduct } = this.state;
        return (
            <div className='product'>
                <h2>试用产品维护</h2>
                <div className='product-body'>
                    <ProductList data={this.props.list} toggleProductEditor={this.toggleProductBox} />
                    <ProductTrialList data={this.props.triallist} />
                </div>
                <Modal title="新建/修改试用产品"
                    visible={showProductBox}
                    onOk={this.editSubmit}
                    confirmLoading={this.state.loading}
                    onCancel={this.toggleProductBox}
                >
                    <ProductEditor product={editProduct} />
                </Modal>
            </div>
        );
    }
}


export default Product;