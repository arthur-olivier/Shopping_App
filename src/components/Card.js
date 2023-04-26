import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import CardProduct from './CardProduct';

import { removeProduct } from '../redux/actions'



function Card() {

    const [checkoutClicked, setCheckoutClicked] = useState(false);
    const [showHtml, setShowHtml] = useState(false);
    const dispatch = useDispatch();

    var numberofitem=0
    var price_total = 0
    const products = useSelector(state => state.products)
    const filteredProducts = products.filter((product) => product.id >= 21);
    filteredProducts.forEach((product) => {
        price_total += parseFloat(product.inStock) * parseFloat(product.price);
        console.log(price_total)
        console.log(product.inStock)
        numberofitem+=1
    });
    price_total=price_total.toFixed(2);

    const handleCheckoutClick = () => {
        setCheckoutClicked(true);
        filteredProducts.forEach((product) => {
            dispatch(removeProduct(product.id));
        });
    }

    const handleCardClick = () => {
        setShowHtml((prevState) => !prevState); // Toggle the showHtml state
      };
    

    return (
        <div className='Card'>
            <button onClick={handleCardClick}>{" "}Card (number of item: {numberofitem}){" "}</button>
            {showHtml && (
                <>
            <h1>Price total: {price_total} $</h1>
            {checkoutClicked ? (
                <p>All products have been removed from the store.</p>
            ) : (<></>
            )}
            {filteredProducts.map(product => <CardProduct key={product.id} {...product} />)}
            <button onClick={handleCheckoutClick}>Checkout</button>
            </>)}
        </div>
    )
}
export default Card