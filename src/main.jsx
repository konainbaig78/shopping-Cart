import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductList from './Components/productList.jsx'
import Cart from './Components/cart.jsx'

import {createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",      // Home route
    element: <App />,
    children: [
      {
        path: "/", // Products page
        element: <ProductList />,
      },
      {
        path: "/cart", // Cart page
        element: <Cart />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
