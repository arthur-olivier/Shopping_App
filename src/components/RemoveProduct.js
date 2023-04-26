import { useState } from 'react'
import styled from '@emotion/styled/macro'
import { useDispatch, useSelector} from 'react-redux'

import { removeNumberStock, changeNumberStore} from '../redux/actions'

const AddTodoForm = styled.form`
    margin: 3px;
    button {
        margin-right: 5px;
    }
`

function RemoveProduct({ productId ,name, price, inStock ,photoUrl }) {
    const [ number, setNumber ] = useState("")
    const dispatch = useDispatch()

    const products = useSelector(state => state.products)
    const filteredProducts = products.filter((product) => product.id <= 20);

    return (
        <AddTodoForm onSubmit={(e) => {
            e.preventDefault()
            console.log("Remove ", number)
            console.log("Remove ", productId)
            dispatch(removeNumberStock(number,productId))
            filteredProducts.forEach((product) => {
                if ( product.name === name){
                    dispatch(changeNumberStore(number,product.id))
                }
            });
            setNumber("")
        }}>
            Remove items : 
            <button>-</button>
            <input type="number" value={number} min="0" onChange={(e) => setNumber(e.target.value)} />
        </AddTodoForm>
    )
}

export default RemoveProduct
