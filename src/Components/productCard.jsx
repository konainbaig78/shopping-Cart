import React from 'react'
import { useCart } from '../Context/cartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div className="flex flex-col items-center text-center">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-60 object-cover rounded-xl mb-4 shadow-md"
      />
      <h3 className="text-lg font-semibold text-amber-50">{product.name}</h3>
      <p className="text-[#9BA8AB] text-sm mb-3">$ {product.price}</p>
      <button 
        className="bg-[#4A5C6A] px-4 py-2 rounded-xl text-amber-50 hover:bg-red-800 transition-colors duration-300"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
