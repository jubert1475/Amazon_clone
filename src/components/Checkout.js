import React from "react";
import "./Checkout.css";
import Cart from "./Cart";
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";

function Checkout() {
  const basketItem=useSelector(store=>store.cart.basket)
  return (
    <div className="checkout_page">
      <div className="checkout">
        <div className="chekout_heading">
          <div>
            <h1>Shopping Cart</h1>
            <small>Deselect all items</small>
          </div>
          <div className="chekout_heading_priceTag">
            <small>Price</small>
          </div>
        </div>

        <div className="checkout_list">
          {basketItem.map((item,index)=>{
            return(
              <Cart 
              title={item.title} image={item.image} 
              price={item.price} rating={item.rating}/>
            )
          })}
         
          
        </div>
      </div>
      <Subtotal />
    </div>
  );
}

export default Checkout;
