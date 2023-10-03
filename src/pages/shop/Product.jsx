import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shop-context';

const Product = (props) => {

  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext)

  const cartItemAmount = cartItems[id]

  return (
    <div className='flex flex-col justify-center items-center gap-3 w-[300px] mb-8'>
      <img 
        src={productImage}
        alt={productName}
        width={350}
        height={350}
        className='object-contain mx-0 px-0 hover:cursor-pointer hover:opacity-90 rounded-xl lg:rounded-none'
      />
      <div className='text-center space-y-1'>
        <p className='text-lg leading-normal font-bold'>{productName}</p>
        <p>${price}</p>
        <button
          onClick={() => addToCart(id)} 
          className='border-2 border-black rounded-full font-mono px-3 cursor-pointer hover:bg-black hover:text-white'>
            Add To Cart {cartItemAmount > 0 && <span>({cartItemAmount})</span>}
          </button>
      </div>
    </div>
  )
}

export default Product