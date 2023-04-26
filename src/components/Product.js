
import "../App.css"
import BuyProduct from './BuyProduct'


function Product({ name, price, inStock ,photoUrl,id}) {

    return (
        <div className="product">
        <h1>{name}</h1>
        <p></p>
        <p>Price : {price}$</p>
        <p>Number in stock: {inStock}</p>
        <img src={photoUrl} alt="Super"></img>
        <BuyProduct productId={id} name={name} price={price} inStock={inStock} photoUrl={photoUrl} />
        </div>
        
    )
}

export default Product
