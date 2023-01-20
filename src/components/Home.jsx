import React from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'


const img1 = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80"
 
const img2 ="https://images.unsplash.com/photo-1502780696253-46844b6bed5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

const Home = () => {

    const ProductList = [
        {
            name: "Mac Book",
            price: 420,
            imgSrc: img1,
            id: 'assffkmaasdsdl'
        },
        {
            name: "Black shoes",
            price: 100,
            imgSrc: img2,
            id: 'assffkmsfdasdsdl'
        },
    ]

    const dispatch = useDispatch();

    const addToCartHandler = (options) => {
        
        dispatch({type:"addToCart",payload:options})
        dispatch({
            type:"calculatePrice",
            
          })
        toast.success("Added to cart")
        
    }
    return (
        <div className='home'>
            {
                ProductList.map(i => (
                    <ProductCard key={i.id} imgSrc={i.imgSrc} name={i.name} price={i.price} id={i.id} handler={addToCartHandler} />
                ))
            }

        </div>

    )
}

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
    <div className='productCard'>
        <img src={imgSrc} alt='name' />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>Add to Cart</button>
    </div>
)

export default Home