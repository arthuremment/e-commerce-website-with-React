import React from 'react'
import { PRODUCTS } from '../../data/products'
import Product from "./Product"

const Shop = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-7 my-10'>
        <h1 className='text-4xl md:text-[70px] font-bold font-sans my-6'>Shopping Room</h1>
        <div className='mt-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:w-[80%] md:pl-10 sm:gap-4'>
            {PRODUCTS.map((product) => (
                <Product 
                    key={product.id}
                    data={product}
                />
            ))}
        </div>
    </div>
  )
}

export default Shop