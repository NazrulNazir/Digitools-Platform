import React from 'react'

const Cart = ({cart, onDelete}) => {
    const {name, icon, price} = cart;
  return (
   <div >
        <div className='flex justify-between items-center bg-base-300 px-4 py-4 rounded-xl'>
        <div className='flex justify-center items-center gap-2'>
            <p className='text-2xl bg-white p-1 rounded-full'>{icon}</p>
            <div>
                <p className='font-bold'>{name}</p>
                <p className='text-gray-600 mt-1'>${price}</p>
            </div>
        </div>
        <button onClick={()=> onDelete(cart.id)} className='text-pink-500 font-bold cursor-pointer'>Remove</button>
        </div>
   </div>
  )
}

export default Cart
