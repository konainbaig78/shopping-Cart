
import ProductList from './Components/productList'
import { CartProvider } from './Context/cartContext'
import Navbar  from './Components/navbar'
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {

  return (
   <CartProvider>
    <Navbar/>
  
      <Outlet />
        <Toaster position="top-right" reverseOrder={false} />
   </CartProvider>
  )
}

export default App
