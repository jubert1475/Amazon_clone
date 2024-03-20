import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import {  Outlet, createBrowserRouter } from 'react-router-dom';


import Checkout from './components/Checkout';
import Error from './components/Error';


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

    ]

  },
  
])




export default App;
