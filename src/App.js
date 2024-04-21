import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import {  Outlet, createBrowserRouter } from 'react-router-dom';

import Checkout from './components/Checkout';
import Error from './components/Error';
import Login from './components/Login';
import { useEffect } from 'react';
import {auth} from './firebase'
import Payment from './components/Payment';
import {  useDispatch } from 'react-redux';
import { set_user } from './utils/CartSlice';
import { loadStripe, } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise=loadStripe('pk_test_51P2TYuSEe9uFqb4MV5WIEoeU01vvcTik1YEoi6gNoP2GBwtBJpyHG0lOXhLiEkrp3V4OrxcxijOF84ZNgOsU67I700XGZeixYp')

function App() {
  const dispatch=useDispatch();
 


 useEffect(()=>{
    
    auth.onAuthStateChanged(authUser=>{
    console.log('The user is >>>>', authUser)
    if (authUser){
      //the user just logged in/the user was logged i
    
      dispatch(set_user(authUser))
    }else{
      //user logged out
      dispatch(set_user(''))
    }
  })
 },[]);
  return (
    <div className="App">
      
        <Header />
        <Outlet />
    
      

      {/*Header Component */}
      {/*Home Component */}
    </div>
  );
}


export const appRouter=createBrowserRouter([
  {
    path: '/',
    element:<App />,
    errorElement:<Error />,
    children: [
      {
        path: '/',
        element:<Home />,
        errorElement:<Error />,
      },
      {
        path: '/checkout',
        element:<Checkout />,
        errorElement:<Error />,
    
      },
      {
        path: '/login',
        element:<Login />,
        errorElement:<Error />,
    
      },
      {
        path: '/payment',
        element:<Elements stripe={promise}> <Payment /></Elements>,
        errorElement:<Error />,
    
      },

    ]

  },
  
])




export default App;
