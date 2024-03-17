import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import {  Outlet, createBrowserRouter } from 'react-router-dom';


import Checkout from './components/Checkout';


function App() {
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
    children: [
      {
        path: '/',
        element:<Home />
    
      },
      {
        path: '/checkout',
        element:<Checkout />
    
      },

    ]

  },
  
])




export default App;
