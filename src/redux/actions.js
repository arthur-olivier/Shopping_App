export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS"
export const CHANGE_NUMBER = "CHANGE_NUMBER"
export const ADD_PRODUCT_STORE = "ADD_PRODUCT_STORE"
export const CHANGE_NUMBER_STORE = "CHANGE_NUMBER_STORE"
export const REMOVE_NUMBER_STORE = "REMOVE_NUMBER_STORE"
export const REMOVE_PRODUCT = "REMOVE_PRODUCT"


export function removeProduct(id) {
    return { type: REMOVE_PRODUCT, id}
}
/*
 * { type: RECEIVE_PRODUCTS, name,price,inStock,photoUrl}
 */
export function receiveProducts(name,price,inStock,photoUrl,id) {
    return { type: RECEIVE_PRODUCTS, name, price, inStock, photoUrl ,id}
}

/*
 * { type: CHANGE_NUMBER, id,inStock }
 */
export function changeNumber(id,inStock) {
    console.log(id)
    console.log(inStock)
    return { type: CHANGE_NUMBER, id, inStock }
}


export function addProductStore(name,price,inStock,photoUrl,id) {
    return { type: ADD_PRODUCT_STORE, name, price, inStock, photoUrl ,id}
}

export function changeNumberStore(inStock,id) {
    return { type: CHANGE_NUMBER_STORE, inStock, id}
}

export function removeNumberStock(inStock,id) {
    return { type: REMOVE_NUMBER_STORE, inStock, id}
}
