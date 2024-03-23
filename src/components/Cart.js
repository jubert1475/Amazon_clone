import React from "react";
import "./Cart.css";
import {  useDispatch } from "react-redux";
import { removeItem } from "../utils/CartSlice";

const Cart = ({  title, image, price, rating,id }) => {
  const dispatch=useDispatch();
  const removeItemFromBasket=()=>{
    dispatch({
        type: 'Cart/removeItem',
        payload: { itemId: id },
    })
  
  }

  return (
    <div className="cart">
      
          <img className="cart_item_img" src={image} />
          
        <div className="cart_item_details">
          
            <p className="cart_item_title">{title}</p>
            <small><input type="checkbox"></input>Eligible for free delivery</small>
            <strong>Size:</strong>
            <strong>colour:</strong>
            
             <div className="cart_ite_rating">
              {Array(rating).fill().map((_,i)=>(
                <p key={i}>🌟</p>
              ))}
              
             </div>
             <div>
              <button onClick={removeItemFromBasket}>Remove from basket</button>
             </div>
             


           
          
        </div>
        <p className="cart_item_price">
              <small>$</small>
              <strong>{price}</strong>
              </p>
        
      </div>
    
  );
};

export default Cart;
