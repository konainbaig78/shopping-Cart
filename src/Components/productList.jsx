import React from 'react'
import ProductCard from '../Components/productCard'
import ChanelImg from "../images/chanel.jpg";
import poloT from '../images/polo.jpg'
import boot from '../images/boots.jpg'
import laptop from '../images/laptop.jpg'
import headphone from '../images/headphone.jpg'
import miniBag from '../images/bag.jpg'
import perfume from '../images/dior.jpg'
import foundation from '../images/found.jpg'
import deep from '../images/deep.jpg'
import lean from '../images/lean.jpg'
import watch from '../images/watch.jpg'

const ProductList = () => {
  const products = [
    { id: 1, name: "T-Shirt", price: 1200, image:poloT },
    { id: 5, name: "Sandals", price: 1500, image: ChanelImg },
    { id: 6, name: "Boots", price: 5000, image: boot },
    { id: 8, name: "Laptop", price: 65000, image:laptop},
    { id: 9, name: "Headphones", price: 5000, image: headphone},
    { id: 11, name: "Mini Hand Bag", price:1082 , image: miniBag},
    { id: 14, name: "Deep Work", price: 15, image:deep},
    { id: 15, name: "The Lean Startup", price: 10, image:lean },
    { id: 17, name: "Foundation", price:82, image: foundation },
    { id: 18, name: "Perfume", price: 5000, image: perfume },
    {id:19, name:'Watch', price:150, image: watch},

  ]

  return (
    <div className="px-6 py-10">
      <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-[#11212D] via-[#253745] to-[#4A5C6A] bg-clip-text text-transparent">
        Explore Our Products
      </h2>
      
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl rounded-2xl bg-gradient-to-br from-[#11212D] via-[#253745] to-[#4A5C6A] shadow-[#243644] shadow-md p-5"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <p className="text-center text-gray-400 mt-8 text-lg font-semibold border-t border-gray-300 pt-4">
  🚀 MORE PRODUCTS COMING SOON 🚀
</p>
    </div>
  )
}

export default ProductList
