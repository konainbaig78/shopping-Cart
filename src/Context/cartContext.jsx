import { useState, useContext, createContext, Children} from 'react'
import toast from "react-hot-toast";
import tickSound from '../sound/tick.wav'

const CartContext=createContext()
export const useCart=()=>useContext(CartContext)

export const CartProvider=({children})=>{
    const [cartItems, setCartItems]=useState([])
    const addToCart=(item)=>{
        const exsistingItem=cartItems.find((cartItem)=>cartItem.id == item.id)
        if(exsistingItem){
            setCartItems(cartItems.map((cartItem)=>cartItem.id == item.id ? {...exsistingItem, quantity : exsistingItem.quantity+1}: cartItem))
              toast.success("Item increased successfully ✅");
               const audio = new Audio(tickSound);
  audio.play();
        } else{
            setCartItems([...cartItems,{...item,quantity:1}])
              toast.success("Item added successfully ✅");
               const audio = new Audio(tickSound);
  audio.play();
        }
    }

    const removeAnItem=(id)=>{
setCartItems(cartItems.filter((item)=> item.id !== id))
    }
     const clearCart=()=>{
        setCartItems([])
     }

     const value={
        cartItems,
        addToCart,
        removeAnItem,
        clearCart
     }

     return(
        <CartContext.Provider value={value} >{children}</CartContext.Provider>
     )
}

