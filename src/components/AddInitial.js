import React from 'react'
import { useDispatch } from 'react-redux'
import productsData from '../data/products.json'
import { receiveProducts } from '../redux/actions'

const productNames = [];

function AddInitial() {

    const dispatch = useDispatch()

    productsData.forEach(product => {
        if ( !productNames.includes(product.name)){
            dispatch(receiveProducts(product.name, product.price, product.inStock, product.photoUrl, product.id));
            productNames.push(product.name);
        }
    });

    return (
        <div></div>
    )
}

export default AddInitial