import React, { Component } from 'react'
import { Icon } from 'antd'
//import picitem from '../../../images/picitem.png'

export default class ProductItem extends Component {
    constructor(props) {
        super(props);
    }
    clickHandle = () => {
        this.props.choose(this.props.index, this.props.data)
    }
    render() {
        const { name, picture } = this.props.data;
        return (
            <figure className={this.props.checked?'trial-product-item checked':'trial-product-item'} onClick={this.clickHandle}>
                {/*<Icon className='item-check' type={require('images/svg/check.svg')} />*/}
                <Icon className='item-check' type='check-circle' />
                <img className='product-item-img' src={picture} alt={name} />
                <figcaption className='product-item-name'>{name.split(',')[0]}<br />{name.split(',')[1]}</figcaption>
            </figure>
        )
    }
}