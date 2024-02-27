import ItemCount from "../ItemCount/ItemCount";

const ItemDetail  = ({id, name, img, price, stock}) =>{
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
        <picture>
            <img src={img} alt={name} className="ItemImg"/>
                </picture>
                <section>
                    <p className="info">
                        precio: ${price}
                    </p>
                    <p className="info">
                        stock disponible: {stock}
                    </p>
                </section>
                <footer className='itemFooter'>
                <ItemCount initial ={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
                </footer>
    </article>
    )
    }
export default ItemDetail
