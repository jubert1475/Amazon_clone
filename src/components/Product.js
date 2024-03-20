import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";

function Product({id, title, price, rating, image }) {
  const dispatch=useDispatch();

  const handleBasketItem=()=>{
    dispatch(addItem({title,price,image,id,rating}))
  }
  return (
    <div className="product">
      <div className="product_info">
        <p className="product_info">{title}</p>
        <span className="product_price">
          
          <strong>{price}</strong>
          <small>/-</small>
        </span>
        <div className="product_rating">
          {Array(rating).fill().map((_, i) => (
            <p> 🌟</p>
          ))}
        </div>
      </div>
      <img className="product_img" src={image} alt="Product IMG" />
      <button className="basket_button" onClick={handleBasketItem}>Add to basket</button>
    </div>
  );
}

export default Product;
