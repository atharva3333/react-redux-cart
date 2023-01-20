import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

// const img1 =
//   "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80";

// const img2 =
//   "https://images.unsplash.com/photo-1502780696253-46844b6bed5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

const Cart = () => {
  const { cartItems , subTotal , shipping,tax,total} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increment =(id)=>{
    dispatch({
      type:"addToCart",
      payload:{id},
    })

    dispatch({
      type:"calculatePrice",
      
    })
    
  }
  const decrement =(id)=>{
    dispatch({
      type:"decrement",
      payload: id,
    });

    dispatch({
      type:"calculatePrice",
      
    })
  }
  const deleteHandler =(id)=>{
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });

    dispatch({
      type:"calculatePrice",
      
    })
  }

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No Item in Cart</h1>
        )}
      </main>
      <aside>
        <h2>SubTotal: ${subTotal}</h2>
        <h2>Shipping: ${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt="Item" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>

    <div>
      <button
        onClick={() => {
          decrement(id);
        }}
      >
        -
      </button>
      <p>{qty}</p>
      <button
        onClick={() => {
          increment(id);
        }}
      >
        +
      </button>
    </div>
    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
