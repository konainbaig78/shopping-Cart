import React from 'react'
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; 

const Navbar = () => {
  return (
    <div className='bg-[#11212D] text-[#CCD0CF] p-6 flex items-center justify-between'>
  
      <h1 className='text-3xl roboto-mono font-bold'>Mini Shop</h1>  

      {/* Right side - Nav Links */}
      <div className='flex items-center gap-8'>
        <Link 
          className='hover:text-[#9BA8AB] text-lg font-medium' 
          to='/'
        >
          Product List
        </Link>

        <Link to='/cart'>
          <FaShoppingCart className='text-3xl hover:text-[#9BA8AB] transition' />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
