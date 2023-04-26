import "../App.css"

import RemoveProduct from './RemoveProduct'

function CardProduct({ name, price, inStock ,photoUrl,id}) {

    return (
        <div className="product">
        <h1>{name}</h1>
        <p></p>
        <p>Price : {price}$</p>
        <p>Number in stock: {inStock}</p>
        <RemoveProduct productId={id} name={name} price={price} inStock={inStock} photoUrl={photoUrl} />
        </div>
        
    )
}

export default CardProduct