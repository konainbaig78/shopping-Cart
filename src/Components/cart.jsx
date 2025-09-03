import React from 'react'
import { useCart } from '../Context/cartContext'

const Cart = () => {
  const { cartItems, removeAnItem, clearCart } = useCart();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#06141B] via-[#11212D] to-[#253745] text-amber-50 flex justify-center py-12 px-4">
      <div className="w-full max-w-3xl bg-[#11212D]/70 backdrop-blur-md p-8 rounded-3xl shadow-lg shadow-[#243644]">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-[#CCD0CF]">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-lg text-[#9BA8AB]">Your Cart is Empty!</p>
        ) : (
          <div className="space-y-6">
            <ul className="space-y-6">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center bg-gradient-to-r from-[#253745] to-[#4A5C6A] rounded-2xl p-5 shadow-md shadow-[#243644]/70"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-[#CCD0CF]">{item.name}</h3>
                    <p className="text-sm text-[#9BA8AB]">Qty: {item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-xl font-bold text-[#CCD0CF]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeAnItem(item.id)}
                      className="bg-red-900 hover:bg-red-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center mt-8 border-t border-[#4A5C6A] pt-6">
              <h3 className="text-2xl font-bold text-[#CCD0CF]">Total:</h3>
              <span className="text-3xl font-extrabold text-[#9BA8AB]">${total.toFixed(2)}</span>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={clearCart}
                className="bg-[#4A5C6A] hover:bg-red-800 px-6 py-3 rounded-full font-medium text-lg"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
