import { CheckBox } from "@mui/icons-material";
import React from "react";
import "./Cart.css";


const Cart = ({title,image,price}) => {
 console.log(title,image,price)
  return (
    <div className="cart">
      

      <div className="cart_item_all_details">
       
        <input type='checkbox' className="cart_item_checkbox"/>
 

        <div className="cart_item_img">
          <img src={image} />
        </div>
        <div className="cart_item_details">
          <div className="cart_item_desc">
            <h3>{title}</h3>
            <small>In stock</small>
            <small>Eligible for free delivery</small>
            <strong>Size:</strong>
            <strong>colour:</strong>
          </div>

          
        </div>
        <div className="cart_item_price">
          
            <h4>{price} ₨</h4>
            
          </div>
        
      </div>
      
    </div>
  );
};

export default Cart;
