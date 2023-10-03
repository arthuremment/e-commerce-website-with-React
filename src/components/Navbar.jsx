import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

const Navbar = () => {
  return (
    <nav className='w-full bg-black text-white flex justify-end py-3 px-8'>
        <div className='flex space-x-3'>
            <Link to="/" className='text-xl'>Shop</Link>
            <Link to="/cart"> 
                <ShoppingCart size={32} className='hover:text-black hover:p-1 hover:scale-125 hover:rounded-xl hover:bg-white'/> 
            </Link>
        </div>
    </nav>
  )
}

export default Navbar