import React from 'react'
import { Icon } from 'antd'
//import picitem from '../../../images/picitem.png'

function ProductItem ({data, checked}) {
    const { name, picture } = data;
    return (
        <figure className={checked ? 'trial-product-item checked' : 'trial-product-item'}>
            {/*<Icon className='item-check' type={require('images/svg/check.svg')} />*/}
            <Icon className='item-check' type='check-circle' />
            <img className='product-item-img' src={picture} alt={name} />
            <figcaption className='product-item-name'>{name.split(',')[0]}<br />{name.split(',')[1]}</figcaption>
        </figure>
    )
}

export default ProductItem;