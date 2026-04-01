import React, { useState } from 'react'
import Cart from '../Cart/Cart'
import { Bounce, toast } from 'react-toastify';
import { FaCartShopping } from 'react-icons/fa6';

const Card = ({cardData, setCardLength}) => {


    
    const [items, setItems] = useState(cardData);
    const total = items.reduce((acc, curr)=> acc + curr.price, 0);
    const onDelete = (id)=> {
        setItems(items.filter(item => item.id !== id));
    }
    
    setCardLength(items.length);

     const cardEmpty = ()=> {
        toast.success('🦄 Successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
    }

  return (
    <div className='mt-10 container mx-auto'>
        {
            items.length === 0 ? (<div className='flex flex-col justify-center items-center px-5 md:px-20 py-25 bg-base-300 rounded-lg'>
        <p className='text-8xl text-gray-600'><FaCartShopping /></p>
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
            <button onClick={()=> 
                {
                    setItems([]);
                    cardEmpty();
                }
                } className='w-full cursor-pointer py-2 px-3 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] mb-10'>Proceed to Checkout</button>
        </div>
      )
        } 
      
    </div>
  )
}

export default Card