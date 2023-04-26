import React from 'react'

import ProductList from './components/ProductList'
import AddInitial from './components/AddInitial.js'
import Card from './components/Card.js'


function App() {


    return (
        <div>
        <h1>Penny Candy Store</h1>
        <Card/>
        <ProductList/>
        <AddInitial/>
        </div>
    )
}

export default App;
