import { useState } from 'react'
import styled from '@emotion/styled/macro'
import { useDispatch, useSelector } from 'react-redux'

import { changeNumber,addProductStore,changeNumberStore } from '../redux/actions'

const AddTodoForm = styled.form`
    margin: 3px;
    button {
        margin-right: 5px;
    }
`

function BuyProduct({ productId ,name, price, inStock ,photoUrl }) {
    const [ number, setNumber ] = useState("0")
    const dispatch = useDispatch()

    const products = useSelector(state => state.products)
    const filteredProducts = products.filter((product) => product.id > 20);
    

    return (
        <AddTodoForm onSubmit={(e) => {
            e.preventDefault()
            console.log("Buying ", number)

            if ( inStock >= number){
                dispatch(changeNumber(productId,number))
                var change = 0

                filteredProducts.forEach((product) => {
                    if ( product.name === name){
                        console.log(product)
                        console.log(product.id)
                        dispatch(changeNumberStore(number,product.id))
                        change=1
                    }
                });
                if(change===0){
                    dispatch(addProductStore(name,price,parseInt(number),photoUrl,productId))
                }
            }


            setNumber("")
        }}>
            {inStock > 0 ? (
                <>
                    Buying items :
                    <button>Add to Card</button>
                    <input type="number" value={number} min="0" onChange={(e) => setNumber(e.target.value)} />
                </>
            ) : (
                <p>Out of stock</p>
            )}
        </AddTodoForm>
    )
}

export default BuyProduct
