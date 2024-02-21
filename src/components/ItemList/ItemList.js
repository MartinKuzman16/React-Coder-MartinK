import './itemlist.css'
import Item from '../ItemList/ItemList/'

const ItemList = ({products}) => {
    return ( 
        <div className='listGroup'>
            {products.map(prod=> <item key ={ prod.id} {...prod} />)}

        </div>
    )
}
 export default ItemList
 