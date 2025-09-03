import React from 'react'
import { useCart } from '../Context/cartContext'

const Cart = () => {
  const { cartItems, removeAnItem, clearCart } = useCart();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#06141B] via-[#11212D] to-[#253745] text-amber-50 flex justify-center py-8 px-3 sm:px-6 md:px-10">
      <div className="w-full max-w-4xl bg-[#11212D]/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg shadow-[#243644]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 sm:mb-10 text-[#CCD0CF]">
          Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-base sm:text-lg text-[#9BA8AB]">Your Cart is Empty!</p>
        ) : (
          <div className="space-y-6">
            <ul className="space-y-4 sm:space-y-6">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-gradient-to-r from-[#253745] to-[#4A5C6A] rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-md shadow-[#243644]/70"
                >
                  {/* Left side */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#CCD0CF]">{item.name}</h3>
                    <p className="text-sm text-[#9BA8AB]">Qty: {item.quantity}</p>
                  </div>

                  {/* Right side */}
                  <div className="flex flex-wrap sm:flex-nowrap justify-between sm:justify-end items-center gap-4 sm:gap-6">
                    <span className="text-lg sm:text-xl font-bold text-[#CCD0CF]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeAnItem(item.id)}
                      className="bg-red-900 hover:bg-red-700 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Total */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8 border-t border-[#4A5C6A] pt-4 sm:pt-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#CCD0CF] mb-2 sm:mb-0">Total:</h3>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#9BA8AB]">${total.toFixed(2)}</span>
            </div>

            {/* Clear Cart */}
            <div className="text-center mt-6 sm:mt-8">
              <button
                onClick={clearCart}
                className="w-full sm:w-auto bg-[#4A5C6A] hover:bg-red-800 px-5 py-3 sm:px-6 sm:py-3 rounded-full font-medium text-base sm:text-lg"
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
