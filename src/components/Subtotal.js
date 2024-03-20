import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux'


function Subtotal() {
  const basketItemCount=useSelector(store=>store.cart.basket)
  const totalPrice=basketItemCount.reduce((acc,curr)=>{
    return acc+ curr.price;

  },0)
  console.log(totalPrice)
  return (
    <div className='subtotal'>
      <CurrencyFormat 
      renderText={(value)=>(
        <>
        <p>Subtotal ({basketItemCount.length} items):<small>$</small> <strong>{totalPrice}</strong></p>
        <p>
          <small><input type='checkbox' />This Order contains a gift</small>
        </p>
        
        </>
      )}
      decimalScale={2}
      value={0}
      displayType='text'
      thousandSeparator={true}
      prefix={"$"}
      
      />

      <button className='checkout_btn'>
        Proceed to buy
      </button>
        


      
    </div>
  )
}

export default Subtotal
