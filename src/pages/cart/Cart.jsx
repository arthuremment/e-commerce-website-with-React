import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PRODUCTS } from '../../data/products'
import { ShopContext } from '../../context/Shop-context'
import CartItem from './CartItem'

const Cart = () => {

  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center justify-center gap-7 m-8'>
      <h1 className='text-3xl md:text-[70px] font-bold font-sans mt-5'>Your Cart Items</h1>
      <div className='flex flex-col items-center justify-center gap-4 mt-8'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div>
          <p className='text-lg font-semibold my-5'>Subtotal: $ {totalAmount}</p>
          <button onClick={() => navigate("/")} className='bg-black text-white p-3 rounded-xl font-thin leading-normal mr-4 hover:bg-slate-500 shadow-black shadow-md'>Continue Shopping</button>
          <button className='bg-black text-white p-3 rounded-xl font-thin leading-normal shadow-black shadow-md hover:bg-slate-500'>Checkout</button>
        </div>
       ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  )
}

export default Cart