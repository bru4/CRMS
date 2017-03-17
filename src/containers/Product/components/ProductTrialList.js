import React from 'react'
import ProductItem from './ProductItem'
function ProductTrialList({data}) {
    return(
        <div className='product-triallist'>
            <div className="product-triallist-header">目前试用的产品:</div>
            <div className='product-triallist-body'>
            {
                data.map(item => <ProductItem key={item.code} data={item} checked={true} choose={()=>null}/>)
            }
            </div>
        </div>
    )
}

export default ProductTrialList