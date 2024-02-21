const products =[
    {
        id: '1',
        name:'corte',
        price: 300,
        category: 'servicios',
    },
    
    {id:'2',
    name: 'corte y barba',
    price: 360, 
    category: 'servicios',
},
{
    id:'3',
    name:'corte y cejas',
    price: 320,
    category: 'servicios',

}
]


export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
        }, 500) 
    })
}