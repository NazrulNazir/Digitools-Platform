import React, { useState } from 'react'
import Cart from '../Cart/Cart'

const Card = ({cardData, setCardLength}) => {


    setCardLength(cardData.length);

    const [items, setItems] = useState(cardData);
    const total = items.reduce((acc, curr)=> acc + curr.price, 0);
    const onDelete = (id)=> {
        setItems(items.filter(item => item.id !== id));
    }

  return (
    <div className='mt-10 container mx-auto px-10'>
        {
            cardData.length === 0 ? (<div className='flex flex-col justify-center items-center px-20 py-15 bg-base-300 rounded-lg'>
        <img className='w-40 h-40' src="/assets/jobs.png" alt="" />
        <h2 className='mt-8 text-4xl font-bold text-gray-500'>No Data Found</h2>
      </div>):(

        <div>
            <div className='flex flex-col gap-3 rounded-lg'>
                {
                    items.map(cart => <Cart cart = {cart} onDelete = {onDelete}/>)
                }
            </div>
            <div className='flex justify-between items-center my-8'>
                <p className='font-bold text-gray-400'>Total:</p>
                <p className='font-bold'>${total}</p>
            </div>
            <button className='w-full cursor-pointer py-2 px-3 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] mb-10'>Proceed to Checkout</button>
        </div>
      )
        } 
      
    </div>
  )
}

export default Card