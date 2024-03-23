import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import {  Outlet, createBrowserRouter } from 'react-router-dom';

import Checkout from './components/Checkout';
import Error from './components/Error';
import Login from './components/Login';
import { useEffect } from 'react';
import {auth} from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {  useDispatch } from 'react-redux';
import { set_user } from './utils/CartSlice';

function App() {
  const dispatch=useDispatch();



 useEffect(()=>{
    
    auth.onAuthStateChanged(authUser=>{
    console.log('The user is >>>>', authUser.email)
    if (authUser){
      //the user just logged in/the user was logged i
    
      dispatch(set_user(authUser))
    }else{
      //user logged out
      dispatch({
        type: 'Cart/set_user',
        payload: { user: null },
      })
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

    ]

  },
  
])




export default App;
