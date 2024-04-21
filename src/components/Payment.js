import React, { useEffect, useState } from "react";
import axios from "./axios";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import "./Payment.css";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

function Payment() {
  const basket = useSelector((store) => store?.cart?.basket);
  const userId = useSelector((store) => store?.cart?.user);
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState();
  const [processing, setProcessing] = useState();
  const [clientSecret, setClientSecret] = useState();

  const basketItemCount = useSelector((store) => store.cart.basket);
  const navigate=useNavigate();

  const totalPrice = basketItemCount.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
  useEffect(() => {
    //generate spcl stripe secrete which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //stripe expects the total in a currencies sub units
        url: `/payment/create?total=${{ totalPrice } * 100} `,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basketItemCount]);

  const handleSubmit = async (e) => {
    //stripe things
    e.preventDefault();
    setProcessing(true);

    //const payload =await stripe

    const payload = stripe.confirmPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      }
    }).then(({paymentIntent})=>{
      setSucceeded(true)
      setError(null)
      setProcessing(false)

      navigate('/orders')
    });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout {<Link to="/checkout"> ({basket?.length} Items)</Link>}
        </h1>
        {/*payment Sec - delivery add*/}
        <div className="payment_section">
          <div className="payment_section_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{userId}</p>
            <p>Tinsle town,Pune</p>
            <p>411057</p>
          </div>
        </div>

        {/*payment Sec - review items*/}
        <div className="payment_section">
          <div className="payment_section_title">
            <h3>Review Item and Delivery</h3>
          </div>
          <div className="payment_item">
            {basket.map((item, index) => {
              return (
                <Cart
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>

        {/*payment Sec - payment method*/}
        <div className="payment_section">
          <div className="payment_section_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            {/*Stripes magic */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_price_container">
                <h3>Order Total: ${totalPrice}</h3>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
