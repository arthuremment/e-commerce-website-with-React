import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shop-context'

const CartItem = (props) => {

  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)

  return (
    <div className='flex justify-start items-center gap-5 w-[400px] rounded-xl p-5 shadow-slate-800 shadow-sm md:w-[500px] max-md:p-3 lg:w-[600px] max-sm:w-[330px] max-sm:p-2'>
      <img 
        src={productImage} 
        alt={productName}
        width={220}
        height={220}
        className='object-contain mx-0 px-0 rounded-xl hover:cursor-pointer hover:opacity-90 md:w-[180px] lg:w-[220px] max-sm:w-[130px] sm:w-[130px]' 
      />
      <div className='flex flex-col gap-3 md:gap-2 max-sm:gap-2'>
        <p className='font-bold text-2xl max-sm:text-xl'>{productName}</p>
        <p className='text-xl max-sm:text-sm'>${price}</p>
        <div className='flex justify-between border-2 w-[90px]'>
          <button 
            onClick={() => removeFromCart(id)}
            className='bg-neutral-400 px-1 text-center border-2 border-slate-500 active:bg-slate-500'
          >
            -
          </button>
          <input 
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            className='text-center w-6 font-semibold text-sm outline-none' 
          />
          <button 
            onClick={() => addToCart(id)}
            className='bg-neutral-400 px-1 text-center border-2 border-slate-500 active:bg-slate-500'
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem