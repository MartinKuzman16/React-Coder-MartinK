import './ItemDetalContainer.css'
import { useState,useEffect } from 'react'
import{ getPrductById} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetalContainer = () => {
    const[product, setProduct] = useState (null)

    const { itemId} = useParams ()

    useEffect (() =>{
        getProductById(itemId)
        .then(response => {
            setProduct (response)
        })
        .catch(error =>{
            console.error (error)
    })
    }, [itemId])
}

return(
    <div className='ItemDetailContainer' >
        <ItemDetail {...product} />
    </div>
)