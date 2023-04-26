import React from 'react'

import Product from './Product'
import { useSelector } from 'react-redux'



function ProductList() {


    const products = useSelector(state => state.products)
    const filteredProducts = products.filter((product) => product.id <= 20);

    return (
        <div>
            {filteredProducts.map(product => <Product key={product.id} {...product} />)}
        </div>
    )
}
export default ProductList
