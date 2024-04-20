import React from 'react'
import './Subtotal.css'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Subtotal() {
  const navigate=useNavigate();

  const basketItemCount=useSelector(store=>store.cart.basket)
  const totalPrice=basketItemCount.reduce((acc,curr)=>{
    return acc+ curr.price;

  },0)

  const handlePayment=()=>{
    navigate('/payment');
  }
  console.log(totalPrice)
  return (
    <div className='subtotal'>
       
     
        <>
        <p>Subtotal ({basketItemCount.length} items):<small>$</small> <strong>{totalPrice}</strong></p>
        <p>
          <small><input type='checkbox' />This Order contains a gift</small>
        </p>
        
        </>
      
    
      

      <button className='checkout_btn' onClick={handlePayment}>
        Proceed to buy
      </button>
        


      
    </div>
  )
}

export default Subtotal
