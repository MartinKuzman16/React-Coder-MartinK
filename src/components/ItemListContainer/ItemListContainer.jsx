import { useState, useEffect } from "react"
import { getProducts } from '../../asyncMock'
import ItemListContainer from '../ItemListContainer/ItemListContainer'


const ItemListContainer = ({greeting}) => {
    const [products,setProducts] = useState ([])

    useEffect (() => {
        getProducts ()
        .then (response => {
            setProducts(response)

        })
        .catch(error => {
            console.error (error)
        })
    }
,[])
    return(
    <div>
        <h1>{greeting} </h1>
        <itemList  products = {products}/>
    </div>
    )
    }

export default ItemListContainer 