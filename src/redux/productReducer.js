import { RECEIVE_PRODUCTS,CHANGE_NUMBER,ADD_PRODUCT_STORE,CHANGE_NUMBER_STORE,REMOVE_NUMBER_STORE,REMOVE_PRODUCT } from './actions'

let todoId = 0
function productReducer(state = [], action) {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return [
                {
                    name: action.name,
                    price: action.price,
                    inStock: action.inStock,
                    photoUrl: action.photoUrl,
                    id: ++todoId
                },
                ...state
            ]
        case ADD_PRODUCT_STORE:
            console.log("ADD_PRODUCT_STORE")
            return [
                {
                    name: action.name,
                    price: action.price,
                    inStock: action.inStock,
                    photoUrl: action.photoUrl,
                    id: ++todoId
                },
                ...state
            ]
            case CHANGE_NUMBER_STORE:
                console.log("CHANGE_NUMBER_STORE")
                return state.map(product => (
                    product.id === action.id ? {
                        ...product,
                        inStock: parseFloat(product.inStock) + parseFloat(action.inStock)
                    } : product
                ))
            case REMOVE_PRODUCT:
                    console.log("REMOVE_PRODUCT")
                    return state.filter(product => product.id !== action.id);
            case CHANGE_NUMBER:
                console.log("CHANGE_NUMBER")
                return state.map(product => (
                    product.id === action.id ? {
                        ...product,
                        inStock: product.inStock - action.inStock
                    } : product
                ))
            case REMOVE_NUMBER_STORE:
                console.log("REMOVE_NUMBER_STORE")
                return state.map(product => (
                    product.id === action.id ? {
                        ...product,
                        inStock: parseFloat(product.inStock) - parseFloat(action.inStock)
                    } : product
                ))
            
                
        default:
            return state
    }
}

export default productReducer